# DevStack

DevStack is a modern and responsive developer technology stack explorer. It helps developers explore different technologies, check their category, difficulty, rating, and build their own personalized technology stack.

## Technologies Used

- React.js
- Tailwind CSS
- JavaScript
- React Toastify
- Lucide React
- JSON
- Vite

## Features

### 1. Explore Technologies

Browse different development technologies with their name, description, category, difficulty level, rating, and badge.

### 2. Build Your Own Stack

Add your favorite technologies to your personal stack and easily remove individual technologies or clear the entire stack.

### 3. Responsive Design

Fully responsive interface that works smoothly across desktop, tablet, and mobile devices.

## Project Overview

DevStack provides a clean and user-friendly platform for developers to discover technologies and organize their preferred development stack in one place.

The project uses JSON data to dynamically load technology information and React state management to handle the user's selected stack.

---

© 2026 DevStack. All rights reserved.



### What is JSX, and why is it used in React?
Jsx is a javaScript syntax, and by this syntax we can write html code in javaScript

### What is the difference between props and state?
Props is the way to send data from parent component to child component, and props can't change from child side.
State is component own data, which can manage inner the component and if it's need change then it can be possible innner the component.

### What does the useState hook do, and where did you use it in this project?
useState is a way to store data and also we can update those stored data, in my project i used it the TechnologySection to 
store the stack and also used in the navbar section to open or close the hamburger manu.

### What does the useEffect hook do, and why did you need it to load the JSON data?
After component render then we need to run side effect to show the performance and then we need this functionality of useEffect hook. In my project when the page loaded then we need the data automatically and for this i need or used the useEffect hoot to do this.

### Why does every item in a .map() list need a unique key prop?
when react create many element by using map then which elemend is change if we want to know at time then we need a unique key to divided the updated element and no updated element , and by this unique key we can easily find the changed element.
So for this we need unique key.

### What is conditional rendering? Show one place you used it (example: the empty stack message).
conditonal rendering is when we need to change ui's exact location or section by condition .
In my project i used it on YourStack component and in this component if slecectedStack legnth is equal to 0 then
it show Your stack section or cart is empty otherwise show the selected technologies.

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
For sending data from parent to child then we used the props functionality like our technologySection is parent component and technologyCard is child , and in this technologyCard section we send technology,selectedStack,OnAdd props.
And child can't change parent data.
