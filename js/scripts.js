function determineLuck(value) {
  let luck = "";
  if (value <= 5) {
    luck = "unlucky";
  } else if (value <= 6) {
    luck = "neutral";
  } else {
    luck = "lucky"
  }
  return luck;
}

function determineFortune(luck) {
  const unluckyFortune = "You learn from your mistakes...you will learn a lot this year.";
  const neutralFortune = "If you have something good in your life, don't let it go.";
  const luckyFortune = "A dream you have will come true";

  if (luck === "unlucky") {
    return unluckyFortune;
  } else if (luck === "neutral") {
    return neutralFortune;
  } else {
    return luckyFortune;
  }
}
 
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".showLater").show();
    $("#showFirst").hide();
    $("form").addClass("submit-background");
    let valueCounter = 0;
    $("input:checkbox[name=occurances]:checked").each(function() {
      const occurance = parseInt($(this).val());
      valueCounter += occurance;
    });
    const luck = determineLuck(valueCounter);
    const fortune = determineFortune(luck);
    $("#fortuneReturn").text(fortune);
    $("#luckReturn").text(luck);
  });
});