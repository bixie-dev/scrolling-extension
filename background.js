function sendMessage(tab) {
  browser.tabs
    .sendMessage(tab.id, "message in from background")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
}

browser.browserAction.onClicked.addListener(sendMessage);
