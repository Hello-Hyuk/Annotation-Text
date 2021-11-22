// chrome.tabs.executeScript( {
//     code: "window.getSelection().toString();"
// }, function(selection) {
//     document.getElementById("get-text").innerHTML = selection[0];
// });

var port = chrome.extension.connect({
    name: "selected text transfer"
});

port.postMessage("Hi BackGround");

port.onMessage.addListener(function(msg) {
    console.log("message recieved" + msg);
    document.getElementById("get-text").innerHTML = msg;
});