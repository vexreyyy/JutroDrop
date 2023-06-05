const 
  searchBar = document.querySelector(".button-search-bar"),
  searchBarInput = document.querySelector(".input-search-bar"),
  buttonFilter = document.querySelectorAll(".button-filter"),
  clickCount = document.querySelectorAll(".product-popular-count"),
  clickCountContent = document.querySelectorAll(".popular-click-count");

searchBar.addEventListener("click", () => {
  console.log("diupa");
  if (searchBarInput.style.display === "none") {
    searchBarInput.style.display = "block";
  } else {
    searchBarInput.style.display = "none";
  }
});

buttonFilter.forEach((element, index, all) => {
  element.addEventListener("click", () => {
    all.forEach((element) => {
      element.classList.remove("active");
    });

    element.classList.add("active");
  });
});

clickCount.forEach((element, index, all) => {
  element.addEventListener("click", () => {
    console.log("eeee");
    clickCountContent[index].textContent++;
  });
});
