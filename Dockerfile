FROM denoland/deno:latest

EXPOSE 8080

WORKDIR /app

ADD . .
RUN deno cache main.ts

CMD [ "run", "--allow-net", "--allow-read", "--allow-env", "main.ts"]
