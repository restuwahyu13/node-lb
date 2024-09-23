FROM node:22-alpine
COPY package*.json .
COPY . .
RUN npm i
EXPOSE 4000
CMD ["node", "."]