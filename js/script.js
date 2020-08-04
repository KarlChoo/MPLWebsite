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

    if(currentURL.includes("/cn/"))
        newURL = currentURL.replace("/cn/","/en/").replace("-cn","-en");
    else
         newURL = currentURL.replace("/en/","/cn/").replace("-en","-cn");
    
    window.location.href = newURL;
}