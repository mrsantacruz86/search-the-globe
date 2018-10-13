export default {

  // API get countries.
  getCountryNames: cb => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(res => {
        cb(res.map(country => country.name))
      });
  }
}
