FROM node:14

WORKDIR /code

COPY package.json /code
COPY yarn.lock /code

RUN yarn install --frozen-lockfile

COPY . /code

RUN yarn build

EXPOSE 8000

CMD yarn serve
