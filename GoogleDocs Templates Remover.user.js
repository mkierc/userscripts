/**
 * GoogleDocs Templates Remover
 * Userscript for removing the ugly "Start a new document" banner from Google Docs / Sheets / Slides
 * Copyright © 2016 by M. Kierc. All rights reserved.
 *
 * GoogleDocs Templates Remover is licensed under the GNU General Public License v3.
 * You can redistribute it and/or modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, either version 3 of the License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details. <http://www.gnu.org/licenses/gpl.html>.
 **/
// ==UserScript==
// @name         GoogleDocs Templates Remover
// @namespace    https://github.com/mkierc
// @homepage     https://github.com/mkierc/userscripts/
// @updateURL    https://github.com/mkierc/userscripts/raw/master/GoogleDocs%20Templates%20Remover.user.js
// @downloadURL  https://github.com/mkierc/userscripts/raw/master/GoogleDocs%20Templates%20Remover.user.js
// @version      0.1
// @description  Removes the ugly "Start a new document" banner from Google Docs (Google Sheets and Google Slides included)
// @author       M. Kierc
// @match        http://docs.google.com/*
// @match        https://docs.google.com/*
// @run-at       document-start
// @grant        none
// @license      GNU General Public License v3
// ==/UserScript==
(
    function() {
        var css = [
        ".docs-homescreen-docs .docs-homescreen-fcc-inlinecontainer-pinned-contracted, .docs-homescreen-docs .docs-homescreen-fcc-flex-contracting, .docs-homescreen-docs .docs-homescreen-fcc-flex-contracted, .docs-homescreen-docs .docs-homescreen-fcc-flex-unhiding {",
        "   min-height: 50px;                                                                                                                                                                                                                                             ",
        "   height: 50px;                                                                                                                                                                                                                                                 ",
        "}                                                                                                                                                                                                                                                                ",
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
