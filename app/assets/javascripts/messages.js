$(document).ready(function(){
  var sendInput = $('textarea.autosize');
  // Enable the popover for templates
  $('#template-button').popover({
    container: '.sendbar'
  });

  $('#template-button').click(function(){
    mixpanelTrack(
      "template_popover_view", {
        templates_count: $(this).data('template-count'),
        client_id: $(this).data('client-id')
      }
    );
  });

  $('#template-button').on('shown.bs.popover', function () {
    $('#template-button').addClass('template-popover-active');

    $('.template-row').click(selectTemplate);
  });

  function selectTemplate() {
    mixpanelTrack(
      "template_insert", {
        client_id: $('#template-button').data('client-id')
      }
    );

    populateTextarea(this);
  }

  function populateTextarea(context) {
    $('#message_body').val($(context).data('template-body'));
    autosize.update(sendInput);
  }

  $(document).on('submit', '#new_message', function(e) {
    // clear the message body text field
    $('#message_body').val('');
  });

  $('#send_later').click(function(){
    var sendLaterMessage = $('textarea#message_body.main-message-input').val();
    $('textarea#scheduled_message_body.send-later-input').val(sendLaterMessage);
  });

  function initializeModal(modalSelector) {
    $(modalSelector).modal();
    $(modalSelector).on('shown.bs.modal', function () {
      $('textarea#scheduled_message_body.send-later-input.textarea').focus();
    });
  }

  initializeModal('#new-message-modal');
  initializeModal('#edit-message-modal');

  function initializeDatepicker(datepickerSelector) {
    $(datepickerSelector).datepicker();
    $(datepickerSelector).datepicker("option", "showAnim", "");
  };

  initializeDatepicker("#edit_message_send_at_date");
  initializeDatepicker("#new_message_send_at_date");

  autosize(sendInput);

  $('form#new_message').on('ajax:success', function(e) {
      autosize.update(sendInput);
  });

  $('#show_note').click(function(){
    $('#truncated_note').hide();
    $('#full_note').show();
  });

  $('#hide_note').click(function(){
    $('#full_note').hide();
    $('#truncated_note').show();
  });

  characterCount($('.main-message-input'));
});

function characterCount(element) {

  var initialLength;
  if (element.length > 0) {
    initialLength = $(element).val().length
  } else {
    initialLength = 0;
  }

  var
    label = $("label[for='" + element.attr('id') + "']"),
    counter = $('<span class="character-count pull-right">' + initialLength + '</span>');

  if (label.length > 0) {
    counter.addClass('pull-bottom');
    label.wrap('<div class="relative-container"></div>').after(counter);
  } else {
    element.before(counter);
  }

  element.on('keydown keyup focus', function(){
    var length = $(this).val().length;
    counter.html(length);
    counter.toggleClass('text--error', length > 160);
  });
}

function mixpanelTrack(event, params) {
  var meta_tags = {
    visitor_id: $('meta[name=visitor_id]').attr("content"),
    deploy: $('meta[name=deploy]').attr("content")
  };

  $.extend(params, meta_tags);
  mixpanel.track(event, params);
}
