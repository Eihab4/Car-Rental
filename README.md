# Car Rental System

Welcome to the documentation for our cutting-edge Car Rental System! This system is built using MongoDB and Node.js, offering a seamless and efficient solution for managing car rentals.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
    - [User APIs](#user-apis)
    - [Car APIs](#car-apis)
    - [Rental APIs](#rental-apis)
    - [Special APIs](#special-apis)
4. [Contributing](#contributing)

---

## Introduction

Our Car Rental System simplifies the process of renting cars for both users and administrators. It provides functionalities for managing cars, customers, and rental transactions. Additionally, special APIs are available to enhance the user experience by filtering and retrieving specific car listings.

## Installation

To set up the Car Rental System locally, follow these steps:

- Clone the GitHub repository to your local machine.
- Install the necessary dependencies using npm or yarn.
- Configure the MongoDB connection in the application.
- Run the application using `npm start` or `yarn start`.

## Usage

The system provides various APIs categorized as follows:

### User APIs

- **Signup:** Register new users.
- **Sign in:** Authenticate users.
- **Get a specific user:** Retrieve details of a particular user.
- **Get all users:** Fetch information about all users.
- **Update user (owner only):** Modify user details (restricted to owners).
- **Delete user (owner only):** Remove user accounts (restricted to owners).

### Car APIs

- **Add car:** Add new car listings to the system.
- **Get a specific car:** Retrieve details of a specific car.
- **Get all cars:** Fetch information about all cars.
- **Update a car:** Modify existing car listings.
- **Delete a car:** Remove car listings from the system.

### Rental APIs

- **Create Rental:** Initiate rental transactions.
- **Update Rental:** Modify rental details.
- **Delete Rental:** Cancel rental transactions.
- **Get all Rentals:** Fetch information about all rental transactions.
- **Get a specific Rental:** Retrieve details of a particular rental transaction.

### Special APIs

- **Get all cars with specific models:** Retrieve car listings based on specified models.
- **Get available cars of a specific model:** Filter available cars by a particular model.
- **Get cars that are either rented or of a specific model:** Fetch cars based on rental status or model.
- **Get available cars of specific models:** Narrow down available cars by specifying multiple models.

## Contributing

Contributions to the Car Rental System project are welcome! Feel free to fork the repository, make improvements, and submit pull requests.
