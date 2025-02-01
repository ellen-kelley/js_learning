const cards = [];

function Card(type, cardName, cardNumber, cvv, date) {
	this.type = type;
	this.cardName = cardName;
	this.cardNumber = cardNumber;
	this.cvv = cvv;
	this.date = date;
	this.isActive = false;
}

Card.prototype.active = function () {
	if (this.isActive) {
		alert("Your card is already active");
	} else {
		this.isActive = true;
		alert("The card is now active");
		return this;
	}
};

Card.prototype.block = function () {
	this.isActive = false;
	alert("The card is now blocked");
	return this;
};

// ---------------------

// Card
const card = document.querySelector("#card");
const logoCard = document.getElementById("logo-card");
const typeCard = document.querySelector(".card-type");
const numberCard = document.querySelector("#card .number-card");
const nameCard = document.querySelector("#card .name-card");
const monthExpirationCard = document.querySelector("#card .month-expiration-card");
const yearExpirationCard = document.querySelector("#card .year-expiration-card");

// Card Form
const formCard = document.getElementById("form-card");
const typeCardForm = document.getElementById("card-type");
const numberCardForm = document.getElementById("number-card-form");
const nameCardForm = document.getElementById("name-card-form");
const monthCardForm = document.getElementById("month-expiration-card-form");
const yearCardForm = document.getElementById("year-expiration-card-form");
const ccvCardForm = document.getElementById("ccv-card-form");
const createButtonForm = document.querySelector("btn-send-form-card");

// Card type
typeCardForm.addEventListener("change", function (event) {
	const selectedValue = event.target.value;
	typeCard.innerText = selectedValue;
});

// Card Number
numberCardForm.addEventListener("keyup", (e) => {
	let valueNumberCardForm = e.target.value
		.replace(/\s/g, "")
		.replace(/\D/g, "")
		.replace(/([0-9]{4})/g, "$1 ")
		.trim();
	numberCardForm.value = valueNumberCardForm;

	numberCard.textContent = valueNumberCardForm;

	if (valueNumberCardForm === "") {
		numberCard.textContent = "#### #### #### ####";
		logoCard.innerHTML = "";
	}

	if (valueNumberCardForm[0] === "4") {
		logoCard.innerHTML = "";
		let imgLogo = document.createElement("img");
		imgLogo.src = "./images/visa.png";
		logoCard.appendChild(imgLogo);
	} else if (valueNumberCardForm[0] === "5") {
		logoCard.innerHTML = "";
		let imgLogo = document.createElement("img");
		imgLogo.src = "./images/mastercard.png";
		logoCard.appendChild(imgLogo);
	}
});

// Card Name Form
nameCardForm.addEventListener("keyup", (e) => {
	let valueNameCardForm = e.target.value.replace(/[0-9]/g, "");

	nameCardForm.value = valueNameCardForm;
	nameCard.textContent = valueNameCardForm;

	if (valueNameCardForm === "") {
		nameCard.textContent = "John Doe";
	}
});

// Expiration Month
monthCardForm.addEventListener("keyup", (e) => {
	monthCardForm.value = monthCardForm.value.replace(/\s/g, "").replace(/\D/g, "");
	monthExpirationCard.textContent = monthCardForm.value ? monthCardForm.value : "MM";
});

// Expiration Year
yearCardForm.addEventListener("keyup", (e) => {
	yearCardForm.value = yearCardForm.value.replace(/\s/g, "").replace(/\D/g, "");

	yearExpirationCard.textContent = yearCardForm.value ? yearCardForm.value : "YY";
});

// Ccv
ccvCardForm.addEventListener("keyup", (e) => {
	ccvCardForm.value = ccvCardForm.value.replace(/\s/g, "").replace(/\D/g, "");
});

// Form Submit
formCard.addEventListener("submit", function (event) {
	event.preventDefault();

	if (typeCardForm.value === "Choose card type:") {
		alert("Please choose a card type.");
		event.preventDefault();
		typeCardForm.focus();
		return;
	}

	const type = typeCardForm.value;
	const cardName = nameCardForm.value;
	const cardNumber = numberCardForm.value.replace(/\s/g, "");
	const cvv = ccvCardForm.value;
	const date = `${monthCardForm.value}/${yearCardForm.value}`;

	const newCard = new Card(type, cardName, cardNumber, cvv, date);
	console.log("New Card Object:", newCard);

	cards.push(newCard);
	console.log("All Cards:", cards);

	formCard.reset();
	displayCard(newCard, cards.length - 1);
	numberCard.textContent = "#### #### #### ####";
	nameCard.textContent = "John Doe";
	monthExpirationCard.textContent = "MM";
	yearExpirationCard.textContent = "YY";
	ccvCard.textContent = "";
	logoCard.innerHTML = "";
});

function displayCard(card, index) {
	const gridContainer = document.querySelector(".all-cards-grid");

	const cardDiv = document.createElement("div");
	cardDiv.classList.add("card");

	cardDiv.innerHTML = `
            <div class="front-card">
                <button type="button" class="activate-block-btn">Activate</button>
                <div class="card-type">${card.type}</div>
                <img src="./images/chip.png" alt="Chip" title="Chip" class="chip">

                <div class="info-card-front">
                    <div class="group-number-card">
                        <p class="label-card">Card Number</p>
                        <p class="number-card">${card.cardNumber}</p>
                    </div>

                    <div class="flexbox">
                        <div class="group-name-card">
                            <p class="label-card">Cardholder Name</p>
                            <p class="name-card">${card.cardName}</p>
                        </div>

                        <div class="group-expiration-card">
                            <p class="label-card">Expiration</p>
                            <p class="expiration-card">
                                <span class="month-expiration-card">${card.date.split("/")[0]}</span> /
                                <span class="year-expiration-card">${card.date.split("/")[1]}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;

	const activateButton = cardDiv.querySelector(".activate-block-btn");
	activateButton.addEventListener("click", function () {
		cards[index].isActive = !cards[index].isActive;
		activateButton.textContent = cards[index].isActive ? "Block" : "Activate";
		activateButton.classList.toggle("blocked", cards[index].isActive);
	});

	gridContainer.appendChild(cardDiv);
}
