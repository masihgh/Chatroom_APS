import { useState } from 'react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCziEfacCbgqrVnMg7dtXomEyBrukEN5uM",
  authDomain: "chatroom-aps-998fc.firebaseapp.com",
  projectId: "chatroom-aps",
  storageBucket: "chatroom-aps.appspot.com",
  messagingSenderId: "445265524647",
  appId: "1:445265524647:web:de78a95bbd7d911e14a882",
  measurementId: "G-774G335QS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <h1 className='bg-rose-500 '>Chat app</h1>
     <h2>Sahar</h2>

     <h1 className='bg-rose-500 '>Chat app hello</h1>
     <h2>kani</h2>

    </>
  )
}

export default App
