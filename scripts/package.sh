#!/bin/bash

mkdir -p build

cp package.json build
cp .cfignore build
cp manifest-*.yml build

cp -rf dist build
cp -rf server build
