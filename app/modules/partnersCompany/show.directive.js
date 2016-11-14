export default function showHide ($rootScope) {
    return  (scope, element, attrs ) => {
        scope.index;
        $rootScope.$on('partnersCompany', (e,data) => {

            if(scope.index === data[0]) {
                element.addClass("show-hide");
            } else {
                element.removeClass("show-hide");
            }
            scope.index = data[0];
        })


    };
}