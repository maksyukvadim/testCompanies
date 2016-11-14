export default class LocationCompaniesController {
    constructor($scope,$rootScope) {
        this.$scope = $scope;
        this.$rootScope = $rootScope;
         this.init();


    }

    init() {
        this.countriesMap = new Map();
        this.arrayColorForChart = [];
        this.$scope.show = true;
        this.$scope.invisible = false;
        this.$rootScope.$on('allCompanies', (event, data) => {
            this.listCountries = data;
            this.makeCountriesMap(data);
            this.makeArrayColor(this.countriesMap.size);
            this.drawChart(Array.from(this.countriesMap.keys()), Array.from(this.countriesMap.values()), this.arrayColorForChart);
            this.$scope.show = false;
        })
    }

    drawChart(labels, dat, backgroundColor) {
        var ctx = document.getElementById("myChart");
        var data = {
            labels: labels,
            datasets: [
                {
                    data: dat,
                    backgroundColor: backgroundColor,
                }]
        };

        this.$scope.myPieChart = new Chart(ctx, {
            type: 'pie',
            data: data,
        });

    }

     getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

     makeCountriesMap (countries) {
        for(let i = 0; i < countries.length; i++) {
            var temp = countries[i].location.name;
            if(this.countriesMap.has(temp)){
                var countCountry  = this.countriesMap.get(temp);
                countCountry++;
                this.countriesMap.set(temp, countCountry);
            } else {
                this.countriesMap.set(temp, 1);
            }
        }
    }

     makeArrayColor(length) {
        for(let i = 0; i < length; i++) {
            this.arrayColorForChart[i] = this.getRandomColor();
     }
    }

    takeCountry(event) {
        var activePoints = this.$scope.myPieChart.getElementAtEvent(event);
        this.$scope.listCopanies = this.getCompaniesByCountry(activePoints[0]._model.label);
        this.$scope.invisible = true;
    }

    getCompaniesByCountry(country) {
        let arrCountries = [];
        for(let i = 0; i<this.listCountries.length; i++) {
            if(country == this.listCountries[i].location.name) {
                arrCountries.push(this.listCountries[i].name);
            }
        }
        return arrCountries;
    }


}


