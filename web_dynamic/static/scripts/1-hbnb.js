$('document').ready(function () {
  const amenityIds = {};
  $('INPUT[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amenityIds[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenityIds[$(this).attr('data-id')];
    }
    $('.amenities h4').text(Object.values(amenityIds).join(', '));
  });
});
