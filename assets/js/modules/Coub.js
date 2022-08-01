const links = [
	"https://coub.com/view/32ptmt",
	"https://coub.com/view/32n6f3",
	"https://coub.com/view/32e4ak",
	"https://coub.com/view/32f9wi",
	"https://coub.com/view/32gev4",
	"https://coub.com/view/32h7xf",
	"https://coub.com/view/32hq68",
	"https://coub.com/view/32j4ae",
	"https://coub.com/view/32ccyb",
	"https://coub.com/view/325kcm",
	"https://coub.com/view/306fe8",
	"https://coub.com/view/318rez",

	"https://coub.com/view/31elj7",

	"https://coub.com/view/30rlxf",
	"https://coub.com/view/30rlxf",
	"https://coub.com/view/31yzo2",
	"https://coub.com/view/321bf7",
	"https://coub.com/view/321co3",
	"https://coub.com/view/31vaws",
	"https://coub.com/view/31vuo3",
	"https://coub.com/view/31w0g5",
	"https://coub.com/view/2c248h",
	"https://coub.com/view/31lr9a",
	"https://coub.com/view/31fo33",
]


import Logger from "./Logger.js";
const logger = new Logger("Coub");

function getIDs() {
	return links.map(link => {
		const isId = link.match(/\/view\/(\w+)/);
		return isId ? isId[1] : link;
	})
}

function createIframe(id, autostart = false) {
	logger.log(`Creating iframe with id ${id} (https://coub.com/view/${id})`);
	const iframe = document.createElement("iframe");
	iframe.classList.add("coubPlayer");
	iframe.setAttribute("src", `//coub.com/embed/${id}?muted=${autostart}&autostart=${autostart}&originalSize=true&startWithHD=true`);
	iframe.setAttribute("allowfullscreen", "");
	iframe.setAttribute("frameborder", "0");
	//iframe.setAttribute("allow", "autoplay");
	return iframe;
}

export { getIDs, createIframe };