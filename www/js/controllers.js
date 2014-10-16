angular.module('mulherfertil.controllers', ['ionic'])

.controller('CalendarCtrl', function($scope) {

    var 
    date  = new Date(),
    month = date.getMonth() + 1,
    year  = date.getFullYear();

    $scope.fertilDay = 28;
    $scope.month = month;
    $scope.year  = year;

    function updateCalendar( month, year, period ){

        $scope.days  = [];

        var 
        date      = new Date(),
        month     = month,
        year      = year,
        firstDay  = new Date(year, ( month - 1), 1).getDay(),
        lastDay   = new Date(year, ( month - 1) + 1, 0).getDate(),
        totalDays = lastDay + firstDay,
        i = 0;

        while( i <= totalDays ){
            d = {};
            if ( i < firstDay || (i - firstDay + 1) > lastDay) {
                d['content'] = "&#160;";
            } else {
                d['content'] = i - firstDay + 1;

                if( period ){
                    if( period.indexOf(i - firstDay + 1) > -1 ){
                        d['period'] = true;
                    }
                }
            }
            $scope.days.push(d);
            i++;
        }

    }

    $scope.getPeriod = function(day){
        var 
        d = day,
        cicle = $scope.fertilDay,
        baseCicle = 28,
        baseQtDay = 14,
        restult = (cicle - baseCicle) + baseQtDay;
        p = d + restult;
        updateCalendar($scope.month, $scope.year, [((d + restult) - 2), ((d + restult) - 1), (d + restult), ((d + restult) + 1), ((d + restult) + 2)]);
    }

    $scope.$watchCollection( '[month, year]', function(newvalue){
        var
        m = newvalue[0],
        y = newvalue[1];
        updateCalendar(m, y);
    });
});
