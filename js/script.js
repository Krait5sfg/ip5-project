//код чтобы в IE 11 работал forEach
if (typeof NodeList.prototype.forEach !== 'function') {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

//testimolials slider
const bntLeft = document.querySelector(".testimonials-slider-button-left");
const bntRight = document.querySelector(".testimonials-slider-button-right");
const sliderArray = document.querySelectorAll(".slider-item");
let score = 1;

bntLeft.addEventListener("click", function () {
    if (score === 1) {
        return;
    } else {
        score--;
        sliderArray.forEach(function (element) {
            element.classList.add("hidden");
        });
        sliderArray.forEach(function (element) {
            if (element.getAttribute("data-info") == score) {
                element.classList.remove("hidden");
            }
        });
    }

})

bntRight.addEventListener("click", function () {

    if (score === 3) {
        return;
    } else {
        score++;
        sliderArray.forEach(function (element) {
            element.classList.add("hidden");
        });
        sliderArray.forEach(function (element) {
            if (element.getAttribute("data-info") == score) {
                element.classList.remove("hidden");
            }
        });
    }
})


//type-marketplace
const typeArray = document.querySelectorAll(".type-marketplace-list-item");
const descriptionArray = document.querySelectorAll(".who-work-description");
const workArray = document.querySelectorAll(".who-work-slider");

typeArray.forEach(function (element) {
    element.addEventListener("click", function () {
        if (element.classList.contains("current-marketplace-list")) {
            return;
        } else {

            typeArray.forEach(function (element) {
                element.classList.remove("current-marketplace-list");
            });

            element.classList.add("current-marketplace-list");

            let dataInfo = element.getAttribute("data-info");

            workArray.forEach(function (element) {
                if (element.getAttribute("data-info") === dataInfo) {
                    element.classList.remove("hidden");
                } else {
                    element.classList.add("hidden");
                }
            });

            descriptionArray.forEach(function (element) {
                if (element.getAttribute("data-info") === dataInfo) {
                    element.classList.remove("hidden");
                } else {
                    element.classList.add("hidden");
                }

            });

        }
    });
});

