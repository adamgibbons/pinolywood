(function(){
  var leaves = $.find('#film-menu aside ul li a');
  var PATH = window.location.pathname;

  $(leaves).each(function (idx, leaf) {
    var link = $(leaf).attr('href');
    if (PATH.indexOf(link) !== -1) {
      $(leaf).addClass('is-active');
    }
  });
})($);