// ==UserScript==
// @name					Dark Instagram by Snow
// @namespace			https://github.com/sn-o-w/ig-dark-mode
// @description		Dark mode implementation for Instagram.
// @author				Snow
// @version				1.5.2
// @match					*://www.instagram.com/*
// @exclude-match *://www.instagram.com/*?theme=*
// @updateURL			https://raw.githack.com/sn-o-w/ig-dark-mode/master/ig-dark-mode.user.js
// @downloadURL		https://raw.githack.com/sn-o-w/ig-dark-mode/master/ig-dark-mode.user.js
// @run-at				document-start
// ==/UserScript==
(function() {var css = [
	"/* Define dark mode to get specific scrollbars */",
	":root {",
	"    color-scheme: dark !important;",
	"}",
	"/* Black background for <body>, useful in the first milisecs when the page is loaded */",
	"body {",
	"    background-color: #0a0a0a !important;",
	"}",
	"/* Elements based off of https://instagram.com/?theme=dark */",
	"html, body, div, nav, article, h1, p {",
	"    --i1d: 250,250,250 !important;",
	"    --edc: 115,115,115 !important;",
	"    --f75: 250,250,250 !important;",
	"    --fe0: 224,241,255 !important;",
	"    --d87: 28,28,28 !important;", //modified
	"    --b3f: 10,10,10 !important;", //modified
	"    --bb2: 78,78,78 !important;", //modified
	"    --f23: 28,28,28 !important;", //modified
	"    --b38: 78,78,78 !important;", //modified
	"    --b6a: 94,94,94 !important;", //modified
	"    --ca6: 94,94,94 !important;", //modified
	"    --cdd: 250,250,250 !important;",
	"    --e22: 115,115,115 !important;",
	"    --e62: 0,149,246 !important;",
	"    --b2f: 55,166,0 !important;",
	"    --c8c: 85,85,85 !important;",
	"    --ce3: 78,78,78 !important;", //modified
	"    --jd9: 255,255,255 !important;",
	"    --j64: 219,219,219 !important;",
	"    --a97: 78,78,78 !important;", //modified
	"    --d20: 250,250,250 !important;",
	"",
	"    --challenge-link: 219,219,219 !important;",
	"    --docpen-lightgrey: 65,65,65 !important;", //modified
	"    --ig-banner-background: 28,28,28 !important;", //modified
	"    --ig-elevated-background: 28,28,28 !important;", //modified
	"    --ig-elevated-separator: 94,94,94 !important;", //modified
	"    --ig-focus-stroke: 85,85,85 !important;",
	"    --ig-highlight-background: 83,83,83 !important;", //modified
	"    --ig-link: 0,155,255 !important;", //modified
	"    --ig-primary-background: 28,28,28 !important;",
	"    --ig-primary-text: 250,250,250 !important;",
	"    --ig-secondary-background: 10,10,10 !important;", //modified
	"    --ig-secondary-button: 250,250,250 !important;",
	"    --ig-secondary-text: 160,160,160 !important;", //modified
	"    --ig-separator: 78,78,78 !important;", //modified
	"    --ig-stroke: 94,94,94 !important;", //modified
	"    --ig-temporary-highlight: 0,149,246 !important;",
	"    --ig-tertiary-text: 130,130,130 !important;", //modified
	"    --post-separator: 78,78,78 !important;", //modified
	"    --tos-box-shadow: 255,255,255 !important;",
	"    --web-always-black: 0,0,0 !important;",
	"}",
	"",
	"/* Instagram Logo visible at the top left, except Stories page */",
	"._acum ._aagx>*, .s4Iyt {",
	"     filter: invert(1) !important;",
	"}",
	"/* Some pages still have \"selectable\" Instagram logo :/ */",
	"._acum ._aagx>img[draggable]::selection {",
	"    background-color: #f0a231 !important;",
	"}",
	"._acum ._aagx>img[draggable]::selection:window-inactive {",
	"    background-color: #9d9d9d !important;",
	"}",
	"/* Specific rectangle blue selection within Firefox for Instagram logo */",
	"._acum ._aagx>img[draggable]::-moz-selection {",
	"    background-color: #ff7864 !important;",
	"}",
	"/* The below doesn't/can't work for Firefox, lol. Within Firefox you cannot change the color of any selection when the window is inactive. :( */",
	"._acum ._aagx>img[draggable]::-moz-selection:-moz-window-inactive {",
	"    background-color: #a5a5a5 !important;",
	"}",
	"/* Meta logo visible at Settings page */",
	"g[clip-path=\"url(#a)\"]>path[fill=\"#262626\"] {",
	"     fill: #e8e8e8 !important;",
	"}",
	"/* Underline for links that are hovered on should not be pure blue, it looks ugly */",
	"a:hover {",
	"    text-decoration-color: #83c7fb !important;",
	"}",
	"/* Blue color for <a> elements */",
	"._aacl._aacu._aacx > ._a6hd._a6hd, ._a3gq ._aacz, .tx0Md {",
	"    color: #009bff !important;",
	"}",
	"/* Stories rectangle (force it for Android user agent) */",
	"._a3gq ._aac4 {",
	"    background: rgb(var(--ig-primary-background)) !important;",
	"}",
	"/* Fixes for post in focus when extremely zoomed in */",
	"._a3gq ._aasi, ._a3gq ._aasw {",
	"    background-color: rgb(var(--ig-primary-background)) !important;",
	"}",
	"/* 3 dots for more options, icons on the nav bar and posts, and other elements */",
	"/* Added [color=\"#262626\"] to not change red color of like activated button [for liked posts & liked replies] and blue color of checkmark (inside \"Switch Accounts\" thing) + perhaps other things I'm not aware of?! */",
	"/* Added :not(._ab9y._aba8) to avoid changing the colors inside \"Create new post\" small bottom elements */",
	"._8-yf5[color=\"#262626\"][fill=\"#262626\"], *:not(._ab9y._aba8)>._ab6-[color=\"#262626\"][fill=\"#262626\"] {",
	"    color: #e8e8e8 !important;",
	"    fill: #e8e8e8 !important;",
	"}",
	"/* \"Create new post\" enhacements for filters slider(s) */",
	"._a3gq ._ac2y:not(._ac2-) {",
	"    filter: invert(1) brightness(2.6) !important;",
	"}",
	"._a3gq ._ac2y:not(._ac2-)::-webkit-slider-thumb {",
	"    background: #000 !important;",
	"}",
	"._a3gq ._ac2y:not(._ac2-)::-moz-range-thumb {",
	"    background: #000 !important;",
	"}",
	"/* Pending elements, not loaded yet, for Suggestions for You (Main Feed) + Highlights on any account page */",
	"._aak3 ._ab8o, ._ab05 ._aa-w, ._ab05 ._acor {",
	"    background-color: #414141 !important;",
	"}",
	"/* Focused post, not loaded yet for few secs */",
	"._a3gq ._aas5, ._a3gq ._aasa, ._a3gq ._aasc, ._a3gq ._aasd, ._a3gq ._aasf, ._a3gq ._aasg, ._a3gq ._aash {",
	"    background-color: #656565 !important;",
	"}",
	"._a3gq ._aas8 {",
	"    background-color: #2e2e2e !important;",
	"}",
	"/* Fixes for posts in main feed */",
	"._a3gq ._ab0w ._aaz1 {",
	"    border-top-right-radius: 0 !important;",
	"    border-top-left-radius: 0 !important;",
	"}",
	"._a3gq ._ab0w ._aepp {",
	"    border-bottom-right-radius: 0 !important;",
	"    border-bottom-left-radius: 0 !important;",
	"}",
	"/* Lighter loading circle (some elements that are not really the loading circle have no [style], so add [style]) */",
	"/* \"_ac0e\" is a class used for Stories page, add it to not invert loading circle in there */",
	":not(._ac0e) > [data-visualcompletion=\"loading-state\"][style] {",
	"    filter: invert(1) !important;",
	"}",
	"/* Private Policy update notice */",
	"._a9_b [data-bloks-name][style*=\"background: rgb(250, 250, 250)\"] {",
	"    background: rgb(var(--ig-primary-background)) !important;",
	"}",
	"._a9_b [data-bloks-name][style*=\"border: 1px solid rgb(219, 219, 219)\"] {",
	"    border: 1px solid rgb(var(--ig-elevated-separator)) !important;",
	"}",
	"/* Menu for maps' data, here: https://instagram.com/session/login_activity/ */",
	"._2uvWF .LpqwJ, ._a3gq ._abwb {",
	"    background: rgb(var(--ig-primary-background)) !important;",
	"}",
	"/* https://instagram.com/qr/ */",
	".GEbsn {",
	"    background-color: #fff !important;",
	"}",
	"._89X8K > div > .nir2x {",
	"    background: #efefef !important;",
	"}",
	".Oqo7r.E0Iir.SmbEd {",
	"    border: 2px solid #363636 !important;",
	"}",
	".Oqo7r.adU5z {",
	"    border: 1px solid #fff !important;",
	"}",
	"/* Black-ish border for \"LIVE\" badge used over avatar (similar to the dark theme of mobile Instagram app) + background transparent inside the circle */",
	"._a3gq ._aarl {",
	"    border: 2px solid rgb(var(--ig-primary-background)) !important;",
	"}",
	"._aa_j ._aarl {",
	"    border: 2px solid rgb(var(--ig-secondary-background)) !important;",
	"}",
	"._aac4 ._aa90 > svg > circle:not([class]) {",
	"    fill: rgb(var(--ig-primary-background)) !important;",
	"}",
	"._aa_j ._aa90 > svg > circle:not([class]) {",
	"    fill: rgb(var(--ig-secondary-background)) !important;",
	"}",
	"/* Back/forward buttons */",
	"._a3gq ._aahn, ._a3gq ._aaho {",
	"    filter: invert(1) !important;",
	"}",
	"/* White shadow for the account dropdown menu + Activity menu at the top right + search results rectangular thing */",
	"._a3gq ._aa5u, ._a3gq ._aa5_, .AvhYw, .uo5MA {",
	"    box-shadow: 0 0 5px 3px rgba(var(--web-always-black), .9) !important;",
	"}",
	"/* Fix for https://instagram.com/accounts/edit/ */",
	"div._ab4h > h1._ab4i {",
	"    color: #e1e1e1 !important;",
	"}",
	"/* Fixes for https://instagram.com/accounts/contact_history/ */",
	"p._aaj5, p._aaj9 {",
	"    color: rgb(var(--ig-primary-text)) !important;",
	"}",
	"/* \"#\" in a circle, when user doesn't follow any hashtags */",
	"._a3gq ._aabo {",
	"    border: 1.5px solid #fafafa !important;",
	"}",
	"._aabo ._aabp {",
	"    color: #fafafa !important;",
	"}",
	
	
	"/* Some profile elements such as Posts, Videos, Tagged are blue colored sometimes, fix this */",
	"._aa-z:not(._aa--)>*>._ac-g {",
	"    color: rgb(var(--ig-secondary-text)) !important;",
	"}",
	
	
	"/* The rectangle containing IG account(s), for people selected for sharing a post with AND/OR to start a new message with (similar to the dark theme of Instagram mobile app)*/",
	"._aa2s ._aaid::placeholder {",
	"    color: #9a9a9a !important;",
	"}",
	"._aa2s ._ab8p {",
	"    background: linear-gradient(to right, #0094f6, #28c4f5) !important;",
	"}",
	"._aa2s ._ab8n {",
	"    background: linear-gradient(to right, #ef4957, #d1076a) !important;",
	"}",
	"._aa2s ._aad0 {",
	"    color: #fff !important;",
	"}",
	"._aa2s ._abm0 > ._ab6-[color=\"#0095f6\"] {",
	"    color: #fff !important;",
	"}",
	"/* Make photo tags more transparent alike Instagram app */",
	"._a3gq ._a9-5, ._a3gq ._aa1q {",
	"   background-color: rgba(0, 0, 0, .5) !important;",
	"}",
	"._a3gq ._aa21 {",
	"   border-bottom: 6px solid rgba(0, 0, 0, .5) !important;",
	"}",
	"/* Text on disabled/inactive blue buttons */",
	".L3NKy[disabled], ._a3gq ._acas[disabled]:not(._acao):not(._acax), a._acas[disabled]:not(._acao):not(._acax) {",
	"    color: #616161 !important;",
	"}",
	"/* https://www.instagram.com/challenge/action/ */",
	".v2bgO {",
	"    background-color: rgb(var(--ig-primary-background)) !important;",
	"}",
	"/* General selector */",
	"._a3gq ._abm4:hover, ._a3gq ._abn_, .-qQT3:hover {",
	"    background: #2e2e2e !important;",
	"}",
	"._a3gq ._abm4:focus, .-qQT3:focus {",
	"    background: #424242 !important;",
	"}",
	"/* Selectors for more options of an account */",
	"._a3gq ._a9--:active {",
	"    background: #363636 !important;",
	"/* Fixing IG's own issue... */",
	"    border-radius: 0 !important;",
	"}",
	"/* Cookie notice */",
	".FrS-d .aOOlW:active {",
	"    background-color: #363636 !important;",
	"}",
	"/* Fix after there's no follow requests in Activity menu */",
	"._a3gq ._ab8j {",
	"    border: 0 !important;",
	"    border-bottom: 1px solid rgb(var(--ig-separator)) !important;",
	"}",
	"/* New profile buttons, inspired from mobile app */",
	"._a3gq *:not(._aa_m)>*>*>*>._acap:not(._acas):not(._acav) {",
	"    background-color: #4a4a4a !important;",
	"    border: 1px solid transparent !important;",
	"}",
	"._a3gq ._acap:not(._acas) {",
	"    background-color: #383838 !important;",
	"    border: 1px solid transparent !important;",
	"}",
	"/* General border used around circular profile pics within Instagram + hashtags */",
	"/* Added \":not(._ac0l, ._ac0h, ._aa64)\" to not modify circle borders within Stories page; Stories page has a dark background, so no need to edit in there! */",
	"*:not(._abc1)>*>*:not(._abc1)>*>*>*>*:not(._ac0l, ._ac0h, ._aa64)>*>._aa8h::after, ._2dbep::after, ._acf-::after {",
	"    border: 1px solid rgba(189,189,189,.0975) !important;",
	"}",
	"._ab8q>*>*>*>*>*:not(._ac0l, ._ac0h, ._aa64)>*>._aa8h::after, ._aa_j:not(._ac0l, ._ac0h, ._aa64)>*>._aa8h::after, ._abc1 ._aa8h::after, ._aadm::after {",
	"    border: 1px solid rgba(217,217,217,.0975) !important;",
	"}",
	"/* White shadow for \"New Posts\" button (very tricky to make it appear, just refresh the page and scroll down fast, if you don't scroll down the main feed might automatically update, preventing \"New Posts\" from showing up) */",
	"._a3gq ._a9-r {",
	"    box-shadow: 0 5px 30px rgb(0, 0, 0) !important;",
	"}",
	"/* Account mini previews */",
	"._a3gq ._aap3 {",
	"    box-shadow: 0 0 5px 3px rgba(0, 0, 0, .9), 0 0 0 1px rgb(0, 0, 0) !important;",
	"}",
	"/* There are some subtle circle border in some acc minipreviews if you zoom in like 300% */",
	"@media (min-resolution: 2dppx) {",
	"    ._a3gq ._ab5d._ab5i::after {",
	"        border-color: rgb(var(--challenge-link)) !important;",
	"    }",
	"}",
	"/* Subtle shadow at the bottom of dropwdown menus, for instance: Activity */",
	"._aa62, .TOh1s {",
	"    background: linear-gradient( to bottom, rgba(28, 28, 28, 0) 0%, rgb(var(--ig-elevated-background)) 100% ) !important;",
	"}",
	"/* Used for the dropdown menu when you temporarily deactivate acc, here: https://instagram.com/accounts/remove/request/temporary/ || MAYBE OTHER DROPDOWN MENUS?! */",
	".zOJg- {",
	"    background: rgb(var(--ig-primary-background)) !important;",
	"}",
	"/* Much lighter color for numbers used here: instagram.com/directory/profiles/ + instagram.com/directory/hashtags/ */",
	"._7kTyW {",
	"    color: #f5f5f5 !important;",
	"}",
	"/* Miscellaneous changes */",
	"input, select, textarea {",
	"    color: #e3e1de !important;",
	"}",
	"select {",
	"    background-color: rgb(var(--ig-secondary-background)) !important;",
	"}",
	"/* Balloons used within DMs */",
	"._a3gq ._ac1q {",
	"    background: rgb(66, 66, 66) !important;",
	"}",
	"._a3gq ._ac1r {",
	"    border: 1px solid rgb(66, 66, 66) !important;",
	"}",
	"._a3gq ._acfl {",
	"    background-color: rgb(66, 66, 66) !important;",
	"}",
	"/* Pending loading baloons */",
	"._a3gq ._ac1s {",
	"    background: #2b2b2b !important;",
	"}",
	"/* Graphical symbols */",
	"/* Lock symbol for private account + camera symbol above \"No Posts Yet\" */",
	"/* \"Saved\" symbol within the Saved section of your account when there are no saved posts yet */",
	"/* 'Silhouette in a speech balloon, inside a circle' -> for \"No Photos\" in the \"Tagged\" section of a public account; for \"Photos of You\" in \"Tagged\" page of your account; */",
	"/* Lock symbol when you log in and you're asked to save your login or not */",
	"/* \"Plus and silhouette\" symbol after you no longer have any follow requests */",
	"/* Back button, for example, when you report an account */",
	"/* Lock symbol for private accounts */",
	"/* Lock symbol, appears especially when you are not logged in and try to see a restricted profile */",
	"._9-z-, .glyphsSpriteCamera__outline__24__grey_9, ._9zlg, ._9zlh, .coreSpriteKeyhole, ._9zkj, ._9_1o, ._9-_z, ._9--3, ._9-_- {",
	"    filter: invert(1) !important;",
	"}",
	"/* Long lines in between accounts + color text for accounts, used here: https://instagram.com/accounts/login/ */",
	".o06Gi {",
	"    border: solid 1px #2c2c2c !important;",
	"}",
	".lAPmk {",
	"    border-color: #4a4a4a !important;",
	"}",
	".l9hKg {",
	"    color: #e6e6e6 !important;",
	"}",
	"/* More visible \"Log in with Facebook\" at the login page */",
	".KPnG0 {",
	"    color: #4b6cb4 !important;",
	"}",
	"/* The bottom long line for \"Sensitive Content\", above \"See Video\" (in both stories and posts) */",
	"._abqu ._abqt {",
	"    border-top: 1px solid #dbdbdb !important;",
	"}",
	"/* Some symbols look ugly if they are not color inversed, symbols appearing after you press \"See why\" on a sensitive content */",
	"[data-bloks-name=\"ig.components.Icon\"][style*=\"background-color: rgb(0, 0, 0)\"] {",
	"    background-color: rgb(255, 255, 255) !important;",
	"}",
	"/* https://instagram.com/accounts/privacy_and_security/ */",
	"[data-bloks-name][style*=\"background: rgb(219, 219, 219)\"]~[data-bloks-name][style*=\"background: rgb(255, 255, 255)\"][style*=\"top: 8px; left: 8px\"] {",
	"    background: rgb(var(--ig-secondary-background)) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(219, 219, 219)\"]~[data-bloks-name][style*=\"background: rgb(255, 255, 255)\"][style*=\"top: 1.5px; left: 1.5px\"] {",
	"    background: rgb(var(--ig-secondary-background)) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(219, 219, 219)\"][style*=\"width: 24px; height: 24px\"] {",
	"    background: rgb(82, 82, 82) !important;",
	"}",
	"/* Stuff for Help section, for instance here: https://instagram.com/settings/help/ */",
	"[data-bloks-name][style*=\"background: rgb(255, 255, 255)\"]:not([style*=\"top: 1.5px; left: 1.5px\"]):not([style*=\"top: 8px; left: 8px\"]) {",
	"    background: rgb(var(--ig-primary-background)) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(239, 239, 239)\"] {",
	"    background: rgb(66, 66, 66) !important;",
	"}",
	"[data-bloks-name][style*=\"background-color: rgb(255, 255, 255)\"]:not([style*=\"border-bottom: 1px solid rgb(219, 219, 219)\"]) {",
	"    background-color: rgb(var(--ig-primary-background)) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(250, 250, 250)\"] {",
	"    background: rgb(39, 39, 39) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(219, 219, 219)\"][style*=\"width: 100%\"] {",
	"    background: rgb(var(--ig-elevated-separator)) !important;",
	"}",
	"[data-bloks-name=\"ig.components.screens.Navbar\"] > [style*=\"background-color: rgb(255, 255, 255)\"] {",
	"    background-color: rgb(var(--ig-primary-background)) !important;",
	"    border-bottom: 1px solid rgb(var(--ig-elevated-separator)) !important;",
	"}",	
	"[data-bloks-name][style*=\"color: rgb(38, 38, 38)\"], [data-bloks-name] div[style*=\"justify-content: center; margin: 0px 40px;\"], [data-bloks-name] span[style*=\"font-size:\"][style*=\"line-height:\"]:not([style*=\"color:\"]) {",
	"    color: rgb(255, 255, 255) !important;",
	"}",
	"[data-bloks-name][style*=\"background-color: rgb(38, 38, 38)\"] {",
	"    background-color: rgb(255, 255, 255) !important;",
	"}",
	"[data-bloks-name][style*=\"color: rgb(0, 55, 107)\"] {",
	"    color: rgb(0, 155, 255) !important;",
	"}",
	""
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
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
