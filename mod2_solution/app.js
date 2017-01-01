(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// TOBUYLIST - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getBuyItems();

  buyList.transferItemFromBuyToBought = function (itemIndex) {
    ShoppingListCheckOffService.transferItemFromBuyToBought(itemIndex);
  };

  // buyList.addItem = function (name,quantity) {
  //   ShoppingListCheckOffService.addItemtobought(name,quantity);
  // };

}


// BOUGHTLIST - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

  boughtList.transferItemFromBoughtToBuy = function (itemIndex) {
    ShoppingListCheckOffService.transferItemFromBoughtToBuy(itemIndex);
  };

  // boughtList.addItem = function (name,quantity) {
  //   ShoppingListCheckOffService.addItemToBuy(name,quantity);
  // };
}


function ShoppingListCheckOffService() {
  var service = this;

  // initial buyList as below
  var buyItems = [
  {
            "name" : "cupcakes",
            "quantity" : "6"
        },{
            "name" : "yogurt",
            "quantity" : "3"
        },{
            "name" : "cherry",
            "quantity" : "1kg"
        },{
            "name" : "tissue",
            "quantity" : "12"
        },{
            "name" : "tables",
            "quantity" : "2"
        }];

  // initial boughtList is empty
  var boughtItems = [];

  service.transferItemFromBuyToBought = function (itemIndex) {
    var item = buyItems.splice(itemIndex, 1);
    // console.log(item[0]);
    boughtItems.push(item[0]);
  };
  
  service.transferItemFromBoughtToBuy = function (itemIndex) {
    var item = boughtItems.splice(itemIndex, 1);
    buyItems.push(item[0]);
  };

  // service.addItemToBought = function (itemIndex) {
  //   var item = buyItems[itemIndex];
  //   boughtItems.push(item);
  // };

  // service.addItemToBuy = function (itemIndex) {
  //   var item = boughtItems[itemIndex];
  //   buyItems.push(item);
  // };


  service.getBuyItems = function () {
    return buyItems;
  };

    service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();