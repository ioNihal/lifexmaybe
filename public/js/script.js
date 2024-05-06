window.onload = function () {
    window.scrollTo(0, 0);
    console.log("Started page");
    console.log("Started carousal scrolling");

    var images = document.querySelectorAll(".slideshow img");
    var numImages = images.length;
    var currentIndex = 0;
    var interval = 3000; // 3 seconds


    images[currentIndex].classList.remove("slideRight");
    images[currentIndex].classList.remove("slideLeft");
    images[currentIndex].classList.add("slideIn");


    setInterval(function () {
        images[currentIndex].classList.remove("slideIn");
        images[currentIndex].classList.add("slideLeft");
        //console.log("current img focus")
        currentIndex++;

        if (currentIndex == numImages) {
            currentIndex = 0;
        }
        images[currentIndex].classList.remove("slideRight");
        images[currentIndex].classList.remove("slideBack");
        images[currentIndex].classList.remove("slideLeft");
        images[currentIndex].classList.add("slideIn");
        //console.log("current img focus")

        var prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = numImages - 1;
        }

        images[prevIndex].classList.remove("slideIn");
        images[prevIndex].classList.remove("slideRight");
        images[prevIndex].classList.remove("slideBack");
        images[prevIndex].classList.add("slideLeft");
        //console.log("prev img left")

        var midIndex = prevIndex - 1;
        if (midIndex < 0) {
            midIndex = 3;
        }

        images[midIndex].classList.remove("slideRight");
        images[midIndex].classList.remove("slideIn");
        images[midIndex].classList.remove("slideLeft");
        images[midIndex].classList.add("slideBack");
        //console.log("mid img back")

        var nextIndex = currentIndex + 1;
        if (nextIndex > 3) {
            nextIndex = numImages - 4;
        }

        images[nextIndex].classList.remove("slideIn");
        images[nextIndex].classList.remove("slideLeft");
        images[nextIndex].classList.remove("slideBack");
        images[nextIndex].classList.add("slideRight");
        //console.log("next img right")
    }, interval);

}


