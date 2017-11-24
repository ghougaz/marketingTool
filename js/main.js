(function($) {

    $(function() {

        var app = {

            init: function() {
            	app.loadData();
            },

            loadData: function() {
                $.getJSON('json.json').done(function(json) {
                    allData = json;
                    app.loadIndustryGrid(allData);
                });
            },

            loadIndustryGrid: function() {
                $.get('js/myTemplate.html', function(template) {
                    var theTemplate = Handlebars.compile(template);
                    var rendered = theTemplate(allData);
                    $('tbody').html(rendered);
                });

            },


        };

        app.init();

    });

})(jQuery);
