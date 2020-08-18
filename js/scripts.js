function determineLuck(value) {
  let luck = "";
  if (value >= 6) {
    luck = "unlucky";
  } else if (value >= 5) {
    luck = "neutral";
  } else if (value >= 1) {
    luck = "lucky"
  } else {
    luck = "not available";
  }
  return luck;
}

function determineFortune(luck) {
  const unluckyFortune = "You learn from your mistakes...you will learn a lot this year.";
  const neutralFortune = "If you have something good in your life, don't let it go.";
  const luckyFortune = "A dream you have will come true.";
  const noResponse = "To attain a fortune, please enligthen me with a response.";

  if (luck === "unlucky") {
    return unluckyFortune;
  } else if (luck === "neutral") {
    return neutralFortune;
  } else if (luck === "lucky") {
    return luckyFortune;
  } else {
    return noResponse;
  }
}

function determineClass(luck) {
  let addClass = "";
  if (luck === "unlucky") {
    addClass = "unlucky-background";
  } else if (luck === "neutral") {
    addClass = "neutral-background";
  } else {
    addClass = "lucky-background";
  }
  return addClass;
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
    const fortuneBackground = determineClass(luck);
    $("#reading").addClass(fortuneBackground);
    $("#fortuneReturn").text(fortune);
    $("#luckReturn").text(luck);
  });

  $("#tryAgainButton").click(function(event) {
    event.preventDefault();
    location.reload();
  });
});