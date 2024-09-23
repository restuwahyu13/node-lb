FROM node:22-alpine
COPY package*.json .
COPY . .
RUN npm i
EXPOSE 4002
CMD ["node", "."]