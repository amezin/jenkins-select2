(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        $("select").select2()

        // a little bit of re-styling for prod
        if (window.location.hostname.indexOf("ext.nat") > -1) {
            $("#header").css("background", "#FA3535");
            $("#header").append('<div id="prodBox" style="float: right;font-size: 18px;font-weight: bold;margin-top: 10px;margin-right: 10px;color: white;">PROD: SERIOUS</div>')
            blinker("#prodBox")

            function blinker(id){
                $(id).fadeOut(500, function(){
                    $(id).fadeIn(500, function(){
                        blinker(id);
                    })
                });
            }
        };
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();
