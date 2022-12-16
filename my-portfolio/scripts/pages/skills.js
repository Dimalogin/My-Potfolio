const resultNode = document.querySelector("#application");

export default {
  render: function () {
    const temlateElement = document.getElementById("skillsTemplate");

    resultNode.innerHTML = temlateElement.innerHTML;

    // Progress Bar

    const skillsSection = resultNode.querySelector(".skills-section");

    const progBarHtml = skillsSection.querySelector(
      ".skills-section__bar--html"
    );

    const progBarCss = skillsSection.querySelector(".skills-section__bar--css");

    const progBarScss = skillsSection.querySelector(
      ".skills-section__bar--scss"
    );

    const progBarJs = skillsSection.querySelector(
      ".skills-section__bar--javascript"
    );

    const progBarTs = skillsSection.querySelector(
      ".skills-section__bar--typescript"
    );

    const progBarWb = skillsSection.querySelector(
      ".skills-section__bar--webpack"
    );

    const progBarGit = skillsSection.querySelector(".skills-section__bar--git");

    const progBarFg = skillsSection.querySelector(
      ".skills-section__bar--figma"
    );

    const percentHtml = skillsSection.querySelector(
      ".skills-section__percent--html"
    );

    const percentCss = skillsSection.querySelector(
      ".skills-section__percent--css"
    );

    const percentScss = skillsSection.querySelector(
      ".skills-section__percent--scss"
    );

    const percentJs = skillsSection.querySelector(
      ".skills-section__percent--javascript"
    );

    const percentTs = skillsSection.querySelector(
      ".skills-section__percent--typescript"
    );

    const percentWb = skillsSection.querySelector(
      ".skills-section__percent--webpack"
    );

    const percentGit = skillsSection.querySelector(
      ".skills-section__percent--git"
    );

    const percentFg = skillsSection.querySelector(
      ".skills-section__percent--figma"
    );

    setTimeout(function () {
      const id = setInterval(moveProg, 10);
      let width = 0;

      function moveProg() {
        if (width >= 80) {
          clearInterval(id);
        } else {
          width++;
          progBarHtml.style.width = width + "%";
          percentHtml.textContent = `${width}%`;
        }
      }
    }, 500);

    setTimeout(function () {
      const id = setInterval(moveProg, 10);
      let width = 0;

      function moveProg() {
        if (width >= 70) {
          clearInterval(id);
        } else {
          width++;
          progBarCss.style.width = width + "%";
          percentCss.textContent = `${width}%`;
        }
      }
    }, 800);

    setTimeout(function () {
      const id = setInterval(moveProg, 10);
      let width = 0;

      function moveProg() {
        if (width >= 20) {
          clearInterval(id);
        } else {
          width++;
          progBarScss.style.width = width + "%";
          percentScss.textContent = `${width}%`;
        }
      }
    }, 1100);

    setTimeout(function () {
      const id = setInterval(moveProg, 10);
      let width = 0;

      function moveProg() {
        if (width >= 40) {
          clearInterval(id);
        } else {
          width++;
          progBarJs.style.width = width + "%";
          percentJs.textContent = `${width}%`;
        }
      }
    }, 1400);

    setTimeout(function () {
      const id = setInterval(moveProg, 10);
      let width = 0;

      function moveProg() {
        if (width >= 5) {
          clearInterval(id);
        } else {
          width++;
          progBarTs.style.width = width + "%";
          percentTs.textContent = `${width}%`;
        }
      }
    }, 1700);

    setTimeout(function () {
      const id = setInterval(moveProg, 10);
      let width = 0;

      function moveProg() {
        if (width >= 10) {
          clearInterval(id);
        } else {
          width++;
          progBarWb.style.width = width + "%";
          percentWb.textContent = `${width}%`;
        }
      }
    }, 2000);

    setTimeout(function () {
      const id = setInterval(moveProg, 10);
      let width = 0;

      function moveProg() {
        if (width >= 30) {
          clearInterval(id);
        } else {
          width++;
          progBarGit.style.width = width + "%";
          percentGit.textContent = `${width}%`;
        }
      }
    }, 2300);

    setTimeout(function () {
      const id = setInterval(moveProg, 10);
      let width = 0;

      function moveProg() {
        if (width >= 20) {
          clearInterval(id);
        } else {
          width++;
          progBarFg.style.width = width + "%";
          percentFg.textContent = `${width}%`;
        }
      }
    }, 2600);
  },
};
