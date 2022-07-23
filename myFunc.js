function myFunction()
{
const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get('email');
    console.log(email);
    async function test(){
        const response = await fetch('https://api.db-ip.com/v2/free/self');
        const data = await response.json();
        const ipAdresse = (data.ipAddress);

        var URL1 = 'https://www.zohoapis.eu/crm/v2/functions/optineasy/actions/execute?auth_type=apikey&zapikey=1003.9552b5269995cad6fca271a0f47923f5.66a0c058aea1351a19552c3ee8c67813&email='+email+'&ipAdresse='+ipAdresse;
        console.log(URL1);
            var settings = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": URL1,
              "method": "POST",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
            }
            await $.ajax(settings).done(function (response) {
              console.log(response);
            });
            doIT();

    }
    test();
}
