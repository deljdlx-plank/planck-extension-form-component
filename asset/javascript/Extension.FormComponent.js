Planck.Extension.FormComponent = {};
Planck.Extension.FormComponent.View = {};

Planck.Extension.FormComponent.View.Component = {};


//Planck.Extension.FormComponent.View.FormElement = {};

Planck.Extension.FormComponent.Module = {};
Planck.Extension.FormComponent.Model = {};
Planck.Extension.FormComponent.Model.Entity = {};
Planck.Extension.FormComponent.Model.Repository = {};




Planck.Extension.FormComponent.initialize = function(container)
{
    $(container).find('.plk-component.plk-tree-input').each(function(index, element) {
        var tree = new Planck.Extension.FormComponent.View.Component.TreeInput(element);
        tree.initialize();
    });



    $(container).find('.plk-component.plk-tag-input').each(function(index, element) {
        var tagInput = new Planck.Extension.FormComponent.View.Component.TagInput(element);
        tagInput.initialize();
    });


    $(container).find('.plk-component.plk-rich-text-input').each(function(index, element) {
        var richEdit = new Planck.Extension.FormComponent.View.Component.RichTextInput(element);
        richEdit.initialize();
    });

};
