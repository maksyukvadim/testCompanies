import NewsController from './news.controller';
import NewsService from './news.service';

angular.module('app.news', [] )
    .controller('newsController', NewsController)
    .service('NewsService', NewsService)
;


