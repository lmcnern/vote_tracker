'use strict';
$(document).ready(function() {
  var kittyVar;
  var firstKitten = document.getElementById('firstKitten');
  var secondKitten = document.getElementById('secondKitten');
  var refreshButton = document.getElementById('refresh');
  var voteData = [];
  var randomKitten = ['K1.jpg', 'K2.jpg', 'K3.jpg', 'K4.jpg', 'K5.jpg', 'K6.jpg', 'K7.jpg', 'K8.jpg', 'K9.jpg', 'K10.jpg', 'K11.jpg', 'K12.jpg', 'K13.jpg'];

  var kittenModel = function(label) {
    this.label = label;
    this.value = 0;
    this.color = 'red';
    this.highlight = 'blue';

    this.addVote = function() {
      this.value++;
      console.log(this.label + ',' + this.value);
    };
  };

  var len = randomKitten.length;
    for (var i = 0; i < len; i++) {
      voteData.push(new kittenModel(randomKitten[i]));
  };

    console.log(voteData.length);

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

  function vote() {
    //what kitten I picked
    var thing = $(this);
    var voteTitle = thing.attr('title');
    thing.attr('title')
    document.getElementById('refresh').disabled = false;
    //highlight winning kitten photo (make hot have an obvious effect)
    thing.addClass('hot');
    //also display that you didn't pick other kitten
    // increase the kitten's votes by one

    var count = 0;
    var voteDataLength = voteData.length;
      for (count; count < voteDataLength; count++) {
        //count is counting my position in the for loop (initializing)
        //second segment is the condition for exiting the for loop (as long as condition is true, loop continues)
        //third segment is what to do when you end the loop (add one) (third segment increments or subtracts from number)
        console.log(voteTitle);
        console.log(voteData[count].label);
        if (voteTitle === voteData[count].label) {
          voteData[count].addVote();
          break;
          //if condition is handled as middle segment of for loop
          //run vote function to add one to value of the object in voteData whose index is = to value of count
          //addvote pls
          //break
          //
        }
      }
    var getChart = document.getElementById("myVotersChart").getContext('2d');
    var newChart = new Chart(getChart).Doughnut(voteData);

  };

  //add the update function from the chart.js API to this?
  firstKitten.addEventListener('click', vote, false);
  // and add the update function here too!
  secondKitten.addEventListener('click', vote, false);
  refreshButton.addEventListener('click', refreshKittens, false);

  function refreshKittens() {
    $('#firstKitten').children().remove();
    $('#secondKitten').children().remove();
    getKittens($('#firstKitten'));
    getKittens($('#secondKitten'));
  };

  var getChart = document.getElementById("myVotersChart").getContext('2d');
  var newChart = new Chart(getChart).Doughnut(voteData);

});


var kittenData = [
  {
    value: 1,
    // color: "#F7464A",
    // highlight: "#FF5A5E",
    label: "K1"
  },
  {
    value: 1,
    // color: "#46BFBD",
    // highlight: "#5AD3D1",
    label: "K2"
  },
]
