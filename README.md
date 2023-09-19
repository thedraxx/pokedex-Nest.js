<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>



# Execute the following commands to run the project

1. Clone the repository

2. Execute the command:
```
npm install
```
3. Have NestJS CLI installed globally:
```
npm i -g @nestjs/cli
```
4. Execute Database:
```
  docker-compose up -d
```
5. Clone the file **.env.template** and rename it to .env

6. Complete the variables in the .env file

7. Execute the command:
```
yarn start:dev
```
8. Rebuild database with a seed:
```
http://localhost:3000/api/v2/seed
```

# Production Build
1. create ```.env.prod```
2. fill the variables in ```.env.prod```
3. create the new docker image ```docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build```