document.addEventListener("DOMContentLoaded", function () {
    let addButton = document.getElementById("add-site");
    if (!addButton) {
        console.error("Button not found! Check popup.html.");
        return;
    }


    addButton.addEventListener("click", function () {
        let site = document.getElementById("new-site").value.trim();
        if (!site) return;

      
        if (!isValidSite(site)) {
            alert("Please enter a valid site (e.g., youtube.com).");
            return;
        }

        chrome.storage.sync.get({ sites: [] }, function (data) {
            let sites = data.sites || [];
            
            
            if (sites.includes(site)) {
                alert("This site is already blocked.");
                return;
            }

            
            sites.push(site);
            chrome.storage.sync.set({ sites: sites }, function () {
                
                displaySites();  
            });
        });

        document.getElementById("new-site").value = ""; 
    });


    
    function displaySites() {
        chrome.storage.sync.get({ sites: [] }, function (data) {
            let siteList = document.getElementById("site-list");
            if (!siteList) return; 

            siteList.innerHTML = ""; 

            data.sites.forEach(site => {
                let li = document.createElement("li");
                li.textContent = site;

                let removeBtn = document.createElement("button");
                removeBtn.textContent = "❌";
                removeBtn.onclick = function () {
                    removeSite(site);
                };

                li.appendChild(removeBtn);
                siteList.appendChild(li);
            });
        });
    }

   
    function removeSite(site) {
        chrome.storage.sync.get({ sites: [] }, function (data) {
            let sites = data.sites.filter(s => s !== site);
            chrome.storage.sync.set({ sites: sites }, function () {
                console.log("Site removed:", site);
                displaySites();  
            });
        });
    }

    function isValidSite(site) {
        const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return domainRegex.test(site);
    }

    displaySites(); 
});
