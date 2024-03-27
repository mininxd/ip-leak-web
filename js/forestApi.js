export function fetchData() {
var ipJson = "https://jsonip.com"
var forestApiAsn = "https://www.forestapi.my.id/api/ip/asn-lookup/";
var forestApiGeo = "https://www.forestapi.my.id/api/ip/geolocation-lookup/";
var forestApiRev = "https://www.forestapi.my.id/api/ip/reverse-lookup/";
var forestApiSub = "https://www.forestapi.my.id/api/ip/subnet-lookup/";




//ASN Lookup
fetch(ipJson)
.then(res => {return res.json();
}).then((data) => {
  var ipAddr = data.ip;
  $('.ipAddrEl').html(ipAddr);
  return fetch(forestApiAsn + ipAddr);
}).then(res => {return res.json();
}).then(dataAsn => {
  //data ASN
  // consolee.log(dataAsn);
  $('.asnNumEl').html(dataAsn.asn.number);
  $('.asnRegEl').html(dataAsn.asn.registry);
  $('.asnNameEl').html(dataAsn.asn.name);
  $('.asnDescEl').html(dataAsn.asn.description);


var cidrArr = 0;
var cidrLength = dataAsn.asn.cidr.length;
cidrListEl.innerHTML = "";
for(cidrLength; cidrArr < cidrLength; cidrArr++ ) {
  // consolee.log(cidrArr);
  cidrListEl.innerHTML += "<li>"+dataAsn.asn.cidr[cidrArr] + "</li>";
}

var entitiesArr = 0;
var entitiesLength = dataAsn.asn.entities.length;
entitiesEl.innerHTML = "";
for(entitiesLength; entitiesArr < entitiesLength; entitiesArr++ ) {
  // consolee.log(entitiesArr);
  entitiesEl.innerHTML += "<li>"+dataAsn.asn.entities[entitiesArr] + "</li>";
}







//Subnet Lookup
return fetch(ipJson)
}).then(res => {return res.json();
}).then((data) => {
  var ipAddr = data.ip;
  return fetch(forestApiSub + ipAddr);
}).then(res => {return res.json();
}).then(dataSub => {
// data Subnet
  // consolee.log(dataSub);
  $(".subnetEl").html(dataSub.subnet);
  
  
  
  
  



//Geolocation Lookup
return fetch(ipJson)
}).then(res => {return res.json();
}).then((data) => {
  var ipAddr = data.ip;
  return fetch(forestApiGeo + ipAddr);
}).then(res => {return res.json();
}).then(dataGeo => {
// data Geolocation
  // consolee.log(dataGeo);
  $(".navbar").removeClass("is-invisible");
  $(".ispEl").html(dataGeo.geolocation.isp);
  $(".countryEl").html(dataGeo.geolocation.country);
  $(".countryIdEl").html("/"+dataGeo.geolocation.countryCode);
  $(".regionEl").html(dataGeo.geolocation.regionName +" - ");
  $(".cityEl").html(dataGeo.geolocation.city);
    $('.timezoneEl').html(dataGeo.geolocation.timezone);
    
    if(dataGeo.geolocation.mobile == false) {
    $('.isMobileEl').html("false");
    } else {
    $('.isMobileEl').html("true");
    }
  
  
  







//Reverse Lookup
return fetch(ipJson)
}).then(res => {return res.json();
}).then((data) => {
  var ipAddr = data.ip;
  return fetch(forestApiRev + ipAddr);
}).then(res => {return res.json();
}).then(dataRev => {
// data Reverse
  // consolee.log(dataRev);
  if(dataRev.status == false) {
  $(".reverseEl").html(dataRev.message);
} else {
  $(".reverseEl").html(dataRev.hostname);
}
  
  

}).catch(e => { /*consolee.log(e)*/});
}