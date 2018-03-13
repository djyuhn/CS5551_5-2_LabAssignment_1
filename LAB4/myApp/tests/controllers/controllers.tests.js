describe('PlaylistsCtrl',function()
        {
    var scope;
    
    beforeEach(module('starter.controllers'));
    
    beforeEach(inject(function($rootScope,$controller)
                     {
        scope = $rootScope.$new();
        $controller('PlaylistsCtrl',{$scope:scope});
    }));
    
    it('should have results',function()
      {
       expect(scope.posterimg).toEqual('abcd');  
    });
    
});

describe('findMovie',function()
        {
    var scope;
    
    beforeEach(module('starter.controllers'));
    
    beforeEach(inject(function($rootScope,$controller)
                     {
        scope = $rootScope.$new();
        $controller('mycntrl',{$scope:scope});
    }));
    
    it('should have results',function()
      {
       expect(scope.mtitle).toEqual('hello');  
    });
    
});

describe('classify',function()
        {
    var scope;
    
    beforeEach(module('starter.controllers'));
    
    beforeEach(inject(function($rootScope,$controller)
                     {
        scope = $rootScope.$new();
        $controller('mycntrl',{$scope:scope});
    }));
    
    it('should have results',function()
      {
       expect(scope.mtext).toEqual('do you know about uclasify');  
    });
    
});
describe('Appctrl',function()
        {
    var scope;
    
    beforeEach(module('starter.controllers'));
    
    beforeEach(inject(function($rootScope,$controller)
                     {
        scope = $rootScope.$new();
        $controller('AppCtrl',{$scope:scope});
    }));
    
    it('should have results',function()
      {
       expect(scope.posterimg).toEqual('abcd');  
    });
    
});