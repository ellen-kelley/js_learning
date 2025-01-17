const apiKey = "01d9f2d66b5fb9c863aa86b5cb001cd2";

function fetchWeather(city) {
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
			displayWeather(data);
		});
}

function displayWeather(data) {
	const { name } = data;
	const { icon, description } = data.weather[0];
	const { temp, humidity } = data.main;
	const { speed } = data.wind;

	document.querySelector(".city").innerText = "Weather in " + name;
	document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
	document.querySelector(".description").innerText = description;
	document.querySelector(".temp").innerText = temp + "°C";
	document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
	document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
	document.querySelector(".weather").classList.remove("loading");
}

function searchWeather() {
	const city = document.querySelector(".search-bar").value;
	city ? fetchWeather(city) : alert("Please input a valid city.");
}

document.querySelector(".search button").addEventListener("click", function () {
	searchWeather();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
	if (event.key == "Enter") {
		searchWeather();
	}
});

fetchWeather("Yerevan");
