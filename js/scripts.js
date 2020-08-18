function determineLuck(value) {
  let luck = "";
  if (value <= 5) {
    luck = "unlucky";
  } else if (value <= 7) {
    luck = "neutral";
  } else {
    luck = "lucky"
  }
  return luck;
}

// function determineFortune(fortune)
 
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".showLater").show();
    let valueCounter = 0;
    $("input:checkbox[name=occurances]:checked").each(function() {
      const occurance = parseInt($(this).val());
      valueCounter += occurance;
    });
    const luck = determineLuck(valueCounter);
    console.log(luck);
    console.log(valueCounter);
  });
});