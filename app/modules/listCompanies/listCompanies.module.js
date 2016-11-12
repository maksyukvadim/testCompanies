import ListCompaniesController from './listCompanies.controller';
import ListCompaniesService from './listCompanies.service';

angular.module('app.listCompanies', [] )
.controller('listCompaniesController', ListCompaniesController)
.service('ListCompaniesService', ListCompaniesService)
;


