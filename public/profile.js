// const person = {
//     bDateSex: 'mees 09.05.1977',
//     phoneNumber: '+372 5300 5043',
//     eMail: 'roman.batischev@gmail.com',
//     adress: 'Lääne 4-55, Tartu, 50605'

//}
const bDateSexSpan = document.querySelector('#bDateSex');
const phoneNumber = document.querySelector('#phoneNumber');
const eMail = document.querySelector('#eMail');
const adress = document.querySelector('#adress');

window.onload = () => {

    fetch('profile.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        bDateSexSpan.textContent = data.bDateSex;
        phoneNumber.textContent = data.phoneNumber;
        eMail.textContent = data.eMail;
        adress.textContent = data.adress;
    })
}
