const
  buildList = (() => {
    const o = {};
    o.scss = `_scss/**/*.scss`;
    ['html', 'php', 'txt', 'md'].forEach(type => {
      o[type] = `_pug/**/*.${type}.pug`;
    });
    return o;
  })(),
  watchList = buildList,
  publishList = {
    site: 'site',
    assets: 'assets',
  };
module.exports = { buildList, watchList, publishList };