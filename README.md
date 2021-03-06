# Freedman-Banking
Student Project 4


**Github Repo:** https://github.com/ajfreedm/Freedman-Banking

**Heroku:** 

**Netlify:** 

## Overview

Freedman-Banking is an app designed with the look and feel of a real world online banking application in mind. It will have the all the bells and whistles including the ability to create a checking or savings account, make withdrawls and deposits, and cashout and close the account at any point.

 It will be a full-stack, full-CRUD app, utilizing a RESTful JSON API with the so-called "React on Rails" stack. It will demonstrate working Full CRUD (index, show, create, update, delete) actions effecting the non-User tables.

## Component Hierarchy
![Component Hierarchy](/assets/component_hierarchy.png)

## Wireframes & Branding
![Wireframe](/assets/wireframe.png)

## ER Diagram
![ERD Diagram](/assets/erd_diagram_2.png)


## MVP GOALS
* Thoroughly developed README.md file

#### Server
* Have a RESTful JSON API.

* Build a Ruby on Rails server, exposing RESTful JSON endpoints.

* Build a database with at least 2 tables: users, accounts

* Utilize Rails to define models for interacting with the database.

* Implement working generic controller actions for Full CRUD (index, show, create, update, delete) between on the account and category table.

#### Client 
* Build an interactive reacte app.

* Have at least 8 separate, rendered components in an organized and understandable React file structure.

* Utilize functional or class React components appropriately.

* Utilize state and props in your components efficiently.

* Use only React for DOM Manipulation.

* Consume data from your Ruby on Rails API, and render that data in your components.

* Utilize React Router, for client-side routing.

* Demonstrate Full CRUD actions ( index, show, create, update, and delete ) on the front end.

* The CRUD will cover ther account and category tables.

## POST MVP GOALS
Two factor authentication

## Libraries and Dependencies

|     Library      | Description                                                            |
| :--------------: | :----------------------------------------------------------------------|
|      React       | _This is used for the frontend development of this site_               |
|   React Router   | _Used for directing the user through React Components._                |
|      Rails       | _This is the server-side app which is the framework for our database._ |
|     PostgreSQL   | _This is the database used for all data used on this site._            |
|  JWT and bcrypt  | _This is used for user athentication and building JSON web tokens_     |