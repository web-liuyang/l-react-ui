const { CEntrys, CEntryObj } = require('./uitls');
const { resolve } = require('./webpack.config');
const path = require('path');

// console.log(CEntrys);

// console.log(CEntryObj);
// console.log(resolve);

for (const [k, v] of Object.entries(CEntryObj)) {
  CEntryObj[k] = {
    import: v,
    dependOn: 'shared',
  };
}

CEntryObj['index'] = {
  import: path.resolve(__dirname, '..', 'src/index.tsx'),
  dependOn: ['form', 'button', 'Button', 'input', 'modal', 'shade', 'textarea', 'toast'],
};

CEntryObj['shared'] = ['react', 'react-dom', 'classnames'];

console.log(CEntryObj);

module.exports = CEntryObj;
