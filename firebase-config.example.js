// Copy this file to firebase-config.js and fill in YOUR Firebase project's values.
// Get these from: Firebase Console -> Project settings (gear icon) -> General ->
// "Your apps" -> Web app -> SDK setup and configuration -> Config.
//
// These values are safe to publish in client-side code — Firebase protects your
// data with Firestore Security Rules (see firestore.rules), not by hiding this
// config. Do NOT put your Firebase Admin/service-account key here — that one
// actually is secret and does not belong in a browser at all.

export const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID",
};

// Change this to whatever PIN you want admins to type on the dashboard.
// This is a light deterrent only, same as your existing LMS's admin PIN —
// not real security. Anyone with this file (or the deployed site's source)
// can read it.
export const ADMIN_PIN = "2468";

// How many questions to serve per attempt, picked randomly from the chosen
// onboarding day's bank only (the candidate picks their day before testing —
// see the learning module step — so every attempt is scoped to one day).
export const QUESTIONS_PER_DAY = 5;
export const TIME_LIMIT_MINUTES = 50;
export const POINTS_PER_QUESTION = 4; // 5 questions x 4 = 20 points per attempt

// How long the candidate gets to review that day's topic before the timed
// quiz starts. Kept short on purpose — it's a refresher, not a study period,
// and shouldn't eat into the time budget of the exam itself.
export const LEARNING_MODULE_MINUTES = 6;

// Fill these in after creating a free account at https://www.emailjs.com/ —
// add an Email Service (e.g. connect Gmail) and an Email Template there, then
// paste the three IDs it gives you. Used to auto-send a marking-sheet email
// the moment a candidate finishes. You'll also need to vendor EmailJS's SDK
// locally (see vendor/emailjs/) — see README for why (same reason as Firebase).
export const EMAILJS_SERVICE_ID = "";
export const EMAILJS_TEMPLATE_ID = "";
export const EMAILJS_PUBLIC_KEY = "";
export const MARKING_EMAIL_TO = "posinsideragent@gmail.com";
