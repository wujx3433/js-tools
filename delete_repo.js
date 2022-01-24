// ==UserScript==
// @name         删库跑路
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  放松双手，快速跑路
// @author       GekkaSaori & Zn
// @match        https://github.com/*/settings
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    document.getElementsByClassName("boxed-action btn-danger btn float-none float-md-right ml-0 ml-md-3 mt-2 mt-md-0")[1].onclick = function(){
        alert("删库自动填充已启用\n当前您的库名为" + document.getElementsByClassName("Box-body overflow-auto")[2].getElementsByTagName("strong")[2].textContent + "\n请谨慎操作！");
        document.getElementsByClassName("form-control input-block")[4].value = document.getElementsByClassName("Box-body overflow-auto")[2].getElementsByTagName("strong")[2].textContent;
        document.getElementsByClassName("btn-danger btn btn-block")[2].disabled = false;
    }
})();