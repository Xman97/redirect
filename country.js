//<![CDATA[
  function geoip(json) {
    window.onload = displayInCountry(json);
  }
  function displayInCountry(json) {
    if (json.country === 'Algeria' || json.country === 'United States' || json.country === 'Germany' || json.country === 'Italy' || json.country === 'Japan' || json.country === 'Finland' || json.country === 'Christmas Island' || json.country === 'Brazil' || json.country === 'Western Sahara' || json.country === 'Zambia' || json.country === 'United Arab Emirates' || json.country === 'Turkey' || json.country === 'Syria' || json.country === 'Sweden' || json.country === 'Slovenia' || json.country === 'Rwanda' || json.country === 'Saudi Arabia' || json.country === 'Estonia' || json.country === 'Oman' || json.country === 'Slovakia' || json.country === 'Colombia' || json.country === 'Qatar' || json.country === 'Macau' || json.country === 'Kuwait' || json.country === 'Jordan' || json.country === 'Guinea' || json.country === 'French Polynesia' || json.country === 'Austria' || json.country === 'Australia' || json.country === 'Argentina' || json.country === 'Anguilla' || json.country === 'Angola' ) {
        window.location = "https://www.google.com";
    }
 }
//]]>
