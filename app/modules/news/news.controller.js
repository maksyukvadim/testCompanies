export default class NewsController {
    constructor($scope, NewsService) {
       this.$scope = $scope;
       this.NewsService = NewsService;
       this.init();
    }

    init() {
    this.getNews();
    }

    getNews() {
        this.$scope.show = true;
        this.NewsService.getNews().then((response)=> {
            this.$scope.news = response.data.list;
            this.$scope.show = false;
        })
    }


     formatDate(date) {

        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    }

    getDate (date) {
        return this.formatDate(new Date(parseInt(date)));
    }
}