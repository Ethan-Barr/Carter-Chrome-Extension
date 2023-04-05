# Carter Chrome Extension

The Carter Chrome Extension is a tool that allows users to interact with the Carter API directly from their browser. This repository contains the source code for the extension.

## Installation

To install the Carter Chrome Extension, follow these steps:

1. Clone this repository: `git clone https://github.com/Ethan-Barr/Carter-Chrome-Extension.git`
2. Open Google Chrome and navigate to `chrome://extensions/`
3. Enable Developer mode (toggle switch in the upper right corner)
4. Click "Load unpacked" and select the cloned repository

## Configuration

Before using the extension, you will need to create a `config.json` file in the root of the project directory with the following format:

```json
{
  "apiKey": "YOUR_API_KEY",
  "userId": "YOUR_PLAYER_ID (THIS CAN BE ANYTHING YOU WANT!)"
}
```

Replace YOUR_API_KEY with your Carter API key, which can be obtained by creating a Carter project. Replace YOUR_PLAYER_ID with any identifier you choose for your player.



## Usage

Once installed, the Carter Chrome Extension can be accessed by clicking on the extension icon in the browser toolbar. From there, you can interact with the Carter API by entering commands in the popup window.

For more information on using the Carter API, refer to the [JavaScript documentation](https://docs.carterlabs.ai/start/javascript) provided by Carter Labs.

## About Carter Labs

Carter Labs is a cloud-based platform for building, deploying, and scaling machine learning models. With Carter, you can build and deploy models with just a few clicks, without having to worry about infrastructure or deployment details.

To learn more about Carter Labs and their products, visit their [website](https://www.carterlabs.ai/).
