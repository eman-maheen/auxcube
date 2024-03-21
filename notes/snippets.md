// extract g2.com data from console
let divs = document.getElementsByTagName("div");
let firms = []; for (div of divs) { if(div.hasAttribute("itemprop") && div.getAttribute("itemprop") == "name") console.log(div.innerText); }
