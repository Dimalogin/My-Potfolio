const resultNode = document.querySelector("#application");

export default {
  render: function () {
    const temlateElement = document.getElementById("homeTemplate");

    resultNode.innerHTML = temlateElement.innerHTML;
  },
};
