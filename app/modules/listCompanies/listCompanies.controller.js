export default class ListCompaniesController {
    constructor($scope, ListCompaniesService) {
        this.ListCompaniesService = ListCompaniesService;
        this.$scope = $scope;
        this.init();
    }

    init() {
        this.ListCompaniesService.getListCompanies().then((response) => {
            console.log(response.data);
            this.$scope.listCompanies = response.data;

        })
    }
}