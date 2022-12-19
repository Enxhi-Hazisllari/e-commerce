
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { createUserWithEmailAndPassword, updateProfile,getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDncE9tbCqNN9wQhxkotoc1azwGrJgBspU",
  authDomain: "remui-ad443.firebaseapp.com",
  projectId: "remui-ad443",
  storageBucket: "remui-ad443.appspot.com",
  messagingSenderId: "852032561015",
  appId: "1:852032561015:web:8e0b790c8fa64b7a944b72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

async function register ({firstname,lastname,email,password}) {

    const resp = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );

    await updateProfile(resp.user, {displayName: `${firstname} ${lastname}`});
}
async function login({email,password}){
    const resp = await signInWithEmailAndPassword(
        auth , email , password
    )
    return resp.user
}
async function logout(){
    await signOut(auth);
}
export const firebasedb = {
    register:register,
    login:login,
    logout:logout
}