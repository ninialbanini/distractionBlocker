
## ℹ️ Overview  

I created this chrome extension as tool to keep me on task. With essentially my entire coursework being on my computer - specifically chrome, I found there was nothing stopping me from popping open new tabs of unrelated things, and the worst part is, I sometimes don't even realize how sidetracked I can get! 

Creating this extension was a way to set those reminders in place, and customize my blocked sites for each work session, with ease. 

### ✍️ Author

I'm Neelab! A current fourth year CS student at McGill with a minor in Math. One of my 2025 goals is to grow my side projects portfolio by building tools that can help non-cs individuals, but with a particular focus on building things that can serve to help students with ADHD, depression, or other mental health struggles that may impact their success in school and/or their day to day life. 


## 🌟 Highlights
- Popup box that allows you to easily add websites you want blocked (e.g. youtube.com, facebook.com, etc.)
- Ability to add and remove sites with a click of a button! 
- When visiting a blocked website, page is opened with options to close window or go to google (to continue your ACTUAL work related tasks!)


## ⬇️ Installation

On Chrome, click on the three dots next to your icon. Then click on, 

Extensions > Manage Extensions > Toggle on Developer Mode > Press Load Unpacked > Upload the folder containing these files! 


## 💡 What I learned 

This was my very first time building a chrome extension, and let me tell you I learned a lot! 

Apart from the normal learning curve of Chrome Extension API's, I originally wanted to add a back button, that returns you to your previously visited page. This was totally possible, until I began testing my extension with Facebook - which soon sent me into a deep debugging mode as it wasn't working as expected. 

This was because Facebook is one of many SPAs - Single-Page Application, which allows content to be updated dynamically instead of reloading the entire page - which makes it much faster. However, this also affects the way its history is stored, as SPA's use the History API which relies heavily on pushState, popState, and replaceState to manipulate browser history. 

This is all to say that having a "back" button wouldn't have the usual expected behaviour with SPA websites. In my case, pressing the back button was doing nothing as the site had overwridden the back button behaviour, but in other cases, it could change the URL without actually navigating to another site, or restore a previous UI state instead of redirecting to a previous page. 

I tried many things to combat this issue (I was not about to give up easily), including, having a history length check and forcing a redirect to a specified page depending on the history length. But these soon ended in small, inconsistent bugs that could affect a users experience - which is when I ultimately accepted a modification to my original blueprints. 

The final product now includes a close tab button, and a go to Google button. While I may have had to adjust my plans, I certainly learned a lot about a topic we don't get the chance to learn in school, and one that hopefully I will be able to use in future projects - which is ultimately the goal of all of my side projects.

## 📸 Picture Credits!

Background photo by Davies Designs Studio on "https://unsplash.com/photos/white-cloud-formations-_UCVrH-ZIIg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" -- Unsplash

Icon photo by <a href="https://unsplash.com/@samaradoole?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Samara Doole</a> on <a href="https://unsplash.com/photos/closeup-photo-of-water-T8-kfC8W4b8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

