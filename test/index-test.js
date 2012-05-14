var vows = require('vows');
var assert = require('assert');
var nickname = require('index');


vows.describe('junction-nickname').addBatch({
  
  'module': {
    'should export middleware': function () {
      assert.isFunction(nickname);
      assert.isFunction(nickname.nicknameParser);
    },
  },
  
}).export(module);
