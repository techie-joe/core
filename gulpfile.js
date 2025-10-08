// ==============================================================
// This is the gulper task definitions.
// - telling gulper how to build the project.
// Find more information about Gulp on http://gulpjs.com
// ==============================================================
// To list available tasks, run: > gulp --tasks
// ==============================================================
const { buildList: _b, watchList: _w, publishList: _p } = require('./gulplist');
if (!_b || !_w || !_p) { throw new Error('Error reading gulplist.js'); }
const
  log = console.log,
  slog = (what, source) => log(`Writing ${what} from: '${source || '(none)'}'`),
  redMessage = (message) => '\x1B[31m' + message + '\x1B[0m',
  onError = function (error) {
    const
      { message, msg, code, fileName, line, column } = error,
      logs = [redMessage(`Error: [${message || (code + ' : ' + msg)}]`)];
    if (fileName) logs.push(fileName + ((line && column) ? ` [${line}${column ? '|' + column : ''}]` : ''));
    log(logs.join('\n'));
    this.emit('end');
  },
  isEmpty = (...oo) => oo.every(o => Array.isArray(o) && o.length > 0),
  { src, dest, series, parallel, watch } = require('gulp'),
  pug = require('gulp-pug'), // read pug write html,php,txt,md
  sass = require('gulp-sass')(require("sass")), // read sass write css
  cleanCSS = require('gulp-clean-css'), // minify css
  rename = require('gulp-rename'), // name file extension
  ext = extname => rename((path) => {
    path.basename = path.basename.substring(0, path.basename.lastIndexOf('.'));
    path.extname = extname;
  }),
  watchOpt = {
    ignoreInitial: false
  },
  _watch = (fn, src, dest, opt = watchOpt) => function watcher() {
    if (isEmpty(src, dest)) {
      log(`Watching: ${redMessage('[Error]')}\n- [src]: ${src || '(undefined)'}\n- [dest]: ${dest || '(undefined)'}`);
    }
    else {
      log(`Watching:${Array.isArray(src)?src.map(item => '\n- ' + item).join('\n'):' '+src}`);
      watch(src, opt, fn(src, dest));
    }
  },
  // file = (source, destination) => async function file_writer() {
  //   slog('FILE', source);
  //   return src(source, { dot: true })
  //     .on('error', onError)
  //     .pipe(dest(destination));
  // },
  html = (source, destination) => async function html_writer() {
    slog('HTML', source);
    return src(source)
      .on('error', onError)
      .pipe(pug({ pretty: true }))
      .pipe(ext('.html'))
      .pipe(dest(destination));
  },
  php = (source, destination) => async function php_writer() {
    slog('PHP', source);
    return src(source)
      .on('error', onError)
      .pipe(pug({ pretty: true }))
      .pipe(ext('.php'))
      .pipe(dest(destination));
  },
  txt = (source, destination) => async function txt_writer() {
    slog('TXT', source);
    return src(source)
      .on('error', onError)
      .pipe(pug())
      .pipe(ext('.txt'))
      .pipe(dest(destination));
  },
  md = (source, destination) => async function md_writer() {
    slog('MD', source);
    return src(source)
      .on('error', onError)
      .pipe(pug())
      .pipe(ext('.md'))
      .pipe(dest(destination));
  },
  sassOpt = {
    outputStyle: 'compressed' // compressed | expanded
  },
  scss = (source, destination, opt = sassOpt) => async function scss_writer() {
    slog('SCSS', source);
    return src(source)
      .on('error', onError)
      .pipe(sass(opt))
      .pipe(cleanCSS())
      .pipe(dest(destination));
  };
const
  _site = _p.site,
  _assets = _p.assets,
  // builders
  // files = series(
  //   file(_c.files, _site),
  // ),
  pages = parallel(
    html(_b.html, _site),
    php(_b.php, _site),
    txt(_b.txt, _site),
    md(_b.md, _site),
  ),
  styles = parallel(
    scss(_b.scss, _assets),
  ),
  // watchers
  pagesw = parallel(
    _watch(html, _w.html, _site),
    _watch(php, _w.php, _site),
    _watch(txt, _w.txt, _site),
    _watch(md, _w.md, _site),
  ),
  stylesw = parallel(
    _watch(scss, _w.scss, _assets),
  ),
  test = async () => {
    log('Build List:', _b);
    log('Watch List:', _w);
    log('Publish List:', _p);
  };
Object.assign(exports, {
  test,
  pages,
  styles,
  pagesw,
  stylesw,
  all: parallel(pages, styles),
  default: parallel(pages, styles),
  watch: parallel(pagesw, stylesw),
});