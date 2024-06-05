//over

const js = document.getElementById('js');
const angular = document.getElementById('angular');
const html = document.getElementById('html');
const css = document.getElementById('css');
const bulma = document.getElementById('bulma');
const boots = document.getElementById('boots');

js.addEventListener("mouseover", function () {

    this.style.filter = "grayscale(0%)"
})


angular.addEventListener("mouseover", function () {

    this.style.filter = "grayscale(0%)"
})

html.addEventListener("mouseover", function () {

    this.style.filter = "grayscale(0%)"
})

css.addEventListener("mouseover", function () {

    this.style.filter = "grayscale(0%)"

})

bulma.addEventListener("mouseover", function () {

    this.style.filter = "grayscale(0%)"
})

boots.addEventListener("mouseover", function () {

    this.style.filter = "grayscale(0%)"
})


//out
js.addEventListener("mouseout", function () {

    this.style.filter = "grayscale(90%)"
})

angular.addEventListener("mouseout", function () {

    this.style.filter = "grayscale(90%)"
    this.style.filter = "contrast(12%)";
})

html.addEventListener("mouseout", function () {

    this.style.filter = "grayscale(90%)"
})


css.addEventListener("mouseout", function () {

    this.style.filter = "grayscale(90%)"
})

bulma.addEventListener("mouseout", function () {

    this.style.filter = "grayscale(90%)"
})

boots.addEventListener("mouseout", function () {

    this.style.filter = "grayscale(80%)"
    this.style.filter = "contrast(35%)"

})

//scrool animation
const target = document.querySelectorAll('[data-animation]');
const animationClass = "animate"

function animeScroll() {
    const windowTop = window.pageYOffset + 700
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        }
        console.log(element.offsetTop)
    })
}

window.addEventListener('scroll', function () {
    animeScroll();
})
