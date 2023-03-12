// import { timeStampArr, waterValueArr_f1, waterValueArr_f2} from '../../js/index.js';
// // Set new default font family and font color to mimic Bootstrap's default styling
// Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#292b2c';

// var xAxisLabelMinWidth = 5;

 
// var data_date = ["Mar 1", "Mar F", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 82", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar A","Mar V", "Mar 12", "Mar 13","Mar 11", "Mar 12", "Mar 13","Mar 1", "Mar F", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 82", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar A","Mar V", "Mar 12", "Mar 13","Mar 11", "Mar 12", "Mar 13"];
// var data1_value = [100.00, 301.62, 262.63, 183.94, 182.87, 286.82, 312.74, 332.59, 258.49, 241.59, 326.51, 319.84, 384.51,326.51, 319.84, 384.51,326.51, 319.84, 384.51,100.00, 301.62, 262.63, 183.94, 182.87, 286.82, 312.74, 332.59, 258.49, 241.59, 326.51, 319.84, 384.51,326.51, 319.84, 384.51,326.51, 319.84, 384.51];
// var data2_value = [13.50, 183.57, 263.63, 183.35, 183.57,  , , , 258.49, 286.82, 326.51, 335.84, 354.51,326.51, 335.84, 184.51,384.51, 219.84, 184.51,13.50, 183.57, 263.63, 183.35, 183.57, 286.82, 182.87, 352.59, 258.49, 286.82, 326.51, 335.84, 354.51,326.51, 335.84, 184.51,384.51, 219.84, 184.51];

// // Area Chart Example
// var ctx = document.getElementById("myAreaChart");
 
// data_date = timeStampArr;
// data1_value = waterValueArr_f1;
// data2_value = waterValueArr_f2;

// getData2.addEventListener('click', (e) => {
//   console.log(timeStampArr);
//   console.log(waterValueArr_f1);
//   console.log(waterValueArr_f2);
//   console.log(myLineChart.data.datasets[1]);
// 	myLineChart.data.datasets[0].data = data1_value;
//   myLineChart.data.datasets[1].data = data2_value;
//   myLineChart.data.labels = data_date;
//   myLineChart.update();
// });


// var data = {  
//     labels: data_date,
//     datasets: [
//         {
//             label: "ก็อกน้ำ",
//             lineTension: 0.3,
//             backgroundColor: "rgba(2,117,216,0.2)",
//             borderColor: "rgba(2,117,216,1)",
//             pointRadius: 5,
//             pointBackgroundColor: "rgba(2,117,216,1)",
//             pointBorderColor: "rgba(255,255,255,0.8)",
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: "rgba(2,117,216,1)",
//             pointHitRadius: 50,
//             pointBorderWidth: 2,
//             data: data1_value
//         },
//         {
//             label: "อ่างล้างหน้า",
//             lineTension: 0.3,
//             backgroundColor: "rgba(2,216,117,0.2)",
//             borderColor: "rgba(2,216,117,1)",
//             pointRadius: 5,
//             pointBackgroundColor: "rgba(2,216,117,1)",
//             pointBorderColor: "rgba(255,255,255,0.8)",
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: "rgba(2,216,117,1)",
//             pointHitRadius: 50,
//             pointBorderWidth: 2,
//             data: data2_value
//         }
//     ]
// };
// var myLineChart = new Chart(document.getElementById('myChart').getContext('2d'), { 
//   type: "line",
//   data: data,
//   options: {
//     responsive: true,
//     maintainAspectRatio: false,

 
// }});

 

//        function fitChart(){
//         var chartCanvas = document.getElementById('myChart');
//         var maxWidth = chartCanvas.parentElement.parentElement.clientWidth;
//         var width = Math.max(mayChart.data.labels.length * xAxisLabelMinWidth, maxWidth);
    
//         chartCanvas.parentElement.style.width = width +'px';
//     }