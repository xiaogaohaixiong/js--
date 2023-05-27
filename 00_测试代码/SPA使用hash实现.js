(function () {
    var navItems = document.querySelectorAll('#router-nav .nav-item')
    var view = document.getElementById('router-view')
    
    window.addEventListener('load', function () {
      if (! location.hash) {location.hash = navItems[0].dataset.id}
      console.log(location.hash.slice(1));
      view.innerHTML = location.hash.slice(1)
    })
  
    for (var navItem of navItems) {
      console.log(navItem)
      navItem.addEventListener('click', function () {
        location.hash = this.dataset.id
      })
    }
    window.addEventListener('hashchange', function () {
        console.log('ddd');
      view.innerHTML = location.hash.slice(1)
      // ajax here
    })
  })()