export default class RegistrationController {
    constructor($scope, RegistrationService, $state) {
        this.$scope = $scope;
        this.$state = $state;
        this.RegistrationService = RegistrationService;
        this.init();
    }

    init() {
        this.$scope.dataRegistration = { gender : 'male'};
    }

    send(data) {
        this.RegistrationService.sendDataForm(data).then((response) => {
            if(response.data) {
                this.redirect(response.data.status);
                this.$scope.responseServer = response.data;
                this.$scope.$broadcast('serverError', response.data);

            }
        });
    }

    redirect(status) {
            if(status === 'OK') {
                this.$state.go('companies.all');
            }
    }

    touch(dataRegistration) {
        if (this.$scope.registrForm.$invalid) {
            angular.forEach(this.$scope.registrForm.$error, function (field) {
                angular.forEach(field, function(errorField){
                    errorField.$setTouched();
                })
            });
        } else {
            this.send(dataRegistration);
        }

        }



}