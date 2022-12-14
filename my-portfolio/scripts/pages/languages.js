const resultNode = document.querySelector("#application");

export default {
  render: function () {
    const temlateElement = document.getElementById("languagesTemplate");

    resultNode.innerHTML = temlateElement.innerHTML;
  },
};
