# React-Coursework-Udemy
Repo for react coursework udemy tut

# Installations
1. download nodejs package from https://nodejs.org/en/download/
2. install yarn using command npm install -g yarn
3. install live-server using yarn command yarn install global live-server
4. install babel using command yarn install global babel
5. install babel presets env and react using command yarn add babel-preset-react babel-preset-env
6. for using webpacks yarn add webpack validator react react-dom live-server babel-preset-react babel-preset-env babel-loader babel-core babel-cli babel


babel-core and babel-loader will help to convert jsx into plain js from webpack just like we used to do from command line using babel-cli babel-preset-react and babel-preset-env


To compile using babel use command. 
  babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
