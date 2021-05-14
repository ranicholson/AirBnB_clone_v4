// jQuery script to listen to checkboxes
$(document).ready(function () {
  $('input[type="checkbox"]').click(function (data) {
    const amenityIds = {};
    if ($(this).prop('checked') === true) {
      amenityIds[data.id] = data.name;
    } else if ($(this).prop('checked') === false) {
      delete amenityIds[data.id];
    }
    let amenityNames = [];
    for (const key in amenityIds) {
      amenityNames.push(amenityIds[key]);
    }
    amenityNames[0] = "test";
    console.log(amenityIds);
    $('.amenities h4').text(amenityNames);
  });
});
