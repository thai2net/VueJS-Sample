# Use an official Node.js runtime as the base image
FROM node:14 as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN yarn add ci

# Copy the entire project to the container
COPY . .

# Build the Vue application
RUN npx yarn build

# Use a lighter-weight base image for serving the application
FROM nginx as production-stage

# Copy the built files from the previous stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
