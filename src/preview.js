$ = jQuery;

(function($, IBMCore) {

    $(function() {

        var app = {

            init: function() {
                app.retriveData();
            },

            retriveData: function() {
                var retrievedObject = localStorage.getItem('formDataFirst');
                var allData = $.parseJSON(retrievedObject);
                app.myTemplate(allData);
            },

            myTemplate: function(allData) {
                $.get('../js/myTemplate.html', function(template) {
                    var theTemplate = Handlebars.compile(template);
                    var rendered = theTemplate(allData);
                    $('tbody').html(rendered);
                });
            },
        };
        app.init();

    });

})(jQuery, IBMCore);
