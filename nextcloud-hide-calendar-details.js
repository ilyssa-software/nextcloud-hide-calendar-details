// ==UserScript==
// @name         NextCloud - Hide Calendar Details
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Hides event details on your NextCloud calendar so you can quickly take a screenshot and share when trying to schedule with people.
// @author       Baris Sencan (baris.sncn@gmail.com)
// @match        */index.php/apps/calendar/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function hideCalendarDetails() {
        const elements = document.getElementsByClassName('fc-title');
        for (const element of elements) {
            element.setAttribute('style', 'display: none');
        }
    }

    setInterval(hideCalendarDetails, 3000);
})();
