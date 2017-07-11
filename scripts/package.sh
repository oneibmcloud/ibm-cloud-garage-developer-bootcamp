#!/bin/bash

mkdir -p build

cp .cfignore build
cp changelog.txt build
cp manifest.yml build
cp package.json build

cp -rf dist build
cp -rf scripts build
cp -rf server build
