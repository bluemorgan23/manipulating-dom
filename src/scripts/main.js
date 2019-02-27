console.log("helllooooooo"); 

/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
// const sectionEl = document.querySelector(".article__section");

// console.log(sectionEl);

/*
    This code will only return the third section component
*/
const footerEl = document.querySelector(".article__footer");
console.log(footerEl);

/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/

const smallTextEl = document.querySelector(".smallText");
console.log(smallTextEl.classList);
smallTextEl.classList.remove("smallText");
smallTextEl.classList.add("largeText");
console.log(smallTextEl.classList);


console.log(smallTextEl.innerHTML);
smallTextEl.textContent = "NEW TEXT";
console.log(smallTextEl.innerHTML);

const sectionEl = document.querySelectorAll(".article__section");
console.log(sectionEl);

for (let i = 0; i < sectionEl.length; i++) {
    sectionEl[i].classList.add("new_class");
}