// ==UserScript==
// @name					Dark Instagram by Snow
// @namespace			https://github.com/sn-o-w/ig-dark-mode
// @description		Dark mode implementation for Instagram.
// @author				Snow
// @version				1.3.0
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
	"    background-color: #0a0a0a !important;",
	"}",
	"",
	"/* Elements based off of https://userstyles.org/styles/181121 + some of them are modified */",
	"html, body, div, nav, article {",
	"    /* Username links */",
	"    --fe0: 0, 155, 255 !important;",
	"    --ig-link: 0, 155, 255 !important;",
	"    ",
	"    /* Text and Usernames */",
	"    --i1d: 255, 255, 255 !important;",
	"    --ig-primary-text: 255, 255, 255 !important;",
	"    --ig-secondary-button: 255, 255, 255 !important;",
	"    ",
	"    /* Username and Like count */",
	"    --f75: 255, 255, 255 !important;",
	"    ",
	"    /* Link Color and Time Labels */",
	"    --f52: 181, 181, 181 !important;",
	"    --ie3: 113, 113, 113 !important;",
	"    --ba8: 87, 87, 87 !important;",
	"    --c8c: 87, 87, 87 !important;",
	"    --e22: 124, 124, 124 !important;",
	"    --edc: 124, 124, 124 !important;",
	"    ",
	"    /* Borders */",
	"    --b38: 94, 94, 94 !important;",
	"    --b6a: 94, 94, 94 !important;",
	"    --ca6: 94, 94, 94 !important;",
	"    --ig-elevated-separator: 94, 94, 94 !important;",
	"    --ig-stroke: 94, 94, 94 !important;",
	"    --ig-separator: 94, 94, 94 !important;",
	"    --post-separator: 94, 94, 94 !important;",
	"    --ig-highlight-background: 65, 65, 65 !important;",
	"    ",
	"    /* Spacerbar */",
	"    --ce3: 94, 94, 94 !important;",
	"    --bb2: 21, 21, 21 !important;",
	"    --a97: 10, 10, 10 !important;",
	"    ",
	"    /* Backgrounds */",
	"    --b3f: 10, 10, 10 !important;",
	"    --d87: 27, 27, 27 !important;",
	"    --f23: 39, 39, 39 !important;",
	"    --ig-secondary-background: 10, 10, 10 !important;",
	"    --ig-primary-background: 27, 27, 27 !important;",
	"    --ig-elevated-background: 39, 39, 39 !important;",
	"}",
	"",
	"/* Elements on a page you are blocked (and/or it was blocked by Instagram?!) */",
	".-cx-PRIVATE-NavBar__root__ {",
	"    background-color: #1b1b1b !important;",
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
	"/* Underline for links that are hovered on should not be pure blue, it looks ugly */",
	"a, a:visited {",
	"    text-decoration-color: #cce9fd !important;",
	"}",
	"",



	"._a3gq ._aasi {",
	"    background-color: transparent !important;",
	"    border-radius: 0 !important;",
	"}",



	"/* Elements used in sub-frames, visible outside of Instagram?! // Embeddable posts?! */",
	".AvatarContainer, .PrimaryCTA, .HoverCard .HoverCardRoot {",
	"    background-color: #0a0a0a !important;",
	"}",
	".embedSpriteHeartOpen, .embedSpriteComment, .embedSpriteShare, .embedSpriteSaveOpen, .embedSpriteGlyph {",
	"    filter: invert(1) !important;",
	"}",
	"/* On any private account page there is a subtle shadow for the circular avatar pic */",
	".M-jxE::after {",
	"    border: 1px solid rgba(255,255,255,.0975) !important;",
	"}",
	"/* \"Now you can create and share posts directly from your computer\" (it appears first seconds after you log into your account) */",
	".jctW7>.fZViY {",
	"    color: #fff !important;",
	"}",
	"/* Add border shadow for \"Now you can create and share posts directly from your computer\" */",
	"/* iMofo is also used for other elements such as the rectangle box appearing within any DM for \"Like | Copy | Unsend\" + maps' data menu */",
	".iMofo {",
	"    -webkit-box-shadow: rgba(0,0,0,.8) 0 4px 22px !important;",
	"    box-shadow: rgba(0,0,0,.8) 0 4px 22px !important;",
	"}",
	"",
	"/* Notification buble, for instance [\"Like | Copy | Unsend\" thing] and other similar shape things */",
	".HZ9O2, .LpqwJ {",
	"    background-color: #383838 !important;",
	"}",
	"",
	"/* Icons for \"Share to\", appearing for instance when you want to share a post */",
	"/* Add glyphsSpriteApp_whatsapp__outline__24__grey_9 for Android user agent */",
	".glyphsSpriteDirect__outline__24__grey_9, .glyphsSpriteFacebook_circle__outline__24__grey_9, .glyphsSpriteApp_messenger__outline__24__grey_9, .glyphsSpriteApp_whatsapp__outline__24__grey_9, .glyphsSpriteApp_twitter__outline__24__grey_9, .glyphsSpriteMail__outline__24__grey_9, .glyphsSpriteLink__outline__24__grey_9, .glyphsSpriteForward__outline__24__grey_9 {",
	"    filter: invert(1) !important;",
	"}",
	"/* \"Share To\" selectors */",
	".lDRO1 .-qQT3:hover {",
	"    background: #313131 !important;",
	"}",
	".lDRO1 .-qQT3:focus {",
	"    background: #474747 !important;",
	"}",
	"",
	"/* Circle border for the location, for instance here: https://instagram.com/explore/locations/100171148223508/paris-france/ */",
	".VU4al::after {",
	"    border: 1px solid rgba(255,255,255,.0975) !important;",
	"}",
	"",
	"/* Following + Activity (Suggestions For You) */",
	"._01UL2 .DPiy6, .fPMEg .DPiy6, ._6xe7A {",
	"    background-color: #272727 !important;",
	"}",
	".f7Bj3 .QOqBd, .fPMEg .QOqBd {",
	"    background: #4d4d4d !important;",
	"}",
	"",
	"/* Cookie notice */",
	".FrS-d .aOOlW:active {",
	"    background-color: #3e3e3e !important;",
	"}",
	"",
	"/* Followed hashtags (just click on the \"Following\", then \"Hashtags\") */",
	".d-Vzv {",
	"    border: 1.5px solid #fff !important;",
	"}",
	"",
	"/* General border used around circular profile pics within Instagram */",
	"/* Added \":not(.B7GUE, .edq1N)\" to not modify circle borders within Stories page; Stories page has a dark background, so no need to edit in there! */",
	"._2dbep {",
	"    background-color: #161616 !important;",
	"}",
	":not(.B7GUE, .edq1N) > * > ._2dbep::after {",
	"    border: 1px solid rgba(255,255,255,.0975) !important;",
	"}",
	"",
	"/* General border used around circular pics of hashtags followed by a user */",
	".fZC9e {",
	"    background-color: #161616 !important;",
	"}",
	".fZC9e::after {",
	"    border: 1px solid rgba(255,255,255,.0975) !important;",
	"}",
	"",
	"/* Subtle shadow at the bottom of dropwdown menus, for instance: Activity */",
	".TOh1s {",
	"    background: -webkit-gradient(linear,left top,left bottom,from(rgba(39,39,39,0)),to(#272727)) !important;",
	"    background: -webkit-linear-gradient(top,rgba(39,39,39,0) 0%,#272727 100%) !important;",
	"    background: linear-gradient(to bottom,rgba(39,39,39,0) 0%,#272727 100%) !important;",
	"}",
	"/* Main page/feed  */",
	".zGtbP {",
	"    background: #1b1b1b !important;",
	"}",
	"/* Android user agent */",
	".iZH34 {",
	"    background-color: #0a0a0a !important;",
	"}",
	"._1gNme .UE9AK, ._1gNme .cv3IO, ._1gNme ._97aPb {",
	"    background-color: #1b1b1b !important;",
	"}",
	"/* General selector (hover & focus) */",
	":not(.HVWg4) > .-qQT3:not(.rOtsg):hover {",
	"    background: #313131 !important;",
	"}",
	":not(.HVWg4) > .-qQT3:not(.rOtsg):focus {",
	"    background: #474747 !important;",
	"}",
	"",
	"/* Options - Android user agent */",
	".abaSk, ._7XkEo .DPiy6 {",
	"    background-color: #0a0a0a !important;",
	"}",
	"._7XkEo {",
	"    background: #111111 !important;",
	"}",
	"",
	"/* https://www.instagram.com/challenge/action/ */",
	".v2bgO {",
	"    background-color: transparent !important;",
	"}",
	"",
	"/* https://instagram.com/accounts/edit/ */",
	".BvMHM, .wW1cu > .DPiy6, ._6zPK7 {",
	"    background-color: #1b1b1b !important;",
	"}",
	".fuQUr:hover {",
	"    background: #252525 !important;",
	"}",	
	"/* https://instagram.com/explore/people/ */",
	"._9_pk > i {",
	"    filter: invert(1) !important;",
	"}",
	"._9zn7[color=\"#262626\"][fill=\"#262626\"] {",
	"    color: #d9d9d9 !important;",
	"    fill: #d9d9d9 !important;",
	"}",
	"/* https://instagram.com/direct/inbox/ */",
	".S-mcP, .oNO81 .N9abW, .oYYFH .DPiy6 {",
	"    background-color: #1b1b1b !important;",
	"}",
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
	".gfySO, ._72j95 {",
	"    background-color: #000 !important;",
	"}",
	"/* Zoom */",
	".y0eIW {",
	"    filter: invert(1) !important;",
	"}",
	".NhFwj {",
	"   height: 3px !important;",
	"}",
	"/* Add photos/videos */",
	".z-nxm {",
	"    border: 1px solid #242424 !important;",
	"}",
	".z-nxm:active {",
	"    background-color: #101010 !important;",
	"}",
	".z-nxm > div > ._8-yf5[color=\"#8e8e8e\"][fill=\"#8e8e8e\"] {",
	"    color: #717171 !important;",
	"    fill: #717171 !important;",
	"}",
	"/* For filters and/or adjustments */",
	".IJeHu ._75ypG {",
	"    filter: invert(70%) !important;",
	"}",
	".IJeHu .RpHCb::-webkit-slider-thumb {",
	"    background-color: #262626 !important;",
	"}",
	"/* Elements only for uploaded videos */",
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
	"/* Border for profiles when you search for people to tag on */",
	".osCPk .KAWZr {",
	"    border: 1px solid #3e3e3e !important;",
	"}",
	".KAWZr {",
	"    border: 1px solid #3e3e3e !important;",
	"}",
	"/* Color for \"Tag people\" */",
	".RJJyf > button > div > div:nth-child(2) > div.h_zdq {",
	"    color: #000 !important;",
	"}",
	"",
	"/* Elements that appear on the main page, on the right, below \"Suggestions For You\" */",
	".SkY6J .K5OFK, .SkY6J .l93RR, .SkY6J .DINPA {",
	"    color: #b4b4b4 !important;",
	"}",
	"",
	"/* Search bar */",
	".cTBqC, .DljaH {",
	"    background: #3e3e3e !important;",
	"}",
	".TqC_a, .DljaH::placeholder {",
	"    color: #b2b2b2 !important;",
	"}",
	".cTBqC > div:first-child > div > svg {",
	"    color: #fafafa !important;",
	"}",
	"/* Selection when you type something in search bar and scroll over results and outside them */",
	"._01UL2 > div > .JvDyy {",
	"    background: #313131 !important;",
	"}",
	"",
	"/* Instagram filter/effect page */",
	".OOEGs {",
	"    background-color: #000 !important;",
	"}",
	"",
	"/* The background behind the focused post and after clicking more options on an account (\"Block this user\", \"Restrict...\") */",
	".RnEpo {",
	"    background-color: rgba(0,0,20,.65) !important;",
	"}",
	"",
	"/* Elements appearing after clicking more options on an account */",
	".piCib .aOOlW {",
	"    border-top: 1px solid #3e3e3e !important;",
	"}",
	".mt3GC:only-child .aOOlW:first-child {",
	"    border-top: none !important;",
	"}",
	".mt3GC .aOOlW:active {",
	"    background-color: #3e3e3e !important;",
	"/* Fixing IG's own issue... */",
	"    border-radius: 0 !important;",
	"}",
	".b5k4S:active {",
	"    background-color: #3e3e3e !important;",
	"}",
	".J09pf:not(:first-child):before, .J09pf:not(:last-child):after, .b5k4S:not(:first-child):before {",
	"    background-color: #3e3e3e !important;",
	"}",
	"",
	"/* Activity menu + profile menu */",
	"/* Fh4P2 used when activity menu is empty */",
	"._01UL2, .Fh4P2 {",
	"    background: #272727 !important;",
	"}",
	"",
	"/* Background when you no longer have follow requests in Activity feed */",
	"._01UL2 .tHaIX {",
	"    background: #313131 !important;",
	"}",
	"",
	"/* White shadow for the account dropdown menu + Activity menu at the top right + search results rectangular thing */",
	".AvhYw {",
	"    background-color: #272727 !important;",
	"    -webkit-box-shadow: 0 0 5px 3px rgba(0,0,0,.9) !important;",
	"    box-shadow: 0 0 5px 3px rgba(0,0,0,.9) !important;",
	"}",
	".uo5MA {",
	"    -webkit-box-shadow: 0 0 5px 3px rgba(0,0,0,.9) !important;",
	"    box-shadow: 0 0 5px 3px rgba(0,0,0,.9) !important;",
	"}",
	"",
	"/* Drop shadow for account mini previews?! + maybe other elements?! */",
	".GdeD6 {",
	"    -webkit-box-shadow: 0 0 5px 3px rgba(0,0,0,.9) !important;",
	"    box-shadow: 0 0 5px 3px rgba(0,0,0,.9) !important;",
	"}",
	"",
	"/* White shadow for \"New Posts\" button (very tricky to make it appear, just refresh the page and scroll down fast, if you don't scroll down the main feed might automatically update, preventing \"New Posts\" from showing up) */",
	".tCibT {",
	"    background: #383838 !important;",
	"    -webkit-box-shadow: 0 0px 30px rgba(0,0,0,.8) !important;",
	"    box-shadow: 0 0px 30px rgba(0,0,0,.8) !important;",
	"}",
	"",
	"/* Circle border for people liking a post, there are small previews of profile pics, if mutual people you follow liked that post */",
	".M9sTE:not(.JyscU):not(._1gNme) ._43kxm {",
	"    border-color: #0a0a0a !important;",
	"}",
	"@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {",
	"    .M9sTE:not(.JyscU):not(._1gNme) ._43kxm::before {",
	"        border-color: #0a0a0a !important;",
	"    }",
	"}",
	"",
	"/* Logo visible at the top left, except Stories page */",
	"/* Added orange-ish color for ::selection to imitate the blue selection rectangle + light gray for ::selection:window-inactive for dark grayish of selection while inactive window (notice we do this to display the inverted color!) */",
	"/* TODO: Check later for older elements if removed for good */",
	":not([style]):not(.jUFd-)>*>.s4Iyt, :not(._ac0f)>*>i[aria-label=\"Instagram\"] {",
	"    filter: invert(1) !important;",
	"}",
	":not([style]):not(.jUFd-)>*>.s4Iyt::selection, :not(._ac0f)>*>i[aria-label=\"Instagram\"]::selection {",
	"    background-color: #ffa232 !important;",
	"}",
	":not([style]):not(.jUFd-)>*>.s4Iyt::selection:window-inactive, :not(._ac0f)>*>i[aria-label=\"Instagram\"]::selection:window-inactive {",
	"    background-color: #9d9d9d !important;",
	"}",
	"/* Specific rectangle blue selection within Firefox for Instagram logo */",
	":not([style]):not(.jUFd-)>*>.s4Iyt::-moz-selection, :not(._ac0f)>*>i[aria-label=\"Instagram\"]::-moz-selection {",
	"    background-color: #ff7864 !important;",
	"}",
	"/* The below doesn't/can't work for Firefox, lol. Within Firefox you cannot change the color of any selection when the window is inactive. :( */",
	":not([style]):not(.jUFd-)>*>.s4Iyt::-moz-selection:-moz-window-inactive, :not(._ac0f)>*>i[aria-label=\"Instagram\"]::-moz-selection:-moz-window-inactive {",
	"    background-color: #a5a5a5 !important;",
	"}",
	"",
	"/* 3 dots for more options, icons on the nav bar and posts, and other elements */",
	"/* Added [color=\"#262626\"] to not change red color of like activated button [for liked posts & liked replies] and blue color of checkmark (inside \"Switch Accounts\" thing) + perhaps other things I'm not aware of?! */",
	"/* TODO: Check later for older elements if removed for good */",
	"._8-yf5[color=\"#262626\"][fill=\"#262626\"], ._ab6-[color=\"#262626\"][fill=\"#262626\"] {",
	"    color: #d9d9d9 !important;",
	"    fill: #d9d9d9 !important;",
	"}",
	"",
	"/* The rectangle containing IG account(s), for people selected for sharing a post with AND/OR to start a new message with (similar to the dark theme of Instagram mobile app)*/",
	"/* For account name, I've added extra things (._6YLdr > button) because otherwise, they might interfere with filters applied to a post + Accounts Center in https://instagram.com/accounts/edit/ */",
	"/* TODO: Check later for older elements if removed for good */",
	".TGYkm input::placeholder {",
	"    color: #9a9a9a !important;",
	"}",
	".hzPAB ._6YLdr, ._aa2s ._ab8p {",
	"    background: linear-gradient(to right, #0094f6, #28c4f5) !important;",
	"}",
	".hzPAB .Sapc9, ._aa2s ._ab8n {",
	"    background: linear-gradient(to right, #ef4957, #d1076a) !important;",
	"}",
	"._6YLdr > button > .gtFbE, ._aa2s ._aad0 {",
	"    color: #fff !important;",
	"}",
	"button.ZQScA > div.QBdPU > svg._8-yf5[color=\"#0095f6\"], ._aa2s ._abm0>._ab6-[color=\"#0095f6\"] {",
	"    color: #fff !important;",
	"}",
	"/* Android user agent */",
	".pbNvD ._9ezyW {",
	"    background-color: #272727 !important;",
	"}",
	"",
	"/* Selected option for instance for reporting an account + these selections: https://instagram.com/push/web/settings/ */",
	"/* Set white background for :checked to look alike the selected circular things inside the mobile dark theme of Instagram */",
	".z79H6 {",
	"    background: none !important;",
	"}",
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
	"    background-color: #1b1b1b !important;",
	"}",
	"",
	"/* Grayish color for live viewer counter */",
	".GmxQl {",
	"    background: #969696 !important;",
	"}",
	"",
	"/* Black-ish border for \"LIVE\" badge used over avatar (similar to the dark theme of mobile Instagram app) */",
	".h5uC0 ._1iHbP[style*=\"border: 4px\"] {",
	"    border: 4px solid rgb(10, 10, 10) !important;",
	"}",
	".OE3OK ._1iHbP[style*=\"border: 2px\"] {",
	"    border: 2px solid rgb(27, 27, 27) !important;",
	"}",
	".h5uC0 ._1iHbP[style*=\"border: 2px\"] {",
	"    border: 2px solid rgb(39, 39, 39) !important;",
	"}",
	"",
	"/* There is a black background that looks ugly while viewing a livestream, use a gray-ish blackground color instead */",
	".ZKhwf {",
	"    background: #4b4b4b !important;",
	"}",
	"",
	"/* There is some sort of shadow above and below any live's player, remove the shadow */",
	".KIxil {",
	"    background: transparent !important;",
	"}",
	"",
	"/* Change the color of chat section in livestreams */",
	".W7myM {",
	"    background: #1b1b1b !important;",
	"}",
	"",
	"/* https://instagram.com/qr/ */",
	".GEbsn {",
	"    background-color: #fff !important;",
	"}",
	"._89X8K > div > .nir2x {",
	"    background: #efefef !important;",
	"}",
	".Oqo7r.adU5z {",
	"    border: 1px solid #fff !important;",
	"}",
	"",
	"/* Views rectangular thing, for example for a video post */",
	"._690y5 {",
	"    -webkit-box-shadow: 0 0 5px 3px rgba(0,0,0,.9) !important;",
	"    box-shadow: 0 0 5px 3px rgba(0,0,0,.9) !important;",
	"}",
	".vJRqr {",
	"    -webkit-box-shadow: 0 0 5px 3px rgba(0,0,0,.9) !important;",
	"    box-shadow: 0 0 5px 3px rgba(0,0,0,.9) !important;",
	"}",
	"",
	"/* Left and/or right circular button used to browse between accounts, for instance for \"Suggested\" or \"Suggestions For You\" or scrolling across account's highlights if there are at least 7 highlights on page */",
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
	"    color: #fff !important;",
	"}",
	"",
	"/* Text \"Loading suggestions...\" (perhaps other elements?!) */",
	"._7AQG4, .TJ4hK {",
	"    color: #717171 !important;",
	"}",
	"",
	"/* Silhouette + checkmark for following channel button (Next to \"Message\" button on an account page you're following) */",
	".glyphsSpriteFriend_Follow {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* Symbol (paper airplane inside the circle), when no person is selected, here: https://instagram.com/direct/inbox/ */",
	".glyphsSpriteDirect__outline__96 {",
	"    filter: invert(1) !important;",
	"}",
	"",
	"/* Selector (hover & focus) for people within Inbox section */",
	".-qQT3.rOtsg:hover {",
	"    background: #252525 !important;",
	"}",
	".N9abW > div > .QOqBd {",
	"    background: #3b3b3b !important;",
	"}",
	"",
	"/* Ballons used within DMs */",
	"/* TODO: Check later for older elements if removed for good */",
	".CMoMH, ._a3gq ._ac1r {",
	"    border: 1px solid #434343 !important;",
	"}",
	"._6FEQj, ._a3gq ._ac1q {",
	"    background: #434343 !important;",
	"}",
	"/* Background and border used next to liked message */",
	"._9BIwZ {",
	"    background-color: #434343 !important;",
	"    border: 2px solid #1b1b1b !important;",
	"}",
	"/* Pending loading baloons */",
	".cU2Ue {",
	"    background: #292929 !important;",
	"}",
	"",
	"/* 'Silhouette in a speech balloon, inside a circle': */",
	"/* 1) for \"No Photos\" in the \"Tagged\" section of a public account; */",
	"/* 2) for \"Photos of You\" in \"Tagged\" page of your account (this seems to not appear always?! I have 2 accs, I only see this in 1 acc) */",
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
	"/* The rectangle containing \"This Account is Private\" + its borders and top vertical bar */",
	"@media (min-width: 736px) {",
	"    ._4Kbb_ {",
	"        border: 1px solid #404040 !important;",
	"    }",
	"}",
	"@media (max-width: 735px) {",
	"    ._4Kbb_ {",
	"        border-bottom: 1px solid #404040 !important;",
	"        border-top: 1px solid #404040 !important;",
	"    }",
	"}",
	"",
	"/* \"Suggestions For You\" in a private account page you don't follow */",
	".M1pAf ._41KYi {",
	"    background: #1b1b1b !important;",
	"}",
	"",
	"/* Much lighter color for numbers used here: instagram.com/directory/profiles/ + instagram.com/directory/hashtags/ */",
	"._7kTyW, ._7kTyW:visited {",
	"    color: #d9d9d9 !important;",
	"}",
	"",
	"/* Change the color for highlighted comments */",
	"/* For some reason, this doesn't work :/ I simply wonder why... */",
	"@-webkit-keyframes CommentPermalinkAnimHighlightFade {",
		"0% { background-color: #090300 !important; }",
		"to { background-color: transparent !important; }",
	"}",
	"@keyframes CommentPermalinkAnimHighlightFade {",
		"0% { background-color: #090300 !important; }",
		"to { background-color: transparent !important; }",
	"}",
	"",
	"/* The bottom long line for \"Sensitive Content\", above \"See Video\" (in both stories and posts) */",
	".DGV6U {",
	"    border-top: 1px solid #dbdbdb !important;",
	"}",
	"/* Some symbols look ugly if they are not color inversed, symbols appearing after you press \"See why\" on a sensitive content */",
	"[data-bloks-name=\"ig.components.Icon\"][style*=\"background-color: rgb(0, 0, 0)\"] {",
	"    background-color: rgb(255, 255, 255) !important;",
	"}",
	"",
	"/* Current locations in minimaps + pin symbol next to locations + menu for maps' data, here: https://instagram.com/session/login_activity/ */",
	".leaflet-popup-content-wrapper, .leaflet-popup-tip {",
	"    background: #000 !important;",
	"}",
	".leaflet-popup-content-wrapper .glyphsSpriteError__outline__24__grey_9 {",
	"    filter: invert(1) !important;",
	"}",
	".leaflet-popup-content .fZViY {",
	"    color: #fff !important;",
	"}",
	".mTDe1 .-qQT3:hover {",
	"    background: #252525 !important;",
	"}",
	".mTDe1 .-qQT3:focus {",
	"    background: #3b3b3b !important;",
	"}",
	"._2uvWF .LpqwJ {",
	"    background: #272727 !important;",
	"}",
	"._2uvWF .W4P49 {",
	"    background: #3e3e3e !important;",
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
	"/* QOqBd used for \"Suggestions for you\", main feed, on the right */",
	"/* OzqB_, _8VIOK, u9F97 + pOb2E + WidCF used in the main feed, for first not loaded yet post */",
	"/* _7JZQt, _-9WeM used for highlights' avatars + highlights' names, in account page where highlights exist */",
	"/* LO-7C is used as the border for highlights' circular avatars */",
	"/* LHkGc + VcOAj, qfAOE, kAlZ6, HE3mO, EIuhb, RdURl + csxf2 ==> used for the first section (not loaded yet), focused post + section next to the focused post + background of the second section */",
	".QOqBd, .OzqB_, ._8VIOK, .u9F97, ._-9WeM {",
	"    background: #414141 !important;",
	"}",
	".VcOAj, .qfAOE, .kAlZ6, .HE3mO, .EIuhb, .RdURl {",
	"    background: #4b4b4b !important;",
	"}",
	".nxF_M > ._7JZQt {",
	"    background: #242424 !important;",
	"}",
	".y0gra > ._7JZQt {",
	"    background: #353535 !important;",
	"}",
	".WidCF {",
	"    filter: invert(83.5%) !important;",
	"}",
	".LHkGc {",
	"    filter: invert(73.5%) !important;",
	"}",
	".nxF_M > .LO-7C {",
	"    border: 2px solid #525252 !important;",
	"}",
	".y0gra > .LO-7C {",
	"    border: 2px solid #636363 !important;",
	"}",
	".csxf2 {",
	"    background-color: #252525 !important;",
	"}",
	"",
	"/* Circle border for profiles, when you try to see a post while being unlogged and you are prompted to log in, so there are cookies stored of previous logins */",
	".A4IYq, _9ctbj {",
	"    border: solid 1px #2c2c2c !important;",
	"}",
	"",
	"/* Login screen */",
	".RnEpo .gr27e {",
	"    background: #272727 !important;",
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
	".o06Gi {",
	"    border: solid 1px #2c2c2c !important;",
	"}",
	".lAPmk {",
	"    border-color: #454545 !important;",
	"}",
	".l9hKg {",
	"    color: #dcdcdc !important;",
	"}",
	"",
	"/* Lighter \"Meta\" text next to \"Meta\" logo, for instance here: https://instagram.com/accounts/edit/ */",
	"svg[aria-label*=\"Facebook\"] path[fill=\"#262626\"] {",
	"    fill: #d9d9d9 !important;",
	"}",
	"",
	"/* The vertical line above \"Get the app\" on any post, while using mobile user agent such as Android */",
	".Z_Gl2 {",
	"    border-top: 1px solid rgb(97,97,97) !important;",
	"}",
	"",
	"/* https://instagram.com/accounts/privacy_and_security/ */",
	".pnqXA:not(:checked)+.gZk2f {",
	"    background-color: #8e8e8e !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(219, 219, 219)\"]~[data-bloks-name][style*=\"background: rgb(255, 255, 255)\"][style*=\"top: 8px; left: 8px\"] {",
	"    background: rgb(10, 10, 10) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(219, 219, 219)\"]~[data-bloks-name][style*=\"background: rgb(255, 255, 255)\"][style*=\"top: 1.5px; left: 1.5px\"] {",
	"    background: rgb(10, 10, 10) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(219, 219, 219)\"][style*=\"width: 24px; height: 24px\"] {",
	"    background: rgb(94, 94, 94) !important;",
	"}",
	"",
	"/* Stuff for Help section, for instance here: https://instagram.com/settings/help/ */",
	"[data-bloks-name][style*=\"background: rgb(255, 255, 255)\"]:not([style*=\"top: 1.5px; left: 1.5px\"]):not([style*=\"top: 8px; left: 8px\"]) {",
	"    background: rgb(27, 27, 27) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(239, 239, 239)\"] {",
	"    background: rgb(65, 65, 65) !important;",
	"}",
	"[data-bloks-name][style*=\"background-color: rgb(255, 255, 255)\"]:not([style*=\"border-bottom: 1px solid rgb(219, 219, 219)\"]) {",
	"    background-color: rgb(27, 27, 27) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(250, 250, 250)\"] {",
	"    background: rgb(39, 39, 39) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(219, 219, 219)\"][style*=\"width: 100%\"] {",
	"    background: rgb(94, 94, 94) !important;",
	"}",
	"[data-bloks-name=\"ig.components.screens.Navbar\"] > [style*=\"background-color: rgb(255, 255, 255)\"] {",
	"    background-color: rgb(27, 27, 27) !important;",
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
