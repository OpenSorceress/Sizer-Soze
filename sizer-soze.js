/*global process:true*/
/*global require:true*/
(function( exports ){
  "use strict";

  var execFile = require( "child_process" ).execFile,
      url = require( 'url' );

  exports.sizer = function( site, callback ){

    var obj = url.parse(site),
        formatted = url.format(obj);

    execFile( "./sizer", [ formatted ], function( err, stdout, stderr ){
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
