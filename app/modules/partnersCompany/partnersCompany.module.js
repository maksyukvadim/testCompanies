import PartnersCompanyController from './partnersCompany.controller';
import showHide from './show.directive';

angular.module('app.partnersCompany', [] )
    .controller('partnersCompanyController', PartnersCompanyController)
    .directive('showHide', showHide)
;


