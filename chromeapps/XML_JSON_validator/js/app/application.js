$(document).ready(function() {
  // setup
  loadGoogleNews();

});

function loadGoogleNews(){
  alertError('Nothing to load');
}

function alertError(message) {
  _addAlert('alert-danger', message, '<i class="fa fa-exclamation-circle"></i>');
}

function _addAlert(type, message, icon) {
  var aContent = '<div class="alert ' + type + ' alert-dismissible" role="alert">';
  aContent += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';

  if(icon !== undefined) {
    aContent += icon + ' ';
  }

  aContent += message;
  aContent += '</div>';

  $('#alerts').append(aContent);
}
