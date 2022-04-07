const button = document.querySelector('button');
const image = document.querySelector('.profile-image');

const name = document.querySelector('.name');
const email = document.querySelector('.email');
const date = document.querySelector('.date');
const address = document.querySelector('.address');
const phone = document.querySelector('.phone');
const password = document.querySelector('.password');

const infoTitle = document.querySelector('.info-title');
const infoContent = document.querySelector('.info-content');

button.addEventListener('click', () => {
  fetch('https://randomuser.me/api/?gender=female')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
    
      image.src = user.picture.large;
      infoContent.innerHTML = user.name.first;
    
      name.dataset.value = user.name.first;
      email.dataset.value = user.email;
      date.dataset.value = user.dob.date;
      address.dataset.value = user.location.city;
      phone.dataset.value = user.phone;
      password.dataset.value = user.login.password;
    })
});

document.body.addEventListener('click', (event) => {
  if (event.target.id === "icon") {
    const icons = document.querySelectorAll('.icon');
    
    const title = event.target.parentElement.dataset.title;
    const value = event.target.parentElement.dataset.value;
    
    infoTitle.innerHTML = title;
    infoContent.innerHTML = value;
    
    icons.forEach(el => el.classList.remove('active'));
    event.target.parentElement.classList.add('active');
  }
});








// async function fetchUser() {
//   try {
//     const req = await fetch('https://randomuser.me/api/?gender=female');
//     const res = await req.json();
//     return res;    
//   } catch (e) {
//     console.log('ERROR:', e);
//   }
// }