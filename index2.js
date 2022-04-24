const { nextISSTimesForMyLocation } = require("./iss_promised");

const printPassTiems = passTimes => {
  passTimes.forEach(pass => {
    const date = new Date(0);
    date.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${date.toString()} for ${pass.duration} seconds!`);
  });
};

nextISSTimesForMyLocation()
  .then(passTimes => printPassTiems(passTimes))
  .catch(err => {
    console.log("Uh oh, something's wrong: ", err.message);
  });
