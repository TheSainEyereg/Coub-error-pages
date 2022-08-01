import Logger from "./Logger.js";
const logger = new Logger("Utils");

function ready(callback) {
	if (document.readyState != "loading") {
		logger.log("Document is already ready");
		callback();
	} else document.addEventListener("DOMContentLoaded", () => {
		logger.log("DOMContentLoaded");
		callback();
	});
}

function saveLocation() {
	const location = window.location.href;
	localStorage.setItem("lastPage", location);
}

function redirectToLastPage() {
	const lastPage = localStorage.getItem("lastPage");
	if (lastPage) window.location.href = lastPage;
}

export { ready, saveLocation, redirectToLastPage };