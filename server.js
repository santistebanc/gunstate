import Gun from "gun";
import { createServer } from "http";
import { createReadStream } from "fs";
import path from "path";

const server = createServer((req, res) => {
  console.log("..........requesting", req.url);
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    createReadStream("dist/index.html").pipe(res);
  }
  if (req.url === "/script.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    createReadStream("dist/script.js").pipe(res);
  }
  if (req.url === "/flexsearch.bundle.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    createReadStream("dist/flexsearch.bundle.js").pipe(res);
  }
}).listen(process.env.PORT || 3000);

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

const term1 = saveTerm({ text: "hello", lang: "eng" });
const term2 = saveTerm({ text: "hola", lang: "esp" });
const term3 = saveTerm({ text: "how are you?", lang: "eng" });
const term4 = saveTerm({ text: "wie gehts?", lang: "deu" });

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
