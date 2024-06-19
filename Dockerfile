# # for production
# 階段1
# FROM node:20.10.0-alpine as builder

# WORKDIR /usr/src/app

# COPY package.json ./

# RUN yarn install

# COPY . ./

# RUN yarn build

# # 階段2：使用Distroless作為基礎映像
# FROM gcr.io/distroless/nodejs
# WORKDIR /usr/src/app

# # 從第一階段複製構建的應用程序代碼
# COPY --from=builder /usr/src/app/dist ./dist
# COPY --from=builder /usr/src/app/.env ./.env

# EXPOSE 3000

# CMD ["dist/main.js"]

# # for dev
FROM node:20.10.0-alpine

# 創建非 root 使用者
RUN groupadd -r myuser && useradd -r -g myuser myuser

WORKDIR /usr/src/app

COPY package.json ./

COPY . ./

# 更改檔案擁有者
RUN chown -R myuser:myuser /app

# 切換到非 root 使用者
USER myuser

RUN yarn install

EXPOSE 3000

CMD ["yarn", "dev"]
