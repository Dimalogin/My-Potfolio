const resultNode = document.querySelector("#application");

export default {
  render: function () {
    const temlateElement = document.getElementById("projectsTemplate");

    resultNode.innerHTML = temlateElement.innerHTML;
  },
};
