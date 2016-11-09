import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './modules/registration/registration.module';
import './modules/listCompanies/listCompanies.module';
import './modules/news/news.module';
import './modules/locationCompanies/locationCompanies.module';
import './modules/partnersCompany/partnersCompany.module';
import './modules/totalCompanies/totalCompanies.module';




import {routerConfig} from './app.router';

angular.module('myApp', [uiRouter, 'app.registration', 'app.listCompanies', 'app.news', 'app.locationCompanies',
    'app.partnersCompany', 'app.totalCompanies'])
.config(routerConfig)
;
