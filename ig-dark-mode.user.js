// ==UserScript==
// @name				Dark Instagram by Snow
// @namespace		https://github.com/sn-o-w/ig-dark-mode
// @description	Dark mode implementation for Instagram.
// @author			Snow
// @version			0.2.2
// @match				*://www.instagram.com/*
// @updateURL		https://raw.githack.com/sn-o-w/ig-dark-mode/master/ig-dark-mode.user.js
// @downloadURL	https://raw.githack.com/sn-o-w/ig-dark-mode/master/ig-dark-mode.user.js
// @run-at			document-start
// ==/UserScript==
(function() {var css = [
	"/* Define dark mode to get specific scrollbars */",
	":root {",
	"    color-scheme: dark !important;",
	"}",
	"/* Black background for <body>, useful in the first milisecs when the page is loaded */",
	"body {",
	"    background: rgb(7, 7, 7) !important;",
	"}",
	"",
	"/* Elements based off https://userstyles.org/styles/181121 + some of them are modified */",
	"html, body, div, nav, article {",
	"    /* Username links */",
	"    --fe0: 0, 155, 255 !important;",
	"    ",
	"    /* Text and Usernames */",
	"    --i1d: 255, 255, 255 !important;",
	"    ",
	"    /* Username and Like count */",
	"    --f75: 255, 255, 255 !important;",
	"    ",
	"    /* Link Color and Time Labels */",
	"    --f52: 161, 161, 161 !important;",
	"    --ie3: 113, 113, 113 !important;",
	"    --ba8: 87, 87, 87 !important;",
	"    --c8c: 87, 87, 87 !important;",
	"    --e22: 100, 100, 100 !important;",
	"    --edc: 100, 100, 100 !important;",
	"    ",
	"    /* Borders */",
	"    --b38: 100, 100, 100 !important;",
	"    --b6a: 100, 100, 100 !important;",
	"    --ca6: 100, 100, 100 !important;",
	"    ",
	"    /* Spacerbar */",
	"    --ce3: 100, 100, 100 !important;",
	"    --bb2: 21, 21, 21 !important;",
	"    --a97: 7, 7, 7 !important;",
	"    ",
	"    /* Main Background */",
	"    --b3f: 7, 7, 7 !important;",
	"    ",
	"    /* Header Backgrounds */",
	"    --d87: 0, 0, 0 !important;",
	"    --f23: 0, 0, 0 !important;",
	"}",
	"",
	"/* Elements on a page you are blocked (and/or it was blocked by Instagram?!) */",
	".-cx-PRIVATE-ErrorPage__errorContainer__ {",
	"    color: #fff !important;",
	"}",
	".-cx-PRIVATE-NavBar__root__ {",
	"    background-color: #000 !important;",
	"    border-bottom: 1px solid #646464 !important;",
	"}",
	".-cx-PRIVATE-NavBar__logo__ {",
	"    filter: invert(1) !important;",
	"}",
	".-cx-PRIVATE-NavBar__username__ {",
	"    color: #0081ff !important;",
	"}",
	".-cx-PRIVATE-ErrorPage__errorContainer__ a, .-cx-PRIVATE-ErrorPage__errorContainer__ a:visited {",
	"    color: #0081ff !important;",
	"}",
	".-cx-PRIVATE-Footer__navItems__ a, .-cx-PRIVATE-Footer__navItems__ a:active, .-cx-PRIVATE-Footer__navItems__ a:focus, .-cx-PRIVATE-Footer__navItems__ a:hover, .-cx-PRIVATE-Footer__navItems__ a:visited {",
	"    color: #0081ff !important;",
	"}",
	".-cx-PRIVATE-Footer__copyright__ {",
	"    color: #fff !important;",
	"}",
	"",
	"/* Add border shadow for \"Now you can create and share posts directly from your computer\" (it appears first seconds after you log into your account) */",
	"/* iMofo also used for other elements such as the rectangle box appearing within any DM for \"Like | Copy | Unsend\" */",
	".iMofo {",
	"    -webkit-box-shadow: rgba(255,255,255,.3) 0 4px 22px !important;",
	"    box-shadow: rgba(255,255,255,.3) 0 4px 22px !important;",
	"}",
	"",
	"/* Followed hashtags (just click on the \"Following\", then \"Hashtags\") */",
	".hI7cq, .hI7cq:visited {",
	"    color: #fff !important;",
	"}",
	".d-Vzv {",
	"    border: 1.5px solid #fff !important;",
	"}",
	"",
	"/* Inside \"Switch Accounts\", the circle border for accounts' pics is barely visible, let's fix this */",
	"._2dbep::after {",
	"    border: 1px solid rgba(255,255,255,.15) !important;",  /* #1c1c1c */
	"}",
	"",
	"/* \"Create New Post\" -> Photo: \"Filters\" and \"Adjustments\" + button when you add multiple photos/videos + background for photo + elements for video*/",
	".RpHCb._75ypG {",
	"    filter: invert(1) !important;",
	"}",
	".RpHCb::-webkit-slider-thumb {",
	"    background: #000 !important;",
	"}",
	".z-nxm {",
	"    border: 1px solid #dbdbdb !important;",
	"}",
	".z-nxm:active {",
	"    background-color: #efefef !important;",
	"}",
	"._FsHZ > div:last-child {",
	"    background: #282828 !important;",
	"}",
	".URCzM {",
	"    border: 2px solid #282828 !important;",
	"    -webkit-box-shadow: 0 0 4px rgba(215,215,215,.25),0 0 10px rgba(215,215,215,.4) !important;",
	"    box-shadow: 0 0 4px rgba(215,215,215,.25),0 0 10px rgba(215,215,215,.4) !important;",
	"}",
	".TXfik {",
	"    border-bottom: 2px solid #282828 !important;",
	"    border-top: 2px solid #282828 !important;",
	"    -webkit-box-shadow: 0 4px 4px -4px rgba(215,215,215,.25),0 4px 10px rgba(215,215,215,.4) !important;",
	"    box-shadow: 0 4px 4px -4px rgba(215,215,215,.25),0 4px 10px rgba(215,215,215,.4) !important;",
	"}",
	".eg8iK {",
	"    background: #282828 !important;",
	"    border: 2px solid #282828 !important;",
	"}",
	".F_H_N {",
	"    -webkit-box-shadow: -1px 4px 4px -4px rgba(215,215,215,.4) !important;",
	"    box-shadow: -1px 4px 4px -4px rgba(215,215,215,.4) !important;",
	"}",
	"._4JX1j {",
	"    -webkit-box-shadow: -1px 4px 4px -4px rgba(215,215,215,.4) !important;",
	"    box-shadow: -1px 4px 4px -4px rgba(215,215,215,.4) !important;",
	"}",
	".yifuF::after {",
	"    color: #d7d7d7 !important;",
	"}",
	".aipJc {",
	"    background-color: #282828 !important;",
	"    -webkit-box-shadow: 0 4px 4px -4px rgba(215,215,215,.25),0 4px 10px rgba(215,215,215,.4) !important;",
	"    box-shadow: 0 4px 4px -4px rgba(215,215,215,.25),0 4px 10px rgba(215,215,215,.4) !important;",
	"}",
	"",
	"/* Elements appearing in the main page, on the right, below \"Suggestions For You\" */",
	".SkY6J .K5OFK, .SkY6J .l93RR, .SkY6J .DINPA {",
	"    color: #b4b4b4 !important;",
	"}",
	"",
	"/* Elements used here: https://instagram.com/tv/upload/ */",
	".hSy4z, .Ouy_P, .t3CGe, .gCQgN {",
	"    color: #d9d9d9 !important;",
	"}",
	".NChGZ {",
	"    filter: invert(1) !important;",
	"}",
	".oUHgX {",
	"    border-bottom: 1px solid #000 !important;",
	"}",
	"",
	"/* Search bar */",
	".pbgfb, .x3qfX {",
	"    background: #1e1e1e !important;",
	"}",
	"",
	"/* White-ish background behind focused post and after clicking more options on a account (\"Block this user\", \"Restrict...\") */",
	".QPGbb {",
	"   background-color: rgba(255,255,255,.2) !important;",
	"}",
	".RnEpo {",
	"   background-color: rgba(255,255,255,.35) !important;",
	"}",
	"",
	"/* White shadow for account dropdown menu + Activity menu at the top right + search results rectangular thing */",
	".uo5MA, .AvhYw {",
	"    -webkit-box-shadow: 0 0 5px 1px rgba(255,255,255,.4) !important;",
	"    box-shadow: 0 0 5px 1px rgba(255,255,255,.4) !important;",
	"}",
	"",
	"/* White shadow for \"New Posts\" button (very tricky to make it appearing, just refresh page and scroll down fast, if you don't scroll down the main feed might automatically update, preventing \"New Posts\" to show up) */",
	".tCibT {",
	"    -webkit-box-shadow: 0 10px 45px rgba(255,255,255,.3)  !important;",
	"    box-shadow: 0 10px 45px rgba(255,255,255,.3)  !important;",
	"}",
	"",
	"/* Logo visible at the top left, except Stories page */",
	"/* Added :not(a) to not invert Instagram logo appearing while viewing Stories */",
	"/* Added orange-ish color for ::selection to imitate the blue selection rectangle + light gray for ::selection:window-inactive for dark gray-ish of selection while inactive window (notice we do this to display the inverted color!) */",
	".cq2ai > .s4Iyt {",
	"    filter: invert(1) !important;",
	"}",
	".cq2ai > .s4Iyt::selection {",
	"    background-color: #ffa232 !important;",
	"}",
	".cq2ai > .s4Iyt::selection:window-inactive {",
	"    background-color: #9d9d9d !important;",
	"}",
	"/* Specific rectangle blue selection within Firefox for Instagram logo */",
	".cq2ai > .s4Iyt::-moz-selection {",
	"    background-color: #ff8728 !important;",
	"}",
	"/* The above doesn't/can't work for Firefox, lol. Within Firefox you cannot change color of any selection when window is inactive. :( */",
	".cq2ai > .s4Iyt::-moz-selection:-moz-window-inactive {",
	"    background-color: #a5a5a5 !important;",
	"}",
	"",
	"/* 3 dots for more options, icons on the nav bar and posts and other elements */",
	"/* Added [color=\"#262626\"] to not change red color of like activated button [for liked posts & liked replies] and blue color of check mark (inside \"Switch Accounts\" thing) */",
	"/* Added \":not(.lC6p0.ybXk5)\" to not interfere with elements related to \"Create new post\" */",
	":not(.lC6p0.ybXk5) > ._8-yf5[color=\"#262626\"] {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* Rectangle containing IG account(s), for people selected for sharing a post with AND/OR to start new message with (similar to dark theme of Instagram mobile app)*/",
	"/* For account name I've added extra classes (.gtFbE.xLCgt.MMzan) because otherwise they might interfere with totally different elements */",
	".ItkAi.WKY0a.pjcA_ {",
	"    background: linear-gradient(to right, #007dd1, #45cffe); !important;",
	"}",
	".gtFbE.xLCgt.MMzan {",
	"    color: #fff !important;",
	"}",
	"button.wpO6b.ZQScA>div.QBdPU>svg._8-yf5[color=\"#0095f6\"] {",
	"    color: #fff !important;",
	"}",
	"",
	"/* Selected option for instance for reporting an account + these selections: https://instagram.com/push/web/settings/ */",
	"/* Set white background for :checked to look alike the selected circular things inside mobile dark theme of Instagram */",
	".z79H6:checked {",
	"    background: rgb(255,255,255) !important;",
	"}",
	"",
	"/* Back button, for example when you report an account */",
	".glyphsSpriteChevron_left__outline__24__grey_9 {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* Used for dropdown menu when you temporarily deactivate acc, here: https://instagram.com/accounts/remove/request/temporary/ || MAYBE OTHER DROPDOWN MENUS?! */",
	"select.zOJg-.iFMgT {",
	"    color: #717171 !important;",
	"    background: #000 !important;",
	"}",
	"select.zOJg-:not(.iFMgT) {",
	"    color: #d9d9d9 !important;",
	"    background: #000 !important;",
	"}",
	"",
	"/* Gray-ish color for live viewer counter */",
	".GmxQl {",
	"    background: #808080 !important;",
	"}",
	"",
	"/* Black-ish border for \"LIVE\" badge used over avatar (similar to dark theme of mobile Instagram app, but more gray-ish in order to have a visible border) */",
	"._1iHbP:not([style*=\"border: 0px\"]) {",
	"    border: 4px solid rgb(60, 60, 60) !important;",
	"}",
	"",
	"/* There is some sort of shadow above and below any live's player, remove the shadow */",
	".KIxil {",
	"    background: transparent !important;",
	"}",
	"",
	"/* Left and/or right circular button used to browse between accounts, for instance for \"Suggested\" or \"Suggestions For You\" or scrolling across account's highlights if there are more than 6 highlights on page */",
	".EcJQs > .Szr5J {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* Text on disabled/inactive blue buttons */",
	".L3NKy[disabled] {",
	"    color: rgb(104, 94, 94) !important;",
	"}",
	"",
	"/* Reload button */",
	".coreSpriteReload {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* Text beneath reload button => \"Unable to load suggestions.\" (perhaps other elements?!) */",
	".JMO_o {",
	"    color: #fff !important;",
	"}",
	"",
	"/* Silhouette + check mark for following channel button (Next to \"Message\" button on a account page you're following)*/",
	".glyphsSpriteFriend_Follow {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* Symbol (paper airplane inside the circle), when no person is selected, here: https://instagram.com/direct/inbox/ */",
	".glyphsSpriteDirect__outline__96 {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* 'Silhouette in a speech balloon, inside a circle: 1)for \"No Photos\" in \"Tagged\" section of a public account; 2)for \"Photos of You\" in \"Tagged\" page of your account (this seems to not appear always?! I have 2 accs, I only see this in 1 acc) */",
	"div.coreSpriteTaggedNull {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* Lock symbol for private account + camera symbol above \"No Posts Yet\" (RIP circle border, I guess :/) */",
	".glyphsSpriteLock__outline__24__grey_9, .glyphsSpriteCamera__outline__24__grey_9 {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* Partnership account name's text, for posts where there are paid partnerships, example: https://instagram.com/p/CUStncQoXV6/ ||| https://i.imgur.com/0rHFmIJ.png */",
	".y1ezF .DXJP0, .y1ezF .DXJP0:visited {",
	"    color: #fff !important;",
	"",
	"}",
	"/* Much lighter color for numbers used here: instagram.com/directory/profiles/ + instagram.com/directory/hashtags/ */",
	"._7kTyW, ._7kTyW:visited {",
	"    color: #fff !important;",
	"}",
	"",
	"/* The bottom long line for \"Sensitive Content\", above \"See Video\" (in both stories and posts) */",

/* W4P49 used for other elements as well, need more time to investigate */
/* https://instagram.com/tv/CLRY4dFnPNu/ */
/*
	".W4P49 {",
	"    background-color: #dbdbdb !important;",
	"}",
*/

	".DGV6U {",
	"    border-top: 1px solid #dbdbdb !important;",
	"}",
	"",
	"/* Current locations in minimaps + pin symbol next to locations + menu for maps' data, here: https://instagram.com/session/login_activity/ */",
	"div.pjcA_ > div.KV-D4 {",
	"    color: #000 !important;",
	"}",
	".LpqwJ {",
	"    background: #000 !important;",
	"}",
	".jctW7 .W4P49 {",
	"    background-color: #9b9b9b !important;",
	"}",
	"",
	"/* Lighter loading circle (some elements that are not really the loading circle have no [style], so add [style]) */",
	"[data-visualcompletion=\"loading-state\"][style] {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* Lighter dots beneath of any post containing multiple photos and/or video, shown in main feed/main Instagram page */",
	"._19dxx .Yi5aA {",
	"    background: #a8a8a8 !important;",
	"}",
	"._19dxx .XCodT {",
	"    background: #0195f7 !important;",
	"}",
	"",
	"/* Lighter color for pending loading account's names and avatars for first post & \"Suggestions for You\" on the right, both in main page + hightlights if exist on accounts' pages + elements mentioned earlier, in a direct post (all these happen in the first second of Instagram page load) */",
	".QOqBd, .OzqB_, ._8VIOK, .u9F97, ._-9WeM, ._7JZQt, .VcOAj, .qfAOE, .kAlZ6, .HE3mO, .EIuhb, .RdURl {",
	"    background: #212121 !important;",
	"}",
	".LO-7C {",
	"    border: 2px solid #3a3a3a !important;",
	"}",
	".WidCF {",
	"    filter: invert(92.5%) !important;",
	"}",
	"",
	"/* Lock symbol when you log in and you're asked to save your login or not */",
	"span.coreSpriteKeyhole {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* Logo visible in login page */",
	".coreSpriteLoggedOutWordmark {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* More visibile \"Log in with Facebook\" at login page */",
	".KPnG0 {",
	"    color: #4b6cb4 !important;",
	"}",
	"",
	"/* Long lines in between accounts + color text for accounts, used here: https://instagram.com/accounts/login/ */",
	".lAPmk {",
	"    border-color: #505050 !important;",
	"}",
	".l9hKg {",
	"    color: #dcdcdc !important;",
	"}",
	"",
	"/* Ligher \"Meta\" text, for instance here: https://instagram.com/accounts/edit/ */",
	"g[clip-path=\"url(#a)\"] > path[fill=\"#1C2B33\"] {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* Stuff for Help section, for instance here: https://instagram.com/settings/help/ */",
	"div[data-bloks-name=\"bk.components.VisibilityExtension\"]>div[data-bloks-name=\"bk.components.Collection\"], [data-bloks-name=\"ig.components.screens.Screen\"] {",
	"    filter: invert(1) !important;",
	"}",
	"span[data-bloks-name=\"bk.components.Text\"][style*=\"color: rgb(0, 55, 107)\"] {",
	"    color: rgb(255, 100, 0) !important;",
	"}",
	"span[data-bloks-name=\"bk.components.Text\"], span[data-bloks-name=\"bk.components.TextSpan\"]:not([style*=\"font-weight\"]) {",
	"    color: #000 !important;",
	"    font-weight: 500 !important;",
	"}",
	"span[data-bloks-name=\"bk.components.Text\"], span[data-bloks-name=\"bk.components.TextSpan\"][style*=\"font-weight: 700\"] {",
	"    color: #000 !important;",
	"    font-weight: 900 !important;",
	"}",
	"div[data-bloks-name=\"ig.components.screens.Navbar\"]>div>div:nth-child(2) {",
	"    color: #000 !important;",
	"    font-weight: 700 !important;",
	"}",
	"span[data-bloks-name=\"bk.components.Text\"][style*=\"white-space: pre-wrap\"] {",
	"    font-weight: 500 !important;",
	"}",
	"div[data-bloks-name=\"ig.components.screens.Navbar\"] ._8-yf5[color=\"#262626\"] {",
	"    fill: #fff !important;",
	"}",
	"div[data-bloks-name=\"ig.components.screens.Screen\"] [data-visualcompletion=\"loading-state\"][style] {",
	"    filter: invert(0) !important;",
	"}",
	"span[data-bloks-name=\"bk.components.Text\"]::selection, span[data-bloks-name=\"bk.components.TextSpan\"]::selection, div[data-bloks-name=\"ig.components.screens.Navbar\"]>div>div:nth-child(2)::selection {",
	"    background-color: #ffa233 !important;",
	"    color: #000 !important;",
	"}"
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
