(function () {
    'use strict';
    
    function appendAnchor (id) {
      var anchor = document.getElementById('skip-to-content');
      if (!anchor) {
        anchor = document.createElement('a');
        anchor.className = 'skip';
        anchor.innerHTML = 'Skip to content';
        anchor.id = 'skip-to-content';
        anchor.href = '#main';
        anchor.tabIndex = 1;
        anchor.addEventListener('click', function(evt) {
          document.getElementById('main').tabIndex = 2;
          evt.preventDefault();
        });
        document.body.insertBefore(anchor, document.body.childNodes[0]);
      }
    }
    
    function collect (html, next) {
      var parser = new DOMParser(),
          doc = parser.parseFromString(html, "text/html"),
          id =  doc.getElementsByTagName('h2')[0].id;
      appendAnchor(id);
      next(html)
    }
    
    var install = function (hook, vm) {
      hook.afterEach(collect);
    };
    
    $docsify.plugins = [].concat(install, $docsify.plugins);
    
}());
