document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.backgroundColor = "#0b145c";
    document.querySelector("#spinner").style.visibility = "visible";
  } else {
    document.querySelector("#spinner").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
    document.querySelector("#fullpage").classList.add("visible");
    document.querySelector("#fullpage").classList.remove("hidden");
  }
};

document.querySelector(".contact-me").addEventListener("mouseover", (e) => {
  e.currentTarget.classList.add("animate__animated", "animate__headShake");
});
