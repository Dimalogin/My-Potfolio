const resultNode = document.querySelector("#application");

export default {
  render: function () {
    const temlateElement = document.getElementById("aboutTemplate");

    resultNode.innerHTML = temlateElement.innerHTML;
  },
};
