promiseApp.service('UserService', ['$http', function($http) {
  this.fetchLoginWithPromise = function(){
    return $http.get('http://api.github.com/users')
      .then(_secondPromise)
      .then(_handleResponse)

    function _secondPromise(response) {
      return $http.get('http://api.github.com/users/' + response.data[0].id)
    }

    function _handleResponse(response){
      var user = response.data;
      return user.login;
    }
  };

  this.fetchLoginWithCallback = function(){
    var login;
    function fetchLogin() {
      _getUsers(function(response){
        _handleResponse(response);
      });
    }

    function _getUsers(){
      return $http.get('http://api.github.com/users')
    }

    function _handleResponse(response){
      return response.data.login;
    }
  }

}]);
