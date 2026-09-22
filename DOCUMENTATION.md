# coach-sql — Documentation

coach-sql is a standalone, no-login web app used to onboard new SQL Account
Support staff. It teaches them the accounting and payroll software SQL
Account, made by eStream Software, one topic at a time, tests what they
learned with a locked-down quiz, and gives a supervisor a live view of
every candidate's progress. This document explains how the app is built
and how it behaves. For first-time setup steps such as Firebase, EmailJS,
GitHub Pages, and SEB, see README.md instead.

## What it does

The onboarding material is split into five days, and each day covers one
area of SQL Account: Day 1 is Orientation and Setup, Day 2 is Sales and
Customer, Day 3 is Stock and Inventory, Day 4 is General Ledger and
Reports, and Day 5 is Tools and Troubleshooting.

For each day, a candidate can go through a learning module or take the
test for that day. The learning module, on learn.html, is a roughly
twenty-minute visual walkthrough built from real SQL Account screenshots,
with the underlying lesson content stored in js/demo-steps.js and the
images kept under assets/tutorials. The content is pulled from the
official SQL Account knowledge base, not written from scratch. The test,
on test.html, is a twenty-question quiz with a fifty-minute time limit,
closed notes, drawn from that day's question bank. The question bank
itself lives in Firestore rather than in the JavaScript bundle, so an
admin can edit questions without redeploying the site. Every attempt
reshuffles both the order the questions appear in and the order of each
question's four options, so the correct answer's letter changes from
attempt to attempt.

A candidate has to pass a day, sixty percent by default, before the next
day unlocks. Passing is sticky, meaning that once a day has been passed it
stays passed even if the candidate resits it later and scores lower.

A supervisor watches all of this live on admin.html, which is protected by
a PIN stored in firebase-config.js.

## How it's built

The whole thing is plain HTML, CSS, and JavaScript written as ES modules,
with no build step and no framework, hosted for free on GitHub Pages.
State lives in Google Firestore, and the admin dashboard updates in real
time because it listens to Firestore with onSnapshot rather than polling.

index.html is the landing page where a candidate chooses to learn or test.
learn.html walks a candidate from a name-and-email screen, through a day
picker, into the learning module itself. test.html does the same but into
the quiz, and it also accepts a day already chosen on learn.html through a
query parameter. admin.html is the PIN-gated live dashboard.

The js folder holds all the logic. firebase-init.js is the central place
that sets up the Firebase app and Firestore connection, importing the
vendored SDK rather than a CDN copy, and every other module imports the
database handle from here. candidate-progress.js holds the day-unlocking
logic, the pass and fail bookkeeping, and the sticky-passing rule.
learning.js renders the day picker and steps a candidate through the
lesson content one card at a time. demo-steps.js is the static content for
each day's lessons, the screenshots, captions, and "why it matters"
explanations. quiz.js fetches that day's question bank, shuffles it,
builds the picked set of questions, runs the timer, scores the attempt,
and submits the result. email-notify.js works out the candidate's skill
level from their score and sends the marking-sheet email through EmailJS.
proctor.js watches for tab switches, exits from fullscreen, copy and paste
attempts, and devtools shortcuts, and turns each one into a flag.
admin.js drives the live dashboard, the candidates table, and the
per-candidate detail popup.

Under vendor sit local copies of the Firebase JavaScript SDK and the
EmailJS browser SDK. They're vendored rather than loaded from Google's or
EmailJS's CDN on purpose. The app is meant to run inside Safe Exam Browser
as the exam lockdown layer, and a locked-down SEB profile with URL
filtering turned on can block requests to any domain other than the exam
URL itself. Keeping both SDKs local means the whole app loads from one
origin, the GitHub Pages site, with no outside calls for SEB to block.

firebase-config.js holds your real Firebase project details plus every
tunable constant, and you create it by copying
firebase-config.example.js. firestore.rules holds the Firestore security
rules.

It's worth being clear that there is no candidate login and no server
behind this app. Every write comes straight from the candidate's own
browser, which is why the Firestore rules are as open as they are. This is
a deliberate trade-off, described in the code and in the README's Known
Limitations section as a deterrent rather than real security: the correct
answers live in a question bank the candidate's browser can read, and
Firestore reads are wide open so the admin dashboard can show live
progress without candidates needing accounts.

## How the data is organised in Firestore

Each quiz attempt gets its own document in the candidates collection, not
each person, so a resit creates a brand new document rather than
overwriting the old one. It's written directly by the candidate's browser
and holds their name, email, and the day being tested, a status of either
in-progress or completed, timestamps for when it started and finished, a
snapshot of the time limit and question count that applied to that
attempt, a currentIndex field that's updated live after every answer and
is what drives the admin's live progress column, the list of proctoring
flags raised during the attempt, and, once finished, the score, max score,
a breakdown of score by day, and the full detail of every answer given,
which is what powers the admin's answer-review panel.

Learning sessions get a similar document per visit to the learning module,
in the learning_sessions collection, tracking which step the candidate is
on and whether they've finished. The admin dashboard doesn't currently
show this collection, only the candidates one.

candidate_profiles holds one document per candidate, keyed by their email
rather than by attempt, and this is the real source of truth for which
days are unlocked. For each day it stores the latest score, percentage,
level, whether that day has ever been passed, how many attempts have been
made, and when the last attempt was. Because passing is sticky, that
passed flag never flips back to false once it's true, even if a later
resit scores lower. The unlocking logic walks through the five days in
order, keeping day one always open and adding each subsequent day to the
unlocked set only for as long as the day before it has been passed, so a
gap anywhere in the chain stops it there.

The questions collection is the answer key itself, one document per
question with its day, topic, question text, four options, and which
option is correct. Reads are open, since a candidate's browser needs to
read this to build a quiz, but writes require a signed-in admin through
Firebase Authentication, which is a separate flow this particular repo's
admin.html doesn't include since that dashboard is read-only.

Finally there's a single shared settings document that currently just
holds the passing percentage, defaulting to sixty if the document doesn't
exist. It's readable by anyone but only writable by a signed-in admin.

## How the main flows work

When a candidate starts the learning module, the code builds one flat,
ordered sequence for the chosen day: a goal card first, then every
lesson's steps in order, each one a screenshot with a caption and an
optional collapsible explanation of why it matters, and finally a closing
practice-task card. Only one card is ever shown at a time. A twenty-minute
timer counts down and automatically moves the candidate on to the test
when it runs out, though a "skip to the test" button lets them move on
sooner if they finish early. Progress is pushed to the learning_sessions
collection on a best-effort basis, so a failed write never blocks the
candidate from continuing.

When a candidate starts a test, the app fetches the full pool of questions
for that day from Firestore, shuffles it, takes the first twenty, and for
each of those also shuffles its four options, so both the order of
questions and the on-screen letter of the correct answer vary every time.
A document is created in the candidates collection straight away marked
in-progress, and proctoring plus fullscreen mode both start immediately.
Every time the candidate answers a question, their current position is
pushed live to Firestore, which is what the admin dashboard's progress
column reflects in real time. When the candidate finishes, either by
answering the last question or by running out of time, the attempt is
scored, a breakdown by day is calculated, the final candidates document is
written, and fullscreen mode is exited.

Back on the page, once scoring is done the candidate sees their score and
a skill level worked out from percentage tiers: ninety percent or above is
Advanced, seventy-five or above is Intermediate, sixty or above is Junior,
and anything below that is Beginner. A marking-sheet email is fired off in
the background through EmailJS without blocking the candidate's screen if
it fails. The candidate's profile is then updated with the pass or fail
result for that day, which is also what updates the unlock state for the
next day, and the candidate sees a pass or fail banner, plus a special
banner once every one of the five days has been passed.

The admin dashboard is protected by a PIN typed into a gate screen, and
that PIN check happens entirely in the browser, so it's a deterrent rather
than genuine access control, in keeping with the rest of the app's
security posture. Once the right PIN is entered, the dashboard opens a
live listener on the candidates collection and keeps a table of every
attempt up to date automatically, showing status, name, current progress
or "done", score, how many proctoring flags were raised, and when the
attempt started, sorted with the newest attempts first. Clicking on any
row opens a detail view with the score broken down by day, the full log
of proctoring flags with timestamps, and a question-by-question review
showing what the candidate selected against the correct answer.

The proctoring itself is a lightweight second layer sitting on top of Safe
Exam Browser, not a replacement for it. It watches for the browser tab or
window losing focus, for the candidate exiting fullscreen, for attempts to
copy, paste, cut, or right-click, and for common devtools keyboard
shortcuts, and turns each of these into a flag with a type, a description,
and a timestamp. Those flags are buffered locally and then pushed onto the
attempt's Firestore document. This is explicitly described as a deterrent
rather than a way to stop a determined candidate: it has no way of
noticing something like a second phone sitting next to the candidate,
which is the same limitation the README already documents for the SEB
setup underneath it.

## What can be configured

Everything that's meant to be tuned lives in firebase-config.js, which you
create by copying firebase-config.example.js. That file holds your
Firebase project's public web configuration, which is safe to publish
since it's the Firestore rules that actually protect the data rather than
hiding this config. It also holds the admin PIN, which again is a
deterrent rather than real security; how many questions are served per
attempt, twenty by default; the quiz time limit, fifty minutes by default;
how many points each correct answer is worth, four by default, which adds
up to eighty for a full attempt; how long the learning module's timer
runs, twenty minutes by default; the three EmailJS identifiers needed to
send the marking-sheet email, without which the app still works fine and
simply skips sending that email; who the marking-sheet email gets sent to;
and a second EmailJS template identifier used for a one-time completion
report once a candidate has passed all five days, which is sent as plain
text fields in the email body rather than as a PDF attachment, specifically
to avoid needing a paid EmailJS or Firebase plan.

The passing percentage itself isn't kept in this file. It lives instead in
the settings document in Firestore, so an admin can change the pass bar
without needing to redeploy the site.

## How it's deployed

Because it's a static site with no build step, deployment is just pushing
to GitHub and turning on GitHub Pages, serving from the main branch and
the repository root. The candidate-facing link is the root of that Pages
site, and the admin link is the same address with admin.html on the end.
The full step-by-step for setting up the Firebase project, publishing the
Firestore rules, vendoring the EmailJS SDK, turning on GitHub Pages, and
wiring the resulting link into a Safe Exam Browser configuration is
covered in README.md rather than repeated here.

## Known limitations

These are deliberate trade-offs that come from building a free,
backend-less tool meant to be hosted inside Safe Exam Browser, and they're
worth restating plainly. There is no real backend and no candidate
authentication, so the correct answers are readable by anyone who opens
their browser's developer tools, and Firestore reads are open to anyone
who has the site link. The Firestore rules allow open reads and
candidate-initiated writes across the candidates, learning_sessions, and
candidate_profiles collections; only deletes, and all writes to the
questions and settings collections, require a signed-in admin through
Firebase Authentication. That amounts to roughly the same level of
protection as the admin PIN elsewhere in the app, not genuine access
control. And the proctoring built into the app is a deterrent layered on
top of Safe Exam Browser, not a replacement for it — SEB is what actually
locks the exam environment down, while this app's in-page signals are a
second layer on top that, for example, has no way of detecting a second
physical device next to the candidate.
