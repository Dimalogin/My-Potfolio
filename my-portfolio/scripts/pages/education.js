const resultNode = document.querySelector("#application");

export default {
  render: function () {
    const temlateElement = document.getElementById("educationTemplate");

    resultNode.innerHTML = temlateElement.innerHTML;

    // Open Image

    const certificateJs = resultNode.querySelector(
      ".education-section__certificate--js"
    );
    const certificateHtml = resultNode.querySelector(
      ".education-section__certificate--html"
    );

    const panel = resultNode.querySelector(".education-section__panel");
    const panelIcon = panel.querySelector(".education-section__panel--icon");
    const icon = panel.querySelector(".education-section__panel--icon img");
    const closePanelIcon = document.querySelector(".close__btn--image");

    certificateJs.addEventListener("click", showImage);
    certificateHtml.addEventListener("click", showImage);
    closePanelIcon.addEventListener("click", hidePanel);
    panel.addEventListener("click", hidePanel);

    function showImage() {
      const iconPath = this.firstElementChild.src;

      panel.style.display = "block";
      panelIcon.style.display = "block";
      icon.src = iconPath;
    }

    function hidePanel() {
      panel.style.display = "none";
      panelIcon.style.display = "none";
      icon.src = "";
    }
  },
};
