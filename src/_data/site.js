const communities = require("./communities.js");
const sponsors = require("./sponsors.js");

module.exports = function () {
  return {
    buildTime: new Date(),
    baseUrl: "https://2024.commit-conf.com",
    name: "Commit Conf",
    email: "info@commit-conf.com",
    twitter: "@commitconf",
    youtubeChannel: "UCd_1KHg4t2VKGsSDF8OD5Cw",
    environment: process.env.ENV || "prod",
    c4pURL: "https://koliseo.com/commit/2024/sessions",
    agendaURL: "https://koliseo.com/commit/2024/agenda",
    ticketsURL: "https://koliseo.com/commit/2024/tickets",
    newsletter:
      "https://commit-conf.us8.list-manage.com/subscribe?u=b180f87ed019c243f111b693a&amp;id=6a6bdcb448",
    communities,
    sponsors,
  };
};
