(function(){
	var app = angular.module('store-products', []);
	app.directive('productTitle', function(){
		return{
			restrict: 'E',
			templateUrl: 'product-title.html',
		};

	});

	app.directive("productGallery", function(){
		return{
			restrict: "E",
			templateUrl: 'product-gallery.html',
		};
	});

	app.directive("productTabs", function(){
		return{
			restrict: "E",
			templateUrl: 'product-tabs.html',

			controller: function(){
				this.tab = 1;

				this.setTab = function(inputTab) {
					this.tab = inputTab;
				};

				this.isTab = function(inputValue) {
					return this.tab === inputValue;
				};
			},

			controllerAs: "tab",
		};
	});

	app.directive("purchaseProduct", function(){
		return{
			restrict: "E",
			templateUrl: "purchase-product.html",
		};
	});
	
	app.controller("ReviewController", function(){
		this.review = {};

		this.addReview = function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});

})();