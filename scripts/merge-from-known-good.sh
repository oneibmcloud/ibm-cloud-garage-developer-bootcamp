#!/bin/bash

git branch integration
git fetch origin integration
git merge integration --ff-only


