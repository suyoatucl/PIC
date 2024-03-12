GS.dataCache['2379347586025344D738BEE5A39A37A44990'] = {
    "uid": "2379347586025344D738BEE5A39A37A44990",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Confirm",
        "type": "data_record",
        "order": 2,
        "category": "commonEvents",
        "id": "2379347586025344D738BEE5A39A37A44990",
        "isFolder": false,
        "parentId": "677243CC39A690411E097A987D96083D4045",
        "data": {
            "name": "Confirm",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [
                {
                    "label": "Message Image",
                    "type": 3,
                    "stringVariable": {
                        "name": "Message",
                        "index": 0,
                        "scope": 0
                    },
                    "stringValueType": "Graphics/Pictures"
                },
                {
                    "label": "Action",
                    "type": 3,
                    "stringVariable": {
                        "name": "Action",
                        "index": 1,
                        "scope": 0,
                        "domain": ""
                    },
                    "stringValueType": "commonEvents",
                    "numberVariable": {
                        "name": "Action",
                        "index": 0,
                        "scope": 0
                    },
                    "numberValueType": "commonEvents"
                },
                {
                    "label": "Store in",
                    "type": 1,
                    "numberVariable": {
                        "name": "Store Result in",
                        "index": 1,
                        "scope": 0
                    },
                    "numberValueType": "number"
                }
            ],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "This common event allows to show different kind of confirmation boxes to the user like \"Do you want to load?\" or \"Back to Title?\". It takes three parameters:\n\nMessage Image - The name of the image containing the box + message to display\nAction - The ID of the common event to call if \"Yes\" has been selected\nStore in - The number of a global number variable where the result (Yes or No, 1 or 0) is stored in.\n\nBelow are 2 \"Show Picture\" commands which are a little bit shifted to the right. Since there is no condition or loop command above, it means that these 4 commands are skipped and not executed. But they are still processed by the resource-preloader. In VN Maker, if you calculate picture file names by variable, like in this common event, you have to make sure the possible image resources are loaded, otherwise the picture is not displayed correct. So with these 2 commands we make sure that all 2 images: Prompt_Confirm_SaveLoad, Prompt_Quit are preloaded.\n\nNext we show black-transparent quad above the scene using \"Show Picture\" with \"Visual Type\" set to \"Quad\". After that we add a transparent hotspot over the entire screen. That is to avoid that the user can interact with any other UI elements in the background since the hotspot catches all mouse-clicks. Next we use \"Show Picture\" again to show the image stored in the local text variable 0001 \"Message\" which is passed as a parameter. After that, two additional pictures are following to display the Yes and No text and also two hotspots to executes an action if yes or no has been clicked.\n\nIf \"Yes\" has been clicked, we jump the label \"yes\" and call the common event stored in the local number variable \"0001 Action\" which is passed as a parameter too. After that call we kill this common event using \"End Common Event\".\n\nIf \"No\" has been clicked, we just erase the confirmation box and do nothing.\n\nIn both cases we also set the \"Store Result in\" variable, which is a Reference to another variable, to 1(Yes) or 0(No) so the result can be evaluated outside of this common event too."
                    },
                    "indent": 0,
                    "uid": "A7B35E1761FB5542AB6AAD71B75AA77831DA",
                    "expanded": true
                },
                {
                    "id": "gs.ShowPicture",
                    "params": {
                        "viewport": {
                            "type": "ui"
                        },
                        "size": {
                            "type": 0,
                            "width": 100,
                            "height": 100
                        },
                        "visual": {
                            "type": 0,
                            "quad": {
                                "color": {
                                    "red": 255,
                                    "green": 255,
                                    "blue": 255,
                                    "alpha": 255
                                }
                            },
                            "frame": {
                                "thickness": 16,
                                "cornerSize": 16
                            },
                            "threePartImage": {
                                "orientation": 0
                            }
                        },
                        "predefinedPositionId": 0,
                        "number": 0,
                        "blendMode": 0,
                        "zOrder": 0,
                        "duration": 0,
                        "origin": 0,
                        "waitForCompletion": 0,
                        "positionType": 0,
                        "position": {
                            "x": 0,
                            "y": 0
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 0,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 1,
                            "origin": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "graphic": {
                            "name": "Prompt_Confirm_SaveLoad",
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
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 1,
                    "uid": "AB588AC14E968346904A68A2222734813D0B"
                },
                {
                    "id": "gs.ShowPicture",
                    "params": {
                        "viewport": {
                            "type": "ui"
                        },
                        "size": {
                            "type": 0,
                            "width": 100,
                            "height": 100
                        },
                        "visual": {
                            "type": 0,
                            "quad": {
                                "color": {
                                    "red": 255,
                                    "green": 255,
                                    "blue": 255,
                                    "alpha": 255
                                }
                            },
                            "frame": {
                                "thickness": 16,
                                "cornerSize": 16
                            },
                            "threePartImage": {
                                "orientation": 0
                            }
                        },
                        "predefinedPositionId": 0,
                        "number": 0,
                        "blendMode": 0,
                        "zOrder": 0,
                        "duration": 0,
                        "origin": 0,
                        "waitForCompletion": 0,
                        "positionType": 0,
                        "position": {
                            "x": 0,
                            "y": 0
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 0,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 1,
                            "origin": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "graphic": {
                            "name": "Prompt_Quit",
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
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 1,
                    "uid": "33C27B6A5D56414A483930736AF4A0330940"
                },
                {
                    "id": "gs.ShowPicture",
                    "params": {
                        "viewport": {
                            "type": "ui"
                        },
                        "size": {
                            "type": 1,
                            "width": 1280,
                            "height": 720
                        },
                        "visual": {
                            "type": 4,
                            "quad": {
                                "color": {
                                    "red": 156,
                                    "green": 87,
                                    "blue": 0,
                                    "alpha": 160
                                }
                            },
                            "frame": {
                                "thickness": 16,
                                "cornerSize": 16
                            },
                            "threePartImage": {
                                "orientation": 0
                            }
                        },
                        "predefinedPositionId": 0,
                        "number": 10,
                        "blendMode": 0,
                        "zOrder": 10000,
                        "duration": 0,
                        "origin": 0,
                        "waitForCompletion": 0,
                        "positionType": 0,
                        "position": {
                            "x": 0,
                            "y": 0
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 1,
                            "easing.type": 1,
                            "animation.type": 0,
                            "zOrder": 0,
                            "blendMode": 1,
                            "visual.type": 0,
                            "visual.frame.thickness": 1,
                            "visual.frame.cornerSize": 1,
                            "visual.threePartImage.orientation": 1,
                            "visual.quad.color": 0,
                            "size.type": 0,
                            "size.width": 0,
                            "size.height": 0,
                            "viewport.type": 1,
                            "origin": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "71E1085F5C233741ED7A4B88D1E9F60E92DC",
                    "expanded": true
                },
                {
                    "id": "gs.AddHotspot",
                    "params": {
                        "shape": "rect",
                        "positionType": 1,
                        "actions": {
                            "onClick": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            },
                            "onEnter": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            },
                            "onSelect": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            },
                            "onDeselect": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            },
                            "onLeave": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            },
                            "onDrag": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            }
                        },
                        "dragging": {
                            "enabled": 0,
                            "variable": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "horizontal": 1,
                            "vertical": 0,
                            "rect": {
                                "x": 0,
                                "y": 0,
                                "size": {
                                    "width": 200,
                                    "height": 50
                                }
                            }
                        },
                        "position": 1,
                        "box": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "number": 9,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "832EA99D351A13415578B596FCF7B4DBC00A",
                    "expanded": false
                },
                {
                    "id": "gs.ShowPicture",
                    "params": {
                        "viewport": {
                            "type": "ui"
                        },
                        "size": {
                            "type": 0,
                            "width": 100,
                            "height": 100
                        },
                        "visual": {
                            "type": 0,
                            "quad": {
                                "color": {
                                    "red": 255,
                                    "green": 255,
                                    "blue": 255,
                                    "alpha": 255
                                }
                            },
                            "frame": {
                                "thickness": 16,
                                "cornerSize": 16
                            },
                            "threePartImage": {
                                "orientation": 0
                            }
                        },
                        "predefinedPositionId": 8,
                        "number": 11,
                        "blendMode": 0,
                        "zOrder": 10000,
                        "duration": 0,
                        "origin": 0,
                        "waitForCompletion": 0,
                        "positionType": 0,
                        "position": {
                            "x": 329,
                            "y": 219,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {},
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 0
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 1,
                            "easing.type": 1,
                            "animation.type": 0,
                            "zOrder": 0,
                            "blendMode": 1,
                            "visual.type": 1,
                            "visual.frame.thickness": 1,
                            "visual.frame.cornerSize": 1,
                            "visual.threePartImage.orientation": 1,
                            "visual.quad.color": 1,
                            "size.type": 1,
                            "size.width": 1,
                            "size.height": 1,
                            "viewport.type": 1,
                            "origin": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "graphic": {
                            "name": "Message",
                            "index": 0,
                            "scope": 0
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "BC7E6EC839BC25441F4A0871A3BAF901044B",
                    "expanded": false
                },
                {
                    "id": "gs.ShowPicture",
                    "params": {
                        "viewport": {
                            "type": "ui"
                        },
                        "size": {
                            "type": 0,
                            "width": 100,
                            "height": 100
                        },
                        "visual": {
                            "type": 0,
                            "quad": {
                                "color": {
                                    "red": 255,
                                    "green": 255,
                                    "blue": 255,
                                    "alpha": 255
                                }
                            },
                            "frame": {
                                "thickness": 16,
                                "cornerSize": 16
                            },
                            "threePartImage": {
                                "orientation": 0
                            }
                        },
                        "predefinedPositionId": 0,
                        "number": 12,
                        "blendMode": 0,
                        "zOrder": 10000,
                        "duration": 0,
                        "origin": 0,
                        "waitForCompletion": 0,
                        "positionType": 1,
                        "position": {
                            "x": 428,
                            "y": 394,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {},
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 0
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 1,
                            "easing.type": 1,
                            "animation.type": 0,
                            "zOrder": 0,
                            "blendMode": 1,
                            "visual.type": 1,
                            "visual.frame.thickness": 1,
                            "visual.frame.cornerSize": 1,
                            "visual.threePartImage.orientation": 1,
                            "visual.quad.color": 1,
                            "size.type": 1,
                            "size.width": 1,
                            "size.height": 1,
                            "viewport.type": 1,
                            "origin": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "graphic": {
                            "name": "Prompt_Yes_Idle",
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
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "D26228A387FD384B418ACDC59830CD6B9CAE",
                    "expanded": false
                },
                {
                    "id": "gs.ShowPicture",
                    "params": {
                        "viewport": {
                            "type": "ui"
                        },
                        "size": {
                            "type": 0,
                            "width": 100,
                            "height": 100
                        },
                        "visual": {
                            "type": 0,
                            "quad": {
                                "color": {
                                    "red": 255,
                                    "green": 255,
                                    "blue": 255,
                                    "alpha": 255
                                }
                            },
                            "frame": {
                                "thickness": 16,
                                "cornerSize": 16
                            },
                            "threePartImage": {
                                "orientation": 0
                            }
                        },
                        "predefinedPositionId": 0,
                        "number": 13,
                        "blendMode": 0,
                        "zOrder": 10000,
                        "duration": 0,
                        "origin": 0,
                        "waitForCompletion": 0,
                        "positionType": 1,
                        "position": {
                            "x": 702,
                            "y": 396,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {},
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 0
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 1,
                            "easing.type": 1,
                            "animation.type": 0,
                            "zOrder": 0,
                            "blendMode": 1,
                            "visual.type": 1,
                            "visual.frame.thickness": 1,
                            "visual.frame.cornerSize": 1,
                            "visual.threePartImage.orientation": 1,
                            "visual.quad.color": 1,
                            "size.type": 1,
                            "size.width": 1,
                            "size.height": 1,
                            "viewport.type": 1,
                            "origin": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "graphic": {
                            "name": "Prompt_No_Idle",
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
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "98A3EE1B6E901245419AF6808CDA8253D2A5",
                    "expanded": false
                },
                {
                    "id": "gs.AddHotspot",
                    "params": {
                        "shape": "rect",
                        "positionType": 2,
                        "actions": {
                            "onClick": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "yes",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            },
                            "onEnter": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            },
                            "onSelect": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            },
                            "onDeselect": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            },
                            "onLeave": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            },
                            "onDrag": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            }
                        },
                        "dragging": {
                            "enabled": 0,
                            "variable": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "horizontal": 1,
                            "vertical": 0,
                            "rect": {
                                "x": 0,
                                "y": 0,
                                "size": {
                                    "width": 200,
                                    "height": 50
                                }
                            }
                        },
                        "position": 1,
                        "box": {
                            "x": 537,
                            "y": 391,
                            "angle": 0,
                            "zoom": 1,
                            "data": {},
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 64,
                                "height": 60
                            }
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "hoverGraphic": {
                            "name": "Prompt_Yes_Hover",
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
                        "pictureNumber": 12,
                        "number": 10,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "A05ECF8F1A44E14E404A6D4339DC2659F549",
                    "expanded": true
                },
                {
                    "id": "gs.AddHotspot",
                    "params": {
                        "shape": "rect",
                        "positionType": 2,
                        "actions": {
                            "onClick": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "no",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            },
                            "onEnter": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            },
                            "onSelect": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            },
                            "onDeselect": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            },
                            "onLeave": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            },
                            "onDrag": {
                                "type": 0,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null
                            }
                        },
                        "dragging": {
                            "enabled": 0,
                            "variable": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "horizontal": 1,
                            "vertical": 0,
                            "rect": {
                                "x": 0,
                                "y": 0,
                                "size": {
                                    "width": 200,
                                    "height": 50
                                }
                            }
                        },
                        "position": 1,
                        "box": {
                            "x": 684,
                            "y": 390,
                            "angle": 0,
                            "zoom": 1,
                            "data": {},
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 74,
                                "height": 45
                            }
                        },
                        "number": 11,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "hoverGraphic": {
                            "name": "Prompt_No_Hover",
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
                        "pictureNumber": 13,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "2620A90E817892459F4BE637677D11E81B48",
                    "expanded": true
                },
                {
                    "id": "gs.Idle",
                    "params": {},
                    "indent": 0,
                    "uid": "2F700AE1795A1340551A2910276CB6AF4450"
                },
                {
                    "id": "gs.Label",
                    "params": {
                        "name": "yes"
                    },
                    "indent": 0,
                    "uid": "A332F5575495A2416F3A5DA120625E81AB15"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 2,
                        "targetVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 1,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "name": "Store Result in",
                            "index": 1,
                            "scope": 0
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": 1,
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "sourceReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "1906E73179A0764EA43B64838E7E4EA09D0E"
                },
                {
                    "id": "gs.CallCommonEvent",
                    "params": {
                        "commonEventId": {
                            "name": "Action",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "parameters": {
                            "values": [
                                {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                }
                            ]
                        }
                    },
                    "indent": 0,
                    "uid": "51795A963D8B60475F2AA238A79F9FA64CD9"
                },
                {
                    "id": "gs.JumpToLabel",
                    "params": {
                        "name": "erase",
                        "target": 0
                    },
                    "indent": 0,
                    "uid": "AFCA440C12E34147660AD4A12BC2B5875689"
                },
                {
                    "id": "gs.Label",
                    "params": {
                        "name": "no"
                    },
                    "indent": 0,
                    "uid": "57F152515FE4B44E3148DEB9A98F26AEA55A"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 2,
                        "targetVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 1,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "name": "Store Result in",
                            "index": 1,
                            "scope": 0
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": 0,
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "sourceReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "4041E6AC03B39242B14BE8B61C60E2846F50"
                },
                {
                    "id": "gs.Label",
                    "params": {
                        "name": "erase"
                    },
                    "indent": 0,
                    "uid": "404A8FAC7D61D1411349EA3886B766D679D7"
                },
                {
                    "id": "gs.EraseHotspot",
                    "params": {
                        "number": 10,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "8E78BB67779FD746369B6C62E87102277C7A"
                },
                {
                    "id": "gs.EraseHotspot",
                    "params": {
                        "number": 11,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "5B07AE809256C8435789E668898CE2E3F720"
                },
                {
                    "id": "gs.ErasePicture",
                    "params": {
                        "number": 10,
                        "duration": 0,
                        "waitForCompletion": 0,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 1,
                            "easing.type": 1,
                            "animation.type": 0
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "6C32BB5051457243CA4A7BD254AF55481BFB",
                    "expanded": false
                },
                {
                    "id": "gs.ErasePicture",
                    "params": {
                        "number": 11,
                        "duration": 0,
                        "waitForCompletion": 0,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 1,
                            "easing.type": 1,
                            "animation.type": 0
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "B542388C27E63044547ACB2767E37115F9CC",
                    "expanded": false
                },
                {
                    "id": "gs.ErasePicture",
                    "params": {
                        "number": 12,
                        "duration": 0,
                        "waitForCompletion": 0,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 1,
                            "easing.type": 1,
                            "animation.type": 0
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "53F5F56529F5A648F48B25F877E62BBF87A7",
                    "expanded": false
                },
                {
                    "id": "gs.ErasePicture",
                    "params": {
                        "number": 13,
                        "duration": 0,
                        "waitForCompletion": 1,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 1,
                            "easing.type": 1,
                            "animation.type": 0
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "4C1A23DA107E0744638B8DC887E112029F7B",
                    "expanded": false
                },
                {
                    "id": "gs.EraseHotspot",
                    "params": {
                        "number": 9,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "23D7C2D28701C946777B2CA7A0F10F21F140"
                },
                {
                    "id": "gs.EndCommonEvent",
                    "params": {
                        "commonEventId": "2379347586025344D738BEE5A39A37A44990"
                    },
                    "indent": 0,
                    "uid": "809CC0955CE8D34A6219FE17E98CA76C9A01"
                }
            ],
            "index": "2379347586025344D738BEE5A39A37A44990",
            "booleanVariables": [
                {
                    "name": "Result",
                    "index": 0,
                    "scope": 0
                }
            ],
            "stringVariables": [
                {
                    "name": "Message",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Action",
                    "index": 1,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                }
            ],
            "numberVariables": [
                {
                    "name": "Action",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Store Result in",
                    "index": 1,
                    "scope": 0
                }
            ],
            "listVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "defaultExpressionId": "BF7CB12110894142C299D341A545C910AA86"
        },
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "order"
    ]
}