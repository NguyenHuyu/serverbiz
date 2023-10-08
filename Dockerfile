FROM node:16
WORKDIR /home/node/app/src
COPY app /home/node/app/src
RUN npm install
CMD npm run app 