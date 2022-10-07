const { Botometer } = require("botometer");

const botometer = new Botometer({
    consumerKey: "lsSYxrW9i0QLL1AsnRPTfcoPp",
    consumerSecret: "baI0PWpis9dLwRkelDHCy7pavedE5b3D8OPnB9Y7n5nZvlBLlE",
    accessToken: "1577676137077022722-BHQW7NVS44kKkHn68esW2bp5aTWw3y",
    accessTokenSecret: "1mNqGhbdoFTW4HrREyVXzkDkAjrMleGyPbB39LqJ32lSS",
    rapidApiKey: "d44cc2bd86msh92ee9c3aada2344p13ac98jsn1df0ffad3559",
    supressLogs: false, // Not required. Defaults to true
});

async function run() {
    const results = await botometer.getScores(["@aandreyluiz"]);

    console.log(results);
}

run();