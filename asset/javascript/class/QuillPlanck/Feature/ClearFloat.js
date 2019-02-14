RichEditFeatureClearFloat = function(editor)
{
    this.editor = editor;

    this.$toolbarButton = $('<button class="fas fa-angle-double-left ql-clear" value="both"></button>');


    var clear = new Parchment.Attributor.Class ('clear', 'plk-blot-style-clear');
    Parchment.register(clear);

    /*
    this.$toolbarButton.click(function() {
        this.clearFloat();
    }.bind(this));
    */

    this.editor.getToolBar().addButton(this.$toolbarButton);
};


RichEditFeatureClearFloat.prototype.clearFloat = function()
{







};
