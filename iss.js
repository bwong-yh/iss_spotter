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

const fetchCoordsByIP = (ip, cb) => {
  const apiKey = "eb8a3c60-c375-11ec-bd1a-b72ecb8b38ca";
  const url = `https://api.freegeoip.app/json/${ip}?apikey=${apiKey}`;

  request(url, (err, res, data) => {
    if (err) return cb(err, null);

    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching IP. Response: ${data}`;
      cb(Error(msg), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(data);
    cb(null, { latitude, longitude });
  });
};

const fetchISSFlyOverTimes = (coords, cb) => {
  const { latitude, longitude } = coords;
  const url = `https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;

  request(url, (err, res, data) => {
    if (err) return cb(err, null);

    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching coordinates ${latitude}, ${longitude}. Response: ${data}`;
      cb(Error(msg), null);
      return;
    }

    const times = JSON.parse(data);
    cb(null, times);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
