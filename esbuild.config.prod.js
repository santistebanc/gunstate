import esbuild from "esbuild";
import babel from "esbuild-plugin-babel";

esbuild
  .build({
    entryPoints: ["client.js"],
    bundle: true,
    outfile: "dist/script.js",
    plugins: [babel()],
  })
  .catch(() => process.exit(1));
