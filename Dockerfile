# stage as builder
FROM node:16.13.1 as builder

WORKDIR /usr/src/app

# Copy both package.json AND package-lock.json
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source files
COPY . .

# Build the project and copy the files
RUN yarn build


FROM nginx

# Copy application statics
COPY --from=builder /usr/src/app/out /usr/share/nginx/html

# Copy configuration
COPY /conf/nginx /etc/nginx

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]