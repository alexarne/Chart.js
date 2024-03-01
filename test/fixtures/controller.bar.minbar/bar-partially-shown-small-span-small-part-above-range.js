module.exports = {
    config: {
      type: 'bar',
      data: {
        datasets: [{
          data: [{
            x: ['2004-12-18', '2005-01-01'], //01-05
            y: '',
          }],
          backgroundColor: ['green'],
          barPercentage: 1,
          minBarLength: 15,
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
  