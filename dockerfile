FROM node:22

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN yarn
RUN yarn global add vite

# Copie tous les fichiers du projet dans le répertoire de travail
COPY . .

RUN yarn run build

# Expose le port sur lequel l'application va tourner
EXPOSE 4173

CMD ["vite","preview", "--host"]
