ARG IMAGE=oven/bun:slim

FROM $IMAGE
WORKDIR /app
USER root
ENV LANG ja_JP.UTF-8
RUN apt-get update -qq && apt-get install -y \
  vim \
  git \
  locales-all \
  unzip \
  default-mysql-client 
RUN bun upgrade
COPY package.json bun.lockb ./
COPY packages ./packages
RUN bun install
CMD sh -c "/bin/bash"
