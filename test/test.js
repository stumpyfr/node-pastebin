'use-strict';

var assert = require('assert');
var paste = require('../src/pastebin')('YOUR DEV KEY');
var USERNAME = "A VALID USERNAME";
var PASSWORD = "A VALID PASSWORD";

describe('Basic Test.', function() {
    it('create a new bin', function(done) {
        paste.new({
            title: 'test',
            content: 'Just a little Test.'
        }, function(err, ret) {
            assert.equal(err, null);
            assert.equal(!! ret, true);
            done();
        });
    });
    it('login with invalid user/password fails', function(done) {
        paste.login(USERNAME, PASSWORD + "fake", function(err, data) {
            assert.equal(!!err, true);
            assert.equal(!!data, false);
            done();
        });
    });
    it('login with valid user/password succeeds', function(done) {
        paste.login(USERNAME, PASSWORD, function(err, data) {
            assert.equal(!!err, false);
            assert.equal(!!data, true);
            done();
        });
    });
    it('private paste with valid user/password succeeds', function(done) {
        paste.login(USERNAME, PASSWORD, function(err, data) {
            assert.equal(!!err, false);
            assert.equal(!!data, true);
            paste.new({
                title: 'test',
                content: 'test private post',
                user_key: data,
                privacy: 2
            }, function(err, ret) {
                assert.equal(err, null);
                assert.equal(!! ret, true);
                done();
            });
        });
    });
});