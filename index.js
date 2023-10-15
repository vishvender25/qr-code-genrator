/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";

import qr from "qr-image";

import fs from "fs";

inquirer
  .prompt([
    {name : "URL",
    "message" : "Type your URL : "}
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_image = qr.image(url);
    qr_image.pipe(fs.createWriteStream(`./images/image.png`));
    
    fs.writeFile(`./URLs/URL.txt`, url , (err) =>{
      if(err){
        throw err;
      }
      else{
          console.log("File written and moved successfully..");
      }
  });


  })
  .catch((error) => {
    if (error.isTtyError) {
      throw error;

    } else {

    }
  });

