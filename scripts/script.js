const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll(".tab-content-item");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    target = document.querySelector(tab.dataset.tabTarget);
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});
