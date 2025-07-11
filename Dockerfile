FROM node:22
WORKDIR /app
COPY package*.json /app
RUN npm install --dev
COPY . .
CMD ["tail", "-f", "/dev/null"]
