FROM nginx:alpine
COPY index.html app.js style.css og-image.jpg /usr/share/nginx/html/
COPY mote-proxy.conf /etc/nginx/conf.d/default.conf
