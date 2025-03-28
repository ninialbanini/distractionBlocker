function blockIfNecessary() {

    chrome.storage.sync.get("sites", (data) => {
        let blockedSites = data.sites || [];
        let currentHostname = window.location.hostname;

        
        for (let site of blockedSites) {
            if (currentHostname.includes(site)) {
                
                chrome.storage.sync.set({ currentSite: currentHostname }, function () {
                    setTimeout(function () {
                        window.location.href = chrome.runtime.getURL("redirect.html");
                    }, 100);
                });
                break;  
            }
        }
    });
}

blockIfNecessary();

window.onpopstate = blockIfNecessary;
