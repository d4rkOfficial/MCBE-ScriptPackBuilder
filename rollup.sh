rollup src/main.js --file MCBE-ScriptPackBuilder.js --format iife
uglifyjs -o MCBE-ScriptPackBuilder.js MCBE-ScriptPackBuilder.js --rename