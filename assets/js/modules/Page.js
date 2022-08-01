import Logger from "./Logger.js";
const logger = new Logger("Pages");

import { getLocale } from "./Localization.js";
const locale = getLocale();
const pageLocale = Object.assign(locale[window.olejkaPageType], locale.main);

function setTitle() {
	document.title = window.olejkaPageType + " | " + pageLocale.error;
	logger.log("Set title");
}


import { getIDs, createIframe } from "./Coub.js";
const IDs = getIDs();
const selectedID = IDs.includes(location.hash.replace("#","")) ? location.hash.replace("#","") : IDs[Math.floor(Math.random() * IDs.length)];

const bodyHTML = (renderCoub = true) =>`
<main class="container">
	<div class="content">
		<div class="text">
			<h1 class="whoops">${pageLocale.whoops +" "+ pageLocale.error+ "!"}</h1>
			<!-- <h2 class="error"></h2> -->
			<p  class="message">${pageLocale.message}</p>
			${
				renderCoub ?
				`<div class="coubContainer">
					${createIframe(selectedID, false).outerHTML}
					<p class="offer">${pageLocale.offer}</p>
				</div>` : ""
			}
		</div>
	</div>
</main>
<footer>
	<div class="copyright">
		&copy;${window.location.hostname} ${new Date().getFullYear()} <div class="olejka">(${pageLocale.made_by} <a target="_blank" href="//olejka.ru/">Olejka</a>)</div>
	</div>
	<a id="share">${pageLocale.share}</a>
</footer>
`

function setBody(renderCoub) {
	document.body.innerHTML = bodyHTML(renderCoub);

	const shareButton = document.getElementById("share");
	shareButton.onclick = async () => {
		if (shareButton.innerText === pageLocale.copied) return
		await navigator.clipboard.writeText(location.origin + location.pathname + "#"+selectedID);
		shareButton.innerText = pageLocale.copied;
		setTimeout(() => {shareButton.innerText = pageLocale.share},1000)
	}

	logger.log("Set body");
}


export { setBody, setTitle };