import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  // ... existing config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Collections references
const projectsCollection = collection(db, 'projects');
const leadsCollection = collection(db, 'leads');

export { app, db, auth, storage, projectsCollection, leadsCollection }; 