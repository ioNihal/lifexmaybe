window.onload = function () {
    window.scrollTo(0, 0);
    console.log("Started page");
    console.log("Started carousal scrolling");

    var images = document.querySelectorAll(".slideshow img");
    var numImages = images.length;
    var currentIndex = 0;
    var interval = 3000; // 3 seconds

    // Set the initial opacity and position of the images
        images[0].classList.add("initHidden");

    // Set the active image to full opacity and center position
    images[currentIndex].classList.remove("initHidden");
    images[currentIndex].classList.remove("slideOut");
    images[currentIndex].classList.add("slideIn");

    // Start the slideshow
    setInterval(function () {
        // Move the current image to the left
        var prevIndexFirst = currentIndex - 1;
        if (prevIndexFirst < 0) {
            prevIndexFirst = numImages - 1;
        }
        images[prevIndexFirst].classList.remove("slideIn");
        images[prevIndexFirst].classList.remove("slideOut");
        images[prevIndexFirst].classList.add("initHidden");

        var nextIndexFirst = currentIndex + 1;
        if (nextIndexFirst > 3) {
            nextIndexFirst = numImages - 4;
        }
        images[nextIndexFirst].classList.remove("slideIn");
        images[nextIndexFirst].classList.remove("initHidden");
        images[nextIndexFirst].classList.add("slideOut");

        images[currentIndex].classList.remove("slideIn");
        images[currentIndex].classList.add("slideOut");

        // Increment the index
        currentIndex++;

        // If the index is equal to the number of images, reset it to 0
        if (currentIndex == numImages) {
            currentIndex = 0;
        }

        // Move the next image to the center
        images[currentIndex].classList.remove("initHidden");
        images[currentIndex].classList.remove("slideOut");
        images[currentIndex].classList.add("slideIn");

        // Move the previous image to the right
        var prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = numImages - 1;
        }
        images[prevIndex].classList.remove("slideIn");
        images[prevIndex].classList.remove("slideOut");
        images[prevIndex].classList.add("initHidden");

        var nextIndex = currentIndex + 1;
        if (nextIndex > 3) {
            nextIndex = numImages - 4;
        }
        images[nextIndex].classList.remove("slideIn");
        images[nextIndex].classList.remove("initHidden");
        images[nextIndex].classList.add("slideOut");

        

    }, interval);

}


