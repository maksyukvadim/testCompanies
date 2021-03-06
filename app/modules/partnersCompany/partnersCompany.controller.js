export default class PartnersCompanyController {
    constructor($scope, $rootScope) {
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.init();
        this.$scope.show = false;
    }

    init() {
        this.$scope.sortType = 'name';
        this.$scope.sortReverse = false;
        this.watchPartners();


    }

    watchPartners() {
        this.$rootScope.$on('partnersCompany', (event, data)=> {
            this.$scope.partners = data[0];
        })
    }
}