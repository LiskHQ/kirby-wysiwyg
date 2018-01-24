var BoxWarningButton = MediumEditor.extensions.button.extend({
  name: 'box-warning',

  contentDefault: '<b>B-w</b>', // default innerHTML of the button
  contentFA: '<i class="fa fa-warning"></i>', // innerHTML of button when 'fontawesome' is being used

  init: function () {
    MediumEditor.extensions.button.prototype.init.call(this);
  },

  handleClick: function (event) {
    event.preventDefault();
    event.stopPropagation();

    var range = MediumEditor.selection.getSelectionRange(this.document);

    this.base.pasteHTML(
      '<p>(box-warning...)</p>' +
      '<p>' + range.startContainer.textContent + '</p>' +
      '<p>(...box-warning)</p>'
    );
  },
});
