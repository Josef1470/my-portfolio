document.addEventListener("DOMContentLoaded", function () {
  // Select all header links
  const links = document.querySelectorAll("#header-links a");

  // Add a click event listener to each link
  links.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove active class from all links
      links.forEach((l) => l.classList.remove("active"));

      // Add active class to the clicked link
      this.classList.add("active");
    });
  });
});
