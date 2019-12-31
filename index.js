 // this approach for applying css according to current language e.i english, french, arabic
  var lang = localStorage.getItem('lang');
        if (lang === "ARB") {
            document.write("<link rel='stylesheet' href='assets/css/customCSS_AR.css' type='text/css' media='all'/>");
        } else if (lang === "FRN") {
            document.write("<link rel='stylesheet' href='assets/css/customCSS_FR.css' type='text/css' media='all'/>");
        } else {
            document.write("<link rel='stylesheet' href='assets/css/customCSS.css' type='text/css' media='all'/>");
        }

 // this approach is for page postion according to current language e.i english, french, arabic 
  jQuery(document).ready(function () {
        var lang = localStorage.getItem('lang');
        if (lang === 'ARB') {
            jQuery("#grop_page").css("direction", "rtl");
        }
        else {
            jQuery("#grop_page").css("direction", "ltr");
        }
    })
