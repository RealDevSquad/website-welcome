const defaultUserProfilePicture = '../img/icons/user-default-icon.png';
const setUserGreeting = (
  username,
  firstName,
  userProfilePicture = defaultUserProfilePicture,
) => {
  if (username) {
    const userLoginEl = document.querySelectorAll('.btn-login');

    const greetingEl = document.querySelectorAll('.user-greet');
    const msgGreetMsgEl = document.querySelectorAll('.user-greet-msg');
    const userImgEl = document.querySelectorAll('.user-profile-pic');

    const capitalisedName = firstName[0].toUpperCase() + firstName.slice(1);
    const greetMsg = `Hello, ${capitalisedName}!`;
    console.log(greetMsg);
    msgGreetMsgEl.forEach((element) => {
      element.innerText = greetMsg;
    });

    const userImgURL = userProfilePicture;
    userImgEl.forEach((element) => {
      element.src = userImgURL;
    });

    greetingEl.forEach((element) => {
      element.style.display = 'block';
    });
    userLoginEl.forEach((element) => {
      element.style.display = 'none';
    });
  }
};

const showSignInButton = () => {
  const loginButtons = document.querySelectorAll('.btn-login-text');
  loginButtons.forEach((element) => {
    element.classList.remove('hidden');
  });
};
const hideSkeleton = () => {
  const skeletonHolder = document.querySelector('.skeleton-holder');
  skeletonHolder.style.display = 'none';
};

const fetchData = () => {
  fetch('https://api.realdevsquad.com/users?profile=true', {
    headers: { 'content-type': 'application/json' },
    credentials: 'include',
  })
    .then((res) => res.json())
    .then((res) => {
      const { username, first_name, picture } = res;
      if (res.error) {
        hideSkeleton();
        showSignInButton();
        throw new Error(res.error);
      }
      if (res.incompleteUserDetails) {
        return window.location.replace(
          'https://www.realdevsquad.com/new-signup',
        );
      }
      setUserGreeting(username, first_name, picture?.url);
    })
    .catch((error) => {
      hideSkeleton();
      showSignInButton();
      console.error(error);
    });
};

window.addEventListener('DOMContentLoaded', fetchData);
