# Easy subtask

### Things you need

-   node.js
-   npm
-   access to mongodb database(connection string) - you can use free version of MongoDB Atlas - https://www.mongodb.com/products/platform/atlas-database
-   code editor
-   way to make api calls (for example you can use Postman)

### Testing task

-   Clone this repo
-   Open repo in code editor or terminal

    Install dependencies

    ```
    npm i
    ```

    ##### change .env.example file name to .env and provide your database connection string in the .env file

    Start server

    ```
    npm run start
    ```

If you have successfully connected your mongodb database, you can start making API calls with postman to /users endpoint -> http://localhost:3000/users

-   making a GET request to /users returns all users from database
-   making a POST request to /users adds new user to database

POST request needs to have correct values sent with JSON body

```
# Example post request JSON body
{
    "name": "name value",
    "email": "email value"
}
```

If name or email are not provided on POST request user will not be created.
