
(function() {
  var app = angular.module('gemStore', ['store-products']);

  //Img Gallery Controller
  app.controller('GalleryController', function() {
    this.imageIndex = 0;
    this.setCurrent = function(imageNumber) {
      console.log(imageNumber);
      this.imageIndex = imageNumber || 0;
    };
  });

  //controller for the store products make it equal to mock data
  app.controller('StoreController', function() {
    this.products = gems;
  });

  //review Controler
  app.controller("ReviewController", function(){
    this.review = {};
    //add a review
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};//make empty after added
    };
  });
  
  //Data to render the page
  var gems = [
    {
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "images/gem-02.gif",
        "images/gem-05.gif",
        "images/gem-09.gif"
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this gem!",
          author: "joe@thomas.com",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "This gem sucks.",
          author: "tim@hater.com",
          createdOn: 1397490980837
        }
      ]
    }, {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "images/gem-01.gif",
        "images/gem-03.gif",
        "images/gem-04.gif",
      ],
      reviews: [
        {
          stars: 3,
          body: "I think this gem was just OK, could honestly use more shine, IMO.",
          author: "JimmyDean@sausage.com",
          createdOn: 1397490980837
        }, {
          stars: 4,
          body: "Any gem with 12 faces is for me!",
          author: "gemsRock@alyssaNicoll.com",
          createdOn: 1397490980837
        }
      ]
    }, {
      name: 'Zircon',
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        "images/gem-06.gif",
        "images/gem-07.gif",
        "images/gem-08.gif"
      ],
      reviews: [
        {
          stars: 1,
          body: "This gem is WAY too expensive for its rarity value.",
          author: "turtleguyy@zdn.me",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "BBW: High Shine != High Quality.",
          author: "LouisW407@gmail.com",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "Don't waste your rubles!",
          author: "nat@flatland.com",
          createdOn: 1397490980837
        }
      ]
    }
  ];
})()