var TooltipButton = MediumEditor.extensions.button.extend({
  name: 'tooltip',

  contentDefault: '<b>B-t</b>', // default innerHTML of the button
  contentFA: '<i class="fa fa-hand-o-up"></i>', // innerHTML of button when 'fontawesome' is being used

  init: function () {
    MediumEditor.extensions.button.prototype.init.call(this);
  },

  handleClick: function (event) {
    event.preventDefault();
    event.stopPropagation();

    var range = MediumEditor.selection.getSelectionRange(this.document);

    // console.info('range', range.cloneContents().cloneNode(true));

    this.base.cleanPaste('(tooltip: text: ' + this.getSelectedContextHtml() + ')');

    MediumEditor.selection.moveCursor(document, range.startContainer, range.startOffset + 10);
  },

  getSelectedContextHtml: function () {
    var $fakeDiv = this.document.createElement('div'),
        $context = MediumEditor.selection.getSelectionRange(this.document).cloneContents().cloneNode(true);
    $fakeDiv.appendChild($context);
    return $fakeDiv.innerHTML;
  },
});
