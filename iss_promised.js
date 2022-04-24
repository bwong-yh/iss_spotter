const request = require("request-promise-native");

const fetchMyIP = () => {
  return request("https://api.ipify.org?format=json");
};

const fetchCoordsByIP = queryIP => {
  const ip = JSON.parse(queryIP).ip;
  const apiKey = "eb8a3c60-c375-11ec-bd1a-b72ecb8b38ca";
  const url = `https://api.freegeoip.app/json/${ip}?apikey=${apiKey}`;

  return request(url);
};

const fetchISSFlyOverTimes = data => {
  const { latitude, longitude } = JSON.parse(data);
  const url = `https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;

  return request(url);
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(data => JSON.parse(data).response);
};

module.exports = { nextISSTimesForMyLocation };
