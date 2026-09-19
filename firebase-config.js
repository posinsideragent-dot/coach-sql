// Copy this file to firebase-config.js and fill in YOUR Firebase project's values.
// Get these from: Firebase Console -> Project settings (gear icon) -> General ->
// "Your apps" -> Web app -> SDK setup and configuration -> Config.
//
// These values are safe to publish in client-side code — Firebase protects your
// data with Firestore Security Rules (see firestore.rules), not by hiding this
// config. Do NOT put your Firebase Admin/service-account key here — that one
// actually is secret and does not belong in a browser at all.

export const firebaseConfig = {
  apiKey: "AIzaSyDDGWqi5qrYqVL2TH4-sronUFWTfutM1Es",
  authDomain: "assistant-3d5d4.firebaseapp.com",
  projectId: "assistant-3d5d4",
  storageBucket: "assistant-3d5d4.firebasestorage.app",
  messagingSenderId: "149177527512",
  appId: "1:149177527512:web:ac0184b0d4339788f3bbad",
};

// Change this to whatever PIN you want admins to type on the dashboard.
// This is a light deterrent only, same as your existing LMS's admin PIN —
// not real security. Anyone with this file (or the deployed site's source)
// can read it.
export const ADMIN_PIN = "2468";

// How many questions to serve per attempt, picked randomly from the chosen
// onboarding day's bank only (the candidate picks their day before testing —
// see the learning module step — so every attempt is scoped to one day).
export const QUESTIONS_PER_DAY = 20;
export const TIME_LIMIT_MINUTES = 50;
export const POINTS_PER_QUESTION = 4; // 20 questions x 4 = 80 points per attempt

// How long the candidate gets to work through that day's tutorial (real
// lesson content pulled from the SQL Account knowledge base, see
// js/tutorials.js) before the timed quiz starts. Each day's lessons add up
// to roughly 30-40 minutes of reading; 40 gives comfortable headroom. An
// "I'm ready" button lets a candidate move on early if they finish sooner.
export const LEARNING_MODULE_MINUTES = 40;

// Fill these in after creating a free account at https://www.emailjs.com/ —
// add an Email Service (e.g. connect Gmail) and an Email Template there, then
// paste the three IDs it gives you. Used to auto-send a marking-sheet email
// the moment a candidate finishes. You'll also need to vendor EmailJS's SDK
// locally (see vendor/emailjs/) — see README for why (same reason as Firebase).
export const EMAILJS_SERVICE_ID = "service_4pvav1n";
export const EMAILJS_TEMPLATE_ID = "template_rnd3knr";
export const EMAILJS_PUBLIC_KEY = "qEx9SNi8cHxY8jjxg";
export const MARKING_EMAIL_TO = "posinsideragent@gmail.com";
