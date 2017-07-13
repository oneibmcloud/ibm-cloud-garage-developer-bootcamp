#!/bin/bash

mkdir -p archive

tar -czf archive/dist.tar.gz .cfignore manifest.yml package.json dist scripts server
tar -czf archive/archive.tar.gz *.* node_modules server web
