const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

if (toggle && navigation) {
  toggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click from propagating to the logo
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
  });
}



// Get all the "view" links and the expanded image container
const viewLinks = document.querySelectorAll(".view-link");
const expandedContainer = document.querySelector(".expanded-image-container");
const expandedImage = document.querySelector(".expanded-image");
const closeButton = document.querySelector(".close-btn");

// Add event listener to each "view" link
viewLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    const image = this.closest(".item").querySelector("img"); // Get the image inside the item

    // Show the expanded image container
    expandedContainer.style.display = "block";
    expandedImage.src = image.src; // Set the expanded image source to the clicked image source
  });
});

// Close the expanded image when the close button is clicked
closeButton.addEventListener("click", function () {
  expandedContainer.style.display = "none"; // Hide the expanded image container
});

