$(document).ready(function() {
	console.log( "document loaded" );

//declare section variables
  var currentIndex = 0,
  items = $('.container div'),
  itemAmt = items.length;

//how to click and make it work
function cycleItems() {
  var item = $('.container div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}
//interval time
var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);
cycleItems();
//this closes the doc ready
});

