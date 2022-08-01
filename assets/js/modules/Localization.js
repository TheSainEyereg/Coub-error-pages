const locales = {
	en: {
		main: {
			whoops: "Whoops!",
			offer: "Just random coub :)",
			made_by: "Made by",
			share: "Share",
			copied: "Copied!"
		},
		400: {
			error: "Bad request",
			message: "The request is invalid. Please check the URL or go to the <a href=\"/\">home page</a>."
		},
		404: {
			error: "Page not found",
			message: "The page you are looking for does not exist. Please check the URL or go to the <a href=\"/\">home page</a>."
		},
		403: {
			error: "Forbidden",
			message: "You are not allowed to access this page. Please check the URL or go to the <a href=\"/\">home page</a>."
		},
		500: {
			error: "Internal server error",
			message: "Something went wrong. Please try again later."
		}
	},
	ru: {
		alts: ["uk", "be", "kz"],
		main: {
			whoops: "Упс!",
			offer: "Просто рандомный коуб :)",
			made_by: "Сделано",
			share: "Поделиться",
			copied: "Скопировно!"
		},
		400: {
			error: "Неверный запрос",
			message: "Запрос неверный. Проверьте URL или перейдите на <a href=\"/\">главную страницу</a>."
		},
		404: {
			error: "Страница не найдена",
			message: "Страница, которую вы ищете, не существует. Проверьте URL или перейдите на <a href=\"/\">главную страницу</a>."
		},
		403: {
			error: "Доступ запрещен",
			message: "Вы не можете получить доступ к этой странице. Проверьте URL или перейдите на <a href=\"/\">главную страницу</a>."
		},
		500: {
			error: "Внутренняя ошибка сервера",
			message: "Что-то пошло не так. Попробуйте позже."
		}
	}
}

import Logger from "./Logger.js";
const logger = new Logger("Localization");

function getLocale() {
	const lang = Intl && Intl.DateTimeFormat().resolvedOptions().locale || navigator.language || navigator.userLanguage;
	logger.log("Language: " + lang, false);
	const langCode = lang.split("-")[0];

	const locale = locales[langCode] || Object.values(locales).find(locale => locale.alts && locale.alts.includes(langCode)) || locales.en;
	return locale;
}

export {getLocale};