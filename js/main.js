(function() {

    'use strict';

    function Toggler(elem) {
        this.elem = document.querySelector(elem);
    };

    Toggler.prototype.getElem = function() {
        return this.elem;
    };

    Toggler.prototype.show = function() {
        this.elem.style.display = "block";
    }

    Toggler.prototype.hide = function() {
        this.elem.style.display = "none";
    }

    var elem = new Toggler("#section");
    var button = document.querySelector("#button"); 
    button.addEventListener("click", function() {   
        if (elem.getElem().style.display == "none") {    
            elem.show();  
        } else {    
            elem.hide();  
        } 
    }, false);

})();
