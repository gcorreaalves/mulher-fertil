angular.module('mulherfertil.filters', [])

.filter('zeroBefore', function() {
    return function(value, zeros){
      var v = parseInt(value, 10), z = [].join.call(new Array(zeros), '0');
      if (v < 10) {
        return z + v;
      }
      return v;
    };
  });
