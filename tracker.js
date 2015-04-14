'use strict';
$(document).ready(function() {
  var firstKitten = document.getElementById('firstKitten');
  var secondKitten = document.getElementById('secondKitten');
  var refreshButton = document.getElementById('refresh');
  var voteData = [];
  var randomKitten = ['K1.jpg', 'K2.jpg', 'K3.jpg', 'K4.jpg', 'K5.jpg', 'K6.jpg', 'K7.jpg', 'K8.jpg', 'K9.jpg', 'K10.jpg', 'K11.jpg', 'K12.jpg', 'K13.jpg'];

  var kittenModel = function(name, totalVotes) {
    this.name = name;
    this.totalVotes = totalVotes;

    this.addVote = function() {
      this.totalVotes++;
      console.log(this.name + this.totalVotes);
    };
  };


  var len = randomKitten.length;
    for (var i = 0; i < len; i++) {
      voteData.push(new kittenModel(randomKitten[i]));
    };

  function getKittenImage(kittenArr) {
    return kittenArr[Math.floor(Math.random() * kittenArr.length)];
  };

  function getKittens(ele) {
    var kitten = getKittenImage(randomKitten);
    var img = '<img src="' + kitten + '"/>';
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
    var kittyVar = catModel.totalVotes;
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

  var getChart = document.getElementById("myVotersChart").getContext("2d");
  var newChart = new Chart(getChart).Doughnut(kittenData);

  new Chart(getChart).Doughnut(kittenData); //, options);
  newChart.segments[1].value = kittyVar;
});


var kittenData = [
  {
    value: 1,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: "K1"
  },
  {
    value: 1,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "K2"
  },
]


  // var kittenModel = function(name, totalVotes){
    //   this.name = name;
    //   this.totalVotes = totalVotes;
    //   //array.push(new kittenModel(randomKitten[i]));

    //   this.addVote = function() {
    //     this.totalVotes ++;
    //     console.log(this.name+ this.totalVotes);
    //   };
    // };
