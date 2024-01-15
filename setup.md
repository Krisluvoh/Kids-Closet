first time setup

1. open two terminals. name one "backend" and one "frontend"
2. in the backend, run...
    - npm i express dotenv mongoose cors
3. in the frontend, run..
    - cd frontend
    - npm create vite@latest ./
        - if it asks you for project name, just type ./
    - npm install


then, to start up

1. in the backend terminal, run
    nodemon server
2. in the frontend terminal, run
    npm run dev
        (make sure you are cd'd into frontend)

When pushing to github, make sure you are not in the frontend folder.