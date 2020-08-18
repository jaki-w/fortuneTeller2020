$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".showLater").show();
    $("input:checkbox[name=occurances]:checked").each(function() {
      $("#returnResults").append($(this).val());
    });
  });
});