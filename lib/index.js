'use strict';


const pathUtil = require('path');
const resolveFrom = require('resolve-from');

const debug = require('debug')('plover-assets-vendor');

const rNamespace = /^@[-\w]+\//;


module.exports = function(app) {
  const appRoot = app.settings.applicationRoot;
  const appPkg = require(pathUtil.join(appRoot, 'package.json'));

  const vendors = appPkg.ploverAssetsVendor || [];
  debug('try load module for assets vendor: %s', vendors);

  for (const name of vendors) {
    loadVendor(app, appRoot, name);
  }
};


function loadVendor(app, appRoot, name) {
  const path = resolveFrom(appRoot, name + '/package.json');
  const root = pathUtil.dirname(path);
  const pkg = require(path);

  const info = {
    name: pkg.name.replace(rNamespace, ''),   // remove namespace
    version: pkg.version,
    path: root,
    assets: true,
    assetsRoot: '',
    reload: false,
    build: { uglify: false }
  };

  debug('try load assets vendor: %o', info);
  app.moduleResolver.pushModule(info);
}

