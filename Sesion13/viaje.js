let app = angular.module("myApp", [])


            app.controller("myCtrl", function($scope){
                $scope.distancia = null
                $scope.tarifa = 0
                $scope.descuento = 0

                

                $scope.CalcularMonto = function(){
                    if ($scope.distancia <= 300) {
                        $scope.tarifa = 250

                    }else if($scope.distancia > 300 && $scope.distancia <= 1000){
                        $scope.tarifa = 250 + 30*($scope.distancia - 300)

                    }else{
                        $scope.tarifa = 250 + 30*(1000-300) + 20*($scope.distancia - 1000)
                    }
                    if ($scope.tarifa > 500) {
                        $scope.descuento = $scope.tarifa * 10 / 100

                    }
                }
            })