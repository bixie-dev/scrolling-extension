function sendMessage(tab) {
  console.log("xxxxxxxxxxxxx", tab);
  browser.tabs
    .sendMessage(tab.id, "message in from background")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
}

const speedInput = document;
console.log("speed input", speedInput);

browser.browserAction.onClicked.addListener(sendMessage);
