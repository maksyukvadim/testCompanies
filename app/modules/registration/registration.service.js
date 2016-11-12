export default class RegistrationService {
    constructor($http, $q, $httpParamSerializerJQLike) {
        this.$http = $http;
        this.$q = $q;
        this.$httpParamSerializerJQLike = $httpParamSerializerJQLike;
    }

    sendDataForm(data) {
        return this.$http({
            method: 'POST',
            url: 'http://codeit.pro/frontTestTask/user/registration',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            },
            data:this.$httpParamSerializerJQLike(data)
        });
    }

}