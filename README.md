#nextjs intro

- pages > _app.js : blueprint

- redirect,  rewrite
    - redirect 
    - rewrite :유저를 redirect시키기는 하지만 url은 변하지 않음.

- if you are using latest version of nextJs ( above 9 ) then follow these steps :
    - 1. Create a .env.local file in the root of the project.
    - 2. Add the prefix NEXT_PUBLIC_ to all of your environment variables.
        - eg: NEXT_PUBLIC_SOMETHING=12345
    - 3. use them in any JS file like with prefix process.env
        - eg: process.env.NEXT_PUBLIC_SOMETHING
    - https://stackoverflow.com/questions/62386582/environment-variables-not-working-next-js-9-4-4