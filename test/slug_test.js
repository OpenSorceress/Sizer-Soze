/*global require:true*/

(function( exports ){
  'use strict';

  var slug = require('../lib/slug.js');

  /*
    ======== A Handy Little Nodeunit Reference ========
    https://github.com/caolan/nodeunit

    Test methods:
      test.expect(numAssertions)
      test.done()
    Test assertions:
      test.ok(value, [message])
      test.equal(actual, expected, [message])
      test.notEqual(actual, expected, [message])
      test.deepEqual(actual, expected, [message])
      test.notDeepEqual(actual, expected, [message])
      test.strictEqual(actual, expected, [message])
      test.notStrictEqual(actual, expected, [message])
      test.throws(block, [error], [message])
      test.doesNotThrow(block, [error], [message])
      test.ifError(value)
  */

  exports.slug = {
    setUp: function(done) {
      // setup here
      done();
    },
    'no args': function(test) {
      test.expect(1);
      test.throws(function(){
        var s = slug.slug();
      }, Error, "A string must be sent");
      test.done();
    },
    'An empty string': function(test) {
      test.expect(1);
      var s = slug.slug("");
      test.equal(s, "", "Should return an empty string" );
      test.done();
    },
    'a string with nothing to change': function(test) {
      test.expect(1);
      var happy = slug.slug( "happy" );
      test.equal(happy, "happy", "Should match" );
      test.done();
    },
    'a string with a space': function(test) {
      test.expect(1);
      var happy = slug.slug( "happy birthday" );
      test.equal(happy, "happy_birthday", "Should match" );
      test.done();
    },
    'a big ol url': function(test) {
      test.expect(1);
      var happy = slug.slug( "http://www.google.com/what are you searching for/I probably know already/I told the NSA all about it/USE CHROME" );
      test.equal(happy, "http___www_google_com_what_are_you_searching_for_I_probably_know_already_I_told_the_NSA_all_about_it_USE_CHROME", "Should match" );
      test.done();
    }
  };

}( typeof exports === 'object' && exports || this ));
