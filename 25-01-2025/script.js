const apiKey = "01d9f2d66b5fb9c863aa86b5cb001cd2";

function fetchWeather(city, guessedTemp) {
	fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey)
		.then((response) => {
			if (!response.ok) {
				alert("No weather found.");
				throw new Error("No weather found.");
			}
			return response.json();
		})
		.then((data) => {
			console.log(data);
			checkGuess(data, guessedTemp);
		});
}

function checkGuess(data, guessedTemp) {
	const { name } = data;
	let { temp } = data.main;
	temp = Math.round(temp);

	document.querySelector(".actual-temp").innerText = "Actual Temperature: " + temp + "°C";

	if (guessedTemp === null || guessedTemp === "") {
		alert("Please enter a valid guess.");
	} else {
		let message = "";
		console.log(typeof temp, "temp")
		console.log(typeof guessedTemp, "guess");

		if (guessedTemp === temp) {
			message = `You guessed the exact temperature in ${name}`;
		} else if (Math.abs(guessedTemp - temp) < 2) {
			message = `You were close! The actual temperature in ${name} is ${temp}.`;
		} else if (guessedTemp > temp) {
			message = `Too high! The actual temperature in ${name} is lower.`;
		} else {
			message = `Too low! The actual temperature in ${name} is higher.`;
		}

		document.querySelector(".result").innerText = message;
	}
}

function checkWeather() {
	const city = document.querySelector(".search-bar").value;
	const guessedTemp = +document.querySelector(".guess-bar").value;

	if (city) {
		fetchWeather(city, guessedTemp);
	} else {
		alert("Please input a valid city.");
	}
}

document.querySelector(".check").addEventListener("click", function () {
	checkWeather();
});

document.querySelector(".guess-bar").addEventListener("keyup", function (event) {
	if (event.key == "Enter") {
		checkWeather();
	}
});
