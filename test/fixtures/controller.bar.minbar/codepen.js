module.exports = {
  config: {
    type: 'bar',
    data: {
      datasets: [{
        data: [{
          x: ['1998-06-01', '1999-12-31'],
          y: 'A',
        },{
          x: ['1999-12-31', '1999-12-31'],
          y: 'B - 1999-12-31',
        }, {
          x: ['2000-01-01', '2000-01-01'],
          y: 'C - 2000-01-01',
        }, {
          x: ['2000-01-01', '2001-12-31'],
          y: 'D'
        }, {
          x: ['1990-01-01', '1990-01-01'],
          y: 'E - 1990-01-01'
        }],
        backgroundColor: ['green', 'red', 'red', 'green', 'red'],
        barPercentage: 1,
        minBarLength: 20,
      },
      ],
    },
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          type: 'time',
          time: {unit: 'year'},
          min: '1995-12-31',
          max: '2005-01-01',
        }
      },
    }
  }
};
