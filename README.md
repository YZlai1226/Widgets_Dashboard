# Welcome to Back 2 Basics

This website is a dashboard that aims to provide a variety of services to the user. It is highly scalable and already hosts an array of different microservices. Each service relies on a backend app that is dockerized and hosted on heroku.
Frontend: React, backend: ExpressJS

## User functionalities

On Back2Basics, a user can:

### Register and login

Custom made auth system.

### Choose widgets to display

The user can choose from a menu which widgets they are interested in.

## Services

### Mangadex

Fetches a random manga in Mangadex database and displays info and cover. Two widget sizes are available.

### The Cocktail DB

Fetches a random cocktail recipe from The Cocktail DB. Two Widgets.

### The Weather Service

Gives the weather from the user's location. One widget gives it for the day, the other for the entire week.

### News

The user can display the latest news in the fields of tech and health (two different widgets).

### Todo List

A simple Todo list, with a companion widget that displays the latest entry in more details. Data is stored on MongoDB Atlas.
