"use strict";

// BUG TODO FIXME

const wilaya = [
  0,
  "Adrar",
  "Chlef",
  "Laghouat",
  "Oum el bouaghi",
  "Batna",
  "Bejaia",
  "Biskra",
  "Bechar",
  "Blida",
  "Bouira",
  "Tamnrasset",
  "Tebessa",
  "Tlemcen",
  "Tiaret",
  "Tizi Ouzou",
  "Algiers",
  "Djelfa",
  "Jijel",
  "Setif",
  "Saida",
  "Skikda",
  "Sidi Bel Abbes",
  "Annaba",
  "Guelma",
  "Costantine",
  "Medea",
  "Mostaganem",
  "M'Sila",
  "Mascara",
  "Ouargla",
  "Oran",
  "El Bayadh",
  "Illizi",
  "Bordj Bou Arreridj",
  "Boumerdes",
  "El Tarf",
  "Tindouf",
  "Tissemsilt",
  "El Oued",
  "Khenchela",
  "Souk Ahras",
  "Tipaza",
  "Mila",
  "Ain Defla",
  "Naama",
  "Ain Temouchent",
  "Ghardaia",
  "Relizane",
  "Timimoun",
  "Bordj Baji Mokhtar",
  "Ouled Djellal",
  "Beni Abbes",
  "Ain Salah",
  "Ain Guezzam",
  "Touggourt",
  "Djanet",
  "El M'Ghair",
  "El Meniaa",
];

// Retrieve
document.querySelector(".right__highscore").innerHTML =
  localStorage.getItem("highscore");

let wilayaNumber = Math.trunc(Math.random() * 58) + 1;

//let oldNumbers = [];
let i = -1;
let heart = 2;
let score = 0;

console.log(wilayaNumber);

const displayMessage = function (message) {
  document.querySelector(".center__message").textContent = message;
};

const changeScore = function (score) {
  document.querySelector(".right__score").textContent = score;
};

const displayWilaya = function (wilaya) {
  document.querySelector(".wilaya").textContent = wilaya;
};

const backgroundChange = function (color) {
  document.querySelector("body").style.backgroundImage = color;
};

const buttonText = function (text) {
  document.querySelector(".left__check").textContent = text;
};

const guessValue = function (value) {
  document.querySelector(".left__guess").value = value;
};

const heartsEmoji = function (emoji) {
  document.querySelector(".right__hearts").textContent = emoji;
};

displayWilaya(wilaya[wilayaNumber]);
guessValue(0);

document.querySelector(".head__again").addEventListener("click", function () {
  changeScore(0);
  displayMessage("Start Guessing...");
  wilayaNumber = Math.trunc(Math.random() * 58) + 1;
  displayWilaya(wilaya[wilayaNumber]);
  backgroundChange("radial-gradient(#343a40, #212529)");
  buttonText("Check!");
  guessValue(0);
  heartsEmoji("❤️❤️❤️");
  document.querySelector(".line-1").style.backgroundColor = "#fff";
  document.querySelector(".line-2").style.backgroundColor = "#fff";
});

document.querySelector(".left__check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".left__guess").value);
  const button = document.querySelector(".left__check").textContent;
  const highScore = document.querySelector(".right__highscore").textContent;

  displayWilaya(wilaya[wilayaNumber]);

  if (button === "Again!") {
    changeScore(0);
    displayMessage("Start guessing...");
    wilayaNumber = Math.trunc(Math.random() * 58) + 1;
    displayWilaya(wilaya[wilayaNumber]);
    backgroundChange("radial-gradient(#343a40, #212529)");
    buttonText("Check!");
    guessValue(0);
    heartsEmoji("❤️❤️❤️");
    document.querySelector(".line-1").style.backgroundColor = "#fff";
    document.querySelector(".line-2").style.backgroundColor = "#fff";
  } else if (button === "Next..") {
    displayWilaya(wilaya[wilayaNumber]);
    console.log(wilayaNumber);
    document.querySelector("body").style.transition =
      "transition: background-image 2s ease";
    backgroundChange("radial-gradient(#343a40, #212529)");
    guessValue("");
    displayMessage("Start guessing...");
    buttonText("Check!");
  } else if (!guess || guess < 0 || guess > 58) {
    displayMessage("⛔ Not w valid Number!");
    // Win or next
  } else if (guess === wilayaNumber) {
    document.querySelector(".line-1").style.backgroundColor = "#fff";
    document.querySelector(".line-2").style.backgroundColor = "#fff";

    document.querySelector(
      ".center__message"
    ).textContent = `🎊 Correct ${wilayaNumber} is for ${wilaya[wilayaNumber]}`;
    //oldNumbers.push(wilayaNumber);
    score++;
    changeScore(score);
    wilaya[wilayaNumber] = 0;
    //  guessValue() 0;
    // Store

    do {
      wilayaNumber = Math.trunc(Math.random() * 58) + 1;
    } while (wilaya[wilayaNumber] === 0 && score < 58);
    if (score === 58) {
      displayMessage("Geiuss! You Win 🎊");
      document.querySelector(".right__highscore").textContent = score;
      backgroundChange("radial-gradient(#51cf66, #40c057)");
    } else {
      backgroundChange("radial-gradient(#51cf66, #40c057)");

      buttonText("Next..");
      if (score > highScore) {
        document.querySelector(".right__highscore").textContent = score;
        localStorage.setItem("highscore", score);
      }
    }

    /// Too High or low
  } else if (guess !== wilayaNumber) {
    if (heart === 0) {
      heartsEmoji("💔💔💔");
      displayMessage(`💥 You lost the game it's ${wilayaNumber}`);
      buttonText("Again!");
      backgroundChange("radial-gradient(#ff8787, #ff6b6b)");
      document.querySelector(".line-1").style.backgroundColor = "#fff";
      document.querySelector(".line-2").style.backgroundColor = "#fff";
      i = -1;
      heart = 2;
      score = 0;
    } else {
      displayMessage(
        guess > wilayaNumber
          ? "💔Too high! 📈 Keep guessing"
          : "💔Too low! 📉 Keep guessing"
      );
      heartsEmoji(heart === 2 ? "❤️❤️💔" : "❤️💔💔");
      //score--;TODO
      heart--;
      changeScore(score);
      document.querySelector(".line-1").style.backgroundColor = "#ff6b6b";
      document.querySelector(".line-2").style.backgroundColor = "#ff6b6b";
    }
  }
});
