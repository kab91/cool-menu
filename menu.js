document.addEventListener('DOMContentLoaded', function(event) {
	
	var onTransitionEnd = function() {
		var body = document.body, page = document.getElementById('page-wrapper');
		  
		body.classList.remove('animating');
		body.classList.remove('left');
		body.classList.remove('right');
		
		body.classList.toggle('menu-visible');
	 
		page.transitionend = 
		page.webkitTransitionEnd =
		page.otransitionend = 
		page.MSTransitionEnd = null;
	};
	
    // Run if toggle menu button was tapped or clicked
	document.getElementById('cool-menu-toggle').addEventListener('click', function(e) {
	  e.preventDefault();
	 
	  var body = document.body, page = document.getElementById('page-wrapper');

	  // When the toggle menu link is clicked, animation starts
	  body.classList.add('animating');
	 
	  // Set direction of the animation
	  body.classList.add(body.classList.contains('menu-visible') ? 'right' : 'left');
	  
	  // add event listeners for transition end event
	   if (page.addEventListener) {
			page.addEventListener('transitionend', onTransitionEnd, false);
			page.addEventListener('webkitTransitionEnd', onTransitionEnd, false);
			page.addEventListener('otransitionend', onTransitionEnd, false);
			page.addEventListener('MSTransitionEnd', onTransitionEnd, false);
		} else {
			page.attachEvent('transitionend', onTransitionEnd);
			page.attachEvent('webkitTransitionEnd', onTransitionEnd);
			page.attachEvent('otransitionend', onTransitionEnd);
			page.attachEvent('MSTransitionEnd', onTransitionEnd);
		}
	});
});