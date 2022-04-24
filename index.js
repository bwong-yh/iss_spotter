const { nextISSTimesForMyLocation } = require("./iss");

const printPassTimes = passTimes => {
  passTimes.forEach(pass => {
    const date = new Date(0);
    date.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${date.toString()} for ${pass.duration} seconds!`);
  });
};

nextISSTimesForMyLocation((err, passTimes) => {
  if (err) return console.log("Uh Oh, something's wrong! ", err);

  printPassTimes(passTimes);
});
