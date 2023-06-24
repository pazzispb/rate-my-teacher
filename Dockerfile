FROM node:latest

WORKDIR /app


COPY . .
COPY --exclude=src/Firebase.mjs . .

EXPOSE 3000

CMD ["npm", "start"]
