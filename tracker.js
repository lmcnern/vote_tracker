'use strict';
$(document).ready(function() {
  var firstKitten = document.getElementById('firstKitten');
  var secondKitten = document.getElementById('secondKitten');
  var refreshButton = document.getElementById('refresh');

var randomKitten = ['K1.jpg', 'K2.jpg', 'K3.jpg', 'K4.jpg', 'K5.jpg', 'K6.jpg', 'K7.jpg', 'K8.jpg', 'K9.jpg', 'K10.jpg', 'K11.jpg', 'K12.jpg', 'K13.jpg'];

  function getKittenImage(kittenArr) {
     return kittenArr[Math.floor(Math.random() * kittenArr.length)];
  };

 function getKittens(ele) {
  var kitten = getKittenImage(randomKitten);
  var img = '<img src="'+ kitten +'"/>';
  ele.append(img);
  ele.attr('title', kitten);
 };

    getKittens($('#firstKitten'));
    getKittens($('#secondKitten'));

 console.log(getKittenImage(randomKitten));

 function vote() {
  //what kitten I picked
  var thing = $(this);
  console.log(thing.attr('title'));
  thing.attr('title')
  document.getElementById('refresh').disabled = false;
  //highlight winning kitten photo (make hot have an obvious effect)
  thing.addClass('hot');
  //also display that you didn't pick other kitten
  //increase the kitten's votes by one
  var catModel = new kittenModel(thing.attr('title'), 0);
  catModel.addVote();
  console.log(catModel.totalVotes);

};

 firstKitten.addEventListener('click', vote, false);
 secondKitten.addEventListener('click', vote, false);
 refreshButton.addEventListener('click', refreshKittens, false);

 function refreshKittens() {
  $('#firstKitten').children().remove();
  $('#secondKitten').children().remove();
  getKittens($('#firstKitten'));
  getKittens($('#secondKitten'));
 };

var kittenModel = function(name, totalVotes){
  this.name = name;
  this.totalVotes = totalVotes;

  this.addVote = function() {
    this.totalVotes ++;
    console.log(this.name+ this.totalVotes);
  };
};
var myCatChart = new Chart($('#voters')).Pie(data);
var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
]




});


