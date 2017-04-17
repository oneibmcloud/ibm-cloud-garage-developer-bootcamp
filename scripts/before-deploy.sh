#!/bin/bash

yarn run dist
yarn install --production --ignore-scripts --prefer-offline --force
yarn global add shx --exact
shx mv server dist
shx mv node_modules dist
shx mv package.json dist
shx mv ./.cfignore dist
shx mv ./manifest-dev.yml dist
shx mv README.md dist
shx mv LICENSE dist


