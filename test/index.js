'use strict';


const pathUtil = require('path');
const plover = require('plover');
const plugin = require('../lib/plugin');


describe('plugin', function() {
  it('should load assets modules', function() {
    const root = pathUtil.join(__dirname, 'fixtures/app');
    const app = plover({ applicationRoot: root });
    plugin(app);

    const info = app.moduleResolver.resolve('jquery');
    info.should.eql({
      name: 'jquery',
      version: '2.0.0',
      path: pathUtil.join(root, 'node_modules/jquery'),
      assets: true,
      assetsRoot: '',
      reload: false,
      build: { uglify: false }
    });
  });


  it('should work without ploverAssetsVendor config', function() {
    const root = pathUtil.join(__dirname, 'fixtures/empty');
    const app = plover({ applicationRoot: root });
    plugin(app);
  });
});
