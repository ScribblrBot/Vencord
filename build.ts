import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["boop.ts"],
  bundle: true,
  platform: "node",
  format: "cjs",
  outfile: "dist/boop.js",
  external: ["@vendetta/patcher", "@vendetta/metro"],
  sourcemap: true,
}).catch(() => process.exit(1));
