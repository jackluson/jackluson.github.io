$(document).ready(function() {
  var $btn = $("nav.greedy-nav .greedy-nav__toggle");
  var $vlinks = $("nav.greedy-nav .visible-links");
  var $hlinks = $("nav.greedy-nav .hidden-links");
  var numOfItems = 0;
  var totalSpace = 0;
  var closingTime = 1000;
  var breakWidths = [];
  // Get initial state
  $vlinks.children().outerWidth(function(i, w) {
    totalSpace += w;
    numOfItems += 1;
    breakWidths.push(totalSpace);
  });
  console.log('breakWidths',breakWidths)
  var availableSpace, numOfVisibleItems, requiredSpace, timer;

  function check() {
    // Get instant state
    availableSpace = $vlinks.width() - $btn.width() - 150;
    numOfVisibleItems = $vlinks.children().length;
    requiredSpace = breakWidths[numOfVisibleItems - 1];
    if (requiredSpace > availableSpace) {
      $vlinks
        .children()
        .last()
        .prependTo($hlinks);
      numOfVisibleItems -= 1;
      console.log('comein')
      check();
      // There is more than enough space
    } else if (!!(availableSpace > breakWidths[numOfVisibleItems])) {
      console.log('width', breakWidths[numOfVisibleItems])
      $hlinks
        .children()
        .first()
        .appendTo($vlinks);
      numOfVisibleItems += 1;
      check();
    }
    // Update the button accordingly
    $btn.attr("count", numOfItems - numOfVisibleItems);
    if (numOfVisibleItems === numOfItems) {
      $btn.addClass("hidden");
    } else {
      $btn.removeClass("hidden");
    }
  }
  // Window listeners
  $(window).resize(function() {
    console.log('resize')
    check();
  });

  $btn.on("click", function() {
    $hlinks.toggleClass("fold");
    $(this).toggleClass("close");
    clearTimeout(timer);
  });
  $hlinks
    .on("mouseleave", function() {
      // Mouse has left, start the timer
      timer = setTimeout(function() {
        $hlinks.addClass("fold");
        $btn.toggleClass("close");
      }, closingTime);
    })
    .on("mouseenter", function() {
      // Mouse is back, cancel the timer
      clearTimeout(timer);
    });
  check();
});