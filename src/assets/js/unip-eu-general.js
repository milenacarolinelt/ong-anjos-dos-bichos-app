const El = {
  header: {
    notification: document.querySelector('.js-open-notification'),
  },
  notification: {
    section: document.querySelector('.js-section-notification'),
    back: document.querySelector('.js-back-notification'),
  }
};

const Methods = {
  init() {
    Methods.notification();
  },
  
  notification() {
    El.header.notification.addEventListener('click', (e) => {
      El.notification.section.classList.add('active');
    });

    
    El.notification.back.addEventListener('click', (e) => {
      El.notification.section.classList.remove('active');
    });
  }
};

window.addEventListener("DOMContentLoaded", Methods.init);