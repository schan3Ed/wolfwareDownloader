# Wolfware Downloader

## Purpose
To help NC state students to organize their downloaded files from wolfware in a better manner. At the event of downloading an item from wolfware, the extension will automatically redirect the desitnation download folder into "/Wolfware/ <Class Code> /".

## Screenshot
![alt text][screenshot]

[screenshot]: http://imgur.com/XZ3dy3Zl.png

## Install Instruction
See https://chrome.google.com/webstore/detail/wolfware-downloader/nkkhgimgcabahkdceeaofohafkifjfdp?hl=en

## User Settings
There are 3 user specified settings when conflict actions occur. An conflict action is when a file with the same name appears in the same destinated download folder. 

| Conflict action | Description |
|-----------------|-------------|
|Default          | which is uniquify, which takes the file name and attach, (1), (2) ... to the end of the filename and create a copy|
|Prompt           | prompt user the file explorer and let user define filenames, location, etc...|
|Overwrite        |overwrite the local file with the downloaded one to prevent many copies| 


## Build Instruction

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

NOTE: Current development mode UI looks slightly different, need to figure out why. 

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

