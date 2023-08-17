const quanityLiItem = document.querySelectorAll(".item");
// console.log(quanityLiItem);
console.log(`Number of categories: ${quanityLiItem.length}`);

quanityLiItem.forEach(element => {
    const categoryName = element.firstElementChild;
    // console.log(categoryName);
    console.log(`Category: ${categoryName.textContent}`)
    const ulSibling = categoryName.nextElementSibling.children.length;
    console.log(`Elements: ${ulSibling}`);
    // const liChildren = ulSibling.children;
    // console.log(`Elements: ${liChildren.length}`);
});


















