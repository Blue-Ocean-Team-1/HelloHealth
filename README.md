# [HelloHealth](https://gallant-torvalds-547222.netlify.app/) [![CI](https://github.com/Blue-Ocean-Team-1/HelloHealth/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/Blue-Ocean-Team-1/HelloHealth/actions/workflows/main.yml) [![Coverage Status](https://coveralls.io/repos/github/Blue-Ocean-Team-1/HelloHealth/badge.svg?branch=main)](https://coveralls.io/github/Blue-Ocean-Team-1/HelloHealth?branch=main) [![Netlify Status](https://api.netlify.com/api/v1/badges/728f7ef8-e5f6-4746-bdd1-b71b69915e27/deploy-status)](https://app.netlify.com/sites/gallant-torvalds-547222/deploys)

## A web app that connects consumers to local farms. Browse products and purchase the weekly meal-kit box.

---

[![Demo GIF](./resources/images/demo.gif)](https://gallant-torvalds-547222.netlify.app/)

## Table of Contents

- [Description](#description)
- [Contributors](#contributors)
- [Setup](#setup)
- [Application Architecture](#application-architecture)
- [Features](#features)
- [API Schema](#api-schema)
- [Tech Stack](#tech-stack)

## Description

The project was completed in a week based on specifications provided by an external client.

> Through the service, local farms can list their products for sale and consumers can easily navigate and purchase their products. HelloHealth offers a subscription based plan and the sale of individual products. The service was made to provide farms an outlet to directly be the vendors of their products. Consumers are more connected to the food they eat and in return are more connected to the farms that provide for them.

## Contributors

- [Jeff Liu](https://github.com/theycallmejeff)
- [Nicholas Ma](https://github.com/nicholaswma)
- [Cassandra Barragan](https://github.com/cassbarragan)
- [Andrew Hang](https://github.com/DrewHang)
- [Bradley Caliva](https://github.com/bcaliva21)
- [Lawrence Sun](https://github.com/lawsun03)
- [Walter Tang](https://github.com/WalterT-MK)
- [Spencer Lepine](https://github.com/spencerlepine)

### Setup

Connect a Firebase project and run a PostgreSQL database.

```sh
$ cp .env.sample .env
$ npm install
$ npm run server-start
$ npm run vite:dev
$ npm run vite:start # visit localhost

# Used to create Bundle ONLY USE for Production
$ npm run build
```

## API Schema

See [Endpoint Schema](./BLUE_OCEAN_API.md).

## Application Architecture

![Deployment Architecture](./resources/images/Project_Deployment.png)

## Features

### Landing Page

#### Welcome Banner

![Home Page](./resources/images/home_page.png)

#### Product Catalog Page

- Browse all available products

![Product Page](./resources/images/product_page.png)

#### Product Detail Page

- View nutrition facts
- Save the product to cart
- Rate the product

![Product Detail Page](./resources/images/product_detail_page.gif)

### User Authentication

#### Account Type Selection

#### Login / Sign up

- Choose a Customer, Farmer, or Nutritionist account
- Browse the app and product catalog without being logged in
- Create an account or login Email/Password, Google, or Facebook
- Access live chat with a nutritionist

![Login Page](./resources/images/login_page.gif)

#### Account Details

- Manage subscription status
- Access the referral coupon
- View transaction history

![Account Page](./resources/images/user_account_page.png)

### Meal-kit Box Page

#### Box Size Selection

- View the weekly meal-kit box breakdown and select your size to save in the cart.

![Box Page](./resources/images/box_page.png)

### Farms

#### Farm Browsing Page

- Browse local farms and visit their page.
- View ratings for each farm

![Farm Page](./resources/images/farm_page.png)

#### Farmer Profile Page

- Read through the farm and learn about them
- View a farm livestream if available
- Browse products sold from that farm

![Farmers Page](./resources/images/farmer_profile.gif)

### Cart

#### View Cart Items

- View all products and boxes added to cart

![Cart Page](./resources/images/cart_page.png)

#### Checkout the Cart

- Save your address and add delivery notes
- Mention allergies or requests for the order
- Choose shipping options and view transaction receipt

![Checkout Page](./resources/images/checkout.gif)

## Tech Stack

#### Languages

<div>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
</div>

#### Frontend

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"/>
  <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black"/>
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/axios-5a29e4?style=for-the-badge&logo=axios&logoColor=white" />
</div>

#### Backend

<div>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
</div>

#### Database

<div>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" />
</div>

#### Testing

<div>
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
  <img src="https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white" />
  <img src="https://img.shields.io/badge/supertest-3178C6?style=for-the-badge&logoColor=white" />
  <img src="https://img.shields.io/badge/sinon-96bb99?style=for-the-badge&logoColor=white" />
</div>

#### DevTools

<div>
  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />
  <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
  <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />
  <img src="https://img.shields.io/badge/husky-FF9E0F?style=for-the-badge&logoColor=white" />
</div>

#### Deployment

<div>
  <img src="https://img.shields.io/badge/Amazon AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" />
</div>
