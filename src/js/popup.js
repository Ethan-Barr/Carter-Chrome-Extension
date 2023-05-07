// Get the input and output elements from the HTML
const userInput = document.getElementById("userInput");
const output = document.getElementById("output");

// Add an event listener to the input field to listen for the "keydown" event
userInput.addEventListener("keydown", (event) => {
    // Check if the key pressed is the enter key (key code 13)
    if (event.keyCode === 13) {
        // Prevent the default behavior of the enter key (submitting the form)
        event.preventDefault();

        // Get the user's input
        const text = userInput.value;

        // Display "loading" message in output element
        output.innerText = "Loading...";

        fetch(chrome.runtime.getURL('config.json'))
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

                        userInput.value = '';
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch(error => console.error(error));
    }
});
