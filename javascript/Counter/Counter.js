function addCounter() {
    // Get current counter value & add 1
    var counter = parseInt($('.counter').text());
    counter += 1;
    //   Append new number
    $('.counter').empty();
    $('.counter').append(counter);
    //   Change text color
    textColorChanger();
}

function minusCounter() {
    // Get current counter value & deduct 1 
    var counter = parseInt($('.counter').text());
    counter -= 1;
    //   Append new number
    $('.counter').empty();
    $('.counter').append(counter);
    // Change text color
    textColorChanger();
}

function textColorChanger() {
    // Get current counter value
    var counter = parseInt($('.counter').text());

    if (Math.sign(counter) === 1) {
        $('body').css('background-color', '#95dd87');
        $('.counter').css('color', '#009900');
    } else if (Math.sign(counter) === 0) {
        $('body').css('background-color', '#ffde59');
    } else if (Math.sign(counter) === -1) {
        $('body').css('background-color', '#ff5757');
        $('.counter').css('color', '#990000');
    }
}
