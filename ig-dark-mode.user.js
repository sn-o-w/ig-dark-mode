// ==UserScript==
// @name					Dark Instagram by Snow
// @namespace			https://github.com/sn-o-w/ig-dark-mode
// @description		Dark mode implementation for Instagram.
// @author				Snow
// @version				1.8.1
// @match					*://www.instagram.com/*
// @exclude-match *://www.instagram.com/*?theme=*
// @updateURL			https://raw.githack.com/sn-o-w/ig-dark-mode/master/ig-dark-mode.user.js
// @downloadURL		https://raw.githack.com/sn-o-w/ig-dark-mode/master/ig-dark-mode.user.js
// @run-at				document-start
// ==/UserScript==
(function() {var css = [
	"/* Temporary fixes for main page // Delete after IG fixes their own mess; Perhaps this is not temporary!? */",
	"._aggc, ._aj3f, ._ab6o:not(._ab6q)+._aac6 {",
	"    border-radius: 3px !important;",
	"    padding-left: 11.5px !important;",
	"    padding-right: 11.5px !important;",
	"    border-top: 1px solid rgb(var(--ig-separator)) !important;",
	"    border-left: 1px solid rgb(var(--ig-separator)) !important;",
	"    border-right: 1px solid rgb(var(--ig-separator)) !important;",
	"    border-bottom: 1px solid rgb(var(--ig-separator)) !important;",
	"}",
	"._aa25 {",
	"    border-top: 1px solid rgb(var(--ig-separator)) !important;",
	"    border-left: 1px solid rgb(var(--ig-separator)) !important;",
	"    border-right: 1px solid rgb(var(--ig-separator)) !important;",
	"    border-bottom: 1px solid rgb(var(--ig-separator)) !important;",
	"}",
	"._aa26 {",
	"    padding-left: 11.5px !important;",
	"    padding-right: 11.5px !important;",
	"}",
	"._aiao, ._aauo {",
	"    margin-left: -11.5px !important;",
	"    margin-right: -11.5px !important;",
	"}",
	"._ab6o:not(._ab6q)+._aac6>._aac8 {",
	"    margin-right: -11.5px !important;",
	"}",
	"._aauo ._acay {",
	"    padding-left: 11.5px !important;",
	"}",
	"._aatc ._aasj {",
	"    margin-left: -3.5px !important;",
	"    margin-right: -3.5px !important;",
	"}",
	"section.x78zum5 > .xvbhtw8, ._agh4, ._abaj>._ab8s, ._akek {",
	"    background: rgb(var(--ig-secondary-background)) !important;",
	"}",
	"._aa26, ._aac4, ._aggc {",
	"    background: rgb(var(--ig-primary-background)) !important;",
	"}",
	"/* Define dark mode to get specific scrollbars */",
	":root {",
	"    color-scheme: dark !important;",
	"}",
	"/* Black background for #splash-screen, useful in the first milisecs when the page is loaded */",
	"#splash-screen {",
	"    background: rgb(0, 0, 0) !important;",
	"}",
	"/* Elements on a page when leaving Instagram in order to follow a link + https://instagram.com/accounts/one_click_login_error/invalid_link/ + account doesn't exist anymore + \"Something went wrong\" page */",
	"body {",
	"    background-color: rgb(var(--ig-secondary-background)) !important;",
	"}",
	".-cx-PRIVATE-NavBar__root__ {",
	"    background-color: rgb(var(--ig-primary-background)) !important;",
	"    border-bottom: 1px solid rgb(var(--ig-elevated-separator)) !important;",
	"}",
	".-cx-PRIVATE-NavBar__logo__ {",
	"    filter: invert(1) !important;",
	"}",
	".-cx-PRIVATE-NavBar__username__, .-cx-PRIVATE-ErrorPage__errorContainer__ a, .-cx-PRIVATE-Footer__navItems__ a, .-cx-PRIVATE-NavBar__signInText__, ._aacp > a {",
	"    color: rgb(var(--ig-link)) !important;",
	"}",
	".-cx-PRIVATE-Linkshim__followLink__ {",
	"    background-color: rgb(var(--ig-primary-background)) !important;",
	"}",
	".-cx-PRIVATE-Footer__copyright__ {",
	"    color: #dedede !important;",
	"}",
	".x1pi30zi>*>*>*[stroke=\"#000\"] {",
	"    stroke: #fff !important;",
	"}",
	".x1pi30zi>*>*>*[fill=\"#000\"] {",
	"    fill: #fff !important;",
	"}",
	"/* Elements based off of https://instagram.com/?theme=dark */",
	"html, body, div, nav, article, h1, p {",
	"    --i1d: 250,250,250 !important;",
	"    --edc: 115,115,115 !important;",
	"    --f75: 250,250,250 !important;",
	"    --fe0: 86,183,249 !important;", //modified
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
	"    --ce3: 58,58,58 !important;", //modified
	"    --jd9: 255,255,255 !important;",
	"    --j64: 219,219,219 !important;",
	"    --a97: 50,50,50 !important;", //modified
	"    --d20: 250,250,250 !important;",
	"",
	"    --blue-2: #244A67 !important;", //modified
	"    --challenge-link: 219,219,219 !important;",
	"    --docpen-lightgrey: 65,65,65 !important;", //modified
	"    --ig-banner-background: 28,28,28 !important;", //modified
	"    --ig-elevated-background: 28,28,28 !important;", //modified
	"    --ig-elevated-highlight-background: #3c3c3c !important;", //modified
	"    --ig-elevated-separator: 94,94,94 !important;", //modified
	"    --ig-focus-stroke: 85,85,85 !important;",
	"    --ig-highlight-background: 83,83,83 !important;", //modified
	"    --ig-link: 86,183,249 !important;", //modified
	"    --ig-primary-background: 28,28,28 !important;",
	"    --ig-primary-text: 250,250,250 !important;",
	"    --ig-secondary-background: 10,10,10 !important;", //modified
	"    --ig-secondary-button: 250,250,250 !important;",
	"    --ig-secondary-button-background: 58,58,58 !important;", //modified
	"    --ig-secondary-button-hover: 88,88,88 !important;", //modified
	"    --ig-secondary-text: 160,160,160 !important;", //modified
	"    --ig-separator: 94,94,94 !important;", //modified
	"    --ig-stroke: 94,94,94 !important;", //modified
	"    --ig-temporary-highlight: 0,149,246 !important;",
	"    --ig-tertiary-text: 130,130,130 !important;", //modified
	"    --post-separator: 58,58,58 !important;", //modified
	"    --tos-box-shadow: 255,255,255 !important;",
	"    --web-always-black: 0,0,0 !important;",
	"}",
	"",
	"/* Instagram logo, except Stories page */",
	"/* .xvbhtw8 ._aagx>*[color=\"rgb(38, 38, 38)\"][fill=\"rgb(38, 38, 38)\"] is used in the new Instagram UI */",
	"/* .s4Iyt -> Some settings page still uses this... */",
	"/* It looks like Instagram started to enforce their dark mode on browsers having the dark mode enabled */",
	"/* ._ab21>*>*>i[style*=\"https://static.cdninstagram.com\"] is used on login page */",
	"._acum ._aagx>*, .xvbhtw8 ._aagx>*[color=\"rgb(38, 38, 38)\"][fill=\"rgb(38, 38, 38)\"], .s4Iyt, ._ab21>*>*>i[style*=\"https://static.cdninstagram.com\"] {",
	"    filter: invert(1) brightness(1.15) !important;",
	"}",
	"/* Some pages still have \"selectable\" Instagram logo :/ */",
	".s4Iyt::selection {",
	"    background-color: #f8aa00 !important;",
	"}",
	".s4Iyt::selection:window-inactive {",
	"    background-color: #9d9d9d !important;",
	"}",
	"/* Specific rectangle blue selection within Firefox for Instagram logo */",
	".s4Iyt::-moz-selection {",
	"    background-color: #92144d !important;",
	"}",
	"/* Meta logo visible at Settings page */",
	"g[clip-path=\"url(#a)\"]>path[fill=\"rgb(38, 38, 38)\"] {",
	"    fill: rgb(250, 250, 250) !important;",
	"}",
	"/* New UI, the left bottom menu \"More\" */",
	".xsgn9v4 {",
	"    border-top: 6px solid #424242 !important;",
	"}",
	"/* New UI, notifications when selected in the new left menu */",
	".xvctek7 {",
	"    border-top-color: #646464 !important;",
	"}",
	".x75tisg {",
	"    border-bottom-color: #646464 !important;",
	"}",
	".x2kpoo3 {",
	"    border-right-color: #646464 !important;",
	"}",
	".x17j9fnh {",
	"    border-left-color: #646464 !important;",
	"}",
	"/* https://www.instagram.com/reels/videos/ */",
	".x1f91t4q .xvb8j5 {",
	"    border-right: 1px solid rgb(var(--ig-separator)) !important;",
	"}",
	".xvbhtw8 .x182iqb8.xvbhtw8, .xvbhtw8 .x182iqb8.xvbhtw8 > .xvbhtw8 {",
	"    background-color: rgb(var(--ig-secondary-background)) !important;",
	"}",
	".xuzhngd {",
	"    opacity: 0.26 !important;",
	"}",
	".xjasm6b {",
	"    background-color: #1b1b1b !important;",
	"}",
	"/* Left and right arrows, especially for browsing between highlights/suggested accounts */",
	"._9zs0 {",
	"    background-position: -302px -231.5px !important;",
	"    background-image: url(/rsrc.php/v3/y8/r/ZWR9C7_JdnP.png) !important;",
	"    height: 34px !important;",
	"    width: 34px !important;",
	"}",
	"@media (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi) {",
	"    ._9zs0 {",
	"        background-size: 553px 528px !important;",
	"        background-position: -299.5px -228px !important;",
	"        height: 34px !important;",
	"        width: 34px !important;",
	"        background-image: url(/rsrc.php/v3/yz/r/quLU_xi5ZD1.png) !important;",
	"    }",
	"}",
	"/* https://instagram.com/direct/requests/ */",
	"._aa5d {",
	"    border-bottom: 1px solid rgba(255, 255, 255, .1) !important;",
	"}",
	"._aa5e {",
	"    border-top: 1px solid rgba(255, 255, 255, .1) !important;",
	"}",
	"/* General background (Android user agent) */",
	"._a3wf ._a994 {",
	"    background-color: rgb(var(--ig-secondary-background)) !important;",
	"}",
	"/* Circular border for viewed stories + highlights section / More lighter color */",
	"/* Add \"._aa4d\._aa4c>*>*>*>*>*>*>*>*>*>*>*>*:not(.x5qyhuo)\" to not modify within Stories page */",
	"/* Add a specific rule for dark theme where canvas border look awful within Stories page and needs manual fix */",
	"._aa4d>*>*>*>*>*>*>*>*>*>*>*>*:not(.x5qyhuo) ._aarf>canvas:not([style*=\"width: 42px; height: 42px;\"], [style*=\"width: 54px; height: 54px;\"], [style*=\"width: 66px; height: 66px;\"], [style*=\"width: 91px; height: 91px;\"], [style*=\"width: 168px; height: 168px;\"]), ._aa4d ._aams>canvas {",
	"    filter: invert(0.13) !important;",
	"}",
	"._aa4c>*>*>*>*>*>*>*>*>*>*>*>*:not(.x5qyhuo) ._aarf>canvas:not([style*=\"width: 42px; height: 42px;\"], [style*=\"width: 54px; height: 54px;\"], [style*=\"width: 66px; height: 66px;\"], [style*=\"width: 91px; height: 91px;\"], [style*=\"width: 168px; height: 168px;\"]), ._aa4c ._aams>canvas {",
	"    filter: invert(0.8) !important;",
	"}",
	"._aa4d>*>*>*>*>*>*>*>*>*>*>*>.x5qyhuo ._aarf>canvas[style*=\"width: 64px; height: 64px;\"] {",
	"    filter: invert(1) brightness(1.088) !important;",
	"}",
	"/* Fixes for post in focus when extremely zoomed in */",
	"._aasi._aask {",
	"    background-color: rgb(var(--ig-primary-background)) !important;",
	"}",
	"/* The vertical bar above \"Use the App\" (Android user agent) */",
	"._acc8 {",
	"    border-top: 1px solid rgba(var(--ig-elevated-separator), .7) !important;",
	"}",
	"/* 3 dots for more options, icons on the nav bar and posts, and other elements */",
	"/* Added [color=\"rgb(38, 38, 38)\"] to not change red color of like activated button [for liked posts & liked replies] and blue color of checkmark (inside \"Switch Accounts\" thing) + perhaps other things I'm not aware of?! */",
	"/* Added :not(._ab9y._aba8, ._aagx) to avoid changing the colors inside \"Create new post\" small bottom elements + the Instagram logo */",
	"/* Back button at the top in this page https://instagram.com/?variant=following + https://instagram.com/?variant=past_posts */",
	"/* Lock symbol, inside acc mini previews, for private accs + \"No photos\" in acc mini preview */",
	"*:not(._ab9y._aba8, ._aagx)>._ab6-[color=\"rgb(38, 38, 38)\"][fill=\"rgb(38, 38, 38)\"], ._8-yf5[color=\"rgb(38, 38, 38)\"][fill=\"rgb(38, 38, 38)\"], .x1n2onr6.x1lliihq[color=\"rgb(38, 38, 38)\"][fill=\"rgb(38, 38, 38)\"] {",
	"    color: rgb(250, 250, 250) !important;",
	"    fill: rgb(250, 250, 250) !important;",
	"}",
	"/* Fixes for new profile buttons, by default they look ugly currently */",
	"._acat._aj1-, section.xs83m0k .xwhw2v2, .x19g8pj0 .xwhw2v2 {",
	"    color: rgb(var(--ig-primary-text)) !important;",
	"}",
	"/* Down chevron icon, used to see suggested accounts within any acc page */",
	"/* Added :not(._aaqh)>*>*>*> to not interfere with focused post, on entire page */",
	":not(._aaqh)>*>*>*>._ab6-[color=\"rgb(0, 0, 0)\"][fill=\"rgb(0, 0, 0)\"] {",
	"    color: rgb(255, 255, 255) !important;",
	"    fill: rgb(255, 255, 255) !important;",
	"}",
	"/* \"Create new post\" enhacements for filters slider(s) */",
	".x131esax ._acao>*>._ab6-[color=\"rgb(245, 245, 245)\"][fill=\"rgb(245, 245, 245)\"] {",
	"    color: rgb(38, 38, 38) !important;",
	"    fill: rgb(38, 38, 38) !important;",
	"}",
	"._ac2y:not(._ac2-) {",
	"    filter: invert(1) brightness(2.6) !important;",
	"}",
	"._ac2y:not(._ac2-)::-webkit-slider-thumb {",
	"    background: #000 !important;",
	"}",
	"._ac2y:not(._ac2-)::-moz-range-thumb {",
	"    background: #000 !important;",
	"}",
	"/* Pending elements, not loaded yet, for first unloaded posts, for Stories section + Highlights on any account page + Suggestions for You (Main Feed) */",
	"._aa2c {",
	"    filter: none !important;",
	"}",
	"._acos {",
	"    border: 1.5px #919191 solid !important;",
	"}",
	"/* Focused post, not loaded yet for few secs */",
	"._aas5, ._aasa, ._aasc, ._aasd, ._aasf, ._aasg, ._aash {",
	"    background-color: #656565 !important;",
	"}",
	"._aas8 {",
	"    background-color: #2e2e2e !important;",
	"}",
	"/* Lighter loading circle (some elements that are not really the loading circle have no [style], so add [style]) */",
	"/* \".x5qyhuo\" is a class used for Stories page + \"._acas\" is the blue profile button (Follow) - add it to not invert loading circle in there + make color more lighter for these two cases */",
	"/* \"._acat._aj1-\" used when Follow button is in Requested state, make loading circle a little darker + \".xeuoslp\" is the animation for pending loading elements, at least used within Reels page */",
	"*:not(.x5qyhuo, ._acas) > [data-visualcompletion=\"loading-state\"][style]:not(.xeuoslp) {",
	"    filter: invert(1) brightness(1.25) !important;",
	"}",
	".x5qyhuo > [data-visualcompletion=\"loading-state\"][style], ._acas > [data-visualcompletion=\"loading-state\"][style] {",
	"    filter: brightness(1.25) !important;",
	"}",
	"._acat._aj1- > [data-visualcompletion=\"loading-state\"][style] {",
	"    filter: brightness(0.75) !important;",
	"}",
	"/* Private Policy update notice */",
	"._a9_b [data-bloks-name][style*=\"background: rgb(250, 250, 250)\"] {",
	"    background: rgb(var(--ig-primary-background)) !important;",
	"}",
	"._a9_b [data-bloks-name][style*=\"border: 1px solid rgb(219, 219, 219)\"] {",
	"    border: 1px solid rgb(var(--ig-elevated-separator)) !important;",
	"}",
	"/* Menu for maps' data, here: https://instagram.com/session/login_activity/ */",
	"/* ._aa4d indicates the official dark theme of Instagram */",
	"/* Modified pin icon on the map (.leaflet-marker-icon) to be similar to the one used within Instagram mobile app */",
	"._abwb {",
	"    background: rgb(var(--ig-primary-background)) !important;",
	"}",
	"._aa4d ._9-_u {",
	"    filter: invert(1) !important;",
	"}",
	"._ac8w>*>*>*>*>.leaflet-marker-icon {",
	"    filter: invert(47%) sepia(98%) saturate(3500%) hue-rotate(325deg) brightness(95%) contrast(105%) !important;",
	"}",
	"/* https://instagram.com/qr/ */",
	"._aagm, ._aagq {",
	"    background: #fff !important;",
	"}",
	"._aagn._aagr._aagp {",
	"    border: 2px solid #363636 !important;",
	"}",
	"._aagn._aagq {",
	"    border: 1px solid #fff !important;",
	"}",
	"/* Black-ish border for \"LIVE\" badge used over avatar (similar to the dark theme of mobile Instagram app) + background transparent inside the circle */",
	"._aarl {",
	"    border: 2px solid rgb(var(--ig-primary-background)) !important;",
	"}",
	"._aa_j ._aarl, .x8efi63 ._aarl {",
	"    border: 2px solid rgb(var(--ig-secondary-background)) !important;",
	"}",
	"._aac4 ._aa90 > svg > circle:not([class]) {",
	"    fill: rgb(var(--ig-primary-background)) !important;",
	"}",
	"._aa_j ._aa90 > svg > circle:not([class]) {",
	"    fill: rgb(var(--ig-secondary-background)) !important;",
	"}",
	"/* Grayish color for live viewer counter displayed on livestreams */",
	"._aaeh {",
	"    background: rgba(255,255,255,.44) !important;",
	"}",
	"/* Back/forward buttons */",
	"._aahn, ._aaho {",
	"    filter: invert(1) !important;",
	"}",
	"/* Black shadow for the account dropdown menu + Subtle shadow at the bottom of it */",
	"._ad8j {",
	"    box-shadow: 0 0 5px 3px rgba(var(--web-always-black), .9) !important;",
	"}",
	"._aa62 {",
	"    background: linear-gradient( to bottom, rgba(28, 28, 28, 0) 0%, rgb(var(--ig-elevated-background)) 100% ) !important;",
	"}",
	"/* \"#\" in a circle, when user doesn't follow any hashtags */",
	"._aabo {",
	"    border: 1.5px solid #fafafa !important;",
	"}",
	"/* Selector used for posts/reels/videos should be more contrasting, to better adapt for dark theme */",
	"._ac2d[style*=\"background: rgba(0, 0, 0, 0.3)\"] {",
	"    background: rgba(0, 0, 0, 0.6) !important;",
	"}",
	"._ac2d[style*=\"background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 22.27%)\"] {",
	"    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 44.54%) !important;",
	"}",
	"/* The rectangle containing IG account(s), for people selected for sharing a post with AND/OR to start a new message with (similar to the dark theme of Instagram mobile app) */",
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
	"._aa2s ._abm0 > ._ab6-[color=\"rgb(0, 149, 246)\"] {",
	"    color: rgb(255, 255, 255) !important;",
	"}",
	"/* Make photo tags more transparent alike Instagram app */",
	"._a9-5, ._aa1q {",
	"   background-color: rgba(0, 0, 0, .5) !important;",
	"}",
	"._aa21 {",
	"   border-bottom: 6px solid rgba(0, 0, 0, .5) !important;",
	"}",
	"._aa22 {",
	"   border-top: 6px solid rgba(0, 0, 0, .5) !important;",
	"}",
	"/* Text on disabled/inactive blue buttons */",
	".L3NKy[disabled], a._acas[disabled]:not(._acao, ._acax) {",
	"    color: #616161 !important;",
	"}",
	"/* https://www.instagram.com/challenge/action/ */",
	".v2bgO {",
	"    background-color: rgb(var(--ig-primary-background)) !important;",
	"}",
	"/* General selector */",
	"/* \"._abn_\" used within search results */",
	"/* *:not(.xivu535)>*>*>*>.x1l895ks used for https://instagram.com/accounts/activity/ */",
	"._abm4:hover:not(:focus), ._abn_, .-qQT3:hover:not(:focus), ._aeas:hover:not(:focus), *:not(.xivu535)>*>*>*>.x1l895ks:hover:not(:focus), ._ab85>*>.x78zum5:hover:not(._ab87):not(:focus) {",
	"    background: #2e2e2e !important;",
	"}",
	"._aeas:focus, .-qQT3:focus, ._ab85>*>.x78zum5._ab88:focus:not(._ab87) {",
	"    background: #424242 !important;",
	"}",
	".xivu535>*>*>*>.x1l895ks:active {",
	"    background: #535353 !important;",
	"}",
	"/* Selectors for more options of an account */",
	"._a9--:active {",
	"    background: #363636 !important;",
	"/* Fixing IG's own issue... | Still not fixed; woooow, Instagram... :/ */",
	"    border-radius: 0 !important;",
	"}",
	"/* Elements used in sub-frames, visible outside of Instagram?! // Embeddable posts?! */",
	".AvatarContainer, .PrimaryCTA, .HoverCard .HoverCardRoot {",
	"    background-color: rgb(var(--ig-secondary-background)) !important;",
	"}",
	".sp_0RkxH2ghvkX:not(.VerifiedSprite, .LikeSpriteHover) {",
	"    filter: invert(1) brightness(1.15) !important;",
	"}",
	"/* Cookie notice */",
	".xb88tzc ._a9--:active {",
	"    background-color: #363636 !important;",
	"}",
	"/* General border used around circular profile pics within Instagram + hashtags */",
	"/* Added \":not(._ac0l, ._ac0h, ._aa64)\" to not modify circle borders within Stories page; Stories page has a dark background, so no need to edit in there! */",
	"*:not(._ac0l, ._ac0h, ._aa64)>*>._aa8h::after, ._2dbep::after, ._acf-::after, ._aadm::after {",
	"    border: 1px solid !important;",
	"    opacity: 0.0975 !important;",
	"}",
	"/* White shadow for \"New Posts\" button (very tricky to make it appear, just refresh the page and scroll down fast, if you don't scroll down the main feed might automatically update, preventing \"New Posts\" from showing up) */",
	"._a9-r {",
	"    box-shadow: 0 5px 30px rgb(0, 0, 0) !important;",
	"}",
	"/* \"Now you can create and share posts directly from your computer\" */",
	".LpqwJ {",
	"    background-color: rgb(var(--ig-primary-background)) !important;",
	"}",
	".fZViY {",
	"    color: rgb(var(--ig-primary-text)) !important;",
	"}",
	".iMofo {",
	"    -webkit-box-shadow: rgba(0,0,0,.9) 0 4px 22px !important;",
	"    box-shadow: rgba(0,0,0,.9) 0 4px 22px !important;",
	"}",
	"/* Account mini previews */",
	"._aap3, .x1rj4ezl {",
	"    box-shadow: 0 0 5px 3px rgba(0, 0, 0, .9), 0 0 0 1px rgb(0, 0, 0) !important;",
	"}",
	"/* There are some subtle circle borders in acc minipreviews */",
	"._ab5d {",
	"    border-color: rgb(217,217,217) !important;",
	"}",
	"@media (min-resolution: 2dppx) {",
	"    ._ab5d::after {",
	"        border-color: rgb(217,217,217) !important;",
	"    }",
	"}",
	"/* Background necessary when accesing a link of an Instagram effect */",
	".OOEGs {",
	"    background-color: rgb(var(--ig-primary-background)) !important;",
	"}",
	"/* https://instagram.com/accounts/login/ especially when you are not logged in */",
	"._ab21 {",
	"    border: 1px solid rgb(44,44,44) !important;",
	"}",
	".UDpcu, .vfoLd {",
	"    background-color: rgb(var(--ig-secondary-background)) !important;",
	"}",
	".zyHYP:-webkit-autofill {",
	"    box-shadow: 0 0 0 30px rgb(var(--ig-secondary-background)) inset !important;",
	"}",
	"._9GP1n, ._2hvTZ, .PdTAI {",
	"    background: rgb(var(--ig-secondary-background)) !important;",
	"}",
	".coreSpriteOptionsEllipsis, .glyphsSpriteFrom_meta {",
	"    filter: invert(1) !important;",
	"}",
	"/* Used for the dropdown menu when you temporarily deactivate acc, here: https://instagram.com/accounts/remove/request/temporary/ || MAYBE OTHER DROPDOWN MENUS?! */",
	".zOJg- {",
	"    background: rgb(var(--ig-primary-background)) !important;",
	"}",
	"/* Much lighter color for numbers used here: instagram.com/directory/profiles/ */",
	"._7kTyW {",
	"    color: #f5f5f5 !important;",
	"}",
	"/* Miscellaneous changes */",
	"/* Added ._actr for here https://instagram.com/accounts/remove/request/temporary/ */",
	"/* \"._a9-z:only-child>*>textarea\" => Fix for textarea in embedding public posts */",
	"input, select, textarea {",
	"    color: #e3e1de !important;",
	"}",
	"._aajg>select {",
	"    background-color: rgb(var(--ig-secondary-background)) !important;",
	"}",
	"._actr>select, ._a9-z:only-child>*>textarea {",
	"    background-color: rgb(var(--ig-primary-background)) !important;",
	"}",
	"/* Set white background for :checked to look alike the selected circular things inside the mobile dark theme of Instagram */",
	"._ac7j:checked, .z79H6:checked {",
	"    background: rgb(255,255,255) !important;",
	"}",
	"._ac7h, .z79H6 {",
	"    background: rgb(var(--ig-secondary-background)) !important;",
	"}",
	"/* Balloons used within DMs */",
	"._ac1q {",
	"    background: rgb(66, 66, 66) !important;",
	"}",
	"._ac1r {",
	"    border: 1px solid rgb(66, 66, 66) !important;",
	"}",
	"._acfl {",
	"    background-color: rgb(66, 66, 66) !important;",
	"}",
	"/* Pending loading baloons inside messages [Inbox] */",
	"._ac1s {",
	"    background: #2b2b2b !important;",
	"}",
	"/* Circle border for the location, for instance here: https://instagram.com/explore/locations/100171148223508/paris-france/ */",
	"._abwv::after {",
	"    border: 1px solid rgba(255,255,255,.0975) !important;",
	"}",
	"/* Graphical symbols */",
	"/* Lock symbol for private account + camera symbol above \"No Posts Yet\" + camera symbol when there are no user posts in your Posts tab */",
	"/* \"Saved\" symbol within the Saved section of your account when there are no saved posts yet */",
	"/* 'Silhouette in a speech balloon, inside a circle' -> for \"No Photos\" in the \"Tagged\" section of a public account; for \"Photos of You\" in \"Tagged\" page of your account; */",
	"/* Lock symbol when you log in and you're asked to save your login or not */",
	"/* \"Plus and silhouette\" symbol after you no longer have any follow requests */",
	"/* Back button, for example, when you report an account */",
	"/* Lock symbol for private accounts */",
	"/* Lock symbol, appears especially when you are not logged in and try to see a restricted profile */",
	"/* Paper plane, in a circle, used within new IG layout */",
	"/* https://instagram.com/accounts/password/reset/ */",
	"/* https://instagram.com/accounts/professional_account_settings/ */",
	"/* Star symbol, used within new following menu of any acc */",
	"._9-z-, .glyphsSpriteCamera__outline__24__grey_9, ._9zlg, ._9zli, ._9zlh, .coreSpriteKeyhole, ._9zkj, ._9_1o, ._9-_z, ._9--3, ._9-_-, ._9--q, ._9-1a, .glyphsSpriteSearch__outline__24__grey_9, ._9_0y {",
	"    filter: invert(1) !important;",
	"}",
	"/* Long lines in between accounts + color text for accounts, used here: https://instagram.com/accounts/login/ */",
	"._ab2f {",
	"    color: rgb(var(--ig-primary-text)) !important;",
	"}",
	"._ab2m {",
	"    border-color: rgb(var(--post-separator)) !important;",
	"}",
	"._ab2g {",
	"    border: solid 1px rgb(var(--post-separator)) !important;",
	"}",
	"/* More visible \"Log in with Facebook\" at the login page */",
	".KPnG0 {",
	"    color: #4b6cb4 !important;",
	"}",
	"/* The bottom long line for \"Sensitive Content\", above \"See Video\" or \"See reel\" or \"See Photo\" (in both posts and stories) */",
	"._abqu ._abqt, ._ac0b ._aest {",
	"    border-top: 1px solid #dbdbdb !important;",
	"}",
	"/* Some symbols look ugly if they are not color inversed, symbols appearing after you press \"See why\" on a sensitive content */",
	"[data-bloks-name=\"ig.components.Icon\"][style*=\"background-color: rgb(0, 0, 0)\"] {",
	"    background-color: rgb(255, 255, 255) !important;",
	"}",
	"/* Sort and filter for https://instagram.com/your_activity/ */",
	"/* Stuff for Help section, for instance here: https://instagram.com/settings/help/ + other Settings pages */",
	"[data-bloks-name][style*=\"border: 1px solid rgb(38, 38, 38)\"], [data-bloks-name][style*=\"border: 1px solid rgb(219, 219, 219)\"] {",
	"    border: 1px solid rgb(var(--ig-separator)) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgba(239, 239, 239, 0.7)\"] {",
	"    background: rgba(239, 239, 239, 0.24) !important;",
	"}",
	"[data-bloks-name=\"bk.components.Flexbox\"][style*=\"background: rgb(224, 241, 255)\"], [data-bloks-name=\"bk.components.Flexbox\"][style*=\"background: rgb(255, 255, 255)\"][style*=\"padding: 8px 12px\"] {",
	"    background: rgb(39, 55, 93) !important;",
	"}",
	"[data-bloks-name=\"bk.components.Flexbox\"][style*=\"background: rgb(255, 255, 255)\"][style*=\"padding: 8px 12px\"] > * > [data-bloks-name=\"bk.components.TextSpan\"][style*=\"color: rgb(0, 0, 0)\"] {",
	"    color: rgb(0, 149, 246) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(0, 0, 0)\"] {",
	"    background: rgb(var(--ig-primary-background)) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(38, 38, 38)\"][style*=\"width: 21px; height: 21px\"]:not([data-bloks-name=\"bk.components.TextSpan\"]), [data-bloks-name][style*=\"background: rgb(38, 38, 38)\"][style*=\"width: 8px; height: 8px\"]:not([style*=\"background: rgb(255, 255, 255)\"], [data-bloks-name=\"bk.components.TextSpan\"]), [data-bloks-name][style*=\"background: rgb(255, 255, 255)\"][style*=\"width: 21px; height: 21px\"] {",
	"    background: rgb(var(--ig-secondary-background)) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(219, 219, 219)\"][style*=\"width: 24px; height: 24px\"] {",
	"    background: rgb(54, 54, 54) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(219, 219, 219)\"][style*=\"width: 24px; height: 24px\"] ~ [data-bloks-name][style*=\"background: rgb(255, 255, 255)\"][style*=\"width: 8px; height: 8px\"] {",
	"    background: rgb(var(--ig-secondary-background)) !important;",
	"}",
	"[data-bloks-name=\"bk.components.TextSpan\"][style*=\"color: rgb(38, 38, 38)\"], [data-bloks-name=\"bk.components.Text\"][style*=\"color: rgb(38, 38, 38)\"] {",
	"    color: rgb(250, 250, 250) !important;",
	"}",
	"[data-bloks-name=\"bk.components.Flexbox\"][style*=\"background: rgb(255, 255, 255)\"]:not([style*=\"padding: 8px 12px\"], [style*=\"border-radius: 10.5px\"]) {",
	"    background: rgb(var(--ig-primary-background)) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(239, 239, 239)\"] {",
	"    background: rgb(var(--post-separator)) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(250, 250, 250)\"] {",
	"    background: rgb(39, 39, 39) !important;",
	"}",
	"[data-bloks-name][style*=\"background: rgb(219, 219, 219)\"][style*=\"width: 100%\"], [data-bloks-name][style*=\"background: rgb(38, 38, 38)\"][style*=\"width: 100%\"], [data-bloks-name][style*=\"background: rgb(219, 219, 219)\"][style*=\"height: 1px\"], [data-bloks-name][style*=\"background: rgb(38, 38, 38)\"][style*=\"height: 1px\"] {",
	"    background: rgb(var(--ig-elevated-separator)) !important;",
	"}",
	"[data-bloks-name=\"ig.components.screens.Navbar\"] > [style*=\"background-color: rgb(255, 255, 255)\"] {",
	"    background-color: rgb(var(--ig-primary-background)) !important;",
	"    border-bottom: 1px solid rgb(var(--ig-elevated-separator)) !important;",
	"}",
	"[data-bloks-name][style*=\"background-color: rgb(38, 38, 38)\"] {",
	"    background-color: rgb(255, 255, 255) !important;",
	"}",
	"[data-bloks-name=\"bk.components.Text\"][style*=\"color: rgb(224, 241, 255)\"], [data-bloks-name=\"bk.components.Text\"][style*=\"color: rgb(0, 55, 107)\"], [data-bloks-name=\"bk.components.TextSpan\"][style*=\"color: rgb(224, 241, 255)\"], [data-bloks-name=\"bk.components.TextSpan\"][style*=\"color: rgb(0, 55, 107)\"] {",
	"    color: rgb(var(--ig-link)) !important;",
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
		// no head yet, stick it wherever
		document.documentElement.appendChild(node);
	}
}
})();
