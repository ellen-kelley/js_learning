import { API_KEY, API_URL, API_VERSION } from "./constants.js";

fetch(`${API_URL}/${API_VERSION}/weather?q=Yerevan&appid=${API_KEY}`);
