const { fetchMyIP, fetchCoordsByIP } = require("./iss");

// fetchMyIP((err, ip) => {
//   if (err) {
//     console.log("Uh oh, something's wrong:", err);
//     return;
//   }

//   console.log(ip);
// });

fetchCoordsByIP("39.110.186.101", (err, data) => {
  console.log(err);
  console.log(data);
});
