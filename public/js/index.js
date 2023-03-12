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

var totaltimeStamp = [];
var waterTotalArr_f1 = [];
var waterTotalArr_f2 = [];

// Set new default font family and font color to mimic Bootstrap's default styling
// Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#292b2c';

// var xAxisLabelMinWidth = 5;

 
// var data_date = ["Mar 1", "Mar F", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 82", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar A","Mar V", "Mar 12", "Mar 13","Mar 11", "Mar 12", "Mar 13","Mar 1", "Mar F", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 82", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar A","Mar V", "Mar 12", "Mar 13","Mar 11", "Mar 12", "Mar 13"];
// var data1_value = [10.00, 31.62, 22.63, 13.94, 12.87, 26.82, 12.74, 22.59, 25.49, 21.59, 26.51, 19.84, 34.51,32.51, 19.84, 34.51,32.51, 19.84, 24.51,10.00, 11.62, 22.63, 13.94, 18.87, 26.82, 12.74, 32.59, 28.49, 21.59, 26.51, 19.84, 34.51,26.51, 19.84, 34.51,26.51, 19.84, 34.51];
// var data2_value = [13.50, 18.35, 26.36, 18.35, 13.57,  , , , 28.49, 26.82, 36.51, 35.84, 34.51,36.51, 35.84, 14.51,34.51, 29.84, 14.51,13.50, 13.57, 23.63, 18.35, 13.57, 26.82, 12.87, 21.59, 25.49, 26.82, 36.51, 35.84, 34.51,36.51, 35.84, 14.51,34.51, 29.84, 18.51];
// console.log(data2_value);
// // Area Chart Example
// var ctx = document.getElementById("myAreaChart");
 
const getData = async () =>{
var tmp_timeStampArr = [];
var tmp_waterValueArr_f1 = [];
var tmp_waterValueArr_f2 = [];

var tmp_totaltimeStamp = [];
var tmp_waterTotalArr_f1 = [];
var tmp_waterTotalArr_f2 = [];
  console.log("click");
  const dbRef = ref(db, 'UsersData/mw8hG8uvYigQpzheQilXmCpLuyG2');
  await onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          console.log(childKey);
          console.log(childData);
        if(childKey=="waterlog"){
            for(var i in childData){
                tmp_timeStampArr.push(childData[i].timestamp);
                tmp_waterValueArr_f1.push(childData[i].faucet_1_value); 
                tmp_waterValueArr_f2.push(childData[i].faucet_2_value);
                }
        }else if (childKey=="watertotal"){
            for(var i in childData){
                tmp_totaltimeStamp.push(childData[i].timestamp);
                tmp_waterTotalArr_f1.push(childData[i].faucet_1_total);
                tmp_waterTotalArr_f2.push(childData[i].faucet_2_total);
            }
        }
          
          console.log("fectch finiish");
          
      });
      timeStampArr = tmp_timeStampArr;
waterValueArr_f1 = tmp_waterValueArr_f1;
waterValueArr_f2 = tmp_waterValueArr_f2;

totaltimeStamp = tmp_totaltimeStamp;
waterTotalArr_f1 = tmp_waterTotalArr_f1;
waterTotalArr_f2 = tmp_waterTotalArr_f2;

  });


  console.log("graph");
  console.log(timeStampArr);
  console.log(waterValueArr_f1);
  console.log(waterValueArr_f2);
  console.log(waterTotalArr_f1);
  console.log(waterTotalArr_f2);

  console.log(myLineChart.data.datasets[1]);
  myLineChart.data.datasets[0].data = waterValueArr_f1;
  myLineChart.data.datasets[1].data = waterValueArr_f2;
  myLineChart.data.labels = timeStampArr;
  myLineChart.update();


  const total1_Element = document.getElementById("faucet_1_total");
  total1_Element.textContent = waterTotalArr_f1;
  const total2_Element = document.getElementById("faucet_2_total");
  total2_Element.textContent = waterTotalArr_f2;
};

setInterval(getData,10000);

 









Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var xAxisLabelMinWidth = 5;

 
var data_date = ["Mar 1", "Mar F", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 82", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar A","Mar V", "Mar 12", "Mar 13","Mar 11", "Mar 12", "Mar 13","Mar 1", "Mar F", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 82", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar A","Mar V", "Mar 12", "Mar 13","Mar 11", "Mar 12", "Mar 13"];
var data1_value = [100.00, 301.62, 262.63, 183.94, 182.87, 286.82, 312.74, 332.59, 258.49, 241.59, 326.51, 319.84, 384.51,326.51, 319.84, 384.51,326.51, 319.84, 384.51,100.00, 301.62, 262.63, 183.94, 182.87, 286.82, 312.74, 332.59, 258.49, 241.59, 326.51, 319.84, 384.51,326.51, 319.84, 384.51,326.51, 319.84, 384.51];
var data2_value = [13.50, 183.57, 263.63, 183.35, 183.57,  , , , 258.49, 286.82, 326.51, 335.84, 354.51,326.51, 335.84, 184.51,384.51, 219.84, 184.51,13.50, 183.57, 263.63, 183.35, 183.57, 286.82, 182.87, 352.59, 258.49, 286.82, 326.51, 335.84, 354.51,326.51, 335.84, 184.51,384.51, 219.84, 184.51];

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
 
data_date = timeStampArr;
data1_value = waterValueArr_f1;
data2_value = waterValueArr_f2;


var data = {  
    labels: data_date,
    datasets: [
        {
            label: "ก็อกน้ำ",
            lineTension: 0.3,
            backgroundColor: "rgba(2,117,216,0.2)",
            borderColor: "rgba(2,117,216,1)",
            pointRadius: 5,
            pointBackgroundColor: "rgba(2,117,216,1)",
            pointBorderColor: "rgba(255,255,255,0.8)",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(2,117,216,1)",
            pointHitRadius: 50,
            pointBorderWidth: 2,
            data: data1_value
        },
        {
            label: "อ่างล้างหน้า",
            lineTension: 0.3,
            backgroundColor: "rgba(2,216,117,0.2)",
            borderColor: "rgba(2,216,117,1)",
            pointRadius: 5,
            pointBackgroundColor: "rgba(2,216,117,1)",
            pointBorderColor: "rgba(255,255,255,0.8)",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(2,216,117,1)",
            pointHitRadius: 50,
            pointBorderWidth: 2,
            data: data2_value
        }
    ]
};
var myLineChart = new Chart(document.getElementById('myChart').getContext('2d'), { 
  type: "line",
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,

 
}});

 

       function fitChart(){
        var chartCanvas = document.getElementById('myChart');
        var maxWidth = chartCanvas.parentElement.parentElement.clientWidth;
        var width = Math.max(mayChart.data.labels.length * xAxisLabelMinWidth, maxWidth);
    
        chartCanvas.parentElement.style.width = width +'px';
    }
export { timeStampArr, waterValueArr_f1, waterValueArr_f2 };