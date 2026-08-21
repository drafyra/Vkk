/* =========================================
   VICKY ❤️ KASHISH
   PREMIUM LOVE WEBSITE
========================================= */


/* =========================================
   START DATE
========================================= */

const START_DATE =
  new Date("2023-11-12T14:00:00+05:30");


/* =========================================
   INTRO
========================================= */

const introScreen =
  document.getElementById("introScreen");

const mainWebsite =
  document.getElementById("mainWebsite");

const enterButton =
  document.getElementById("enterButton");


enterButton.addEventListener(
  "click",
  function () {

    introScreen.style.opacity = "0";

    introScreen.style.transition =
      "opacity 1s ease";

    setTimeout(function () {

      introScreen.classList.add("hidden");

      mainWebsite.classList.remove("hidden");

      window.scrollTo(0, 0);

      createHeartBurst(15);

    }, 1000);

  }
);


/* =========================================
   LANGUAGE
========================================= */

let currentLanguage = "en";


const languageButtons =
  document.querySelectorAll(
    "[data-language]"
  );


function changeLanguage(language) {

  currentLanguage = language;

  document
    .querySelectorAll("[data-en]")
    .forEach(function (element) {

      element.textContent =
        element.dataset[language];

    });


  languageButtons.forEach(
    function (button) {

      button.classList.toggle(
        "active",
        button.dataset.language === language
      );

    }
  );


  const introDescription =
    document.getElementById(
      "introDescription"
    );


  if (language === "hi") {

    introDescription.textContent =
      "यह सिर्फ एक वेबसाइट नहीं है। यह यादों, पलों और एहसासों की एक छोटी-सी दुनिया है, जो हर सेकंड और खूबसूरत होती जा रही है।";

  } else {

    introDescription.textContent =
      "This isn't just a website. It's a little universe of memories, moments and feelings that keep growing every second.";

  }

}


languageButtons.forEach(
  function (button) {

    button.addEventListener(
      "click",
      function () {

        changeLanguage(
          button.dataset.language
        );

      }
    );

  }
);


/* =========================================
   LIVE LOVE TIMER
========================================= */

function calculateDifference(
  start,
  end
) {

  let years =
    end.getFullYear() -
    start.getFullYear();

  let months =
    end.getMonth() -
    start.getMonth();

  let days =
    end.getDate() -
    start.getDate();

  let hours =
    end.getHours() -
    start.getHours();

  let minutes =
    end.getMinutes() -
    start.getMinutes();

  let seconds =
    end.getSeconds() -
    start.getSeconds();


  if (seconds < 0) {

    seconds += 60;
    minutes--;

  }


  if (minutes < 0) {

    minutes += 60;
    hours--;

  }


  if (hours < 0) {

    hours += 24;
    days--;

  }


  if (days < 0) {

    const previousMonth =
      new Date(
        end.getFullYear(),
        end.getMonth(),
        0
      );

    days +=
      previousMonth.getDate();

    months--;

  }


  if (months < 0) {

    months += 12;
    years--;

  }


  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  };

}


function updateLoveTimer() {

  const now =
    new Date();

  const difference =
    calculateDifference(
      START_DATE,
      now
    );


  document.getElementById(
    "years"
  ).textContent =
    difference.years;


  document.getElementById(
    "months"
  ).textContent =
    difference.months;


  document.getElementById(
    "days"
  ).textContent =
    difference.days;


  document.getElementById(
    "hours"
  ).textContent =
    difference.hours;


  document.getElementById(
    "minutes"
  ).textContent =
    difference.minutes;


  document.getElementById(
    "seconds"
  ).textContent =
    difference.seconds;

}


updateLoveTimer();


setInterval(
  updateLoveTimer,
  1000
);


/* =========================================
   PHOTO THOUGHTS
========================================= */

const photoThoughts = [

  {
    en:
      "A moment worth keeping.",
    hi:
      "एक ऐसा पल जिसे हमेशा संभालकर रखना है।"
  },

  {
    en:
      "Some moments feel like home.",
    hi:
      "कुछ पल घर जैसे लगते हैं।"
  },

  {
    en:
      "A smile that stays.",
    hi:
      "एक मुस्कान जो हमेशा साथ रहती है।"
  },

  {
    en:
      "One frame, countless feelings.",
    hi:
      "एक तस्वीर, अनगिनत एहसास।"
  },

  {
    en:
      "The kind of memory you replay.",
    hi:
      "वो याद जिसे बार-बार देखने का मन करे।"
  },

  {
    en:
      "Little things, big feelings.",
    hi:
      "छोटी-छोटी बातें, बड़े एहसास।"
  },

  {
    en:
      "Still becoming our favorite story.",
    hi:
      "हमारी पसंदीदा कहानी अभी भी बन रही है।"
  }

];


/* =========================================
   PHOTO MODAL
========================================= */

const photoModal =
  document.getElementById(
    "photoModal"
  );

const modalImage =
  document.getElementById(
    "modalImage"
  );

const modalNumber =
  document.getElementById(
    "modalNumber"
  );

const modalThought =
  document.getElementById(
    "modalThought"
  );


document
  .querySelectorAll(".photo-card")
  .forEach(
    function (card) {

      card.addEventListener(
        "click",
        function () {

          const number =
            Number(
              card.dataset.photo
            );


          const imageName =
            "assets/Photo0" +
            number +
            ".png";


          modalImage.src =
            imageName;


          modalNumber.textContent =
            "MEMORY 0" +
            number;


          modalThought.textContent =
            photoThoughts[
              number - 1
            ][currentLanguage];


          photoModal.classList.remove(
            "hidden"
          );

        }
      );

    }
  );


/* CLOSE MODAL */

document
  .getElementById("closeModal")
  .addEventListener(
    "click",
    function () {

      photoModal.classList.add(
        "hidden"
      );

    }
  );


photoModal.addEventListener(
  "click",
  function (event) {

    if (
      event.target ===
      photoModal
    ) {

      photoModal.classList.add(
        "hidden"
      );

    }

  }
);


/* ESC KEY */

document.addEventListener(
  "keydown",
  function (event) {

    if (
      event.key === "Escape"
    ) {

      photoModal.classList.add(
        "hidden"
      );

    }

  }
);


/* =========================================
   HEART PARTICLES
========================================= */

function createHeart() {

  const heart =
    document.createElement(
      "div"
    );


  heart.className =
    "particle-heart";


  const symbols = [
    "❤️",
    "♡",
    "💗",
    "✨",
    "💫"
  ];


  heart.textContent =
    symbols[
      Math.floor(
        Math.random() *
        symbols.length
      )
    ];


  heart.style.left =
    Math.random() *
    100 +
    "vw";


  heart.style.top =
    "80vh";


  heart.style.fontSize =
    (12 +
      Math.random() * 18) +
    "px";


  document
    .getElementById(
      "particleContainer"
    )
    .appendChild(
      heart
    );


  setTimeout(
    function () {

      heart.remove();

    },
    3000
  );

}


function createHeartBurst(
  amount = 10
) {

  for (
    let i = 0;
    i < amount;
    i++
  ) {

    setTimeout(
      createHeart,
      i * 120
    );

  }

}


/* RANDOM HEARTS */

setInterval(
  function () {

    if (
      !document
        .getElementById(
          "mainWebsite"
        )
        .classList
        .contains("hidden")
    ) {

      if (
        Math.random() < 0.7
      ) {

        createHeart();

      }

    }

  },
  2200
);


/* =========================================
   FIREWORKS
========================================= */

function createFirework() {

  const centerX =
    window.innerWidth *
    (0.2 +
      Math.random() * 0.6);


  const centerY =
    window.innerHeight *
    (0.15 +
      Math.random() * 0.4);


  const particleCount =
    35;


  for (
    let i = 0;
    i < particleCount;
    i++
  ) {

    const particle =
      document.createElement(
        "div"
      );


    particle.className =
      "firework";


    particle.style.left =
      centerX + "px";


    particle.style.top =
      centerY + "px";


    const angle =
      Math.random() *
      Math.PI *
      2;


    const distance =
      50 +
      Math.random() *
      180;


    particle.style.setProperty(
      "--x",
      Math.cos(angle) *
        distance +
        "px"
    );


    particle.style.setProperty(
      "--y",
      Math.sin(angle) *
        distance +
        "px"
    );


    document.body.appendChild(
      particle
    );


    setTimeout(
      function () {

        particle.remove();

      },
      1300
    );

  }

}


/* =========================================
   CELEBRATE BUTTON
========================================= */

document
  .getElementById(
    "celebrateButton"
  )
  .addEventListener(
    "click",
    function () {

      createHeartBurst(30);

      for (
        let i = 0;
        i < 8;
        i++
      ) {

        setTimeout(
          createFirework,
          i * 300
        );

      }

    }
  );


/* =========================================
   MUSIC
========================================= */

const musicButton =
  document.getElementById(
    "musicButton"
  );

const backgroundMusic =
  document.getElementById(
    "backgroundMusic"
  );


let musicPlaying = false;


musicButton.addEventListener(
  "click",
  function () {

    /*
      IMPORTANT:

      अगर आप music डालना चाहते हैं,
      तो index.html में audio tag को:

      <audio id="backgroundMusic"
      src="music/background.mp3"
      loop></audio>

      कर सकते हैं।
    */


    if (
      !backgroundMusic.src
    ) {

      alert(
        currentLanguage === "hi"
          ? "अभी music file add नहीं की गई है।"
          : "No music file has been added yet."
      );

      return;

    }


    if (
      musicPlaying
    ) {

      backgroundMusic.pause();

      musicButton.textContent =
        "♪";

      musicPlaying = false;

    } else {

      backgroundMusic
        .play()
        .then(
          function () {

            musicButton.textContent =
              "❚❚";

            musicPlaying = true;

          }
        )
        .catch(
          function () {

            alert(
              "Music could not be played."
            );

          }
        );

    }

  }
);


/* =========================================
   CLICK HEART EFFECT
========================================= */

document.addEventListener(
  "click",
  function (event) {

    if (
      event.target.tagName ===
      "BUTTON"
    ) {
      return;
    }


    if (
      Math.random() <
      0.25
    ) {

      createHeartBurst(2);

    }

  }
);


/* =========================================
   CONSOLE
========================================= */

console.log(
  "❤️ Vicky & Kashish — Our Little Universe"
);

console.log(
  "Crafted with ❤️ by official_Sanjay_Art"
);