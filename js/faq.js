const faqLinks = document.querySelectorAll('.faq_link');
const currentLocation = window.location.hash;




// to open accordian by pressing spacebar
window.addEventListener('keydown', (e) => {
  const ancTag = document.querySelector(
    `a[href="${e?.target?.attributes?.href?.value}"]`,
  );
  if (e.code == 'Space' && ancTag) {
    e.preventDefault();
    ancTag?.click();
  }
});


// JavaScript (faq.js)

// JavaScript (faq.js)

// Function to smoothly scroll to the top of the page when the button is clicked
document.getElementById('scrollUpButton').addEventListener('click', function () {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

// Show the scroll-up button when the user scrolls down the page
window.addEventListener('scroll', function () {
  var scrollButton = document.getElementById('scrollUpButton');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = 'block';
  } else {
      scrollButton.style.display = 'none';
  }
});


// Initially hide the button when the page loads
document.addEventListener('DOMContentLoaded', function () {
  var scrollButton = document.getElementById('scrollUpButton');
  scrollButton.style.display = 'none';
});






// for adding tabindex=-1 to other faqlinks so that others faqlinks can't be accessed by tab
const removeFocusForOthers = (target) => {
  faqLinks.forEach((faqLink) => {
    if (faqLink.getAttribute('href') != target.getAttribute('href')) {
      const faqTextSiblingElement = faqLink.nextElementSibling;
      const ancTag = faqTextSiblingElement.querySelectorAll(`a`);
      ancTag.forEach((element) => {
        element.setAttribute('tabindex', '-1');
      });
    }
  });
};

faqLinks.forEach((faqLink) => {
  const faqTextSiblingElement = faqLink.nextElementSibling;
  const faqExpandIcon = faqLink.firstElementChild.lastElementChild;

  faqLink.addEventListener('click', (event) => {
    const tabIndexing = faqLink.nextElementSibling.querySelectorAll('a');
    const currentlyActiveFaqLink = document.querySelector('.faq_link.show');
    const currentlyActiveFaqButton = document.querySelector('.faq-btn.show');

    if (currentlyActiveFaqLink && currentlyActiveFaqLink !== faqLink) {
      currentlyActiveFaqLink.classList.toggle('show');
      currentlyActiveFaqButton.classList.toggle('show');
      currentlyActiveFaqLink.nextElementSibling.style.maxHeight = 0;
    }

    faqLink.classList.toggle('show');
    faqExpandIcon.classList.toggle('show');
    tabIndexing.forEach((element) => {
      const previousTabIndex = element.getAttribute('tabindex');
      element.setAttribute('tabindex', previousTabIndex == '1' ? '-1' : '1');
    });

    if (
      faqLink.classList.contains('show') &&
      faqExpandIcon.classList.contains('show')
    ) {
      faqTextSiblingElement.style.maxHeight =
        faqTextSiblingElement.scrollHeight + 'px';
    } else {
      faqTextSiblingElement.style.maxHeight = 0;
    }

    removeFocusForOthers(faqLink);
  });

  const faqLinkValue = faqLink.hash;

  if (currentLocation === faqLinkValue) {
    const ancTag = document.querySelector(`a[href="${faqLinkValue}"]`);
    ancTag.click();
  }
});

export default removeFocusForOthers;
