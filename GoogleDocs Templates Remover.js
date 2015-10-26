// ==UserScript==
// @name         GoogleDocs Templates Remover
// @namespace    https://github.com/mkierc
// @homepage     https://github.com/mkierc/
// @version      0.1
// @description  Removes the ugly "Start a new document" banner from Google Docs (Google Sheets and Google Slides included)
// @author       MKierc
// @match        http://docs.google.com/*
// @match        https://docs.google.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==
(
    function() {
        var css = [
        ".docs-homescreen-template-wrapper {        ",
        "   display: none;                          ",
        "}                                          ",
        ].join("\n");
        if (typeof GM_addStyle != "undefined") {
            GM_addStyle(css);
        } else if (typeof PRO_addStyle != "undefined") {
            PRO_addStyle(css);
        } else if (typeof addStyle != "undefined") {
            addStyle(css);
        } else {
            var node = document.createElement("style");
            node.type = "text/css";
            node.appendChild(document.createTextNode(css));
            var heads = document.getElementsByTagName("head");
            if (heads.length > 0) {
                heads[0].appendChild(node); 
            } else {
                document.documentElement.appendChild(node);
            }
        }
    }
)();