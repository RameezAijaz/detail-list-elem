# Detail-list-elem
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/owner/my-element)

Webcomponent for customized list with item name, item details, item image and tags.

![screenshot](https://github.com/RameezAijaz/detail-list-elem/blob/master/screenshots/screenshot.png?raw=true "screenshot")

# Install
`npm i --save detail-list-elem`

# Demo
<custom-element-demo>
<template>
<base href="https://raw-dot-custom-elements.appspot.com/PolymerElements/paper-progress/v1.0.11/paper-progress/">
<script src="https://cdn.jsdelivr.net/npm/webcomponents-lite@0.6.0/webcomponents-lite.min.js"></script>
<style is="custom-style">
  paper-progress {
    display: block;
    width: 100%;
    margin: 20px 0;
  }
</style>
<detail-list-elem 
items='[
{
"title": {"text":"Chrome", "url":"https://www.google.com/chrome/", "target":"_blank",
"style":"text-overflow: unset; white-space: unset;"

},
"description": {"text":"Google Chrome is a cross-platform web browser developed by Google. It was first released in 2008 for Microsoft Windows"},
"img": {"src": "chrome.png"},
"tags": [{"text" : "google"}]
},
{
"title": {"text": "FireFox"},
"description": {"text": "Mozilla Firefox, or simply Firefox, is a free and open-source web browser developed by the Mozilla Foundation and its subsidiary, Mozilla Corporation.",
"style":"text-overflow: unset; white-space: unset;"},
"img": {"src":"firefox.jpeg"},
"tags": [{"text" : "mozilla corporation", "type": "warn"}]
},
{
"title": {"text": "Safari"},
"description": {"text": "Safari is a graphical web browser developed by Apple, based on the WebKit engine."},
"img": {"src": "safari.jpeg"},
"tags": [{"text" : "apple", "type": "info"}]
},
{
"title": {"text": "Edge"},
"description": {"text": "Microsoft Edge is a web browser developed by Microsoft. It was first released for Windows 10 and Xbox One in 2015"},
"img": {"src": "edge.jpg"},
"tags": [{"text" : "microsoft", "type": "warn"}, {"text" : "desktop only", "type": "danger"}]
}

]'>
</detail-list-elem>
</template>
</custom-element-demo>

