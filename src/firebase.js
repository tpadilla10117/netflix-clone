    import firebase from "firebase";


/* Firebase configuration object containing keys and identifiers for the app: */

    const firebaseConfig = {
        apiKey: "AIzaSyAw7a9fDueHhN6PGAwBAM6Gcs0s6ighHFY",
        authDomain: "netflix-clone-897d7.firebaseapp.com",
        projectId: "netflix-clone-897d7",
        storageBucket: "netflix-clone-897d7.appspot.com",
        messagingSenderId: "365349534996",
        appId: "1:365349534996:web:df4e9c8d3f53b86b359601"
    };

/* Initialize the firebase App: */
    const firebaseApp = firebase.initializeApp(firebaseConfig);

/*  Initialize the realtime firestore database: */
    const db = firebaseApp.firestore();

/*  Initialize authentication for the app:*/
    const auth = firebase.auth();

    export { auth };
    export default db;