# Select the base image
FROM nadavtasher/template:2021.02.19

# Install puppeteer
RUN apt-get update
# Install CA
RUN apt-get install -y ca-certificates

# Install node-fetch
RUN npm install node-fetch

# Copy sources
COPY sources/backend backend