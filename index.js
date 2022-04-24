const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

// fetchMyIP((err, ip) => {
//   if (err) {
//     console.log("Uh oh, something's wrong:", err);
//     return;
//   }

//   console.log(ip); // 39.110.186.101
// });

// fetchCoordsByIP("39.110.186.101", (err, coords) => {
//   if (err) return console.log(err);

//   console.log(coords); // { latitude: 36.3131, longitude: 139.4521 }
// });

// fetchISSFlyOverTimes({ latitude: 36.3131, longitude: 139.4521 }, (err, times) => {
//   if (err) return console.log(err);

//   console.log(times);
// });
