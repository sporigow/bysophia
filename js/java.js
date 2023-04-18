// let content = document.querySelector("dropdown-content");
// let dropbutt = document.querySelector("dropbtn");
// dropbutt.addEventListeneraddEventListener("focus", function() {
//     if (dropbtn.focus)
//     content.style.display= "block";
// })

// dropbutt.addEventListener("blur", function() {
//     // content.style.display= "none";
//   })


//   var currentFilename = location.pathname.split("/").pop();

//   // Check if the current filename is equal to a certain page
//   if (currentFilename === "digi.html") {
//     // If the current page is the "About" page, add "About" to the navigation bar
//     var drop = document.querySelector(".dropbtn");
//     drop.innerHTML += "Digital Designs";
//   }


let eraseme = document.querySelector("subpage");
var elem = document.querySelector(".subpage"); 
  // Get the current page URL
var currentPageUrl = window.location.href;

// Check if the current page URL matches the specific page you want to target
if (currentPageUrl.includes("art.html")) {
    elem = document.querySelector(".subpage");
    console.log("at work")
    elem.style.removeProperty('background-color');
    elem.style.backgroundColor = "";
    function removeProperty() {
        element = document.querySelector('.subpage');
        element.style.setProperty('background-color', 'initial');
    }
    // elem.style.background-color = "";
}
 
