import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, ref, child, onValue, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0t3ziaSZEdQDSPwwd5eD2zpUyC1Ljm3s",
    authDomain: "watermoniteriot.firebaseapp.com",
    databaseURL: "https://watermoniteriot-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "watermoniteriot",
    storageBucket: "watermoniteriot.appspot.com",
    messagingSenderId: "535690118060",
    appId: "1:535690118060:web:8d6e87abf2cad05a907009",
    measurementId: "G-ZXD8YFSW2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// var faucetArr = [];
var timeStampArr = [];
var waterValueArr_f1 = [];
var waterValueArr_f2 = [];

await getData.addEventListener('click', (e) => {
    console.log("click");
    const dbRef = ref(db, 'UsersData/mw8hG8uvYigQpzheQilXmCpLuyG2');
    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            console.log(childKey);
            console.log(childData);

            for(var i in childData){
                if(childData[i].faucet=="ก็อก1"){
                    timeStampArr.push(childData[i].timestamp);
                    waterValueArr_f1.push(childData[i].water_value);
                    waterValueArr_f2.push();
                }else{
                    timeStampArr.push(childData[i].timestamp);
                    waterValueArr_f2.push(childData[i].water_value);
                    waterValueArr_f1.push();
                }
                
            }
            
        });

    });
});

export {timeStampArr, waterValueArr_f1, waterValueArr_f2};