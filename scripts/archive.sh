#!/bin/bash

mkdir -p archive

tar -czf archive/dist.tar.gz .cfignore manifest.yml package.json node_modules dist scripts server
