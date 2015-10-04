/**
 * Soundboard
 */

// Reusable function to just pause everything
function stopAll() {
    $('audio').each(function() {
        $(this)[0].pause(); // Pause all audios
        $(this)[0].currentTime = 0; // Reset time
    });
}

// Listen for stop all button to be clicked
$('#stopAll').on('click', stopAll);

// Listen for clicks on our buttons
$('.sounds button').on('click', function() {
    stopAll();

    if ($(this).closest('.sounds').hasClass('play')) {
        var audios = $(this).siblings('audio');
        audios[Math.floor(Math.random() * audios.length)].play();
    }
});

// Listen for audio to play
$('audio').on('play', function() {
    $(this).closest('.sounds').removeClass('play').addClass('pause');
})

// Listen for audio to pause
$('audio').on('pause', function() {
    $(this).closest('.sounds').removeClass('pause').addClass('play');
})
