/* Chart */

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

/* Menu */

function toggleMenu(visible) {
  document.querySelector('.menu').classList.toggle('show', visible);
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

/* Modals */

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

document.querySelector('.popup').addEventListener('click', function(e) {
  if(e.target === this) {
    openModal('#modalManager');
  }
});
