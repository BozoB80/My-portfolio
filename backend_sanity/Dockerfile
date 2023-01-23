FROM node:14

WORKDIR /app
COPY . .

RUN npm install -g @sanity/cli
RUN sanity build

CMD ["sanity", "start"]
