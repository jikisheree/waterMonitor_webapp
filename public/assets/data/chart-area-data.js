// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

 


// Area Chart Example
var ctx = document.getElementById("myAreaChart");

 
var data_date = ["Mar 1", "Mar F", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 82", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar A","Mar V", "Mar 12", "Mar 13","Mar 11", "Mar 12", "Mar 13"];
var data_value = [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451,32651, 31984, 38451,32651, 31984, 38451];



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
      data: data_value,
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
          max: 40000,
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


