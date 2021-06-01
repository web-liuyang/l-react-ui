const execa = require('execa');
const path = require('path');
const less = require('less');

const fs = require('fs-extra');

const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

function transformLess(lessFile, config = {}) {
  const { cwd = process.cwd() } = config;
  const resolvedLessFile = path.resolve(cwd, lessFile);

  let data = fs.readFileSync(resolvedLessFile, 'utf-8');
  // console.log(data)
  data = data.replace(/^\uFEFF/, '');

  // Do less compile
  const lessOpts = {
    paths: [path.dirname(resolvedLessFile)],
    filename: resolvedLessFile,
    javascriptEnabled: true,
  };
  return less
    .render(data, lessOpts)
    .then((result) => postcss([autoprefixer]).process(result.css, { from: undefined }))
    .then((r) => r.css)
    .catch((err) => {
      console.log('transform-less-err', err);
    });
}

const shell = (cmd) => execa(cmd, { shell: true });

const resolve = (pathname) => path.resolve(__dirname, '..', pathname);

// less.options = {
//   async: false,
//   fileAsync: false,
// };

const stylePath = resolve('src/style');
// const output = resolve('test2');

async function lessRender() {
  // const res = await shell(`yarn lessc ${stylePath}`);
  transformLess('src/style/index.less')
    .then((res) => {
      // console.log('res', res);
      const a = fs.writeFileSync(resolve('test-less.less'), res);
      // console.log(a);
    })
    .catch((err) => {
      console.log('err', err);
    });
}
// console.log(process.cwd())
lessRender();
