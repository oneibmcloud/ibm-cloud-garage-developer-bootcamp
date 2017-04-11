#!/bin/bash

CURRENT_BRANCH="git symbolic-ref --short HEAD"

git checkout integration
git pull origin integration
git merge $CURRENT_BRANCH --no-ff --log
git push origin integration --no-verif


