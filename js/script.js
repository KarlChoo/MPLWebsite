/*
let content = document.getElementById("content");
for (let index = 0; index < 100; index++) {
    let para = document.createElement("p");
    let t = document.createTextNode("fake World"); 

    para.appendChild(t);

    content.appendChild(para)
}
*/


function changeLanguage(){
    let currentURL =  window.location.href;
    let newURL;

    currentURL.includes("/en/") ?
        newURL = currentURL.replace("/en/","/cn/").replace("-en","-cn"):
        newURL = currentURL.replace("/cn/","/en/").replace("-cn","-en");
    window.location.href = newURL;
}

function dropdownLink(link){
    let shortlink = link.slice(link.indexOf("/cn/")).replace("/cn/","");

    link.includes("/en/") ? 
        shortlink = link.slice(link.indexOf("/en/")).replace("/en/",""):
        shortlink = link.slice(link.indexOf("/cn/")).replace("/cn/","");
    window.location.href = shortlink;
}