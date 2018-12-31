window.onbeforeunload = function (event) {
  var message = 'Sure you want to leave?';
  if (typeof event == 'undefined') {
    event = window.event;
  }
  if (event) {
    event.returnValue = message;
  }
  return message;
}