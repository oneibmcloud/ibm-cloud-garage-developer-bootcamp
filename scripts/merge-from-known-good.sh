#!/bin/bash

set -ev

git branch integration
git fetch origin integration
git merge integration --ff-only


