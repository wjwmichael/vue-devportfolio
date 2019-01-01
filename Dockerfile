FROM node:9.11.1-alpine as builder

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build


#Create a new container from a linux base image that has the aws-cli installed
FROM mesosphere/aws-cli

#Using the alias defined for the first container, copy the contents of the build folder to this container
COPY --from=builder /app/dist .

#Set the default command of this container to push the files from the working directory of this container to our s3 bucket 
CMD ["s3", "sync", ".", "s3://node-app-client"]   
