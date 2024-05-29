FROM node:alpine AS development

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package.json ./

RUN npm install

COPY ./public ./public
# Copying all the files in our project
COPY ./src ./src

EXPOSE 3000

ARG VERSION=staging
ENV REACT_APP_VERSION $VERSION

# Starting our application
CMD ["npm","start"]