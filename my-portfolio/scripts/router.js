import Controller from "./controller.js";

export default {
  init() {
    addEventListener("hashchange", handleHash);
    handleHash();
  },
};

function handleHash() {
  const { name } = getRouterInfo();

  if (name) {
    const routerName = name + "Route";

    Controller[routerName]();
  }
}

function getRouterInfo() {
  const hash = location.hash ? location.hash.slice(1) : "";
  const [name] = hash.split("/");

  return { name };
}
