var AccordionButton = MediumEditor.extensions.button.extend({
  name: 'accordion',

  tagNames: ['ACCORDION'], // nodeName which indicates the button should be 'active' when isAlreadyApplied() is called
  contentDefault: '<b>Acc</b>', // default innerHTML of the button
  contentFA: '<i class="fa fa-bars"></i>', // innerHTML of button when 'fontawesome' is being used
  aria: 'Accordion', // used as both aria-label and title attributes
  action: 'accordion', // used as the data-action attribute of the button

  init: function () {
    MediumEditor.extensions.button.prototype.init.call(this);

    this.classApplier = rangy.createClassApplier('accordion', {
      elementTagName: 'accordion',
      normalize: true
    });
  },

  handleClick: function (event) {
    event.preventDefault();
    event.stopPropagation();

    var range = MediumEditor.selection.getSelectionRange(this.document);

    this.base.pasteHTML(
      '<p>(accordion…)</p>' +
      '<p>' + range.startContainer.textContent + '</p>' +
      '<p>--</p>' +
      '<p>accordion tab body</p>' +
      '<p>++++</p>' +
      '<p>accordion tab head</p>' +
      '<p>--</p>' +
      '<p>accordion tab body</p>' +
      '<p>(…accordion)</p>'
    );
  },
});
