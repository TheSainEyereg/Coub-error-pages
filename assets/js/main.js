import Logger from "./modules/Logger.js";
const logger = new Logger("Main");
logger.log("Made by Olejka (https://olejka.ru/)");

import { ready } from "./modules/Utils.js";
import { setBody, setTitle } from "./modules/Page.js";

logger.log(`Page type is ${window.olejkaPageType}`);

setTitle();
ready(setBody);

let smallScreen = false;
window.onresize = () => {
	if (window.innerWidth < 400 && !smallScreen) {
		smallScreen = true;
		logger.warn("Small screen detected");
		setBody(false);
	} else if (window.innerWidth >= 400 && smallScreen) {
		smallScreen = false;
		logger.warn("Normal screen restored");
		setBody();
	}
}