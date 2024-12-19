const applyCodeButton = document.getElementById("apply-code");
const cssInput = document.getElementById("css-input");
const container = document.getElementById("container");
const feedback = document.getElementById("feedback");

// Apply the CSS code to the container
applyCodeButton.addEventListener("click", () => {
    const userCode = cssInput.value;
    try {
        // Reset the styles and feedback
        container.style.cssText = "";
        feedback.textContent = "";

        // Apply the user-provided CSS
        container.style.cssText = userCode;

        // Check if the alignment is correct
        const computedStyle = getComputedStyle(container);
        if (computedStyle.display === "flex" && computedStyle.justifyContent === "space-between") {
            feedback.textContent = "🎉 Great job! The fruits are correctly aligned.";

            // Align the fruits with the baskets
            const fruits = document.querySelectorAll(".fruit");
            fruits.forEach((fruit, index) => {
                fruit.style.transform = `translateY(50px)`;
            });

            // Display the Next Level button
            const nextLevelButton = document.createElement("button");
            nextLevelButton.textContent = "Next Level";
            nextLevelButton.style.marginTop = "20px";
            nextLevelButton.addEventListener("click", nextLevel);
            feedback.appendChild(nextLevelButton);
        } else {
            feedback.textContent = "❌ Incorrect code. Try adjusting your Flexbox properties.";
        }
    } catch (error) {
        feedback.textContent = "⚠️ Invalid CSS code. Please try again.";
    }
});

// Function to load the next level
function nextLevel() {
    // Reset the play area for a new level
    feedback.textContent = "";
    container.style.cssText = "";
    cssInput.value = "#container { display: flex; justify-content: space-between; }";

    // Reset fruit positions
    const fruits = document.querySelectorAll(".fruit");
    fruits.forEach((fruit) => {
        fruit.style.transform = ""; // Reset fruit position
    });

    feedback.textContent = "🎯 New challenge! Adjust the CSS to align the fruits again.";
}






