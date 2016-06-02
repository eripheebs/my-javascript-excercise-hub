describe('UserService', function() {
  beforeEach(module('promiseApp'));

  var UserService, httpBackend;
  var user = {login: "pingu"};

  beforeEach(inject(function(_UserService_, $httpBackend) {
    UserService = _UserService_
    httpBackend = $httpBackend;
    httpBackend.expectGET('http://api.github.com/users').respond([{id: 1}]);
    httpBackend.expectGET('http://api.github.com/users/1').respond(user);
  }));

  it('it fetches the first user\'s login from GitHub using a promise', function() {
    UserService.fetchLoginWithPromise().then(function(login){
      expect(login).toEqual("pingu");
    });

    httpBackend.flush();
  });

  it('it fetches the first user\'s login from GitHub using a callback', function() {
    UserService.fetchLoginWithCallback(function(login){
      expect(login).toEqual("pingu");
    });
    
  });

});
