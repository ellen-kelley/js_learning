import { data } from "./db.js";

function getCountA() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(10);
		}, 3000);
	});
}

function getCountB() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(20);
		}, 2000);
	});
}

Promise.all([getCountA(), getCountB()]).then((resp) => {
	console.log(resp, "resp");
	console.log(resp[0] + resp[1]);
});

Promise.race([getCountA(), getCountB()]).then((resp) => {
	console.log(resp);
});

const ok = false;
function fetchUserData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (ok) {
				resolve(data);
			} else {
				reject({ errorMessage: "Wrong API url" });
			}
		}, 3000);
	});
}

const loadingElement = document.getElementById("loading");

async function getUserData() {
	loadingElement.innerText = "Loading...";
	try {
		const resp = await fetchUserData();
		const data = JSON.parse(resp);
		console.log(data);
	} catch (error) {
		console.log(error);
	} finally {
		loadingElement.innerText = "";
	}
}

getUserData();

console.log("code end");
