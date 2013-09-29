(function( exports ){

  "use strict";

  exports.slug = function( str ){
    if( typeof str === "undefined" || str === null ){
      throw new Error( "A string must be sent in to be slugged" );
    }
    return str.replace(/[^\w]/gi,"_");
  };

}( typeof exports === 'object' && exports || this ));
