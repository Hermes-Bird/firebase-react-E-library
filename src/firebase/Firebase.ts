import firebase from 'firebase'

const config = {
    apiKey: 'AIzaSyBFwBCOWeCpKbmJ0pBYvm5cHLa6PNtJbMA',
    authDomain: 'el-library.firebaseapp.com',
    databaseURL: 'https://el-library.firebaseio.com',
    projectId: 'el-library',
    storageBucket: 'el-library.appspot.com',
    messagingSenderId: '499414996477',
    appId: '1:499414996477:web:7f11f9b5e0a85d1725b594',
    measurementId: 'G-KL38RV8JJP'
}

export default class Firebase {
    constructor() {
        firebase.initializeApp(config)
    }
}
