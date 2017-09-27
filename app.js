'use strict';

var random = function(min, max){
  return( Math.round(Math.random() * (max - min) + min));
}

var times = [
  '6 AM',
  '7 AM',
  '8 AM',
  '9 AM',
  '10 AM',
  '11 AM',
  '12 PM',
  '1 PM',
  '2 PM',
  '3 PM',
  '4 PM',
  '5 PM',
  '6 PM',
  '7 PM',
  '8 PM',
  '9 PM'
];

// 1st and Pike	23	65	6.3
// SeaTac Airport	3	24	1.2
// Seattle Center	11	38	3.7
// Capitol Hill	20	38	2.3
// Alki	2	16	4.6

var locationArray = [
  {
    locationName: '1st And Pike',
    minPerCust: 23,
    maxPerCust: 65,
    avgCookiePerSale: 6.3,
    salesPerHour: [],
    returnAll: function() {
      console.log('returning All');
      console.log(this.minPerCust);
      var endTotal = 0;
      for(var i = 0; i < times.length; i++) {
        var randomNum = random( this.minPerCust , this.maxPerCust );
        this.salesPerHour.push( randomNum );
        endTotal += randomNum;
      };
      this.salesPerHour.push(endTotal);

      console.log(this.salesPerHour);
    }
  },

  {
    locationName: 'SeaTac Airport',
    minPerCust: 3,
    maxPerCust: 24,
    avgCookiePerSale: 1.2,
    salesPerHour: [],
    returnAll: function() {
      console.log('returning All');
      console.log(this.minPerCust);
      var endTotal = 0;
      for(var i = 0; i < times.length; i++) {
        var randomNum = random( this.minPerCust , this.maxPerCust );
        this.salesPerHour.push( randomNum );
        endTotal += randomNum;
      };
      this.salesPerHour.push(endTotal);

      console.log(this.salesPerHour);
    }
  },

  {
    locationName: 'Seattle Center',
    minPerCust: 11,
    maxPerCust: 38,
    avgCookiePerSale: 3.7,
    salesPerHour: [],
    returnAll: function() {
      console.log('returning All');
      console.log(this.minPerCust);
      var endTotal = 0;
      for(var i = 0; i < times.length; i++) {
        var randomNum = random( this.minPerCust , this.maxPerCust );
        this.salesPerHour.push( randomNum );
        endTotal += randomNum;
      };
      this.salesPerHour.push(endTotal);

      console.log(this.salesPerHour);
    }
  },

  {
    locationName: 'CapitolHill',
    minPerCust: 20,
    maxPerCust: 38,
    avgCookiePerSale: 2.3,
    salesPerHour: [],
    returnAll: function() {
      console.log('returning All');
      console.log(this.minPerCust);
      var endTotal = 0;
      for(var i = 0; i < times.length; i++) {
        var randomNum = random( this.minPerCust , this.maxPerCust );
        this.salesPerHour.push( randomNum );
        endTotal += randomNum;
      };
      this.salesPerHour.push(endTotal);

      console.log(this.salesPerHour);
    }
  },

  {
    locationName: 'Alki',
    minPerCust: 2,
    maxPerCust: 16,
    avgCookiePerSale: 4.6,
    salesPerHour: [],
    returnAll: function() {
      console.log('returning All');
      console.log(this.minPerCust);
      var endTotal = 0;
      for(var i = 0; i < times.length; i++) {
        var randomNum = random( this.minPerCust , this.maxPerCust );
        this.salesPerHour.push( randomNum );
        endTotal += randomNum;
      };
      this.salesPerHour.push(endTotal);

      console.log(this.salesPerHour);
    }
  }
];



for( index in locationArray) {
  var houseSalesSheet = locationArray[index].returnAll();

}


function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');

  thEl.textContent = Store;
}


//test constructor code below this point

var StoreEntry = function(locationName, minPerCust, maxPerCust, avgCookiePerSale) {
  locationName = locationName;
  minPerCust = minPerCust;
  maxPerCust = maxPerCust;
  avgCookiePerSale = avgCookiePerSale;
  salesPerHour = [];
  returnAll = function() {
    console.log('returning All');
    console.log(this.minPerCust);
    var endTotal = 0;
    for(var i = 0; i < times.length; i++) {
      var randomNum = random( this.minPerCust , this.maxPerCust );
      this.salesPerHour.push( randomNum );
      endTotal += randomNum;
    };
    this.salesPerHour.push(endTotal);

    console.log(this.salesPerHour);
  };
};

var LocationArrayConst = [];

// 1st and Pike	23	65	6.3
// SeaTac Airport	3	24	1.2
// Seattle Center	11	38	3.7
// Capitol Hill	20	38	2.3
// Alki	2	16	4.6

LocationArrayConst.push(StoreEntry('1st and Pike', 23, 65, 6.3));
LocationArrayConst.push(StoreEntry('SeaTac Airport', 3, 24, 1.2));
LocationArrayConst.push(StoreEntry('Seattle Center', 11, 38, 3.7));
LocationArrayConst.push(StoreEntry('Capitol Hill', 20, 38, 2.3));
LocationArrayConst.push(StoreEntry('1st and Pike', 2, 16, 4.6));

console.table(LocationArrayConst);