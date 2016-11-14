export default class ListCompaniesService {
    constructor($http) {
        this.$http = $http;
    }

    getListCompanies() {
        return this.$http({
            method: 'POST',
            url: 'http://codeit.pro/frontTestTask/company/getList'
        });
    }

}