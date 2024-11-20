FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/app.js"]