export default class ListCompaniesService {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getListCompanies() {
        let deferred = this.$q.defer();
        this.$http({
            method: 'POST',
            url: 'http://codeit.pro/frontTestTask/company/getList'
        })
            .then((response) => {
                deferred.resolve(response);
            }, (response) => {
                deferred.reject(response);
            });
        return deferred.promise;
    }

}