module.exports = {
  token: "private",
  project: "id",
  outDir: "./translations",
  filter: "translated",
  concurrency: 5,
  sort: true,
  tags: ["common", "animals"],
  languages: ["en-us", "en-gb"],
  transformLocaleCodes: {
    "en-us": "en_US",
    "en-gb": "en_UK",
  },
};
