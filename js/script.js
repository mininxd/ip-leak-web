import {fetchData} from "./forestApi.js";
import {getLocalIP} from './localIp.js';
getLocalIP().then((ipAddr) => {
  console.log(ipAddr);
  $('.localIpEl').html(ipAddr);
 });
 fetchData();


console.log(navigator);
console.log(navigator.deviceMemory);


$('.browserNameEl').html(navigator.vendor);
$('.platformEl').html(navigator.platform);
$('.touchscreenEl').html(navigator.maxTouchPoints);
$('.userAgentEl').html(navigator.userAgent);
