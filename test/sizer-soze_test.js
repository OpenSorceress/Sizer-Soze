/*global require:true*/

(function( exports ){
  'use strict';

  var sizer_soze = require('../sizer-soze.js');

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

  exports.sizer = {
    setUp: function(done) {
      // setup here
      done();
    },
    'no args': function(test) {
      test.expect(1);
      test.throws(function(){
        sizer_soze.sizer();
      }, Error, "A URL must be sent");
      test.done();
    },
    'one arg': function(test) {
      test.expect(1);
      test.throws(function(){
        sizer_soze.sizer( "www.cnn.com" );
      }, Error, "A callback is necessary to grab any data");
      test.done();
    },
    'callback is not valid': function(test) {
      test.expect(1);
      test.throws(function(){
        sizer_soze.sizer( "www.cnn.com", "foo" );
      }, Error, "A callback is necessary to grab any data");
      test.done();
    //},
    //'callback brings back data': function(test) {
    //  test.expect(1);
    //  sizer_soze.sizer( "www.cnn.com", function( data ){
    //    test.ok( data );
    //    test.done();
    //  });
    }
  };
}( typeof exports === 'object' && exports || this ));
