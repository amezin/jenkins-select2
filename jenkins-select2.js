(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        $("select").select2()
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();
