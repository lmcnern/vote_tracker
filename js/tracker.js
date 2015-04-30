'use strict';
$(document).ready(function() {

var cats = [];
var barChart;
var tracker = {
  selected: []
  ,checkSelected: function(checkIdx) {
    var c = 0;
    var len = this.selected.length;
    for(c; c < len; c++) {
      if(this.selected[c] === checkIdx) return true;
    }
    return false;
  },
  addImageIdx: function(idx){
    if(!(this.checkSelected(idx))){
      this.selected.push(idx);
      return idx;
    }else{
      return -1;
    }
  },
  resetSelected:function() {
    this.selected.length = 0;
  }
};


var Cat = function(url, id) {
      this.url = url;
      this.votes = 0;
      this.id = id
    };

//AJAX
  $.ajax({
    url: 'https://api.imgur.com/3/album/WMoAB.json',
    method: 'GET',
    headers: {
      'Authorization': 'Client-ID 9edfd1fda2db75b'
    }
  })

  .done(function(res) {
    start(res.data.images);
  })
  .fail(function(err) {
    console.dir(err);
  });

  function start(srcArray) {
    var picOne = document.getElementById('firstKitten');
    var picTwo = document.getElementById('secondKitten');
    var c = 0, len = srcArray.length;
      for (c; c < len ; c++) {
        cats.push(new Cat(srcArray[c].link, srcArray[c].id));
    }
    renderCats(picOne);
    renderCats(picTwo);
    addEvents(picOne, picTwo);
    buildChart();
  };

  function randomInt(max) {
    return Math.floor(Math.random() * max);
  };

  function renderCats(pic, otherPic) {
    var picNew, otherIdx;
    if(otherPic) otherIdx = otherPic.dataset.idx;
      else otherIdx = -1;
      do {
        picNew = getNewImage();
      }
      while (picNew.idx == otherIdx);
      pic.setAttribute('src', picNew.img);
      pic.setAttribute('data-idx', picNew.idx);
    // var left = document.getElementById('firstKitten');
    // var right = document.getElementById('secondKitten');
    // var len = cats.length;
    // var idx = randomInt(len);
    // left.setAttribute('src', cats[idx].url);
    // left.setAttribute('data-idx', idx);
    // idx = randomInt(len);
    // right.setAttribute('src', cats[idx].url);
    // right.setAttribute('data-idx', idx);
  }

  function addEvents(pic1, pic2) {
    document.getElementById('reset').addEventListener('click', function(e) {

    });
    pic1.addEventListener('click', function(e) {
      var idx = e.target.dataset.idx;
      cats[idx].votes +=1;
      barChart.datasets[0].bars[idx].value = cats[idx].votes;
      barChart.update();
      renderCats(pic2, pic1);
    });
    pic2.addEventListener('click', function(e) {
      var idx = e.target.dataset.idx;
      cats[idx].votes +=1;
      barChart.datasets[0].bars[idx].value = cats[idx].votes;
      renderCats(pic1, pic2);
      barChart.update();
    });
  }

  function zeroOutVotes() {
    var c = 0;
    var len = cats.length;
    for (c; c < len; c++) {
      cats[c].votes = 0;
    }
  resetChart();
  }

  function resetChart() {
    var c = 0;
    var len = barChart.datasets[0].bars.length;
    for (c; c < len; c++) {
      barChart.datasets[0].bars[c].value = 0;
    }
  barChart.update();
  }



  function getNewImage() {
    var sLen = tracker.selected.length;
    var iLen = cats.length;
    var idx = 0;
    if (sLen < iLen - 1) {
      idx === randomInt(iLen);
      while (!(tracker.addImageIdx(idx) === idx)) {
        idx = randomInt(iLen);
      }
    }
    else {
      tracker.resetSelected();
      idx = randomInt(iLen);
    }
    return {
      idx: idx,
      img: cats[idx].url
    }
  }

  function buildChart() {
     var ctx = document.getElementById('myChart').getContext('2d');
     var c = 0;
     var len = cats.length;
     var data = {labels:[], datasets: [{data:[], fillColor: '#2F2933'}]};
     for (c; c < len; c++) {
      data.labels.push(cats[c].id);
      data.datasets[0].data.push(cats[c].votes);
     }
     barChart = new Chart(ctx).Bar(data);
   }
     });
   // var newChart = new Chart(ctx).Doughnut()

  // (function() {
  // var images;

//   var saveLocalStorage = function(data) {
//     localStorage.setItem('ajaxData', JSON.stringify(data));
//   };

//   var renderKittens = function(images) {
//     var $main = $('#content');

//     images.forEach(function(images) {
//       $main.append('<img src="' + img.link + '"></img>');
//     });
//     saveLocalStorage(images);
//   };

// })();

//   var kittyVar;
  // var firstKitten = document.getElementById('firstKitten');
  // var secondKitten = document.getElementById('secondKitten');
  // var refreshButton = document.getElementById('refresh');
  // var voteData = [];
  // var randomKitten = ['K1.jpg', 'K2.jpg', 'K3.jpg', 'K4.jpg', 'K5.jpg', 'K6.jpg', 'K7.jpg', 'K8.jpg', 'K9.jpg', 'K10.jpg', 'K11.jpg', 'K12.jpg', 'K13.jpg'];

  // var kittenModel = function(source) {
  //   this.source = source;
  //   this.value = 0;
    // this.color = 'red';
    // this.highlight = 'blue';

  //   this.addVote = function() {
  //     this.value++;
  //     console.log(this.source + ',' + this.value);
  //   };
  // };

  // var len = randomKitten.length;
  //   for (var i = 0; i < len; i++) {
  //     voteData.push(new kittenModel(randomKitten[i]));
  // };

  // function getKittenImage(kittenArr) {
  //   return kittenArr[Math.floor(Math.random() * kittenArr.length)];
  // };

  // function getKittens(ele) {
  //   var kitten = getKittenImage(randomKitten);
  //   var img = '<img src="' + kitten + '"/>';
  //   ele.append(img);
  //   ele.attr('title', kitten);
  // };

  // getKittens($('#firstKitten'));
  // getKittens($('#secondKitten'));

  // function vote() {
  //   //what kitten I picked
  //   var thing = $(this);
  //   var voteTitle = thing.attr('title');
  //   thing.attr('title')
  //   document.getElementById('refresh').disabled = false;
  //   //highlight winning kitten photo (make hot have an obvious effect)
  //   thing.addClass('hot');
    //also display that you didn't pick other kitten
    // increase the kitten's votes by one

    // var count = 0;
    // var voteDataLength = voteData.length;
    //   for (count; count < voteDataLength; count++) {
    //     //count is counting my position in the for loop (initializing)
    //     //second segment is the condition for exiting the for loop (as long as condition is true, loop continues)
    //     //third segment is what to do when you end the loop (add one) (third segment increments or subtracts from number)
    //     console.log(voteTitle);
    //     console.log(voteData[count].source);
    //     if (voteTitle === voteData[count].source) {
          // voteData[count].addVote();
          // break;
          //if condition is handled as middle segment of for loop
          //run vote function to add one to value of the object in voteData whose index is = to value of count
          //addvote pls
          //break
          //
  //       }
  //     }
  //   var getChart = document.getElementById("myVotersChart").getContext('2d');
  //   var newChart = new Chart(getChart).Doughnut(voteData);

  // };

  // $('#firstKitten').click('click', vote, false);
  // $('#secondKitten').click('click', vote, false);
  // $('#refresh').click('click', refreshKittens, false);

  // function refreshKittens() {
  //   $('#firstKitten').children().remove();
  //   $('#secondKitten').children().remove();
  //   getKittens($('#firstKitten'));
  //   getKittens($('#secondKitten'));
//   };

//   var getChart = document.getElementById("myVotersChart").getContext('2d');
//   var newChart = new Chart(getChart).Doughnut(voteData);

// });


// var kittenData = [
//   {
//     value: 1,
//     color: "#F7464A",
//     highlight: "#FF5A5E",
//     label: "K1"
//   },
//   {
//     value: 1,
//     color: "#46BFBD",
//     highlight: "#5AD3D1",
//     label: "K2"
//   },
// ]

