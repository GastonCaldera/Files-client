FROM node:16-alpine

# Set up working dir
WORKDIR /app

# Copy package json files and install
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Expose the listening port of your app
EXPOSE 3000

CMD [ "npm", "start" ] 