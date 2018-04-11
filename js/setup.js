$(document).ready(function() {
  const selected = [];

  /**
   * Select and unselect parameters
   */
  $('.parameter').click(function(){
    // Toggle class
    $(this).toggleClass('parameter-selected');

    // Update array with selected topics
    const topic = $(this).attr('data-topic');
    selected.includes(topic) ? selected.remove(topic) : selected.push(topic);

    // Update view
    let topics;

    if (selected.length > 0) {
      topics = selected.join(', ');
    } else {
      topics = 'all';
    }

    $('.summary-selected').html(topics);
  });

  /**
   * Start learning button logic
   */
  $('.start-button').click(function() {
    let url = 'learn.html';

    if (selected.length > 0) {
      url += `?t=${selected.join(',')}`;
    }

    window.location.href = url;
  });
});

/**
 * Removes element from array
 * @param {Object} value element to remove
 */
Array.prototype.remove = function(value) {
  this.splice(this.indexOf(value), 1);
}