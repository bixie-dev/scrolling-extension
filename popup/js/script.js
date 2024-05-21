function initSpeedInput() {
  const speed = localStorage.getItem("auto-scroller-speed") ?? 50;
  const speedInput = document.getElementById("speed");
  speedInput.value = speed;

  speedInput.addEventListener("change", function (e) {
    localStorage.setItem("auto-scroller-speed", e.target.value);
  });
}

function initToggle() {
  const on = localStorage.getItem("auto-scroller-on");
  const toggle = document.getElementById("toggle");
  toggle.checked = on === null ? "" : on;

  toggle.addEventListener("click", function (e) {
    localStorage.setItem("auto-scroller-on", e.target.checked ? "true" : "");
  });
}

function listen() {
  initSpeedInput();
  initToggle();
}

function reportExecuteScriptError(error) {
  console.log("error", error);
}

browser.tabs
  .executeScript({ file: "/main.js" })
  .then(listen)
  .catch(reportExecuteScriptError);
