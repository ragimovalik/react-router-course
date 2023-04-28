import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc
} from "firebase/firestore/lite";
import { API_KEY } from "../../keys.js";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "vanlife-b4ee0.firebaseapp.com",
  projectId: "vanlife-b4ee0",
  storageBucket: "vanlife-b4ee0.appspot.com",
  messagingSenderId: "392192224455",
  appId: "1:392192224455:web:548f19badad1725d06a2e2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");
const usersCollectionRef = collection(db, "users");

// ===============================

// const BASE_URL = "http://localhost:8000";

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }));
  console.log(dataArr);
  return dataArr;
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);

  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id
  };
}

/* export async function getVans(id) {
  const url = id ? `${BASE_URL}/api/vans/${id}` : `${BASE_URL}/api/vans`;
  const res = await fetch(url);

  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status
    };
  }

  const data = await res.json();
  return data.vans;
}
*/

export async function getHostVans(id) {
  const url = id
    ? `${BASE_URL}/api/host/vans/${id}`
    : `${BASE_URL}/api/host/vans`;
  const res = await fetch(url);

  if (!res.ok) {
    throw {
      message: "Failed to fetch hosts vans",
      statusText: res.statusText,
      status: res.status
    };
  }

  const data = await res.json();
  return data.vans;
}

export async function loginUser(creds) {
  if (!creds) {
    throw { message: "No credentials" };
  }

  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    body: JSON.stringify(creds)
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    };
  }

  return data;
}

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOSu9l9IAK0dH2tMQaNj1LIQ1i40pwtVw",
  authDomain: "vanlife-b4ee0.firebaseapp.com",
  projectId: "vanlife-b4ee0",
  storageBucket: "vanlife-b4ee0.appspot.com",
  messagingSenderId: "392192224455",
  appId: "1:392192224455:web:548f19badad1725d06a2e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/
