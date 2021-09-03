import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAAGayWOoSPCGui_JIoUhZRtGvuVqcsq5U',
  authDomain: 'with-a-twist-330bf.firebaseapp.com',
  projectId: 'with-a-twist-330bf',
  storageBucket: 'with-a-twist-330bf.appspot.com',
  messagingSenderId: '810359349934',
  appId: '1:810359349934:web:0d2c9b7580554bf06f433f',
  measurementId: 'G-YFDQ4VDC9X',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()
const db = firebaseApp.firestore()

export { db, auth }
