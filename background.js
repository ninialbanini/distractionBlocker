function generateRulesFromSites(blockedSites) {
    if (blockedSites.length === 0) {
        console.log("No sites to block.");
        return; 
    }

    
    const rules = blockedSites.map((site, index) => ({
        id: index + 1,  
        priority: 1,
        action: {
            type: "redirect",
            redirect: {
                url: chrome.runtime.getURL("redirect.html")
            }
        },
        condition: {
            urlFilter: `*://${site}/*`,
            resourceTypes: ["main_frame"]
        }
    }));


    if (chrome.declarativeNetRequest && chrome.declarativeNetRequest.updateDynamicRules) {
        chrome.declarativeNetRequest.getDynamicRules({}, (existingRules) => {
            const ruleIdsToRemove = existingRules.map(rule => rule.id);  

            
            chrome.declarativeNetRequest.updateDynamicRules({
                removeRuleIds: ruleIdsToRemove,  
                addRules: rules  
            }, () => {
                if (chrome.runtime.lastError) {
                    console.error("Error applying rules:", JSON.stringify(chrome.runtime.lastError));
                } 
            });
        });
    } else {
        console.error("declarativeNetRequest API not available");
    }
}
