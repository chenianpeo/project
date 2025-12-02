browser.runtime.onStartup.addListener(() => {
  browser.tabs.create({ url: "homepage.html" });
});
browser.runtime.onStartup.addListener(async () => {
  // 1. 打开你的自定义页面
  const newTab = await browser.tabs.create({ url: "homepage.html" });

  // 2. 延迟一点点时间，确保 Firefox 默认启动标签页已经准备好
  setTimeout(async () => {
    const tabs = await browser.tabs.query({ currentWindow: true });

    for (const tab of tabs) {
      // 关闭所有不是我们自定义页面的标签页
      if (tab.id !== newTab.id) {
        browser.tabs.remove(tab.id);
      }
    }
  }, 300);   // 300ms 足够，不会闪烁
});
