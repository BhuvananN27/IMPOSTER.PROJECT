const revealBtn = document.getElementById("revealBtn");
const buttonText = document.getElementById("buttonText");

const crystal = document.getElementById("crystal");

const predictionBox = document.getElementById("predictionBox");
const predictionText = document.getElementById("predictionText");


/* =====================================
   PREDICTIONS
===================================== */

const predictions = [

    "A surprising opportunity is waiting for you.",

    "Someone unexpected will become important to your journey.",

    "Trust your instincts. They may lead you somewhere exciting.",

    "Your next decision could open a completely new path.",

    "Luck is closer than you think. Keep your eyes open.",

    "A moment of courage will bring an unexpected reward.",

    "The stars suggest that something memorable is about to happen.",

    "Your creativity will attract an opportunity you weren't expecting.",

    "A mysterious connection will shape your event experience.",

    "The crystal sees an exciting adventure in your near future."

];


/* =====================================
   REVEAL FUNCTION
===================================== */

revealBtn.addEventListener("click", () => {

    // Disable button while spinning
    revealBtn.disabled = true;

    // Change button text
    buttonText.textContent = "CONSULTING THE COSMOS...";

    // Remove previous prediction
    predictionText.textContent = "The crystal is searching the stars...";

    predictionBox.classList.remove("active");

    // Start crystal animation
    crystal.classList.add("spinning");


    /*
        Wait for the animation to finish
    */

    setTimeout(() => {

        // Pick random prediction
        const randomIndex =
            Math.floor(Math.random() * predictions.length);

        const selectedPrediction =
            predictions[randomIndex];


        // Display prediction
        predictionText.textContent = selectedPrediction;

        // Activate prediction box
        predictionBox.classList.add("active");


        // Restore button
        buttonText.textContent = "REVEAL AGAIN";

        revealBtn.disabled = false;


        // Remove spinning animation
        crystal.classList.remove("spinning");

    }, 1800);

});
