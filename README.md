# Random Quote Generator - freeCodeCamp Certification Project

This is a freeCodeCamp certification project for the Random Quote Generator. It is a React component styled with SASS that displays random quotes and allows users to change the quote and its associated color. It fetches quotes from a remote API and provides options for social media sharing.

## Features

- Displays a random quote and its author.
- Dynamically changes the background color and text color.
- Allows users to fetch a new random quote.
- Provides options for sharing the quote on Twitter and Tumblr.

## Installation

1. Clone the repository or download the source code.

2. Install the dependencies by running the following command:

   ```shell
   npm install
   ```

3. Start the development server:

   ```shell
   npm start
   ```

   This will run the application in development mode and open it in your default browser. If it doesn't open automatically, you can access it at [http://localhost:3000](http://localhost:3000).

## Usage

Once the application is running, you can view and interact with the random quote generator in your browser. The page will display a random quote along with the author's name. You can click the "New Quote" button to fetch a new random quote. The background color and text color will change with each quote.

To share the current quote on social media:

- Click the Twitter icon to share the quote on Twitter. A new window or tab will open with a pre-filled tweet containing the quote and author.
- Click the Tumblr icon to post the quote on Tumblr. A new window or tab will open with a pre-filled Tumblr post containing the quote and author.

## Customization

You can customize the appearance and behavior of the random quote generator by modifying the code in the `Quotes` component. Here are a few possible modifications:

- Adjust the list of colors in the `colors` array to change the available color options.
- Modify the SCSS styles for the quote and author text elements to suit your desired design.
- Customize the social media sharing links to integrate with different platforms or add additional sharing options.

## Credits

- The quotes used in this application are sourced from [camperbot/quotes](https://gist.github.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9) on GitHub.
- This project is part of the freeCodeCamp curriculum and is a certification project for the Front End Libraries certification.

## Certification

This project is part of the freeCodeCamp [Front End Libraries](https://www.freecodecamp.org/learn/front-end-libraries) certification. To earn the certification, complete the other projects in the curriculum and pass the required tests.

## Demo

You can preview a demo of this project at [React Quote Generator](https://major101x.github.io/quote-generator-react.github.io/)
