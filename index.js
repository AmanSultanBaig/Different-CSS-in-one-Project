  var lang = localStorage.getItem('lang');
        if (lang === "ARB") {
            document.write("<link rel='stylesheet' href='assets/css/customCSS_AR.css' type='text/css' media='all'/>");
        } else if (lang === "FRN") {
            document.write("<link rel='stylesheet' href='assets/css/customCSS_FR.css' type='text/css' media='all'/>");
        } else {
            document.write("<link rel='stylesheet' href='assets/css/customCSS.css' type='text/css' media='all'/>");
        }
