const path = require('path');
const fs = require('fs');

const rootResolve = (filename) => {
  return path.join(__dirname, '..', filename);
};

// 组件入口目录路径
const COMPOENNTSDIRPATH = rootResolve('src/components');

const componentDirs = fs.readdirSync(COMPOENNTSDIRPATH);

const componentEntrys = {};
componentDirs.forEach((dirname, index) => {
  componentEntrys[dirname.toLowerCase()] = path.join(COMPOENNTSDIRPATH, dirname, 'index.tsx');
});

module.exports = {
  componentEntrys,
};
