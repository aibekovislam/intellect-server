# Используем Node.js 18 (или новее)
FROM node:18-alpine

# Устанавливаем необходимые зависимости для работы с node-gyp (Python, build-base и другие инструменты)
RUN apk add --no-cache \
  python3 \
  make \
  g++ \
  bash

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем все зависимости
RUN npm install

# Копируем весь проект в рабочую директорию контейнера
COPY . .

# Собираем TypeScript (если необходимо)
RUN npm run build

# Открываем порт, на котором будет работать Strapi
EXPOSE 1337

# Запускаем Strapi в production-режиме
CMD ["npm", "start"]