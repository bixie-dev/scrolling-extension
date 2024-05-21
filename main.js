const MAX_SPEED = 20;
let speed = MAX_SPEED;
let running = true;

setInterval(() => {
  setTimeout(() => {
    scroll();
  }, speed);

  if (!running) return;

  const scrollArea = document.querySelector(
    '.copyable-area ._ajyl[tabindex="0"]'
  );
  if (!scrollArea) return;

  const { clientHeight, scrollHeight, scrollTop } = scrollArea;
  if (scrollTop + clientHeight === scrollHeight) return;

  scrollArea.scrollBy({ top: speed, behavior: "smooth" });
}, [200]);

browser.runtime.onMessage.addListener((message, sender) => {
  const { type, payload } = message;
  if (type === "toggle") {
    running = payload;
  }

  if (type === "speed") {
    speed = (MAX_SPEED * payload ?? 50) / 100;
  }
  return Promise.resolve(true);
});
