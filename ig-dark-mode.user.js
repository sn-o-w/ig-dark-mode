// ==UserScript==
// @name				Dark Instagram by Snow
// @namespace		https://github.com/sn-o-w/ig-dark-mode
// @description	Dark mode implementation for Instagram.
// @author			Snow
// @version			0.4.5
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
	"",
	"/* Black background for <body>, useful in the first milisecs when the page is loaded */",
	"body {",
	"    background-color: #000 !important;",
	"}",
	"",
	"/* Elements based off of https://userstyles.org/styles/181121 + some of them are modified */",
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
	"    --a97: 8, 8, 8 !important;",
	"    ",
	"    /* Main Background */",
	"    --b3f: 8, 8, 8 !important;",
	"    ",
	"    /* Header Backgrounds */",
	"    --d87: 0, 0, 0 !important;",
	"    --f23: 0, 0, 0 !important;",
	"}",
	"",
	"/* Elements on a page you are blocked (and/or it was blocked by Instagram?!) */",
	"body.dialog-404 {",
	"    background: #080808 !important;",
	"}",
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
	"/* iMofo is also used for other elements such as the rectangle box appearing within any DM for \"Like | Copy | Unsend\" + maps' data menu */",
	"/* Despite there being a box-shadow for maps' data menu, I've defined extra classes such as nwToI [\"Now you can create and share posts directly from your computer\"] and HZ9O2 [\"Like | Copy | Unsend\" thing] */",
	"/* I don't need a shadow over the map, the map displays exactly the same in light mode, that's why those extra classes! */",
	".iMofo.nwToI, .iMofo.HZ9O2 {",
	"    -webkit-box-shadow: rgba(255,255,255,.3) 0 4px 22px !important;",
	"    box-shadow: rgba(255,255,255,.3) 0 4px 22px !important;",
	"}",
	"",
	"/* Icons for \"Share to\", appearing for instance when you want to share a post */",
	"/* Add glyphsSpriteApp_whatsapp__outline__24__grey_9 for Android user agent */",
	".glyphsSpriteDirect__outline__24__grey_9, .glyphsSpriteFacebook_circle__outline__24__grey_9, .glyphsSpriteApp_messenger__outline__24__grey_9, .glyphsSpriteApp_whatsapp__outline__24__grey_9, .glyphsSpriteApp_twitter__outline__24__grey_9, .glyphsSpriteMail__outline__24__grey_9, .glyphsSpriteLink__outline__24__grey_9, .glyphsSpriteForward__outline__24__grey_9 {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* Circle border for the location, for instance here: https://instagram.com/explore/locations/100171148223508/paris-france/ */",
	".VU4al::after {",
	"    border: 1px solid rgb(37, 37, 37) !important;",
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
	"/* Inside \"Switch Accounts\", the circle border for accounts' pics is barely visible, let's fix this + all border circles for profile pics */",
	"/* Added \":not(.edq1N)>:not(._295C2)\" + \":not(.B7GUE)>:not(.RR-M-)\" to not modify circle borders within Stories page; Stories page has a dark background, so no need to edit there! */",
	":not(.edq1N)>:not(._295C2)>._2dbep::after, :not(.B7GUE)>:not(.RR-M-)>._2dbep::after {",
	"    border: 1px solid rgba(255,255,255,.1) !important;",
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
	"/* Elements that appear on the main page, on the right, below \"Suggestions For You\" */",
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
	".cTBqC, .DljaH {",
	"    background: #262626 !important;",
	"}",
	".TqC_a, .DljaH::placeholder {",
	"    color: #a8a8a8 !important;",
	"}",
	".cTBqC>div:first-child>div>svg {",
	"    color: #fafafa !important;",
	"}",
	"",
	"/* The white-ish background behind the focused post and after clicking more options on an account (\"Block this user\", \"Restrict...\") */",
	".QPGbb {",
	"   background-color: rgba(255,255,255,.2) !important;",
	"}",
	".RnEpo {",
	"   background-color: rgba(255,255,255,.35) !important;",
	"}",
	"",
	"/* White shadow for the account dropdown menu + Activity menu at the top right + search results rectangular thing */",
	".AvhYw {",
	"    background: #000 !important;",
	"    border: 1px solid #000 !important;",
	"    -webkit-box-shadow: 0 0 5px 1px rgba(255,255,255,.4) !important;",
	"    box-shadow: 0 0 5px 1px rgba(255,255,255,.4) !important;",
	"}",
	".uo5MA {",
	"    -webkit-box-shadow: 0 0 5px 1px rgba(255,255,255,.4) !important;",
	"    box-shadow: 0 0 5px 1px rgba(255,255,255,.4) !important;",
	"}",
	"",
	"/* Drop shadow for account mini previews?! + maybe other elements?! */",
	".GdeD6 {",
	"    -webkit-box-shadow: 0 2px 16px 0 rgba(255,255,255,.22),0 0 0 1px #717171 !important;",
	"    box-shadow: 0 2px 16px 0 rgba(255,255,255,.22),0 0 0 1px #717171 !important;",
	"}",
	"",
	"/* White shadow for \"New Posts\" button (very tricky to make it appear, just refresh the page and scroll down fast, if you don't scroll down the main feed might automatically update, preventing \"New Posts\" from showing up) */",
	".tCibT {",
	"    -webkit-box-shadow: 0 10px 45px rgba(255,255,255,.3)  !important;",
	"    box-shadow: 0 10px 45px rgba(255,255,255,.3)  !important;",
	"}",
	"",
	"/* Circle border for people liking a post, there are small previews of profile pics, if mutual people you follow liked that post */",
	".mOBkM {",
	"    border-color: #000 !important;",
	"}",
	"",
	"/* Logo visible at the top left, except Stories page */",
	"/* Added :not(a) to not invert Instagram logo appearing while viewing Stories */",
	"/* Added orange-ish color for ::selection to imitate the blue selection rectangle + light gray for ::selection:window-inactive for dark grayish of selection while inactive window (notice we do this to display the inverted color!) */",
	".s4Iyt[src*=\"735145cfe0a4.png\"] {",
	"    filter: invert(1) !important;",
	"}",
	".s4Iyt[src*=\"735145cfe0a4.png\"]::selection {",
	"    background-color: #ffa232 !important;",
	"}",
	".s4Iyt[src*=\"735145cfe0a4.png\"]::selection:window-inactive {",
	"    background-color: #9d9d9d !important;",
	"}",
	"/* Specific rectangle blue selection within Firefox for Instagram logo */",
	".s4Iyt[src*=\"735145cfe0a4.png\"]::-moz-selection {",
	"    background-color: #ff8728 !important;",
	"}",
	"/* The above doesn't/can't work for Firefox, lol. Within Firefox you cannot change the color of any selection when the window is inactive. :( */",
	".s4Iyt[src*=\"735145cfe0a4.png\"]::-moz-selection:-moz-window-inactive {",
	"    background-color: #a5a5a5 !important;",
	"}",
	"",
	"/* 3 dots for more options, icons on the nav bar and posts, and other elements */",
	"/* Added [color=\"#262626\"] to not change red color of like activated button [for liked posts & liked replies] and blue color of checkmark (inside \"Switch Accounts\" thing) + perhaps other things I'm not aware of?! */",
	"/* Added \":not(.lC6p0.ybXk5)\" to not interfere with elements used for \"Create new post\" */",
	":not(.lC6p0.ybXk5) > ._8-yf5[color=\"#262626\"] {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* The rectangle containing IG account(s), for people selected for sharing a post with AND/OR to start a new message with (similar to the dark theme of Instagram mobile app)*/",
	"/* For account name, I've added extra classes (.gtFbE.xLCgt.MMzan) because otherwise, they might interfere with totally different elements */",
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
	"/* Set white background for :checked to look alike the selected circular things inside the mobile dark theme of Instagram */",
	".z79H6:checked {",
	"    background: rgb(255,255,255) !important;",
	"}",
	"",
	"/* Back button, for example, when you report an account */",
	".glyphsSpriteChevron_left__outline__24__grey_9 {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* Used for the dropdown menu when you temporarily deactivate acc, here: https://instagram.com/accounts/remove/request/temporary/ || MAYBE OTHER DROPDOWN MENUS?! */",
	"select.zOJg-.iFMgT {",
	"    color: #717171 !important;",
	"    background: #000 !important;",
	"}",
	"select.zOJg-:not(.iFMgT) {",
	"    color: #d9d9d9 !important;",
	"    background: #000 !important;",
	"}",
	"",
	"/* Grayish color for live viewer counter */",
	".GmxQl {",
	"    background: #808080 !important;",
	"}",
	"",
	"/* Black-ish border for \"LIVE\" badge used over avatar (similar to the dark theme of mobile Instagram app, but more grayish in order to have a visible border) */",
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
	"    color: #d9d9d9 !important;",
	"}",
	"",
	"/* Text \"Loading suggestions...\" (perhaps other elements?!) */",
	"._7AQG4, .TJ4hK {",
	"    color: #717171 !important;",
	"}",
	"",
	"/* Silhouette + checkmark for following channel button (Next to \"Message\" button on an account page you're following)*/",
	".glyphsSpriteFriend_Follow {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* Symbol (paper airplane inside the circle), when no person is selected, here: https://instagram.com/direct/inbox/ */",
	".glyphsSpriteDirect__outline__96 {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* 'Silhouette in a speech balloon, inside a circle: 1)for \"No Photos\" in the \"Tagged\" section of a public account; 2)for \"Photos of You\" in \"Tagged\" page of your account (this seems to not appear always?! I have 2 accs, I only see this in 1 acc) */",
	"/* coreSpriteProfileCamera is used for mobile user agents such as Android */",
	".coreSpriteTaggedNull {",
	"    filter: invert(1) !important;",
	"}",
	".coreSpriteProfileCamera {",
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
	"/* The rectangle containing \"This Account is Private\" + its borders and top vertical bar */",
	"@media (min-width: 736px) {",
	"    ._4Kbb_ {",
	"        border: 1px solid #505050 !important;",
	"    }",
	"}",
	".Nd_Rl {",
	"    border-top: 1px solid #646464 !important;",
	"}",
	"/* Much lighter color for numbers used here: instagram.com/directory/profiles/ + instagram.com/directory/hashtags/ */",
	"._7kTyW, ._7kTyW:visited {",
	"    color: #d9d9d9 !important;",
	"}",
	"",
	"/* The bottom long line for \"Sensitive Content\", above \"See Video\" (in both stories and posts) */",

/* W4P49 used for other elements as well, need more time to investigate exactly how it looks for any stories containing \"Sensitive Content\" */
/* Example of IG post: https://instagram.com/tv/CLRY4dFnPNu/ */
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
	"/* Lighter dots beneath any post containing multiple photos and/or video, shown in main feed/main Instagram page */",
	"._19dxx .Yi5aA {",
	"    background: #a8a8a8 !important;",
	"}",
	"._19dxx .XCodT {",
	"    background: #0195f7 !important;",
	"}",
	"",
	"/* Lighter color for pending loading account's names and avatars for first post & \"Suggestions for You\" on the right, both in main page + highlights if exist on accounts' pages + elements mentioned earlier, in a direct post (all these happen in the first second of Instagram page load) */",
	".QOqBd, .OzqB_, ._8VIOK, .u9F97, ._-9WeM, ._7JZQt, .VcOAj, .qfAOE, .kAlZ6, .HE3mO, .EIuhb, .RdURl {",
	"    background: #212121 !important;",
	"}",
	".csxf2 {",
	"    background-color: #050505 !important;",
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
	"/* Logo visible in the login page */",
	".coreSpriteLoggedOutWordmark {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* More visible \"Log in with Facebook\" at the login page */",
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
	"/* Ligher \"Meta\" text next to \"Meta\" logo, for instance here: https://instagram.com/accounts/edit/ */",
	"g[clip-path=\"url(#a)\"] > path[fill=\"#1C2B33\"] {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* The vertical line above \"Get the app\" on any post, while using mobile user agent such as Android */",
	".Z_Gl2 {",
	"    border-top: 1px solid rgb(100,100,100) !important;",
	"}",
	"",
	"/* Stuff for Help section, for instance here: https://instagram.com/settings/help/ */",
	"[data-bloks-name][style*=\"background: rgb(255, 255, 255)\"] {",
	"    background: rgb(0, 0, 0) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(239, 239, 239)\"] {",
	"    background: rgb(16, 16, 16) !important;",
	"}",
	"[data-bloks-name][style*=\"background-color: rgb(255, 255, 255)\"] {",
	"    background-color: rgb(0, 0, 0) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(250, 250, 250)\"] {",
	"    background: rgb(10, 10, 10) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(219, 219, 219)\"] {",
	"    background: rgb(36, 36, 36) !important;",
	"}",
	"[data-bloks-name][style*=\"color: rgb(142, 142, 142)\"] {",
	"    color: rgb(113, 113, 113) !important;",
	"}",
	"[data-bloks-name=\"ig.components.screens.Navbar\"] > [style*=\"background-color: rgb(255, 255, 255)\"] {",
	"    background-color: rgb(0, 0, 0) !important;",
	"    border-bottom: 1px solid rgb(36, 36, 36) !important;",
	"}",	
	"[data-bloks-name][style*=\"color: rgb(38, 38, 38)\"] {",
	"    color: rgb(217, 217, 217) !important;",
	"}",
	"[data-bloks-name][style*=\"background-color: rgb(38, 38, 38)\"] {",
	"    background-color: rgb(217, 217, 217) !important;",
	"}",
	"[data-bloks-name][style*=\"color: rgb(0, 55, 107)\"] {",
	"    color: rgb(0, 129, 255) !important;",
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
