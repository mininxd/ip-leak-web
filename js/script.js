import {fetchData} from "./forestApi.js";
import {getLocalIP} from './localIp.js';

getLocalIP().then((ipAddr) => {
 // console.log(ipAddr);
  $('.localIpEl').html(ipAddr);
 }).catch(e =>  $('.localIpEl').html(e))
 fetchData();


// console.log(navigator);

$('.browserNameEl').html(navigator.vendor);
$('.platformEl').html(navigator.platform);
$('.touchscreenEl').html(navigator.maxTouchPoints);
$('.userAgentEl').html(navigator.userAgent);
