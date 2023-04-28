"use strict";

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
document.querySelector(".wilaya").textContent = wilaya[wilayaNumber];
document.querySelector(".left__guess").value = 0;

//let oldNumbers = [];
let i = -1;
let heart = 2;
let score = 0;

console.log(wilayaNumber);

document.querySelector(".head__again").addEventListener("click", function () {
  document.querySelector(".right__score").textContent = 0;
  document.querySelector(".center__message").textContent = "Start guessing...";
  wilayaNumber = Math.trunc(Math.random() * 58) + 1;
  document.querySelector(".wilaya").textContent = wilaya[wilayaNumber];
  document.querySelector("body").style.backgroundImage =
    "radial-gradient(#343a40, #212529)";
  document.querySelector(".left__check").textContent = "Check!";
  document.querySelector(".left__guess").value = 0;
  document.querySelector(".right__hearts").textContent = "❤️❤️❤️";
  document.querySelector(".line-1").style.backgroundColor = "#fff";
  document.querySelector(".line-2").style.backgroundColor = "#fff";
});
document.querySelector(".left__check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".left__guess").value);
  const button = document.querySelector(".left__check").textContent;
  const highScore = document.querySelector(".right__highscore").textContent;

  document.querySelector(".wilaya").textContent = wilaya[wilayaNumber];

  if (button === "Again!") {
    document.querySelector(".right__score").textContent = 0;
    document.querySelector(".center__message").textContent =
      "Start guessing...";
    wilayaNumber = Math.trunc(Math.random() * 58) + 1;
    document.querySelector(".wilaya").textContent = wilaya[wilayaNumber];
    document.querySelector("body").style.backgroundImage =
      "radial-gradient(#343a40, #212529)";
    document.querySelector(".left__check").textContent = "Check!";
    document.querySelector(".left__guess").value = 0;
    document.querySelector(".right__hearts").textContent = "❤️❤️❤️";
    document.querySelector(".line-1").style.backgroundColor = "#fff";
    document.querySelector(".line-2").style.backgroundColor = "#fff";
  } else if (button === "Next..") {
    document.querySelector(".wilaya").textContent = wilaya[wilayaNumber];
    console.log(wilayaNumber);
    document.querySelector("body").style.transition =
      "transition: background-image 2s ease";
    document.querySelector("body").style.backgroundImage =
      "radial-gradient(#343a40, #212529)";
    document.querySelector(".left__guess").value = "";
    document.querySelector(".center__message").textContent =
      "Start guessing...";
    document.querySelector(".left__check").textContent = "Check!";
  } else if (!guess) {
    document.querySelector(".center__message").textContent = "⛔ No Number!";
    // Win or next
  } else if (guess === wilayaNumber) {
    document.querySelector(".line-1").style.backgroundColor = "#fff";
    document.querySelector(".line-2").style.backgroundColor = "#fff";

    document.querySelector(
      ".center__message"
    ).textContent = `🎊 Correct ${wilayaNumber} is for ${wilaya[wilayaNumber]}`;
    //oldNumbers.push(wilayaNumber);
    score++;
    document.querySelector(".right__score").textContent = score;
    wilaya[wilayaNumber] = 0;
    //  document.querySelector(".left__guess").value = 0;
    // Store

    do {
      wilayaNumber = Math.trunc(Math.random() * 58) + 1;
    } while (wilaya[wilayaNumber] === 0 && score < 58);
    if (score === 58) {
      document.querySelector(".center__message").textContent =
        "Geiuss! You Win 🎊";
      document.querySelector(".right__highscore").textContent = score;
      document.querySelector("body").style.backgroundImage =
        "radial-gradient(#51cf66, #40c057)";
    } else {
      document.querySelector("body").style.backgroundImage =
        "radial-gradient(#51cf66, #40c057)";

      document.querySelector(".left__check").textContent = "Next..";
      if (score > highScore) {
        document.querySelector(".right__highscore").textContent = score;
        localStorage.setItem("highscore", score);
      }
    }

    /// Too High
  } else if (guess > wilayaNumber) {
    if (heart === 0) {
      document.querySelector(".right__hearts").textContent = "💔💔💔";
      document.querySelector(
        ".center__message"
      ).textContent = `💥 You lost the game it's ${wilayaNumber}`;
      document.querySelector(".left__check").textContent = "Again!";
      document.querySelector("body").style.backgroundImage =
        "radial-gradient(#ff8787, #ff6b6b)";
      document.querySelector(".line-1").style.backgroundColor = "#fff";
      document.querySelector(".line-2").style.backgroundColor = "#fff";
      i = -1;
      heart = 2;
      score = 0;
    } else {
      document.querySelector(".center__message").textContent =
        "💔Too high! 📈 Keep guessing";
      document.querySelector(".right__hearts").textContent =
        heart === 2 ? "❤️❤️💔" : "❤️💔💔";
      //score--;TODO
      heart--;
      document.querySelector(".right__score").textContent = score;
      document.querySelector(".line-1").style.backgroundColor = "#ff6b6b";
      document.querySelector(".line-2").style.backgroundColor = "#ff6b6b";
    }

    /// Too Low
  } else if (guess < wilayaNumber) {
    if (heart === 0) {
      document.querySelector(".right__hearts").textContent = "💔💔💔";
      document.querySelector(
        ".center__message"
      ).textContent = `💥 You lost the game. it's ${wilayaNumber}`;
      document.querySelector(".left__check").textContent = "Again!";
      document.querySelector("body").style.backgroundImage =
        "radial-gradient(#ff8787, #ff6b6b)";
      document.querySelector(".line-1").style.backgroundColor = "#fff";
      document.querySelector(".line-2").style.backgroundColor = "#fff";
      i = -1;
      heart = 2;
      score = 0;
    } else {
      document.querySelector(".center__message").textContent =
        "💔Too low! 📉 Keep guessing";
      document.querySelector(".right__hearts").textContent =
        heart === 2 ? "❤️❤️💔" : "❤️💔💔";
      //score--;
      heart--;
      document.querySelector(".right__score").textContent = score;
      document.querySelector(".line-1").style.backgroundColor = "#ff6b6b";
      document.querySelector(".line-2").style.backgroundColor = "#ff6b6b";
    }
  }
});
