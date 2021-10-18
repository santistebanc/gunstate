import Gun from "gun";
import { createServer } from "http";
import { createReadStream } from "fs";
import path from "path";
import fs from "fs";

const server = createServer(function (request, response) {
  var filePath = "./dist" + request.url;
  if (filePath == "./dist/") filePath = "./dist/index.html";

  var extname = path.extname(filePath);
  var contentType = "text/html";
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }
  console.log(
    "request starting...",
    "filePath: ",
    filePath,
    "extname: ",
    extname,
    "contentType: ",
    contentType
  );

  fs.readFile(filePath, function (error, content) {
    if (error) {
      if (error.code == "ENOENT") {
        fs.readFile("./dist/404.html", function (error, content) {
          response.writeHead(200, { "Content-Type": contentType });
          response.end(content, "utf-8");
        });
      } else {
        response.writeHead(500);
        response.end(
          "Sorry, check with the site admin for error: " + error.code + " ..\n"
        );
        response.end();
      }
    } else {
      response.writeHead(200, { "Content-Type": contentType });
      response.end(content, "utf-8");
    }
  });
}).listen(process.env.PORT || 3000);
console.log("Server running at port " + process.env.PORT || 3000);

const gun = Gun({ web: server });

const terms = gun.get("terms");

function saveTerm(data) {
  return terms.get(data.text).put(data);
}

async function saveTranslation(original, target, bidirectional) {
  if (bidirectional) {
    target
      .get("trans/" + (await original.get("lang")))
      .get(await original.get("text"))
      .put(original);
  }
  return original
    .get("trans/" + (await target.get("lang")))
    .get(await target.get("text"))
    .put(target);
}

const term1 = saveTerm({ text: "hello", lang: "eng", deleted: false });
const term2 = saveTerm({ text: "hola", lang: "esp", deleted: false });
const term3 = saveTerm({ text: "how are you?", lang: "eng", deleted: false });
const term4 = saveTerm({ text: "wie gehts?", lang: "deu", deleted: false });

saveTranslation(term1, term2, true);
saveTranslation(term3, term4, true);

term2
  .get("trans/eng")
  .map()
  .get("text")
  .once((data) => console.log(data));

// function parseFunc(expression) {
//   return Function("return (" + expression + ")")();
// }

// console.log(parseFunc("Math.random() + " + 8));
