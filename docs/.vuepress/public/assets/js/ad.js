(function() {
  let sidebar = document.getSelection(".sidebar");
  let sidebarLinks = document.getSelection(".sidebar-links");
  let newAd = document.createElement("div");
  newAd.className = "ad";
  newAd.innerHTML = "<img src='' />";
  sidebar.inserBefore(newAd, sidebarLinks);
})();
