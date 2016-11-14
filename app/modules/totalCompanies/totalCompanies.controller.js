export default class TotalCompaniesController {
    constructor($scope, $rootScope) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
        this.init();
    }

    init() {
        this.$rootScope.$on('allCompanies', (event, data) => {
            this.$scope.allCompanies = data.length;
        })
    }

}