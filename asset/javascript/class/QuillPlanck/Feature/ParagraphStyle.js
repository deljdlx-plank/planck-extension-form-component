RichEditFeatureParagraphStyle = function(editor)
{
    this.editor = editor;

    this.$selectBox = $(
        '<select>'+
        '<option value="">Style par défaut</option>'+
            '<option value="important">Important</option>'+
        '</select>'
    );


    var paragraphStyler = new Parchment.Attributor.Class ('paragraphStyler', 'plk-paragraph');
    Parchment.register(paragraphStyler);


    $(this.editor.editor.root).click(function() {

        this.$selectBox.find('option').prop('selected', false);

        var formats = this.editor.editor.getFormat();
        for(var formatName in formats) {

            if(formatName == 'paragraphStyler') {
                var format = formats[formatName];
                this.$selectBox.find('option[value='+format+']').prop('selected', true);

                return;
            }
        }
        console.log(formats);

    }.bind(this));


    this.$selectBox.change(function(event) {

        var styleName = $(event.target).val();
        if(styleName) {
            this.editor.editor.format('paragraphStyler', styleName);
        }
        else {
            this.editor.editor.format('paragraphStyler', false);
        }
    }.bind(this));




    var clear = new Parchment.Attributor.Class ('class', 'plk-paragraph');
    Parchment.register(clear);

    /*
     this.$toolbarButton.click(function() {
     this.clearFloat();
     }.bind(this));
     */

    this.editor.getToolBar().addButton(this.$selectBox);
};





RichEditFeatureClearFloat.prototype.clearFloat = function()
{







};
