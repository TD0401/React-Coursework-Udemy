# React-Coursework-Udemy
Repo for react coursework udemy tut

# Installations
1. download nodejs package from https://nodejs.org/en/download/
2. install yarn using command npm install -g yarn
3. install live-server using yarn command yarn install global live-server
4. install babel using command yarn install global babel
5. install babel presets env and react using command yarn add babel-preset-react babel-preset-env
6. for using webpacks you can remove previous modules and locally install - yarn add webpack validator react react-dom live-server babel-preset-react babel-preset-env babel-loader babel-core babel-cli babel

# Purpose of Installations
1. To run the server on command prompt run the command - **live-server public/** - This helps to run the http server. It keeps on detecting the changes in the public folder and keeps on reloading.
2. babel, babel-cli, babel-presets-env, babel-preset-env modules help to convert the jsx into js files. To compile using babel use command - **babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch** - The --watch in the end continuously monitors for changes and keep building the js files on save.
3. webpack is the a great way to pack or bundle js files. Also helps in splitting the code while development into several files and bundling it back during build for production. webpack.config.js is used for this.
4. package.json maintains all the local dependencies, and the script we can run using command - **yarn run scriptname** - Example yarn run serve or yarn run build. Here we can define to build using babel cli or webpack.
5. babel-core and babel-loader will help to convert jsx into plain js when building through webpack. But to pass the arguments we use .babelrc file.



