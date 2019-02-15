Planck.Extension.FormComponent.View.Component.EntitySelector = function (container, options)
{

    this.$container = $(container);

    this.$element = $('<div></div>');




    this.$entitySelector = $('<select></select>');
        var $fieldset = $('<fieldset><label>Type d\'object</label></fieldset>');
        $fieldset.find('label').append(this.$entitySelector);
        this.$element.append($fieldset);

    this.$methodSelector = $('<select></select>');
        var $fieldset = $('<fieldset><label>Méthode de chargement</label></fieldset>');
        $fieldset.find('label').append(this.$methodSelector);
        this.$element.append($fieldset);

    this.$attributeSelector = $('<select></select>');
    this.$attributeValue = $('<input/>');

        var $fieldset = $('<fieldset><label>Attribut</label></fieldset>');
        $fieldset.find('label').append(this.$attributeSelector);

        $fieldset.append('<label>Valeur</label>').append(this.$attributeValue);

        this.$element.append($fieldset);

};

Planck.Extension.FormComponent.View.Component.EntitySelector.prototype.loadSelectableEntities = function()
{
    var url = '';
    var data = {
    };
    Planck.ajax({
        url: url,
        method: 'get',
        data: data,
        success: function(response) {

        }.bind(this)
    });


};


Planck.Extension.FormComponent.View.Component.EntitySelector.prototype.render = function()
{
    this.$container.append(this.$element);
};