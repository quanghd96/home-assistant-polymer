#!/bin/bash
script/build_frontend
cd hass_frontend
git init
git remote add origin git@github.com:quanghd96/home-assistant-build.git
mkdir hass_frontend
mv * hass_frontend
cp ../setup.py ./
git add .
git commit -m "update"
git push --set-upstream origin master -f