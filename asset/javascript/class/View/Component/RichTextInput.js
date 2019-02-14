Planck.Extension.FormComponent.View.Component.RichTextInput = function (container, options) {

    this.options = {
        height: '500px'
    };

    this.options = $(options).extend(this.options);


    this.editor = null;

    this.dropZone = null;


    this.features = {};
    //this.imageFeature = null;
    //this.codeFeature = null;

    this.$container = $(container);
    this.$container.data('manager', this);



    this.$placeholder = this.$container.find('.plk-rich-text-placeholder');

    this.$previewPlaceholder = $('.editor-preview');


    this.$valueElement = this.$container.find('.plk-rich-text-value-container');
    this.$valueElement.addClass('form-data');
    this.$valueElement.attr('name', this.$container.attr('data-name'));

    this.$htmlValueElement = this.$container.find('.plk-rich-text-html-value-container');


    //this.$htmlValueElement.addClass('form-data');
    //this.$htmlValueElement.attr('name', this.$container.attr('data-name'));




    this.toolbar = new Planck.Extension.FormComponent.View.Component.RichTextInput.Toolbar(this);

};


Planck.Extension.FormComponent.View.Component.RichTextInput.Feature = {};






Planck.Extension.FormComponent.View.Component.RichTextInput.prototype.initialize = function () {
    this.$container.append(this.$valueElement);
    this.initializeEditor();
};


Planck.Extension.FormComponent.View.Component.RichTextInput.prototype.setHeight = function(height)
{
    $(this.editor.root).css('height', height);
    return this;
};






Planck.Extension.FormComponent.View.Component.RichTextInput.prototype.initializeEditor = function()
{


    this.$container.prepend(this.toolbar.getElement());


    this.initializeDropZone();



    this.previewRenderer = new Planck.Extension.FormComponent.View.Component.RichTextInput.PreviewRenderer(
        this.$previewPlaceholder.get(0),
        this
    );

    this.features['clearFloatFeature'] = new RichEditFeatureClearFloat(this);



    this.editor = new Quill(this.$placeholder.get(0), {
        theme: 'snow',
        modules: {
            toolbar: this.toolbar.getOptions()
        }
    });


    this.initializeFeatures();




    //$(this.editor.root).css('height', '100%');
    $(this.editor.root).resizable();
    this.setHeight(this.options.height);

    //$(this.editor.root).css('height', this.options.height);

    this.$placeholder.resizable({
        handles: "s",
        containment: $('#phi-main-container'),
        stop: function() {
            $(this.editor.root).css('height', '100%');
        }.bind(this)
    });


    this.editor.on('text-change', function (delta, oldDelta, source) {
        this.renderPreview(delta, oldDelta, source);


        this.$valueElement.val(
            JSON.stringify(
                this.editor.getContents()
            )
        );


        this.$htmlValueElement.val(
            this.previewRenderer.getHTML()
        );


    }.bind(this));




    if(this.$valueElement.val()) {
        try {
            let contents = JSON.parse(this.$valueElement.val());
            this.editor.setContents(contents);
        }
        catch(exception) {
            this.$valueElement.val('');
        }

    }


    this.renderPreview();

};


Planck.Extension.FormComponent.View.Component.RichTextInput.prototype.initializeFeatures = function()
{

    this.features['paragraphStyleFeature'] = new RichEditFeatureParagraphStyle(this);

    this.features['codeFeature'] = new RichEditFeatureCode(this);
    this.features['imageFeature'] = new RichEditFeatureImage(this);

    //

    return this;
};




Planck.Extension.FormComponent.View.Component.RichTextInput.prototype.initializeDropZone = function()
{


    this.dropZone = new Planck.Component.DropZone(this.$container);

    this.dropZone.on('drop', function(event) {
        let evt = event.originalEvent;

        if (document.caretRangeFromPoint) {
            let selection = document.getSelection();
            let range = document.caretRangeFromPoint(evt.clientX, evt.clientY);
            if (selection && range) {
                selection.setBaseAndExtent(range.startContainer, range.startOffset, range.startContainer, range.startOffset);
            }
        }
        event.preventDefault();
        event.stopPropagation();
    }.bind(this));

};


Planck.Extension.FormComponent.View.Component.RichTextInput.prototype.getDropZone = function()
{
   return this.dropZone;
};

Planck.Extension.FormComponent.View.Component.RichTextInput.prototype.getToolBar = function()
{
    return this.toolbar;
};





Planck.Extension.FormComponent.View.Component.RichTextInput.prototype.renderPreview = function(delta, oldDelta, source)
{

    var editorDelta = this.editor.getContents();
    var previewDelta = this.previewRenderer.convertEditorBlot(editorDelta);
    this.previewRenderer.setContents(previewDelta);
};


Planck.Extension.FormComponent.View.Component.RichTextInput.prototype.insertContent = function (blotName, value) {
    var range = this.editor.getSelection(true);
    this.editor.setSelection(range.index + 1, Quill.sources.SILENT);
    return this;

};



Planck.Extension.FormComponent.View.Component.RichTextInput.prototype.insertEmbedBlot = function(blotName, data)
{
    var editorRange = this.editor.getSelection(true);
    this.editor.insertText(editorRange.index, "\n");
    var delta = this.editor.insertEmbed(editorRange.index+1, blotName, data);
    this.editor.insertText(editorRange.index+2, "\n");
    this.editor.setSelection(editorRange.index + 3, Quill.sources.SILENT);

    return delta;
};




Planck.Extension.FormComponent.View.Component.RichTextInput.prototype.getHTML = function () {
    return this.$container.find('.ql-editor').html();
};










