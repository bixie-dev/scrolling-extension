function initSpeedInput() {
  const speed = localStorage.getItem("auto-scroller-speed") ?? 50;
  const speedInput = document.getElementById("speed");
  speedInput.value = speed;

  speedInput.addEventListener("change", function (e) {
    localStorage.setItem("auto-scroller-speed", e.target.value);
    browser.tabs
      .query({ active: true, currentWindow: true })
      .then((tabs) => sendSpeed(tabs, e.target.value))
      .catch(reportError);
  });
}

function initToggle() {
  const on = localStorage.getItem("auto-scroller-on");
  const toggle = document.getElementById("toggle");
  toggle.checked = on === null ? "" : on;

  toggle.addEventListener("click", function (e) {
    localStorage.setItem("auto-scroller-on", e.target.checked ? "true" : "");

    browser.tabs
      .query({ active: true, currentWindow: true })
      .then((tabs) => sendToggleStatus(tabs, e.target.checked))
      .catch(reportError);
  });
}

function listen() {
  initSpeedInput();
  initToggle();
}

function sendToggleStatus(tabs, checked) {
  browser.tabs.sendMessage(tabs[0].id, {
    type: "toggle",
    payload: checked,
  });
}

function sendSpeed(tabs, speed) {
  browser.tabs.sendMessage(tabs[0].id, {
    type: "speed",
    payload: speed,
  });
}

function reportError(error) {
  console.log("error", error);
}

listen();
