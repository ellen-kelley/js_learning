import { data } from './db.js';

const tableBody = document.getElementById('tbody');
const img = document.getElementById('errorMessage');

const userPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10);
        if (randomNumber > 3) {
            resolve(data);
        } else {
            reject('https://cdn.dribbble.com/users/469578/screenshots/2597126/404-drib23.gif')
        }
    }, 1000);
})

userPromise
.then((resp) => {
    const parseData = JSON.parse(resp);

    return parseData;
})
.then((userData) => {
    console.log(userData, 'userData');
    userData.forEach((user) => {
    tableBody.innerHTML += `
        <tr>
            <td>
                <img width="30px" src="${user.picture.large}">
            </td>
            <td>${user.name.first}</td>
            <td>${user.name.last}</td>
            <td>${user.location.city}</td>
            <td>${user.phone}</td>
        </tr>
    `
    })
})
.catch((err) => {
    img.src = err;
})




