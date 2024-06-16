const categoriesList = document.querySelector("#categories");

const items = categoriesList.querySelectorAll(".item");

console.log("Number of categories:", items.length);

items.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  console.log("Category:", categoryTitle);

  const categoryElements = item.querySelectorAll("ul li");
  console.log("Elements:", categoryElements.length);
});
