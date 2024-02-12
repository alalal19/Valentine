let noButtonTextIndex = 0;
let yesButtonSize = 16;
let noButtonFontSize = 16;

function showNoMessage() {
  const noButton = document.getElementById("no-button");
  const yesButton = document.getElementById("yes-button");
  const can1Image = document.getElementById("can1");

  const noButtonTexts = [
    "Are you sure?",
    "Please",
    "Pretty please",
    ":(((((",
    "I'm begging you"
  ];

  if (noButtonTextIndex < noButtonTexts.length) {
    noButton.innerText = noButtonTexts[noButtonTextIndex];
    noButtonTextIndex++;
    yesButtonSize += 50;
    noButtonFontSize -= 3;
    yesButton.style.fontSize = `${yesButtonSize}px`;
    noButton.style.fontSize = `${noButtonFontSize}px`;

  } else {
    noButton.style.display = "none";
    yesButton.style.display = "inline-block";
  }
}

function showYesMessage() {
  const valentineQuestion = document.getElementById("valentine-question");
  const noButton = document.getElementById("no-button");
  const yesButton = document.getElementById("yes-button");
  const can1Image = document.getElementById("can1");

  valentineQuestion.innerText =
    "Korique dapat yes agad!! Happy Valentine's mwaps labyu";
  noButton.style.display = "none";
  yesButton.style.display = "none";

  const youtubePlayer = document.createElement("iframe");
  youtubePlayer.src =
    "https://www.youtube.com/embed/KN3IemyqJJw?autoplay=1&mute=0";
  youtubePlayer.width = "700";
  youtubePlayer.height = "445";
  youtubePlayer.frameBorder = "0";
  youtubePlayer.allow = "autoplay; encrypted-media";
  youtubePlayer.allowFullscreen = true;

  can1Image.parentNode.replaceChild(youtubePlayer, can1Image);
}