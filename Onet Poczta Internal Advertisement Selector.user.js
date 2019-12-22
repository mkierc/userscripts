/**
 * Automatic internal advertisement messages selector for Onet Poczta
 * Userscript for automated selection of internal advertisement messages from Onet Group
 * Copyright © 2019 by M. Kierc. All rights reserved.
 *
 * Onet Poczta automated advertisement selection is licensed under the GNU General Public License v3.
 * You can redistribute it and/or modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, either version 3 of the License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details. <http://www.gnu.org/licenses/gpl.html>.
 **/
// ==UserScript==
// @name         Automatic internal advertisement messages selector for Onet Poczta
// @namespace    https://github.com/mkierc
// @homepage     https://github.com/mkierc/userscripts/
// @version      0.1
// @description  Automated selection of internal advertisement messages from Onet Group
// @author       M. Kierc
// @match        https://poczta.onet.pl/index.html#/Odebrane*
// @match        http://poczta.onet.pl/index.html#/Odebrane*
// @run-at       document-idle
// @grant        unsafeWindow
// @license      GNU General Public License v3
// ==/UserScript==

(function() {
    const new_button = document.createElement("button");
    new_button.type = "button";
    new_button.title = "Zaznacz żółty spam";
    new_button.className = "btn-basic-medium";

    const new_span = document.createElement("span");

    const new_i = document.createElement("i");
    new_i.className = "ico-star-fill";

    new_span.appendChild(new_i);
    new_button.appendChild(new_span);

    new_button.addEventListener("click", () => {
        const spam_list = document.getElementsByClassName("single-mail-row");
        var i;
        for (i = 0; i < spam_list.length; i++) {
        if (spam_list[i].getElementsByClassName("status")[0].className.includes("commerce")) {
            spam_list[i].getElementsByClassName("checklist")[0].click();
        }
    }
    }, false);

    document.getElementsByClassName("buttons-container")[0].appendChild(new_button);

})();
