# Detail-list-elem
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/owner/my-element)

Webcomponent for customized list with item name, item details, item image and tags.

![screenshot](https://github.com/RameezAijaz/detail-list-elem/blob/master/screenshots/screenshot.png?raw=true "screenshot")

## Demo
https://detail-list-elem-demo.firebaseapp.com/

## Install
Run ```npm i --save detail-list-elem``` inside your project

## Usage
1. Import ``webcomponent polyfill`` in ``index.html`` using

    ```html 
    <script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
    ```
2. Import ``detail-list-elem `` 

    ```html 
    <script src="node_modules/detail-list-elem/index.js"></script>
    ```
3. Use ``detail-list-elem `` like
    ```html
    <detail-list-elem items='[
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
    ```
## Options
<b>detail-list-elem</b> takes items array with one or more following item objects:
```json

      {
        "title": {
            "text": "Title of Item",
            "url": "https://www.google.com",  //optional
            "target": "_blank",   //optional
            "style": "css properties to be applied on title"   //optional
            
            },
        "description": {
            "text": "Description of Item",
            "style": "css properties to be applied on description"   //optional
          
          },
        "img": {
            "src": "file path or url of image",
            "style": "css properties to be applied on img element"   //optional
        },
        "tags": [
              {
                "text" : "name of tag",
                "style": "css properties to be applied on a tag",  //optional
                "type": "warn" //optional, its 'success' by default
               //type can be 'warn' , 'danger', 'info' or 'success'
               //if you want to use some other tag type then use style to apply custom style on tag
                
              }
          
          ]
        
       }
```
