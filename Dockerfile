 # Use Nginx as the base image
FROM nginx:latest

# Copy your web application files into the container
COPY . /usr/share/nginx/html

# Expose port 80 for web access
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

