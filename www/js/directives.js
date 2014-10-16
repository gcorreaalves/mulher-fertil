angular.module('mulherfertil.directives', [])

.directive('calendar', function() {
    return {
      restrict: 'E',
      link: function(scope, element, attrs){
        var html = '', m_current = '';
        angular.forEach(scope.anos, function(ano, a_index){
            angular.forEach(ano, function(mes, m_index){
                if ( m_index == scope.month ) {
                    m_current = 'month-current';
                }
                angular.forEach(mes, function(dias, d_index){
                    html += '<div>' +
                        '<a href="#" class="' + m_current + '" title="' + dias + '/' + m_index + '/' + a_index + '" data-date="' + dias + '/' + m_index + '/' + a_index + '">' + dias + '</a>' +
                    '</div>';
                });
                m_current = "";
            });
        });
        element.replaceWith(html);
      }
    };
  });
