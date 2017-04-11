#!/bin/bash

CURRENT_BRANCH="git symbolic-ref --short HEAD"

git branch integration
git fetch origin integration
git merge integration --ff-only


