const {
    initializeApp
} = require('firebase/app');
const {
    initializeAppCheck,
    ReCaptchaV3Provider
} = require('firebase/app-check');
const {
    getDatabase,
    ref,
    onValue,
    limitToLast,
    orderByChild,
    get
} = require('firebase/database');
const appCheck = require('firebase/app-check');

const firebaseConfig = {
    apiKey: "AIzaSyCfexH7d6elfFToEc7t9Ue2iXJKgNRcjlY",
    authDomain: "mbah-arip.firebaseapp.com",
    databaseURL: "https://mbah-arip-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mbah-arip",
    storageBucket: "mbah-arip.appspot.com",
    messagingSenderId: "871318298866",
    appId: "1:871318298866:web:0430a508e009de7146b06b",
    measurementId: "G-X3HPKCV1Q0"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const portoRef = ref(database, 'portofolio/')

module.exports = {
    getPorto: async () => {
        let data = {}
        limitToLast(5)
        await get(portoRef).then(snapshot => {
            let items = Object.values(snapshot.val())
            data = items;
        })
        return data;
    },
    getPortoID: async (id) => {
        const query = ref(database, `portofolio/${id}`);

        let data = {};
        await get(query).then(snapshot => {
            let item = snapshot.val()
            data = item;
        })
        return data;
    }
}