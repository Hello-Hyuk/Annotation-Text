// background.js
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    
// });


chrome.contextMenus.create({
    title : "RnS로 번역하기",
    contexts:["selection"],
    onclick: textPopup
});

function textPopup(Seltext){
    //alert(Seltext.selectionText);
    chrome.extension.onConnect.addListener(function(port) {
        port.onMessage.addListener(function(msg) {
             console.log("message recieved" + msg);
             port.postMessage(Seltext.selectionText);
        });
    });
}


