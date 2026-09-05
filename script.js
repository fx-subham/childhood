// GET ELEMENTS

const startBtn = document.getElementById("startBtn");

const music = document.getElementById("bgMusic");

const hero = document.getElementById("hero");

const mainJourney = document.getElementById("mainJourney");


// START BUTTON CLICK

startBtn.addEventListener("click", function () {

    // ================= MUSIC =================

    music.play()

        .then(() => {

            console.log("Music started ❤️");

        })

        .catch((error) => {

            console.log("Music error:", error);

        });


    // ================= SHOW JOURNEY =================

    mainJourney.classList.add("show");


    // ================= SMOOTH SCROLL =================

    setTimeout(function () {

        mainJourney.scrollIntoView({

            behavior: "smooth"

        });

    }, 300);

});