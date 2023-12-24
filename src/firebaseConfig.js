import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA0Wj64gbnRw4mwO3QoEYm5sbDVnzWapSY",
  authDomain: "linkedin-clone-6eb8c.firebaseapp.com",
  projectId: "linkedin-clone-6eb8c",
  storageBucket: "linkedin-clone-6eb8c.appspot.com",
  messagingSenderId: "711401458689",
  appId: "1:711401458689:web:dbeb2716e7ac2a50058400",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireStore = getFirestore(app);
const storage = getStorage(app);
export { app, auth, fireStore, storage };
