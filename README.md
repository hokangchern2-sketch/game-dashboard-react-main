#  GameShelf

A React-based game collection dashboard that allows users to view, filter, and add games to their personal collection. GameShelf is a web application built using React and Vite.



<img src="https://github.com/user-attachments/assets/a356bcc6-21d7-4e63-a514-114d373ed7ac" width="800">

Image 1: This is the  dashboard.

<img src="https://github.com/user-attachments/assets/4e23f91b-d441-406f-9011-9db99ba035c9" width="600">


Image 2: This is the the platform section to Filter games by platform 

<img src="https://github.com/user-attachments/assets/7f05e48d-27ef-4cb7-a923-3ba957372ca8"  width="600">

Image 3: This is the add game form to add new games, add an image URL for a game and to add a game ratings for the game

The application allows users to:

- View games in their collection
- Filter games by platform
- View game ratings
- Add new games
- Add an image URL for a game
- Automatically update the total number of games
- Display a fallback image when a game image cannot be loaded

## Main Features

### 1. Game Collection

The application stores game information such as:

- Game title
- Platform
- Rating
- Image

The games are stored in React state so the collection can be updated when a new game is added.

### 2. Platform Filtering

Users can filter their collection by:

- All
- PC
- PlayStation
- Xbox

The application uses JavaScript's `filter()` method to display only games that match the selected platform.

### 3. Reusable Game Component

Each game card is displayed using a reusable React `Game` component.

The `Game` component receives these values as props:

- Image
- Title
- Platform
- Rating

This allows the same component to be reused for every game in the collection.

### 4. Add Game

Users can add a new game by entering:

- Game title
- Image URL
- Platform
- Rating

When the form is submitted, the new game is added to the existing game collection using React state.

### 5. Game Rating

Each game displays a rating from 1 to 5 stars.

### 6. Image Fallback

If a game image cannot be loaded, the application displays a fallback image instead.

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Vite

## Project Structure

```text
src/
├── App.jsx
├── Game.jsx
├── App.css
├── index.css
└── main.jsx
