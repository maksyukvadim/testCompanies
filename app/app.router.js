
export function routerConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('registration', {
      url: '/',
            templateUrl: 'views/registration/registration.view.html',
            controller: 'registrationController',
            controllerAs: 'vm',
      }
    )
      .state('companies', {
          templateUrl: 'views/companies/companies.view.html',
      })
      .state('companies.all', {
              url: '/all',
          views: {
              'news': {
                  templateUrl: 'views/news/news.view.html',
                  controller: 'newsController',
                  controllerAs: 'vm',
              },
              'totalCompanies': {
                  templateUrl: 'views/totalCompanies/totalCompanies.view.html',
                  controller: 'totalCompaniesController',
                  controllerAs: 'vm',
              },
              'partnersCompany': {
                  templateUrl: 'views/partnersCompany/partnersCompany.view.html',
                  controller: 'partnersCompanyController',
                  controllerAs: 'vm',
              },
              'locationCompanies': {
                  templateUrl: 'views/locationCompanies/locationCompanies.view.html',
                  controller: 'locationCompaniesController',
                  controllerAs: 'vm',
              },
              'listCompanies': {
                  templateUrl: 'views/listCompanies/listCompanies.view.html',
                  controller: 'listCompaniesController',
                  controllerAs: 'vm',
              }
          }

          }
      );
    $urlRouterProvider.otherwise('/');
}
