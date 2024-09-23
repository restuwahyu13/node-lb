FROM node:22-alpine
COPY package*.json .
COPY . .
RUN npm i
EXPOSE 4001
CMD ["node", "."]