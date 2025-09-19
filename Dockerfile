# Use nginx as base image
FROM nginx:alpine

# Copy build files to nginx html directory
COPY dist/ /usr/share/nginx/html

# Expose port
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
