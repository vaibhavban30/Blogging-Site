let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyAtD4vJApkv_InI2pTLmyzITp65v7yDJm8",
    authDomain: "blog-site-63fe4.firebaseapp.com",
    projectId: "blog-site-63fe4",
    storageBucket: "blog-site-63fe4.appspot.com",
    messagingSenderId: "781864721932",
    appId: "1:781864721932:web:851b47e70b7affd3109829"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();