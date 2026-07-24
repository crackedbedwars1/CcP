module.exports = {
  apps: [
    {
      name: "creeper-panel",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: 3003,
      },
    },
  ],
};
