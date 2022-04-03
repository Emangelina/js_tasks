//задача3
function isHtml(path) {
  return path.slice(-5) == ".html";
}

const path = "/users/down.htmlload/index";
console.log(isHtml(path));