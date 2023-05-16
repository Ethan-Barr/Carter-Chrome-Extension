// Get the input and output elements from the HTML
const userInput = document.getElementById("userInput");
const output = document.getElementById("output");

// Get the btn input from setting icon and containers
const settingBtn = document.getElementById("settingInput");
const returnBtn = document.getElementById("settingInputBtn");
const chatContainer = document.querySelector(".container-chat");
const settingsContainer = document.querySelector(".contanier-settings");

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


settingBtn.addEventListener("click", (event) => {
    chatContainer.style.display = "none";
    settingsContainer.style.display = "block";
});

returnBtn.addEventListener("click", (event) => {
    chatContainer.style.display = "block";
    settingsContainer.style.display = "none";
});


function saveForm() {
    const clientName = document.getElementById("client-name").value;
    const playerId = document.getElementById("player-id").value;
    const api = document.getElementById("api").value;
  
    const formData = { clientName, playerId, api };
    const jsonString = JSON.stringify(formData);
  
    chrome.storage.local.set({ data: jsonString }, function () {
      console.log("Data saved");
    });
  }