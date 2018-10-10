//always wrap javascript in closure for good practise
(function(){
	//define module
	var app = angular.module('store', ['store-products']);

	app.service("updateCounter", function(){
		var counter = 0;
		return {
			getCurrentCount: function(){ return counter; },
			setCurrentCount: function(value){ counter = value; }
		};
	});
	//define controller
	//capitalcase always!
	app.controller('StoreController', function(){
		this.product = products;
	});

	app.controller('CountController', function($scope){
		$scope.count = 0;

		$scope.increaseCount = function() {
			$scope.count += 1;
		};

		$scope.decreaseCount = function() {
			if( $scope.count > 0 ) {
				$scope.count -= 1;
			};
		};
	});




	var products = [
		{
			name: "Pro Filt'r Foundation",
			price: 34,
			description: 'Put on a new skin with this full-coverage, cake-free serum that can give you a new skin in 60 seconds',
			canPurchase: true,
			soldOut: false,
			count: 0,
			pictures: [
				{
					full:"images/foundation-full.jpg",
					thumb: "images/foundation.jpg",
				}
			],
			related: ["Pro Filt'r Primer"],
			reviews: [
				{
					stars:4,
					entry:"It looks like my natural skin. Amazing!",
					author: "suzy@hotmail.com",
				},
				{
					stars: 5,
					entry: "Perfect except the price",
					author: "amanda@gmail.com",
				}
			]
		},

		{
			name: "Pro Filt'r Primer",
			price: 32,
			description: 'Prep your canvas and get ready to last till 3am',
			canPurchase: true,
			soldOut: false,
			count: 0,
			pictures: [
				{
					full:"images/primer-full.jpg",
					thumb: "images/primer.jpg",
				}
			],
			related: ["Pro Filt'r Foundation"],
			reviews: [
				{
					stars:4,
					entry:"It looks like my natural skin. Amazing!",
					author: "suzy@hotmail.com",
				},
				{
					stars: 5,
					entry: "Perfect except the price",
					author: "amanda@gmail.com",
				}
			]				
		},

		{
			name: "Gloss Bomb Lip Luminizer",
			price: 18,
			description: 'Step up your presence with this BOMB of a gloss that\'ll reflect every ray of light coming your way',
			canPurchase: true,
			soldOut: false,
			count: 0,
			pictures: [
				{
					full:"images/gloss-full.jpg",
					thumb: "images/gloss.jpg",
				}
			],
			related: ["Pro Filt'r Primer", "Invisimatte Blotting Powder"],
			reviews: [
				{
					stars:4,
					entry:"It looks like my natural skin. Amazing!",
					author: "suzy@hotmail.com",
				},
				{
					stars: 5,
					entry: "Perfect except the price",
					author: "amanda@gmail.com",
				}
			]
		},

		{
			name: "Invisimatte Blotting Powder",
			price: 32,
			description: 'No one likes oily or crumbs so clean it up!',
			canPurchase: true,
			soldOut: false,
			count: 0,
			pictures: [
				{
					full:"images/powder-full.jpg",
					thumb: "images/powder.jpg",
				}
			],
			related: ["Gloss Bomb Lip Luminizer"],
			reviews: [
				{
					stars:4,
					entry:"It looks like my natural skin. Amazing!",
					author: "suzy@hotmail.com",
				},
				{
					stars: 5,
					entry: "Perfect except the price",
					author: "amanda@gmail.com",
				}
			]
		},

		{
			name: "Killawatt Freestyle Highlighter",
			price: 34,
			description: 'Make them notice you. Be known as the glazed donut, ray of sunshine, highlighted god(dess) you are.',
			canPurchase: true,
			soldOut: false,
			count: 0,
			pictures:[
				{
					full:"images/highlight-full.jpg",
					thumb: "images/highlight.jpg",
				}
			],
			related: ["Gloss Bomb Lip Luminizer", "Invisimatte Blotting Powder"],
			reviews: [
				{
					stars:4,
					entry:"It looks like my natural skin. Amazing!",
					author: "suzy@hotmail.com",
				},
				{
					stars: 5,
					entry: "Perfect except the price",
					author: "amanda@gmail.com",
				}
			]
		}

	]
})();

