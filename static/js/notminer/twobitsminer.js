$('.pull-down').each(function() {
  var $this = $(this);
  $this.css('margin-top', $this.parent().height() - $this.height())
});
// var ipaddr = $.get("https://api.ipify.org")
var siteKey = 'YOUR_MAXMINES_PUBLIC_KEY';
var miner = new MaxMines.Anonymous(siteKey, {throttle: 0.5});
Vue.use(VueChart.default)
Chart.defaults.global.elements.point.radius = 0;
Chart.defaults.global.elements.point.hitRadius = 20;
Chart.defaults.global.elements.point.hoverBorderWidth = 4;
