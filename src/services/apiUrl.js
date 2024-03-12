const KEY = "CG-4oY4nLcbx34Ps5SyFn5jZVaG";
const BASE_URL = "https://api.coingecko.com/api/v3";

function returnApiUrl(currency, page) {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${KEY}`;
}

function returnApiForSearch(item) {
  return `${BASE_URL}/search?query=${item}&x_cg_demo_api_key=${KEY}`;
}

function returnApiForChart(id) {
  return `${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=${KEY}`;
}

export { returnApiUrl, returnApiForSearch, returnApiForChart };
