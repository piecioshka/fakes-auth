require("isomorphic-fetch");

const AUTH_URL = "https://fakes-auth.piecioshka.io";
const USERS_URL = `${AUTH_URL}/users`;

async function makeRequest(url, options) {
  const response = await fetch(url, options);
  return response.json();
}

async function main() {
  const response = await makeRequest(USERS_URL);
  console.debug(JSON.stringify(response, null, 2));
}

main();
