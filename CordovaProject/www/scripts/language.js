function languageInit(strLanguage) {
    var langs = ['zh-TW', 'en-US'];
    var langJS = null;

    if (langs.indexOf(strLanguage) > -1)
        $.getJSON('language/' + strLanguage + '.json', translate);
    else
        $.getJSON('language/zh-TW.json', translate);

    function translate(jsdata) {
        $("[lkey]").each(function (index) {
            var strTr = jsdata[$(this).attr('lkey')];
            $(this).html(strTr);
        });
    }
}