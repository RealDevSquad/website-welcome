const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

window.addEventListener('DOMContentLoaded', (event) => {
  const checkURL = window.location.href;
  const productionURL = 'https://welcome.realdevsquad.com/';
  let userLoginEl = document.getElementById('user-login');
  const clientId =
    checkURL === productionURL
      ? '23c78f66ab7964e5ef97'
      : '8b97fd58a86f1d06b0e2';
  userLoginEl.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&state=${checkURL}`;
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const signout = () => {
  fetch(`${API_BASE_URL}/auth/signout`, {
    method: 'GET',
    credentials: 'include',
  }).then(() => {
    location.reload();
  });
};

document.getElementById('signout-option').addEventListener('click', () => {
  signout();
});

const myStatusButton = document.getElementById('my-status');
myStatusButton.addEventListener('click', () => {
  window.location.href = `${MAIN_SITE}/status`;
});

const myProfileButton = document.getElementById('my-profile');
myProfileButton.addEventListener('click', () => {
  window.location.href = `${MAIN_SITE}/profile`;
});

const myTasksButton = document.getElementById('my-tasks');
myTasksButton.addEventListener('click', () => {
  window.location.href = `${STATUS_BASE_URL}/tasks`;
});

const myIdentityButton = document.getElementById('my-identity');
myIdentityButton.addEventListener('click', () => {
  window.location.href = `${MAIN_SITE}/identity`;
});

const mainSiteButton = document.getElementById('main-site');
mainSiteButton.addEventListener('click', () => {
  window.location.href = MAIN_SITE;
});

document.querySelectorAll('.user-greet').forEach((greet) => {
  greet.addEventListener('click', () => {
    document.querySelector('.dropdown').classList.toggle('hide');
  });
});

const dropdownTrigger = document.querySelectorAll('.user-greet');
document.addEventListener('click', (event) => {
  if (
    dropdownTrigger[0] != event.target.parentElement &&
    dropdownTrigger[1] != event.target.parentElement &&
    !document.querySelector('.dropdown').classList.contains('hide')
  ) {
    document.querySelector('.dropdown').classList.add('hide');
  }
});
