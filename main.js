setInterval(() => {
  console.log("xxx");
  const scrollArea = document.querySelector(
    '.copyable-area ._ajyl[tabindex="0"]'
  );
  if (!scrollArea) return;

  const { clientHeight, scrollHeight, scrollTop } = scrollArea;
  if (scrollTop + clientHeight === scrollHeight) return;

  scrollArea.scrollBy({ top: 20, behavior: "smooth" });
}, 200);

browser.runtime.onMessage.addListener((message, sender) => {
  console.log("message", message);
  return Promise.resolve("message back from content");
});
