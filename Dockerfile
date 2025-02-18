# 使用官方的 Nginx 镜像作为基础镜像
FROM nginx:alpine

# 删除默认的 nginx 网站内容
RUN rm -rf /usr/share/nginx/html/*

# 复制本地的 website 目录到容器的 nginx 网站目录
COPY . /usr/share/nginx/html

# 暴露容器的 8083 端口
EXPOSE 8083
