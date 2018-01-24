var BoxLightbulbButton = MediumEditor.extensions.button.extend({
  name: 'box-lightbulb',

  contentDefault: '<b>B-lb</b>', // default innerHTML of the button
  contentFA: '<i class="fa fa-lightbulb-o"></i>', // innerHTML of button when 'fontawesome' is being used

  init: function () {
    MediumEditor.extensions.button.prototype.init.call(this);
  },

  handleClick: function (event) {
    event.preventDefault();
    event.stopPropagation();

    var range = MediumEditor.selection.getSelectionRange(this.document);

    this.base.pasteHTML(
      '<p>(box-lightbulb...)</p>' +
      '<p>' + range.startContainer.textContent + '</p>' +
      '<p>(...box-lightbulb)</p>'
    );
  },
});
