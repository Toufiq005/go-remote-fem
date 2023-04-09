function navbarModal() {
  const navbar = document.getElementById("navbar");
  if (navbar.classList.contains("hidden")) {
    navbar.classList.remove("hidden");
    navbar.classList.add("block");
  } else {
    navbar.classList.remove("block");
    navbar.classList.add("hidden");
  }
}
function featur() {
  const featur = document.getElementById("featur");
  const featurMobile = document.getElementById("featurMobile");
  const featurArrow = document.getElementById("featur-arrow");
  featur.classList.toggle("hidden");
  featurMobile.classList.toggle("hidden");
  if (featur.classList.contains("hidden")) {
    featurArrow.src = "images/icon-arrow-down.svg";
  } else {
    featurArrow.src = "images/icon-arrow-up.svg";
  }
}
function company() {
  const company = document.getElementById("company");
  const companyMobail = document.getElementById("companyMobail");
  const companyArrow = document.getElementById("company-arrow");
  company.classList.toggle("hidden");
  companyMobail.classList.toggle("hidden");
  if (company.classList.contains("hidden")) {
    companyArrow.src = "images/icon-arrow-down.svg";
  } else {
    companyArrow.src = "images/icon-arrow-up.svg";
  }
}
