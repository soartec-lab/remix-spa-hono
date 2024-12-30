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
# NOTE: Prisma depends on node, so `prisma generate` will not work without node.
# SEE:  https://github.com/oven-sh/bun/issues/5320#issuecomment-2185189902
COPY --from=node:22 /usr/local/bin/node /usr/local/bin/node
COPY package.json bun.lockb ./
COPY packages ./packages
RUN bun install
CMD sh -c "/bin/bash"
