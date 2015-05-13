/**
 * Created by SHERRI on 5/11/15.
 */

angular.module("tripApp", [])
    .controller("sightCtrl", function ($scope) {
        $scope.todos = [];

       /* $scope.todos = [
            { action: "ufo center", complete: false },
            { action: "nature", complete: false },
            { action: "riverwalk", complete: true },
            { action: "voodoo shops", complete: false },
            { action: "diners", complete: false }];
*/
        $scope.addNewItem = function (newItem) {
            $scope.todos.push({
                sight: newItem.sight + " (" + newItem.address + newItem.city+ ")",
                complete: false
            });
            //remove
            $scope.removeNewItem = function (x){
                var index = $scope.todos.indexOf(x);
                $scope.todos.splice(index,1);
            };
            //end
        }

    });



/*
var app = angular.module('TripApp', []);
app.controller('SightsCtrl', function (){
    var vm = this;
    vm.names = [" " ];

    vm.addName = function (){
        vm.names.push(vm.enteredName);
        vm.enteredName ='';
    };
    //splice index of i, one name
    vm.removeName = function (){
        var i = vm.names.indexOf(name);
        vm.names.splice(i,1);

    };
});
    */
