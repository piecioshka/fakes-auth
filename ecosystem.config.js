module.exports = {
  apps: [
    {
      name: "fakes-auth",
      script: "start.sh",
      env: {
        PORT: 8081,
      },
    },
  ],
};
