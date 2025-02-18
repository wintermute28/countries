const BASE_URL = "https://restcountries.com/v3.1";

export const ALL_COUNTRIES = BASE_URL + "all";

export const searchByCounrty = (name) => BASE_URL + "/name/" + name;

export const dilterByCode = (code) =>
  BASE_URL + "/alpha?codes=" + code.join(",");
