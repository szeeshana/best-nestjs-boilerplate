# Nest REST API Boiler Plate

## Demo Endpoints
- Endpoints
  - GET `/pricing-models`
    - returns all of the pricing models available for the system
    - also returns the default pricing model in `prices.json`
  - POST `/pricing-models`
    - creates a new pricing model in the system
    - returns the ID of the new pricing model to the caller
  - GET `/pricing-models/:pm-id`
    - get an individual pricing model
    - include the price configurations for the pricing model
    - if the pricing model isn't found by `pm-id` it responds with not found
  - PUT `/pricing-models/:pm-id`
    - updates an existing pricing model meta-data
    - does not affect the pricing configurations for the pricing model
  - GET `/pricing-models/:pm-id/prices`
    - returns the prices configured for a specific pricing model
  - POST `/pricing-models/:pm-id/prices`
    - adds a new price configuration for a pricing model
  - DELETE `/pricing-models/:pm-id/prices/:price-id`
    - removes a price configuration from a pricing model
    - if the pricing model isn't found by `pm-id` it responds with not found
    - if the price configuration isn't found by `price-id` it responds with not found
  - PUT `/machines/:machine-id/prices/:pm-id`
    - sets the pricing model for an individual machine to the one from `pm-id`
    - if the machine already has a pricing model, it is replaced by this one
    - if the machine isn't found by `machine-id` it responds with not found
    - if the pricing model isn't found by `pm-id` it responds with not found
  - DELETE `/machines/:machine-id/prices/:pm-id`
    - removes the pricing model from the machine (unsets it)
  - GET `/machines/:machine-id/prices`
    - return the pricing model and price configurations set for a given machine
    - if the machine does not have a pricing model configured then the default model from `prices.json` is returned
    - if the machine isn't found by `machine-id` it responds with not found
- Tests
  - Each endpoint should have its own test
- Database
  - Use PostgreSQL to store data about machines and prices
- Pre requisites: 
    - Install Node JS minimum 10 version
    - Install nest CLI from https://docs.nestjs.com/cli/overview
    - Install yarn or npm
    


## Steps to run application

```bash
# 1. Clone the repository or click on "Use this template" button.
git clone https://github.com/szeeshana/polycode-assignment

# 2. Enter your newly-cloned folder.
cd polycode-assignment

# 3. Install dependencies. (Make sure yarn is installed: https://yarnpkg.com/lang/en/docs/install)
yarn

# 4. Create database in your postgres client with name test_db as in .development.env file, also update your  HOST , USERNAME , PASSWORD too in .development.env

# 5. Run development server and open http://localhost:3000
yarn start:dev

# 6. Now you can just import Polycade.postman_collection.json inside the repository to your postman to check the APIs
Refer to Importig Collections link below

#7. Now you can test the aplication manually

#8. To run test cases please use command 
yarn test

#8. To run test cases with coverage please use command 
yarn test --coverage

```
[Importig Collections](https://learning.postman.com/docs/postman/collections/data-formats/)


## Documentation

This project is created using latest JS framework NESTJS aling with TYPEORM !
Test cases are written from scratch.
