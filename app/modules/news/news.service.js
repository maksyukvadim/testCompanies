export default class NewsService {
    constructor($http) {
        this.$http = $http;
    }

    getNews() {
        return this.$http({
            method: 'GET',
            url: 'http://codeit.pro/frontTestTask/news/getList'
    });
    }
}