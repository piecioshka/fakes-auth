require("isomorphic-fetch");
const { encode } = require("js-base64");

const AUTH_URL = "https://fakes-auth.piecioshka.io";
// const LOGIN = "admin@gmail.com";
// const PASSWORD = "admin";
const LOGIN = "luigi@gmail.com";
const PASSWORD = "mario";

async function makeRequest(url, options) {
  const response = await fetch(url, options);
  return response.json();
}

async function main() {
  const response = await makeRequest(AUTH_URL, {
    headers: {
      authorization: "Bearer " + encode(`${LOGIN}:${PASSWORD}`),
    },
  });
  console.debug(response);
}

main();
