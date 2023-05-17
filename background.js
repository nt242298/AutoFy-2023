chrome.tabs.onUpdated.addListener((tabId,changeInfo,tab)=>{
    if (changeInfo.status === 'complete') {
            chrome.tabs.sendMessage(tabId,{type: "background", url:tab.url});
        }
});