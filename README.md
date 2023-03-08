# Cocktail Rater

## Contributors:
Erkut Cakmak
Brandon Ellison
Aubrey Loudenslager
Sylvester Trevi

## Introduction
The Cocktail Rater is a web app that displays various different cocktails, and allows the user to view detailed information about each. This project demonstrates usage of javascript integration into a web app to create a functional front-end. 

## Installation

Run the following command to start the JSON server:

```json-server --watch db.json
```

Test your server with the following URL: 

[http://localhost:3000/drinks]

Then, open the 'index.html' file in your browser. 

## Usage

- Selecting a cocktail from the menu bar will display the cocktail's ingredients and directions 
- The user will be able to add a comment onto cocktails if they have tried them.
- The user will be able to like or dislike a cocktail above the comment section

## Deliverables
The user will be able to: 

1. Use the forEach method to implement an array of drinks 
2. See all drink  images in the div with the id of cocktail-bar. When the page loads, request the data from the server to get all the drink objects. Then, display the image for each of the drinks using an image tag inside the cocktail-bar div.
3. Click on an image from the cocktail-bar div and see all the info about that drink displayed inside the cocktail-info div 
4. Leave a comment on a drink. The new comment  should be added to the cocktail-bar div as well as the name of the commenter. The comment and name do not need to persist.
5. Leave a rating via the 'like' and 'dislike' buttons. 
6. Create a box shadow behind each image by hovering over via a mouseover event.


