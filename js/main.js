document.onreadystatechange = function () {
  let body = document.querySelector("body");
  let fullpage = document.querySelector("#fullpage");
  let spinner = document.querySelector("#spinner");

  if (document.readyState !== "complete") {
    body.style.overflow = "hidden";
    spinner.style.visibility = "visible";
  } else {
    body.style.overflow = "initial";
    spinner.style.display = "none";
    body.style.visibility = "visible";
    fullpage.classList.add("visible");
    fullpage.classList.remove("hidden");
  }
};

document.querySelector(".contact-me").addEventListener("mouseover", (e) => {
  e.currentTarget.classList.add("animate__animated", "animate__headShake");
});
