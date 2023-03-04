import { timeStampArr, waterValueArr_f1, waterValueArr_f2} from '../../js/index.js';
// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
 
var data_date = timeStampArr;
var data1_value = waterValueArr_f1;
var data2_value = waterValueArr_f2;

getData.addEventListener('click', (e) => {
  console.log(timeStampArr);
  console.log(waterValueArr_f1);
  console.log(waterValueArr_f2);
});

var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: data_date,
    datasets: [{
      label: "Sessions",
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
      data: data1_value,
    },
    {
      label: "อ่างล้างหน้า",
      lineTension: 0.3,
      backgroundColor: "rgba(2,216,117,0.2)",
      borderColor: "rgba(2,216,117,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,216,117,1)",
      pointBorderColor: "rgba(255,255,255,0.8",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,216,117,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: data2_value
  }],
  },
  options: {
      responsive: true,
      maintainAspectRatio: false,
      scroll: true,
      tick: 1,
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 15
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 25
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

myLineChart.update();




