FROM node:latest

WORKDIR /app

COPY ./ /app
COPY !firebase.js /app

EXPOSE 3000

CMD ["npm", "start"]
