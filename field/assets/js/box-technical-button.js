var BoxTechnicalButton = MediumEditor.extensions.button.extend({
  name: 'box-technical',

  contentDefault: '<b>B-t</b>', // default innerHTML of the button
  contentFA: '<i class="fa fa-wrench"></i>', // innerHTML of button when 'fontawesome' is being used

  init: function () {
    MediumEditor.extensions.button.prototype.init.call(this);
  },

  handleClick: function (event) {
    event.preventDefault();
    event.stopPropagation();

    var range = MediumEditor.selection.getSelectionRange(this.document);

    this.base.pasteHTML(
      '<p>(box-technical...)</p>' +
      '<p>' + range.startContainer.textContent + '</p>' +
      '<p>(...box-technical)</p>'
    );
  },
});
