// ==UserScript==
// @name					Dark Instagram by Snow
// @namespace			https://github.com/sn-o-w/ig-dark-mode
// @description		Dark mode implementation for Instagram.
// @author				Snow
// @version				0.9.4
// @match					*://www.instagram.com/*
// @updateURL			https://raw.githack.com/sn-o-w/ig-dark-mode/master/ig-dark-mode.user.js
// @downloadURL		https://raw.githack.com/sn-o-w/ig-dark-mode/master/ig-dark-mode.user.js
// @run-at				document-start
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
	"    --e22: 94, 94, 94 !important;",
	"    --edc: 94, 94, 94 !important;",
	"    ",
	"    /* Borders */",
	"    --b38: 94, 94, 94 !important;",
	"    --b6a: 94, 94, 94 !important;",
	"    --ca6: 94, 94, 94 !important;",
	"    ",
	"    /* Spacerbar */",
	"    --ce3: 94, 94, 94 !important;",
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
	"    border-bottom: 1px solid #5e5e5e !important;",
	"}",
	".-cx-PRIVATE-NavBar__logo__ {",
	"    filter: invert(1) !important;",
	"}",
	".-cx-PRIVATE-NavBar__username__ {",
	"    color: #009bff !important;",
	"}",
	".-cx-PRIVATE-ErrorPage__errorContainer__ a, .-cx-PRIVATE-ErrorPage__errorContainer__ a:visited {",
	"    color: #009bff !important;",
	"}",
	".-cx-PRIVATE-Footer__navItems__ a, .-cx-PRIVATE-Footer__navItems__ a:active, .-cx-PRIVATE-Footer__navItems__ a:focus, .-cx-PRIVATE-Footer__navItems__ a:hover, .-cx-PRIVATE-Footer__navItems__ a:visited {",
	"    color: #009bff !important;",
	"}",
	".-cx-PRIVATE-Footer__copyright__ {",
	"    color: #fff !important;",
	"}",
	"",
	"/* Elements used in sub-frames, visible outside of Instagram?! // Embeddable posts?! */",
	".AvatarContainer, .PrimaryCTA, .HoverCard .HoverCardRoot {",
	"    background-color: #000 !important;",
	"}",
	".embedSpriteHeartOpen, .embedSpriteComment, .embedSpriteShare, .embedSpriteSaveOpen, .embedSpriteGlyph {",
	"    filter: invert(1) !important;",
	"}",
	"/* On any private account page there is a subtle shadow for the circular avatar pic */",
	".M-jxE::after {",
	"    border: 1px solid rgba(255,255,255,.0975) !important;",
	"}",
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
	"    border: 1px solid rgba(253,253,253,.0975) !important;",
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
	"/* General border used around circular profile pics within Instagram */",
	"/* Added \":not(.B7GUE, .edq1N)\" to not modify circle borders within Stories page; Stories page has a dark background, so no need to edit there! */",
	"._2dbep {",
	"    background-color: #0c0c0c !important;",
	"}",
	":not(.B7GUE, .edq1N) > div > ._2dbep::after {",
	"    border: 1px solid rgba(245,245,245,.0975) !important;",
	"}",
	"",
	"/* General border used around circular pics of hashtags followed by a user */",
	".fZC9e {",
	"    background-color: #0c0c0c !important;",
	"}",
	".fZC9e::after {",
	"    border: 1px solid rgba(245,245,245,.0975) !important;",
	"}",
	"",
	"/* \"Create New Post\" -> Photo: \"Filters\" and \"Adjustments\" + button when you add multiple photos/videos + background for photo + elements for video */",
	".RJJyf {",
	"    background: rgba(229,229,229,.8) !important;",
	"    -webkit-box-shadow: 0 4px 12px rgba(255,255,255,.15) !important;",
	"    box-shadow: 0 4px 12px rgba(255,255,255,.15) !important;",
	"}",
	".RJJyf > button > div > ._8-yf5[color=\"#ffffff\"][fill=\"#ffffff\"], .qJPeX > ._8-yf5[color=\"#ffffff\"][fill=\"#ffffff\"] {",
	"    color: #000000 !important;",
	"    fill: #000000 !important;",
	"}",
	"._56XdI.vwCYk > .h_zdq {",
	"    color: #000 !important;",
	"}",
	"._56XdI.vwCYk > ._0PwGv {",
	"    color: #717171 !important;",
	"}",
	".YAPUk {",
	"    background: rgba(229,229,229,.8) !important;",
	"}",
	".gfySO {",
	"    background-color: #000 !important;",
	"}",
	"._72j95 {",
	"    background-color: #000 !important;",
	"}",
	".NhFwj {",
	"   height: 3px !important;",
	"}",
	".y0eIW {",
	"    filter: invert(1) !important;",
	"}",
	".z-nxm > div > ._8-yf5[color=\"#8e8e8e\"][fill=\"#8e8e8e\"] {",
	"    color: #717171 !important;",
	"    fill: #717171 !important;",
	"}",
	".lqsX8 input, .lqsX8 label, .lqsX8 svg {",
	"    color: #d9d9d9 !important;",
	"    fill: #d9d9d9 !important;",
	"    -webkit-text-fill-color: #d9d9d9 !important;",
	"}",
	".RpHCb._75ypG {",
	"    filter: invert(1) !important;",
	"}",
	".RpHCb::-webkit-slider-thumb {",
	"    background: #000 !important;",
	"}",
	".z-nxm {",
	"    border: 1px solid #242424 !important;",
	"}",
	".z-nxm:active {",
	"    background-color: #101010 !important;",
	"}",
	".URCzM {",
	"    -webkit-box-shadow: 0 0 4px rgba(255,255,255,.15),0 0 10px rgba(255,255,255,.3) !important;",
	"    box-shadow: 0 0 4px rgba(255,255,255,.15),0 0 10px rgba(255,255,255,.3) !important;",
	"}",
	".TXfik {",
	"    -webkit-box-shadow: 0 4px 4px -4px rgba(255,255,255,.15),0 4px 10px rgba(255,255,255,.3) !important;",
	"    box-shadow: 0 4px 4px -4px rgba(255,255,255,.15),0 4px 10px rgba(255,255,255,.3) !important;",
	"}",
	".F_H_N {",
	"    -webkit-box-shadow: -1px 4px 4px -4px rgba(255,255,255,.3) !important;",
	"    box-shadow: -1px 4px 4px -4px rgba(255,255,255,.3) !important;",
	"}",
	"._4JX1j {",
	"    -webkit-box-shadow: -1px 4px 4px -4px rgba(255,255,255,.3) !important;",
	"    box-shadow: -1px 4px 4px -4px rgba(255,255,255,.3) !important;",
	"}",
	".aipJc {",
	"    -webkit-box-shadow: 0 4px 4px -4px rgba(255,255,255,.15),0 4px 10px rgba(255,255,255,.3) !important;",
	"    box-shadow: 0 4px 4px -4px rgba(255,255,255,.15),0 4px 10px rgba(255,255,255,.3) !important;",
	"}",
	".osCPk .KAWZr {",
	"    border: 1px solid #242424 !important;",
	"}",
	".KAWZr {",
	"    border: 1px solid #242424 !important;",
	"}",
	".RJJyf > button > div > div:nth-child(2) > div.h_zdq {",
	"    color: #000 !important;",
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
	".cTBqC > div:first-child > div > svg {",
	"    color: #fafafa !important;",
	"}",
	"",
	"/* Instagram filter/effect page */",
	".OOEGs {",
	"    background-color: #000 !important;",
	"}",
	".Caqsn > h1 {",
	"    color: #fff !important;",
	"}",
	"",
	"/* The background behind the focused post and after clicking more options on an account (\"Block this user\", \"Restrict...\") */",
	".RnEpo {",
	"    background-color: rgba(39,50,68,.65) !important;",
	"}",
	"",
	"/* Elements appearing after clicking more options on an account */",
//	"/* Testing with a box-shadow, not working well, and therefore disabled atm */",
//	".fPMEg {",
//	"    box-shadow: 0 0 10px 1px rgba(255,255,255,.4) !important;",
//	"    border-radius: 16px !important;",
//	"}",
	".Yx5HN .aOOlW {",
	"    background-color: #181818 !important;",
	"    border-top: 1px solid #3a3a3a !important;",
	"}",
	".mt3GC:only-child .aOOlW:first-child {",
	"    border-top: none !important;",
	"}",
	".Yx5HN > div > ._1XyCr {",
	"    background-color: #181818 !important;",
	"}",
	".aOOlW:not(.SRPMb):active {",
	"    background-color: #101010 !important;",
	"}",
	".b5k4S:active {",
	"    background-color: #222222 !important;",
	"}",
	".J09pf:not(:first-child):before, .J09pf:not(:last-child):after, .b5k4S:not(:first-child):before {",
	"    background-color: #3a3a3a !important;",
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
	"    -webkit-box-shadow: 0 2px 16px 0 rgba(255,255,255,.2),0 0 0 1px #717171 !important;",
	"    box-shadow: 0 2px 16px 0 rgba(255,255,255,.2),0 0 0 1px #717171 !important;",
	"}",
	"",
	"/* Background for account mini previews */",
	".GdeD6 .DPiy6 {",
	"    background: #181818 !important;",
	"}",
	"",
	"/* White shadow for \"New Posts\" button (very tricky to make it appear, just refresh the page and scroll down fast, if you don't scroll down the main feed might automatically update, preventing \"New Posts\" from showing up) */",
	".tCibT {",
	"    background: #181818 !important;",
	"    -webkit-box-shadow: 0 0px 30px rgba(255,255,255,.7) !important;",
	"    box-shadow: 0 0px 30px rgba(255,255,255,.7) !important;",
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
	"    background-color: #ff7864 !important;",
	"}",
	"/* The above doesn't/can't work for Firefox, lol. Within Firefox you cannot change the color of any selection when the window is inactive. :( */",
	".s4Iyt[src*=\"735145cfe0a4.png\"]::-moz-selection:-moz-window-inactive {",
	"    background-color: #a5a5a5 !important;",
	"}",
	"",
	"/* 3 dots for more options, icons on the nav bar and posts, and other elements */",
	"/* Added [color=\"#262626\"] to not change red color of like activated button [for liked posts & liked replies] and blue color of checkmark (inside \"Switch Accounts\" thing) + perhaps other things I'm not aware of?! */",
	"._8-yf5[color=\"#262626\"][fill=\"#262626\"] {",
	"    color: #d9d9d9 !important;",
	"    fill: #d9d9d9 !important;",
	"}",
	"",
	"/* The rectangle containing IG account(s), for people selected for sharing a post with AND/OR to start a new message with (similar to the dark theme of Instagram mobile app)*/",
	"/* For account name, I've added extra things (._6YLdr > button) because otherwise, they might interfere with filters applied to a post + Accounts Center in https://instagram.com/accounts/edit/ */",
	".TGYkm input::placeholder {",
	"    color: #9a9a9a !important;",
	"}",
	".hzPAB ._6YLdr {",
	"    background: linear-gradient(to right, #0094f6, #28c4f5) !important;",
	"}",
	".hzPAB .Sapc9 {",
	"    background: linear-gradient(to right, #ef4957, #d1076a) !important;",
	"}",
	"._6YLdr > button > .gtFbE {",
	"    color: #fff !important;",
	"}",
	"button.ZQScA > div.QBdPU > svg._8-yf5[color=\"#0095f6\"] {",
	"    color: #fff !important;",
	"}",
	".-qQT3:hover {",
	"    background: #202020 !important;",
	"}",
	"",
	"/* Add specific background for the list of following and/or followed people */",
	"._6xe7A {",
	"    background: #181818 !important;",
	"}",
	"",
	"/* In Following section it might appear \"Suggestions For You\" */",
	".isgrP .DPiy6 {",
	"    background: #181818 !important;",
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
	".zOJg- {",
	"    background-color: #000 !important;",
	"}",
	"",
	"/* Grayish color for live viewer counter */",
	".GmxQl {",
	"    background: #808080 !important;",
	"}",
	"",
	"/* Black-ish border for \"LIVE\" badge used over avatar (similar to the dark theme of mobile Instagram app, but more grayish in order to have a visible border) */",
	"._1iHbP[data-testid=\"live-badge\"] {",
	"    border: 4px solid rgb(60, 60, 60) !important;",
	"}",
	"",
	"/* There is a black background that looks ugly while viewing a livestream, use a gray-ish blackground color instead */",
	".ZKhwf {",
	"    background: #323232 !important;",
	"}",
	"",
	"/* There is some sort of shadow above and below any live's player, remove the shadow */",
	".KIxil {",
	"    background: transparent !important;",
	"}",
	"",
	"/* Left and/or right circular button used to browse between accounts, for instance for \"Suggested\" or \"Suggestions For You\" or scrolling across account's highlights if there are 7 highlights on page or more */",
	".coreSpritePagingChevron {",
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
	"/* Ballons used within chats */",
	".CMoMH {",
	"    border: 1px solid #282828 !important;",
	"}",
	"._6FEQj {",
	"    background: #282828 !important;",
	"}",
	"._9BIwZ {",
	"    background-color: #282828 !important;",
	"}",
	"",
	"/* 'Silhouette in a speech balloon, inside a circle: 1)for \"No Photos\" in the \"Tagged\" section of a public account; 2)for \"Photos of You\" in \"Tagged\" page of your account (this seems to not appear always?! I have 2 accs, I only see this in 1 acc) */",
	"/* coreSpriteProfileCamera is used for mobile user agents such as Android */",
	".coreSpriteTaggedNull, .coreSpriteProfileCamera {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* \"Saved\" symbol within the Saved section of your account when there are no saved posts yet */",
	".coreSpriteSaveNull {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* \"Heart\" symbol within the Activity section of your account when there is no activity yet: https://instagram.com/accounts/activity/ */",
	".coreSpriteActivityHeart {",
	"    filter: invert(1) !important;",
	"}",
	"/* \"Plus and silhouette\" symbol after you no longer have any follow requests */",
	".loggedoutSpriteFollow_Contextual_Login {",
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
	"        border: 1px solid #3a3a3a !important;",
	"    }",
	"}",
	".Nd_Rl {",
	"    border-top: 1px solid #5e5e5e !important;",
	"}",
	"/* Much lighter color for numbers used here: instagram.com/directory/profiles/ + instagram.com/directory/hashtags/ */",
	"._7kTyW, ._7kTyW:visited {",
	"    color: #d9d9d9 !important;",
	"}",
	"",
	"/* The bottom long line for \"Sensitive Content\", above \"See Video\" (in both stories and posts) */",
	".DGV6U {",
	"    border-top: 1px solid #dbdbdb !important;",
	"}",

/* W4P49 used for other elements as well, need more time to investigate exactly how it looks for any stories containing \"Sensitive Content\" */
/* Example of IG post: https://instagram.com/tv/CLRY4dFnPNu/ */
/*
	".W4P49 {",
	"    background-color: #dbdbdb !important;",
	"}",
*/

	"/* Some symbols look ugly if they are not color inversed, symbols appearing after you press \"See why\" on a sensitive content */",
	"[data-bloks-name=\"ig.components.Icon\"][style*=\"background-color: rgb(0, 0, 0)\"] {",
	"    background-color: rgb(255, 255, 255) !important;",
	"}",
	"",
	"/* Current locations in minimaps + pin symbol next to locations + menu for maps' data, here: https://instagram.com/session/login_activity/ */",
	"div.pjcA_ > div.KV-D4 {",
	"    color: #fff !important;",
	"}",
	".leaflet-popup-content-wrapper, .leaflet-popup-tip {",
	"    background: #000 !important;",
	"    -webkit-box-shadow: 0 3px 14px rgba(0,0,0,.4) !important;",
	"    box-shadow: 0 3px 14px rgba(0,0,0,.4) !important;",
	"}",
	".leaflet-popup-content-wrapper .glyphsSpriteError__outline__24__grey_9 {",
	"    filter: invert(1) !important;",
	"}",
	".LpqwJ {",
	"    background: #181818 !important;",
	"}",
	".LpqwJ .W4P49 {",
	"    background: #3a3a3a !important;",
	"}",
	"",
	"/* Lighter loading circle (some elements that are not really the loading circle have no [style], so add [style]) */",
	"/* \"yUdUG\" is a class used for Stories page, add it to not invert loading circle in there */",
	":not(.yUdUG) > [data-visualcompletion=\"loading-state\"][style] {",
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
	"/* QOqBd used for \"Suggestions for you\", main feed, on the right ?! */",
	"/* OzqB_, _8VIOK, u9F97 + WidCF used in the main feed, for first not loaded yet post */",
	"/* _7JZQt, _-9WeM used for highlights' avatars + highlights' names, in account page where highlights exist */",
	"/* LO-7C is used as the border for highlights' circular avatars */",
	"/* LHkGc + VcOAj, qfAOE, kAlZ6, HE3mO, EIuhb, RdURl + csxf2 ==> used for the first section (not loaded yet), focused post + section next to the focused post + background of the second section */",
	".QOqBd, .OzqB_, ._8VIOK, .u9F97, ._7JZQt, ._-9WeM, .VcOAj, .qfAOE, .kAlZ6, .HE3mO, .EIuhb, .RdURl {",
	"    background: #212121 !important;",
	"}",
	".WidCF, .LHkGc {",
	"    filter: invert(92.5%) !important;",
	"}",
	".LO-7C {",
	"    border: 2px solid #3a3a3a !important;",
	"}",
	".csxf2 {",
	"    background-color: #050505 !important;",
	"}",
	"",
	"/* Circle border for profiles, when you try to see a post while being unlogged and you are prompted to log in, so there are cookies stored of previous logins */",
	".o06Gi {",
	"    border: solid 1px #101010 !important;",
	"}",
	"",
	"/* Lock symbol when you log in and you're asked to save your login or not */",
	"span.coreSpriteKeyhole {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* Logo visible on the login page */",
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
	"/* Lighter \"Meta\" text next to \"Meta\" logo, for instance here: https://instagram.com/accounts/edit/ */",
	"._55Ud.BGYmY.gT2s8.a39_R path[fill=\"#1C2B33\"] {",
	"    fill: #e3d4cc !important;",
	"}",
	"",
	"/* The vertical line above \"Get the app\" on any post, while using mobile user agent such as Android */",
	".Z_Gl2 {",
	"    border-top: 1px solid rgb(94,94,94) !important;",
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
	"    background: rgb(24, 24, 24) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(219, 219, 219)\"] {",
	"    background: rgb(94, 94, 94) !important;",
	"}",
	"[data-bloks-name=\"ig.components.screens.Navbar\"] > [style*=\"background-color: rgb(255, 255, 255)\"] {",
	"    background-color: rgb(0, 0, 0) !important;",
	"    border-bottom: 1px solid rgb(94, 94, 94) !important;",
	"}",	
	"[data-bloks-name][style*=\"color: rgb(38, 38, 38)\"] {",
	"    color: rgb(255, 255, 255) !important;",
	"}",
	"[data-bloks-name][style*=\"background-color: rgb(38, 38, 38)\"] {",
	"    background-color: rgb(255, 255, 255) !important;",
	"}",
	"[data-bloks-name][style*=\"color: rgb(0, 55, 107)\"] {",
	"    color: rgb(0, 155, 255) !important;",
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
