// Create floating hearts ❤️

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.classList.add("floating-heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);


    // Remove heart after animation

    setTimeout(() => {

        heart.remove();

    }, 6000);

}


// Create a heart every 700 milliseconds

setInterval(createHeart, 700);