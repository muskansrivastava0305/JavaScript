// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Dom learning</title>
// </head>
// <body>
//     <div class="bg-black" >
//         <h1 id="title" class="heading">Dom learning</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, dolore eveniet. Doloremque quas eum exercitationem nobis! Architecto at velit laudantium harum consectetur recusandae, distinctio quaerat. Facilis inventore velit ratione pariatur!</p>
//     </div> -->

    
       const matches = element.getElementsByClassName("colorbox");

for (let i = 0; i < matches.length; i++) {
  matches[i].classList.remove("colorbox");
  matches.item(i).classList.add("hueframe");
}

// <!-- </body>
// </html> -->