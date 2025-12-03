browser.runtime.onStartup.addListener(() => {
  browser.tabs.create({ url: "homepage.html" });
});
browser.runtime.onStartup.addListener(async () => {
  const newTab = await browser.tabs.create({ url: "popup_index/homepage.html" });

  setTimeout(async () => {
    const tabs = await browser.tabs.query({ currentWindow: true });

    for (const tab of tabs) {
      if (tab.id !== newTab.id) {
        browser.tabs.remove(tab.id);
      }
    }
  }, 300);
});
