$('document').ready(function () {
  const val = {};
  $('.amenities input[type="checkbox"]').change(function () {
    if (this.checked) {
      val[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      if (val[$(this).attr('data-id')]) {
        delete val[$(this).attr('data-id')];
      }
    }
    let result = Object.values(val);
    result = result.join(', ');
    $('.amenities h4').text(result);
  });
});
