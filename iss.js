const request = require("request");

const fetchMyIP = cb => {
  request("https://api.ipiffy.org?format=json", (err, res, data) => {
    if (err) return cb(err, null);

    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching IP. Response: ${data}`;
      cb(Error(msg), null);
      return;
    }

    const ip = JSON.parse(data).ip;
    cb(null, ip);
  });
};

const fetchCoordsByIP = (ip, cb) => {};

module.exports = { fetchMyIP, fetchCoordsByIP };
