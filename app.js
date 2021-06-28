const request = require("request");
const geocode = require("./utills/geocode");
const forecast = require("./utills/forecast");

// const url =
//   "http://api.weatherstack.com/current?access_key=131b93d1229d4f50280cf1f99bfaa06e&query=thane&units=f";

// request({ url: url, json: true }, (error, response) => {
//   //console.log(response.body.location.timezone_id);
//   if (error) {
//     console.log("Unable to Connect Weather Service");
//   } else if (response.body.error) {
//     //console.log(response.body.error);
//     console.log("Unable to Find Location");
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         ". it is currently " +
//         response.body.current.temperature +
//         " degrees out. there is a " +
//         response.body.current.feelslike +
//         " degress out."
//     );
//   }
// });

//GeoCoding
//Address -> latitude/longitude ->weather
// const geoMapBoxUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/thane.json?access_token=pk.eyJ1IjoieWFkYXZndWxhYmNoYW5kIiwiYSI6ImNrcHRwNnlqYzB1OXEydW1uOGJzOTZxZDQifQ.dNZeCmWLXa19UQnu3LM-AA";

// request({ url: geoMapBoxUrl, json: true }, (error, response) => {
//   //console.log(response.body.features);
//   if (error) {
//     console.log("Unable to Connect GeoMap Location Service");
//   } else if (response.body.features.length === 0) {
//     //console.log(response.body.error);
//     console.log("Unable to Find Location, Try another Search");
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log(latitude, longitude);
//   }
// });

// Asynchronous Calling

// const geoCode = (address, callback) => {
//   const geoMapBoxUrl =
//     "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//     encodeURIComponent(address) +
//     ".json?access_token=pk.eyJ1IjoieWFkYXZndWxhYmNoYW5kIiwiYSI6ImNrcHRwNnlqYzB1OXEydW1uOGJzOTZxZDQifQ.dNZeCmWLXa19UQnu3LM-AA";

//   request({ url: geoMapBoxUrl, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect to location services", undefined);
//     } else if (response.body.features.length === 0) {
//       callback("Unable to Find Location, Try another Search", undefined);
//     } else {
//       callback(undefined, {
//         latitude: response.body.features[0].center[0],
//         longitude: response.body.features[0].center[1],
//         location: response.body.features[0].place_name,
//       });
//     }
//   });
// };

// geocode("thane", (error, data) => {
//   console.log("Error", error);
//   console.log("data", data);
// });

// forecast(19.18, 72.96333, (error, data) => {
//   console.log("Error", error);
//   console.log("data", data);
// });

// // CallBack Chaining
// const address = process.argv[2];

// if (!address) {
//   console.log("please provide an address");
// } else {
//   geocode(address, (error, data) => {
//     if (error) {
//       return console.log(error);
//     }
//     forecast(data.latitude, data.longitude, (error, foreCastData) => {
//       if (error) {
//         return console.log(error);
//       }
//       console.log(data.location);
//       console.log(foreCastData);
//     });
//   });
// }
// CallBack Chaining with ES6 features
const address = process.argv[2];

if (!address) {
  console.log("please provide an address");
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, foreCastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(foreCastData);
    });
  });
}
