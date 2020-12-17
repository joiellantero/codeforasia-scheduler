// bulma js
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }

    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
        var $notification = $delete.parentNode;
    
        $delete.addEventListener('click', () => {
          $notification.parentNode.removeChild($notification);
        });
    });
  
});

// prevent mobile page from overflowing
$.each( $('*'), function() { 
    if( $(this).width() > $('body').width()) {
    console.log("Wide Element: ", $(this), "Width: ",   
        $(this).width()); 
    } 
});

// xdsoft date time picker
$(function () {
    $("#id_date").datetimepicker({
        format: 'M d, Y H:i',
        formatDate:'m.d.Y',
        minDate:'+1970/01/02', //tomorrow is maximum date calendar
        allowTimes:[
            '12:00', '15:00', 
            '17:00', '17:05', '17:20', '19:00', '20:00'
        ],
        allowDates:[
            '12.20.2020', '12.19.2020',
        ]
    });
});

// prevents multiple form submissions
var wasSubmitted = false;    
function checkBeforeSubmit(){
    if(!wasSubmitted) {
        wasSubmitted = true;
        return wasSubmitted;
    }
    return false;
}  
