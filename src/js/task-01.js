    const categoriesAll = document.querySelectorAll(".item");
    console.log("Number of categories: ", categoriesAll.length);

const categoriesText = categoriesAll.forEach((category) => {
    console.log("Category: ", category.firstElementChild.textContent);
    console.log("Elements: ", category.querySelectorAll("li").length);
});