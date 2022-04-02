//задача3
function isHtml(path) {
  if (path.indexOf(".html") >= 0) {
    return true;
  }
  else {
    return false;
  }
}

const path = "/users/download/index.html";
console.log(isHtml(path));