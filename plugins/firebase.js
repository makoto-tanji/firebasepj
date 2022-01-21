import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyAPINTWfw-HVnjCHifpNTxlzLTlW00PvfI",
      authDomain: "fir-pj-bd1c8.firebaseapp.com",
      projectId: "fir-pj-bd1c8",
      storageBucket: "fir-pj-bd1c8.appspot.com",
      messagingSenderId: "330137467193",
      appId: "1:330137467193:web:54ca255f8bf785ddd0d0e8",
      measurementId: "G-14QRE8B5T1"
    }
  )
}
  
export default firebase