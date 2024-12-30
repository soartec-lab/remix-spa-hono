ARG IMAGE=oven/bun:slim

FROM $IMAGE
WORKDIR /app
USER root
RUN apt-get update -qq && apt-get install -y \
  vim \
  git \
  locales-all \
  unzip

ENV LANG ja_JP.UTF-8

RUN bun upgrade
# COPY package.json bun.lockb ./
# RUN bun install --frozen-lockfile
CMD sh -c "/bin/bash"
