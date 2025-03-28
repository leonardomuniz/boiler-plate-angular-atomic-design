FROM node:alpine

WORKDIR /user/src/app

COPY . /user/src/app

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]