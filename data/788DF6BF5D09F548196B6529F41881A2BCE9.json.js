GS.dataCache['788DF6BF5D09F548196B6529F41881A2BCE9'] = {
    "uid": "788DF6BF5D09F548196B6529F41881A2BCE9",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Language Menu",
        "type": "vn.scene",
        "parentId": "0680E2763533F740B54A6C139E537CF59C20",
        "chapterUid": "0680E2763533F740B54A6C139E537CF59C20",
        "order": 5,
        "commands": [
            {
                "id": "gs.Comment",
                "params": {
                    "text": "This is where we will make the language selection menu. We will use an image-map to keep things as simple as possible. Feel free to make it more dynamic and/or animated by using pictures, videos, hotspots, etc.\n\nWe use the Set Game Data command with \"Language - Code\" which sets the current language by it's code. So if the English hotspot gets clicked, we jump to \"english\" label and set \"en_US\" as code to select english. If Japanese is clicked we jump to \"japanese\" and set the code to \"jp\" to select japanese."
                },
                "indent": 0,
                "uid": "637094C22DCC904B938821D3B420A5EE139C",
                "expanded": true
            },
            {
                "id": "gs.ShowImageMap",
                "params": {
                    "number": 100,
                    "hotspots": [
                        {
                            "x": 833,
                            "y": 256,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 525,
                                "y": 304,
                                "width": 213,
                                "height": 74,
                                "action": 1,
                                "label": "english",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54"
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 213,
                                "height": 74
                            }
                        },
                        {
                            "x": 833,
                            "y": 328,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 527,
                                "y": 379,
                                "width": 208,
                                "height": 82,
                                "action": 1,
                                "label": "japanese",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54"
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 229,
                                "height": 69
                            }
                        }
                    ],
                    "ground": {
                        "name": "languagescreen_idle",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "hover": {
                        "name": "languagescreen_hover",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "unselected": null,
                    "selected": null,
                    "selectedHover": null,
                    "duration": 30,
                    "origin": 0,
                    "waitForCompletion": 1,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "blendMode": 0,
                    "zOrder": 0,
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "fieldFlags": {
                        "easing.type": 1,
                        "animation.type": 0,
                        "zOrder": 1,
                        "blendMode": 1
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "8312DC446CEB294C9A8A2F503B1D3E0CA05A",
                "expanded": false
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "english"
                },
                "indent": 0,
                "uid": "71B5F0A217370440C19B77D1DAE68E869CDF"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 20,
                    "numberValue": 0,
                    "textValue": "en_US",
                    "switchValue": 0
                },
                "indent": 0,
                "uid": "0770535E12DCD3430C7A62D6E4A8D9E1EF93"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "96EB6CA99CCFF94DE04917C216F085E8E747",
                        "name": "Title Screen"
                    },
                    "savePrevious": 0,
                    "duration": 20,
                    "erasePictures": 1,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "1E402B1489540942D47BE7881CCAE78F4937",
                "expanded": false
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "japanese"
                },
                "indent": 0,
                "uid": "B3AF3F9711B700438D4B3443CEFDFCE08760"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 20,
                    "numberValue": 0,
                    "textValue": "jp",
                    "switchValue": 0
                },
                "indent": 0,
                "uid": "3A5838DF3A6D1846E74A792868A0C85AC969"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "96EB6CA99CCFF94DE04917C216F085E8E747",
                        "name": "Title Screen"
                    },
                    "savePrevious": 0,
                    "duration": 20,
                    "erasePictures": 1,
                    "eraseTexts": 1,
                    "eraseVideos": 1,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "018691ED6C88E64DD23ABFA995E1A7A48468",
                "expanded": false
            }
        ],
        "livePreviewDisabled": false,
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "localizableStrings": {},
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ]
}