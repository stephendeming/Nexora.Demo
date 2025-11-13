window.addEventListener('DOMContentLoaded', () => {
  // Inject header
  if (typeof headerHTML !== "undefined") {
    document.getElementById("header-container").innerHTML = headerHTML;
  }

  // Inject footer
  if (typeof footerHTML !== "undefined") {
    document.getElementById("footer-container").innerHTML = footerHTML;
  }

});


    
   