$(function() {
  $('#change-color').on('click', function(){
    $('#target').css('color', 'pink');
  });

  $('#change-text').on('click', function(){
    $('#target').text('Hello');
  });

  $('#fade-out').on('click', function(){
    $('#target').css('opacity', 0);
  });

  $('#fade-in').on('click', function(){
    $('#target').css('opacity', 1);
  });
});