Planck.Extension.FormComponent.View.Component.TagInput = function(container)
{
    this.$container = $(container);

    this.$container.data('manager', this);


    this.dataSource = this.$container.attr('data-source');

    this.$placeholder = this.$container.find('.plk-tag-placeholder');
    this.$valuesContainer = this.$container.find('.plk-tag-values-placeholder');

    this.name = this.$container.attr('data-name');


    this.events = {
       change: function(instance) {

       }
    };


};




Planck.Extension.FormComponent.View.Component.TagInput.prototype.initialize = function()
{



    var tagInput = this.$placeholder.magicSuggest({
        data: this.dataSource,
        value: this.getValues(),
        ajaxConfig: {
            xhrFields: {
                withCredentials: true,
            }
        }
    });

    var self = this;

    $(tagInput).on('focus', function(e,m) {
        this.expand();
    });

    $(tagInput).on('blur', function(e,m) {
        this.collapse();
    });


    $(tagInput).on('selectionchange', function(e,m){

        self.$valuesContainer.html('');
        var values = this.getValue();

        for(var i=0; i<values.length; i++) {
            var value = values[i];
            self.createInputValue(value)
        }

        self.events.change(self);

    });
};

Planck.Extension.FormComponent.View.Component.TagInput.prototype.on = function(eventName, callback)
{
   this.events[eventName] = callback;
   return this;
};


Planck.Extension.FormComponent.View.Component.TagInput.prototype.getValues = function()
{
   var values = [];
    this.$valuesContainer.find('.plk-tag-input-value').each(function(index, input) {
        values.push(
           $(input).val()
        );
    });
    return values;
};


Planck.Extension.FormComponent.View.Component.TagInput.prototype.createInputValue = function(value)
{
   var input = $('<input />');
    input.val(value);
    input.attr('name', this.name);
    input.addClass('plk-tag-input-value');
    input.addClass('form-data');
    input.attr('type', 'hidden');
    this.$valuesContainer.append(input);
    return this;
};