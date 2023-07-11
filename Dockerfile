FROM node:latest

WORKDIR /app

COPY . .

RUN rm -rf /app/src/Firebase.mjs

EXPOSE 3000

CMD ["npm", "start"]
