# Sayari Assessment

Technical assessment for Senior Software Engineer position

## Approach

While there were a lot of paths to explore in this exercise, I chose API design. I wanted to showcase what I've learned over the years about REST API design and implementation. This follows a standard REST approach, where endpoints correspond with entities and HTTP methods correspond to an action. I stubbed out most of the endpoints, but only implemented a few for time's sake.

## Design
First, I inspected the `stackoverfaux.json` dataset and came up with the following entities and relationships, which could easily be converted to a DB schema:
- Question
    - Belongs to one User
    - Has zero or many Answers
    - Has zero or many Comments
- Answer
    - Belongs to one Question
    - Belongs to one User
    - Has zero or many Comments
- Comment
    - Belongs to one Question OR one Answer
    - Belongs to one User
- User
    - Has zero or many Questions
    - Has zero or many Answers
    - Has zero or many Comments

I then defined a list of potential API endpoints we'd need to interact with these entities:
- Questions
    - GET /questions
        - Get all questions, like for a search
        - Accept filtering params
    - GET /questions/:questionId
        - Get a single question given an ID
        - 404 if not found
    - POST /questions
        - Add a new question
    - PATCH /questions/:questionId
        - Update an existing question
    - DELETE /questions/:questionId
        - Delete a question
        - Only allow user who created it
- Answers
    - GET /questions/:questionId/answers
    - GET /answers/:answerId
        - Get one
    - GET /questions/:questionId/answers/:answerId
        - Alias for get one
    - POST /questions/:questionId/answers
    - PATCH /answers/:answerId
    - DELETE /answers/:answerId
- Comments
    - GET /questions/:questionId/comments
    - GET /questions/:questionId/comments/:commentId
    - GET /comments/:commentId
    - POST /questions/:questionId/comments
    - PATCH /comments/:commentId
    - DELETE /comments/:commentId
- Users
    - GET /users
    - GET /users/:userId
    - GET /users/:userId/questions
    - GET /users/:userId/answers
    - GET /users/:userId/comments
    - POST /users
    - PATCH /users/:userId
    - DELETE /users/:userId

## Implementation
I used Express.js and Typescript to spin up a basic app with the folder structure:
> /src
>  -- /controllers
>  -- /data
>  -- /repositories
>  -- /routes
>  -- /utils
>  -- app.ts

* `app.ts` uses some boilerplate code to set up the app, and adds route definitions from the `/routes` folder.
* I created two controllers (Answers and Questions), some with placeholder code, some functional. Ideally there'd be at least two more (Users and Comments)
* `/repositories` contains files meant to interact with data stores. In this case, it's just reading from the given JSON file, but this is where DB queries would go also.

## What is Completed
* Stubbed out routes for the endpoints defined above.
    * Routes are defined in `/routes/*` and added in `app.ts`
* Created controllers for Answers and Questions
* Filled out the following endpoints to "query" the JSON data and actually return results:
    * GET /questions
    * GET /questions/:questionId
    * GET /questions/:questionId/answers
    * GET /questions/:questionId/comments
* Created a `responses.ts` util with helper functions for various types of responses: success, error, not found, etc.
* Created repositories for Answers, Questions, and Comments which simply interact with the JSON file.
* Set up Postman collection and environment

## What isn't Completed
In short, a lot of things. If I had all the time in the world:
* Dockerize the app
* Connect to a Dockerized Postgres and create schema
* Write a script to normalize the JSON data and insert it in DB
* JWT authentication
* User roles and access
* Validate and sanitize URL inputs
* Paginate results
* Caching
* Testing (unit, integration, etc.)
* Fetch data from DB, not file
* OpenAPI documentation
* Define and organize entity types/interfaces
* Logging and metrics

## Code Setup
I tried (and probably spent too much time) Dockerizing the app, but my Docker is a little rusty and didn't fully complete it. A Dockerfile is included, but I couldn't get it to run. I ended up running the app straight up with npm:
```
$ npm install && npm run build && npm run dev
```
The result of this command will be nodemon running the app on http://localhost:3000/

## Test Cases

I included Postman configs if you're Postman savvy. Alternatively, you can hit the GET requests from any browser.

Questions - Get All
* GET /questions
    * Expected output: list of Questions but with comment and answer count, rather than the full list of each

Questions - Get One
* GET /questions/:questionId
    * Expected output: a single Question entity, should match the structure from the Get All call
    * Sending an invalid questionId returns a 404 response

Answers - Get All for Question
* GET /questions/:questionId/answers
    * Expected output: list of Answers for the given questionId
    * Sending an invalid questionId returns a 404 response

Comments - Get All for Question
* GET /questions/:questionId/comments
    * Expected output: list of Comments for the given questionId
    * Sending an invalid questionId returns a 404 response