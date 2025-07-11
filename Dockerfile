FROM node:22
WORKDIR /app
COPY package*.json /app
RUN npm install
RUN npm build
COPY . .
# CMD ["tail", "-f", "/dev/null"] para testear el docker
CMD ["npm", "run", "preview"]   
