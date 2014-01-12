var PropertyWindow = (function() {
    var init = function(){
    };

    var create = function(metadataId, data, controlRactive) {
        var propertyWindowData = new Ractive({
            el: "properties-container",
            template: "#" + metadataId + "-property-template",
            data: data
        });
        ControlsMetadata[metadataId].propertyWindowCallback(controlRactive);
        Toolbox.openToolbox();
        Toolbox.showPropertyWindow();
        ColorPickerBinding.init(controlRactive, propertyWindowData);
        return propertyWindowData;
    };

    return {
        init: init,
        create: create
    };

})();