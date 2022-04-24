const { nextISSTimesForMyLocation } = require("./iss");

nextISSTimesForMyLocation((err, passTimes) => {
  if (err) return console.log("Uh Oh, something's wrong! ", err);

  console.log(passTimes);
});
