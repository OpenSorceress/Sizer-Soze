/*
 * sizer-soze
 * https://github.com/jlembeck/Sizer-Soze
 *
 * Copyright (c) 2013 Jeffrey Lembeck & Yoav Weiss
 * Licensed under the MIT license.
 */

/*global process:true*/
/*global require:true*/
(function( exports ){
  "use strict";

  var execFile = require( "child_process" ).execFile,
      url = require( 'url' );

  exports.awesome = function() {
    return 'awesome';
  };

  exports.sizer = function( site, callback ){

    var command = "./lib/sizer";

    var obj = url.parse(site),
        formatted = url.format(obj);

    execFile( command, [ formatted ], function( err, stdout, stderr ){
      var data;
      if( err ){
        callback( err );
      } else {
        data = stdout;
        callback( null, data );
      }
    });

  };

}( typeof exports === 'object' && exports || this ));
