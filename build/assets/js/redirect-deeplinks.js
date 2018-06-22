(function () {
    'use strict';
    var redirectDeeplinks = function (hook, vm) {
      hook.mounted(function () {
        var route = vm.route;
        window.Docsify.get(
          route.file,
          false,
          {}
        ).then(function (){}, function (e) {
          if (e.status === 404) {
            window.location = '/#/?id=' + route.path.replace('/', '');
          }
        });
      });
    };
    $docsify.plugins = [].concat(redirectDeeplinks, $docsify.plugins);
}());
