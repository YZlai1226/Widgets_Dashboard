FROM node:17 

# Tells Docker which “basis” it needs for the app to run, in this case node.js ver 17 and everything that this needs to run, like javascript and a linux distro. 

 

WORKDIR /App 

# Tells Docker to create a folder named App and to start working within it. 

 

COPY package*.json ./ 

# Fetches node package list 

 

RUN npm install 

# Installs the packages 

 

COPY . . 

# Copies the app file into the App folder 

 

EXPOSE 3000:3000 

# Important! Exposes the ports that your app uses (otherwise it will run inside the container but with no entry or exit = useless). 

 

CMD ["node", "server.js"] 

# Starts the app. 