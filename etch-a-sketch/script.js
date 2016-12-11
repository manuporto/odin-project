/*jslint browser: true plusplus: true */
/*global $, jQuery, alert*/

function createGrid(size) {
    //"use strict";
    var i, gwidth = $('#grid').css('width'),
        blockSize = 600 / Math.sqrt(size),
        styles = {
            'width': blockSize,
            'height': blockSize
        };
    
    for (i = 0; i < size; i++) {
        $('#grid').append("<div class='block'></div>");
    }
    $('.block').css(styles);
}

function draw() {
    $('.block').hover(function () {
        $(this).css('background-color', 'black');
    });
}

$(document).ready(function () {
    //"use strict";
    var MAX_SIZE = 30,
        MIN_SIZE = 5,
        gsize = MIN_SIZE;
    createGrid(Math.pow(gsize, 2));
    
    draw();
   
    $('#new').click(function () {
        gsize = parseInt(prompt("New grid size (blocks per row): ", 5));
        if (gsize > MAX_SIZE || gsize < MIN_SIZE) {
           gsize = MIN_SIZE; 
        }
        $('#grid').html('');
        createGrid(Math.pow(gsize, 2));
        draw();
    });

    $('#reset').click(function() {
        $('.block').css('background-color', 'white');
        draw();
    });
});
