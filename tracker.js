'use strict';
$(document).ready(function() {
// var firstKittenPic = document.getElementbyId('firstKitten');
// var secondKittenPic = document.getElementbyId('secondKitten');



var randomKitten = ['K1.jpg', 'K2.jpg', 'K3.jpg', 'K4.jpg', 'K5.jpg', 'K6.jpg', 'K7.jpg', 'K8.jpg', 'K9.jpg', 'K10.jpg', 'K11.jpg', 'K12.jpg', 'K13.jpg'];

  function getKittenImage(kittenArr) {
     return kittenArr[Math.floor(Math.random() * kittenArr.length)];
  }

    // var cat = $('img');
    // cat.src = randomKitten[getKittenImage(randomKitten)];
    var img = '<img src="'+ getKittenImage(randomKitten) +'"/>';
    var img2 = '<img src="'+ getKittenImage(randomKitten) +'"/>';
    $('#firstKitten').append(img);
    $('#secondKitten').append(img2);
  //left = select right = append


 console.log(getKittenImage(randomKitten));

  var voters = document.getElementById('voters').getContext('2d');
  new Chart(voters).Line(voterData);

});



// function getRandomKittens() {
//     for (var i = 0; i < 18; i++) {
//         var random = randomKittenImage[Math.floor(Math.random() * randomKittenImage.length)];
//         var kittenPic = new kittenPic();
//         kittenPic.src = kittenPath+random;
//         document.body.appendChild(kittenPic);
//     };
// };

// function getKittenImage(randomKittenImage, path) {
//     path = path || 'imgurAlbum/'; // My default path to images
//     var num = Math.floor( Math.random() * randomKittenImage.length );
//     var img = randomKittenImage[ num ];
//     var writeKittens = '<img src="' + path + img + '" alt = "">';
//     document.write(writeKittens); document.close();
// }();
//
