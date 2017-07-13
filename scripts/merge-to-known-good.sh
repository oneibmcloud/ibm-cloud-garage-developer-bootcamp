#!/bin/bash

set -ev

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "$CURRENT_BRANCH"

git checkout integration
git pull origin integration
git merge "$CURRENT_BRANCH" --no-ff --log
git push https://$USERNAME:$PASSWORD@github.com/wpannell/capstone-project.git integration --no-verif


