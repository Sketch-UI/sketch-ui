var NavigationBar = (function() {

    var init = function() {
        $("#save-sketch-link").click(function(ev){
            SketchesController.save();
        });

        $("#preview-link").click(function(ev){
            PreviewBinding.trigger();
        });
    };

    return {
        init: init
    };

})();