let app = angular.module("myApp", [])

    app.controller("myCtrl",function($scope){
    $scope.horasTrabajo = 0
    $scope.tarifaxHoras = 0

    $scope.calcularTarifa=function(){
        return  $scope.horasTrabajo*$scope.tarifaxHoras
    }

    $scope.calcularDescuento=function(){
            $scope.descuento = 0

                if($scope.calcularTarifa() <=500){
            $scope.descuento =0
                return $scope.calcularTarifa()*0.00


            }else if($scope.calcularTarifa() > 500 && $scope.calcularTarifa() <=1000){
                $scope.descuento =2
            return $scope.calcularTarifa()*(2/100)


            }else if($scope.calcularTarifa() > 1000 && $scope.calcularTarifa() <=4000){
                $scope.descuento =8
                return $scope.calcularTarifa()*(8/100)


            }else if($scope.calcularTarifa() > 4000 && $scope.calcularTarifa() <=8000){
                $scope.descuento =15
            return $scope.calcularTarifa()*(15/100)


            }else if($scope.calcularTarifa() > 8000 && $scope.calcularTarifa() <=10000){
                $scope.descuento =21
            return $scope.calcularTarifa()*(20/100)

            
            }else if($scope.calcularTarifa() >=10001){
                $scope.descuento =30
            return $scope.calcularTarifa()*(30/100)
            }                
    }          
            $scope.calcularSueldo=function(){
                return $scope.calcularTarifa() -$scope.calcularDescuento()
            }

})