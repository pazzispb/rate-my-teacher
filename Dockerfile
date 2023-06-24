FROM node:latest

WORKDIR /app


COPY . /app
COPY --exclude=Firebase.js /app/

EXPOSE 3000

CMD ["npm", "start"]
