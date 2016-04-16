angular.module("custom-directive-dropdown", [])
.directive('dropDown', function () {
  return {
    restrict: "E",
    scope: {
      listOptions: '='
    },
  templateUrl : 'dropdownTemplate.html',
    controller: function ( $scope ) {
    $scope.sl = false;
    $scope.ssl = false;
    $scope.psl = true;
      $scope.results = [];
      $scope.cutValue = function(dm) {
            if($scope.listOptions){
              for(var i=0;i<$scope.listOptions.length; i++){
                if($scope.listOptions[i].option == dm){
                  var inData = {'tid': $scope.listOptions[i].option,'dname':$scope.listOptions[i].name};
                  if($scope.results.length > 0){
                    for(var j=0;j<$scope.results.length; j++){

                      if($scope.results[j].tid==dm)
                      {
                        $scope.results.push(inData);
                        break;
                      }
                      else {
                        $scope.results = [];
                        $scope.results.push(inData);
                      }

                    }
                  }
                  else
                  {
                    $scope.results.push(inData);
                  }

                }
              }

            }
        }

      $scope.hoverList = function(km){
        $scope.ssl = !$scope.ssl;
        for(var i=0;i<$scope.listOptions.length; i++){
          if($scope.listOptions[i].name == km){

            $scope.resultsHov = [
              {
                'dname':$scope.listOptions[i].name,
                'imagename':$scope.listOptions[i].image,
                'platname':$scope.listOptions[i].option,
                'carim': $scope.listOptions[i].carimg
              }
            ];
          }
        }
        //$scope.hideTip();
      }

      $scope.hideList = function(hkm){
        $scope.ssl = !$scope.ssl;
      }


      $scope.showData = function(selm){
        $scope.ssl = !$scope.ssl;
        $scope.sl = !$scope.sl;
        $scope.psl = !$scope.psl;
        if(selm){
          $scope.putData = selm;
        }

      }

      $scope.showList = function(){
        $scope.sl = !$scope.sl;
        var myEl = angular.element( document.querySelector( '.predictedDD' ) );
        myEl.addClass('ng-valid-parse');

        var myElList = angular.element( document.querySelector('.lister'));
        myElList.addClass('deepDown');
      }

      },


  };
});
