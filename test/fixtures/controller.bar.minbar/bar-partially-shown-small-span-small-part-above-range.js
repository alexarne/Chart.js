module.exports = {
  config: {
    type: 'bar',
    data: {
      datasets: [{
        data: [{
          x: ['2004-12-23', '2005-01-03'],
          y: '',
        }],
        backgroundColor: ['green'],
        barPercentage: 1,
        minBarLength: 20,
      },
      ],
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {display: false},
        x: {
          display: false,
          type: 'time',
          time: {unit: 'year'},
          min: '1995-12-31',
          max: '2005-01-01',
        },
      },
    }
  }
};
 