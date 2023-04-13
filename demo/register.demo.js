require("isomorphic-fetch");

const AUTH_URL = "https://fakes-auth.piecioshka.io";

async function makeRequest(url, options) {
  const response = await fetch(url, options);
  return response.json();
}

async function main() {
  const response = await makeRequest(AUTH_URL, {
    method: 'post',
    body: new URLSearchParams({
      email: 'luigi@gmail.com',
      password: 'mario',
    }),
  });
  console.debug(response);
}

main();
