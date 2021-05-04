FROM node
WORKDIR /app
COPY ./dist/apps/server .

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

ENV PORT=3333
EXPOSE ${PORT}

CMD node main.js