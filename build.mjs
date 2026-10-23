// Bundles the game into dist/doom.js (a classic script, so index.html also works from file://).
// Usage: node build.mjs          -> production build
//        node build.mjs --serve  -> rebuild on change + local server on http://localhost:8000
import * as esbuild from 'esbuild';

const serve = process.argv.includes('--serve');
const options = {
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  outfile: 'dist/doom.js',
  minify: !serve,
  sourcemap: serve ? 'inline' : false,
  target: ['es2020'],
  logLevel: 'info',
  legalComments: 'none',
};

if (serve) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: '.', port: 8000 });
  console.log(`Serving on http://localhost:${port}`);
} else {
  await esbuild.build(options);
}
