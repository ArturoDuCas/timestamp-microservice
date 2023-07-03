# Timestamp Microservice

This is the first project of the Back End Development and APIs course by Free Code Camp. The goal of this project is to build JavaScript app that is functionally similar to [this example](https://timestamp-microservice.freecodecamp.rocks).

## Description

The Timestamp Microservice project aims to create an API service that handles date and time information. It provides the following functionality:

- A request to `/api/:date?` with a valid date should return a JSON object with a `unix` key, which represents the Unix timestamp of the input date in milliseconds (as a `Number`).
- A request to `/api/:date?` with a valid date should return a JSON object with a `utc` key, which is a string representation of the input date in the format: `Thu, 01 Jan 1970 00:00:00 GMT`.
- A request to `/api/1451001600000` should return `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`.
- The project can handle dates that can be successfully parsed by `new Date(date_string)`.
- If the input date string is invalid, the API returns an object with the structure `{ error: "Invalid Date" }`.
- An empty date parameter should return the current time in a JSON object with a `unix` key.
- An empty date parameter should return the current time in a JSON object with a `utc` key.

## Accessing the Service

You can access the Timestamp Microservice by clicking on the following link: [Timestamp Microservice](https://timestamp-microservice-oj6o.onrender.com)

## Technologies Used

This project utilizes the following technologies:

- Node.js
- Express.js

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to explore and modify the code to further enhance the functionality of the Timestamp Microservice. Happy coding!
