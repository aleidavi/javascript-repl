
const axios = require('axios');
const location = 'Christ the Redeemer';

axios
  .get('https://us1.locationiq.com/v1/search.php', {
    params: { 
    key: 'pk.c094aa79bd6afc7f060b3d58d18e0f5c',
    q: location,
    format: 'json',

    },
    }
  )
  .then(({ data }) => {
    // Code that executes with a successful response goes here

    const lon = data[0].lon;
    const lat = data[0].lat;
    console.log(`Success! Search data for ${location}: Longitude: ${lon}, and Latitude: ${lat}`);

})
  .catch((error) => {
    // Code that executes with an unsuccessful response goes here
    console.log('Error in get request.', error.response);
});
