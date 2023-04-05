// Get the input and output elements from the HTML
const userInput = document.getElementById("userInput");
const output = document.getElementById("output");
const submitButton = document.getElementById("submitButton");

// Add an event listener to the submit button
submitButton.addEventListener("click", () => {
    // Get the user's input
    const text = userInput.value;

    // Display "loading" message in output element
    output.innerText = "Loading...";

    fetch(chrome.extension.getURL('config.json'))
        .then(response => response.json())
        .then(data => {
            const key = data.apiKey;
            const userId = data.userId;

            // Send the request to the API
            fetch("https://api.carterlabs.ai/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    text: text,
                    key: key,
                    playerId: userId
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    // Display the processed text in the output element
                    output.innerText = data.output.text;
                })
                .catch((error) => {
                    console.error(error);
                });
        })
        .catch(error => console.error(error));
});
