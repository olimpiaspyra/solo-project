var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart (ctx, { // eslint-disable-line
  type: 'bar',
  data: {

    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],

    datasets: [{
      label: 'Signups',
      backgroundColor: '#56819F',
      borderColor: '#56819F',
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F58220',
      borderColor: '#F58220',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#28a745',
      borderColor: '#28a745',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],

      hidden: true,
    }]
  },

  options: {
    legend: {
      display: true,
      labels: {
        fontColor: '#cfc4c4ee',
        fontSize: 16,
        boxWidth: 20,
        padding: 10
      }
    },
  }
});
