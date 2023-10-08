FROM node:16
WORKDIR /home/node/app/src
COPY app2 /home/node/app/src
RUN npm install
CMD npm run app 