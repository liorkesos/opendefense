#!/bin/bash

## The "save to chat" overwrites the github ci and npm lock
## Add the github workflow 
mkdir -p .github/workflows
cp ./ci/deploy-pages.yml .github/workflows


## Create npm.lock
npm install 
git add package-lock.json
git commit -am "Adding lock"
