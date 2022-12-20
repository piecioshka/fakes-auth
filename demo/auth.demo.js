require("isomorphic-fetch");
const { encode } = require("js-base64");

async function makeRequest(url, options) {
  const response = await fetch(url, options);
  return response.json();
}

async function main() {
  const AUTH_URL = "https://fakes-auth.piecioshka.io";
  const response = await makeRequest(AUTH_URL, {
    headers: {
      authorization: "Bearer " + encode("admin:admin"),
    },
  });
  console.debug(response);
}

main();
