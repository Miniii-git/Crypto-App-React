const KEY = "CG-4oY4nLcbx34Ps5SyFn5jZVaG";
const BASE_URL = "https://api.coingecko.com/api/v3";

function returnApiUrl(currency, page) {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${KEY}`;
}

export { returnApiUrl };
