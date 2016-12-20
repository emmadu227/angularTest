// (function(){
// 'use strict'

// 	angular.module('LunchChecker', ['ngRoute'])
// 	.controller('LunchCheckerController', LunchCheckerController);
// 	LunchCheckerController.$inject = ['$scope'];
// 	function LunchCheckerController($scope){	
// 		$scope.dishes = "";
// 		$scope.result = "";
// 		$scope.color = "";

// 		$scope.displayCheckResult = function(){
// 			var lunchCheckResult = checkIfTooMuch($scope.dishes);
// 			$scope.result = lunchCheckResult[0];
// 			$scope.color = lunchCheckResult[1];

// 		};

// 		function checkIfTooMuch(string){
// 			var checkResultMsg = "";	
// 			var checkResultColor = "";
// 			var dishesCount = string.split(",").filter(function isTrue(val){var patt=new RegExp(/\w+/); return patt.test(val);}).length;
// 			console.log(dishesCount);
// 			if (dishesCount<=0){checkResultMsg="Please at least input one dish."; checkResultColor="error";}
// 				else if(dishesCount <=3){checkResultMsg="Enjoy your lunch!"; checkResultColor="success";}
// 					else{checkResultMsg="Too much!"; checkResultColor="warning";}
// 			return [checkResultMsg,checkResultColor];
// 		};
// 	}
// })();
!function(){"use strict";function a(a){function b(a){var b="",c="",d=a.split(",").filter(function(b){var c=new RegExp(/\w+/);return c.test(b)}).length;return console.log(d),d<=0?(b="Please at least input one dish.",c="error"):d<=3?(b="Enjoy your lunch!",c="success"):(b="Too much!",c="warning"),[b,c]}a.dishes="",a.result="",a.color="",a.displayCheckResult=function(){var c=b(a.dishes);a.result=c[0],a.color=c[1]}}angular.module("LunchChecker",["ngRoute"]).controller("LunchCheckerController",a),a.$inject=["$scope"]}();
