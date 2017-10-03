FROM node:latest
# or use this one for lightweight FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY .env.docker /usr/src/app/.env
COPY . /usr/src/app
RUN  npm install && npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
