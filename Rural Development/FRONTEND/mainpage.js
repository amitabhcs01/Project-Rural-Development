
        document.addEventListener('DOMContentLoaded', function () {
          const body = document.body;
          const toggleSwitch = document.createElement('input');
          toggleSwitch.type = 'checkbox';
          toggleSwitch.id = 'darkModeToggle';
          toggleSwitch.className = 'toggle-switch';
          document.querySelector('.navbar').appendChild(toggleSwitch);
      
          const currentTheme = localStorage.getItem('theme');
      
          if (currentTheme) {
            body.classList.add(currentTheme);
            if (currentTheme === 'dark') {
              toggleSwitch.checked = true;
            }
          }
      
          toggleSwitch.addEventListener('change', switchTheme);
      
          function switchTheme() {
            if (toggleSwitch.checked) {
              body.classList.add('dark');
              localStorage.setItem('theme', 'dark');
            } else {
              body.classList.remove('dark');
              localStorage.setItem('theme', 'light');
            }
          }
        });
        
            function viewMore() {
                
                window.open("index2.html", '_blank');
            }
            var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "modi1 (1).jpg";
images[1] = "http://lorempixel.com/400/200/sports";
images[2] = "http://lorempixel.com/400/200/food";
images[3] = "http://lorempixel.com/400/200/people";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
        
       
           
   