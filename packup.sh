rollup src/@main.js --file builder.js --format iife
uglifyjs -o builder.js builder.js --rename