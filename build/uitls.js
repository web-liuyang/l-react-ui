const path = require('path');
const fs = require('fs');

const rootResolve = (filename) => {
  return path.join(__dirname, '..', filename);
};

// 组件入口目录路径
const COMPOENNTSDIRPATH = rootResolve('src/components');

const componentDirs = fs.readdirSync(COMPOENNTSDIRPATH);

const CEntrys = [];

const CEntryObj = {};

componentDirs.forEach((filename) => {
  const item = {
    foldername: filename,
    dir: COMPOENNTSDIRPATH,
    format: path.join(COMPOENNTSDIRPATH, filename, 'index.tsx'),
  };
  CEntrys.push(item);

  CEntryObj[filename.toLowerCase()] = path.join(COMPOENNTSDIRPATH, filename, 'index.tsx');
});

// console.log(CEntrys);
// console.log(CEntryObj)
module.exports = {
  CEntrys,
  CEntryObj,
};

const rootDir = path.resolve(__dirname, '../');
const componentDir = 'src/components';
const cModuleNames = fs.readdirSync(path.resolve(componentDir));

const cModuleMap = cModuleNames.reduce((prev, name) => {
  prev[name] = path.join(rootDir, `${componentDir}/${name}/index.js`);

  return prev;
}, {});

// console.log('CEntrys',CEntrys)
// console.log('CEntryObj',CEntryObj)
// console.log('cModuleMap',cModuleMap);
