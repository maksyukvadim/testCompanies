import RegistrationController from './registration.controller';
import RegistrationService from './registration.service';
import setValid from './setValid.directive';

angular.module('app.registration', [] )
.controller('registrationController', RegistrationController)
.service('RegistrationService', RegistrationService)
    .directive('setValid', setValid)
;


