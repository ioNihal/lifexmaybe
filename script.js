window.onload = function () {
    window.scrollTo(0, 0);
    console.log("Started page");
    console.log("Started carousal scrolling");

    var images = document.querySelectorAll(".slideshow img");
    var numImages = images.length;
    var currentIndex = 0;
    var interval = 3000; // 3 seconds


    images[currentIndex].classList.remove("initHidden");
    images[currentIndex].classList.remove("slideOut");
    images[currentIndex].classList.add("slideIn");


    setInterval(function () {
        images[currentIndex].classList.remove("slideIn");
        images[currentIndex].classList.add("slideOut");
        //console.log("current img focus")
        currentIndex++;

        if (currentIndex == numImages) {
            currentIndex = 0;
        }
        images[currentIndex].classList.remove("initHidden");
        images[currentIndex].classList.remove("slideOut");
        images[currentIndex].classList.add("slideIn");
        //console.log("current img focus")

        var prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = numImages - 1;
        }

        images[prevIndex].classList.remove("slideIn");
        images[prevIndex].classList.remove("initHidden");
        images[prevIndex].classList.add("slideOut");
        //console.log("prev img left")

        var nextIndex = currentIndex + 1;
        if (nextIndex > 3) {
            nextIndex = numImages - 4;
        }

        images[nextIndex].classList.remove("slideIn");
        images[nextIndex].classList.remove("slideOut");
        images[nextIndex].classList.add("initHidden");
        //console.log("next img right")
    }, interval);

}


