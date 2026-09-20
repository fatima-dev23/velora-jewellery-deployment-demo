FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy in the source code
COPY . .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
