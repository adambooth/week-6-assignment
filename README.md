Week 6 Assignment

https://week-6-assignment-y78m.onrender.com/

https://github.com/adambooth/week-6-assignment

Project Description:
A amazon product page with working reviews.

Things i struggled with:
• Setting up the random generating photo on click of a button
• Splitting everything into different components(connecting them mainly)
• The Unsplash api setup I found the above online

## async function getData() {

## const response = await fetch(`https://api.unsplash.com/photos/random`, {

## headers: {

## Authorization: `Client-ID ${key}`,

## },

## });

## const data = await response.json();

## setUnsplashPhoto(data);

## }

Things i did well:
• Deploying to render
• Use of Github
• Responsiveness
• CSS

Things ive learnt:
• How to connect components and pass things between them
• Improved CSS skills
• How to connect and retrieve data from APIs and use a .env file

Resources Used:
Youtube - https://www.youtube.com/watch?v=gmI5nvzv170&t=12s

Requested Feedback:
A youtube video on using react and apis together if possible
