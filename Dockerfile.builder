FROM node:18-buster

WORKDIR /builder
COPY ./package.json /builder/package.json
COPY ./nx.json /builder/nx.json
COPY ./tsconfig.base.json /builder/tsconfig.base.json
COPY ./apps /builder/apps
copy ./libs /builder/libs
COPY ./tools /builder/tools

RUN npm install
RUN npm install --global nx@latest

CMD ['nx', 'run-many', '--target=build', '--parallel', '--watch']
