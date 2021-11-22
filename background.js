// background.js
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    
// });
import translate from index.js
var text;

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
    translate(Seltext.selectionText, {from: 'ko', to: 'en'}).then(res => {
        console.log(res);
        console.log(res.text);
        //=> Ik spea Nederlands!
        console.log(res.from.text.autoCorrected);
        //=> false
        console.log(res.from.text.value);
        //=> I [speak] Dutch!
        console.log(res.from.text.didYouMean);
        //=> true
    }).catch(err => {
        console.error(err);
    });
    chrome.extension.onConnect.addListener(function(port) {
        port.onMessage.addListener(function(msg) {
             port.postMessage(text);
        });
    });
}


