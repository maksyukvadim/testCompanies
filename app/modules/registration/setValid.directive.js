export default function setValid () {
    return  (scope, element, attrs ) => {

        element.on('click', function () {
            scope.registrForm[attrs.name].$setValidity( attrs.name +'Serv', true);
        });

        scope.$on('serverError', (event,data) => {
            if(data.field == attrs.name) {
                scope.registrForm[attrs.name].$setValidity(attrs.name + 'Serv', false);
                scope.registrForm[attrs.name].$setTouched();
            }
        })
    };
}