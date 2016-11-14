export default class ListCompaniesController {
    constructor($scope, ListCompaniesService, $rootScope) {
        this.ListCompaniesService = ListCompaniesService;
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.init();
    }

    init() {
        this.ListCompaniesService.getListCompanies().then((response) => {
            this.$scope.listCompanies = response.data;
            this.eventAllCompanies(response);

        })
    }

    eventAllCompanies(response) {
        this.$rootScope.$broadcast('allCompanies', response.data.list);
    }

    eventPartnersCompany(partners, index) {
        this.$rootScope.$broadcast('partnersCompany', [partners,index]);
        this.activeBlock(index);
    }

    activeBlock(index) {
        if(index === this.$scope.selected) {
            this.$scope.selected = undefined;
        } else {
            this.$scope.selected = index;
        }

    }
}