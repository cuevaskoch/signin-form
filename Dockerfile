FROM node:8 as build
WORKDIR /app
COPY ./src ./
RUN yarn
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
