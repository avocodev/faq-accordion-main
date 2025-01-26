const plusElement = document.querySelectorAll('.js-plus-button');
const paragraphElement = document.querySelectorAll('.js-paragraph');

plusElement.forEach((button, buttonIndex) => {
  button.addEventListener('click', () => {
    paragraphElement.forEach((paragraph, paraIndex) => {
      if (buttonIndex === paraIndex) {
        if (!paragraph.classList.contains('js-show')) {
          paragraph.classList.add('js-show');
          button.src = 'http://127.0.0.1:5500/faq-accordion-main/assets/images/icon-minus.svg'
        } else {
          paragraph.classList.remove('js-show');
          button.src = 'http://127.0.0.1:5500/faq-accordion-main/assets/images/icon-plus.svg'
        }
      }
    })
  });
});


