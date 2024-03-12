GS.dataCache['87C691AD6DF5C84BCF1A8CC5E61FDD36119E'] = {
    "uid": "87C691AD6DF5C84BCF1A8CC5E61FDD36119E",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Show Choices",
        "type": "data_record",
        "order": 0,
        "category": "commonEvents",
        "id": "87C691AD6DF5C84BCF1A8CC5E61FDD36119E",
        "isFolder": false,
        "parentId": "F26220389226014E955B8907DC7C1FEBEF5E",
        "data": {
            "name": "Show Choices",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": false,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "This common event shows all choices which have been added via Add Choice common event. The action of the choice will be executed if the player selects the choice.\n\nDue to the dynamic nature of choices, they have been implement with pictures + hotspots. You need to change the following pictures for customization:\n\nChoice_Active\nChoice_Idle\nChoice_Locked\n\nIn addition you maybe need to edit the choice text-display as well. See the comments more below."
                    },
                    "indent": 0,
                    "uid": "F41B0F624EB519450A3A56938DDA13F424D9",
                    "expanded": true
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Choice Index",
                            "index": 0,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "8B4E4E946D64784EF31BC348FF6B0704703A"
                },
                {
                    "id": "gs.ListLength",
                    "params": {
                        "listVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Number of Choices",
                            "index": 1,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "B2C7F0D71E59274BE93A6B36B42C9A1CC9D1"
                },
                {
                    "id": "gs.LoopCommand",
                    "params": {},
                    "indent": 0,
                    "uid": "69B183D06F68D3483C79ECA4D75B9FF7204B"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Picture Number",
                            "index": 2,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": 200,
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
                    "indent": 1,
                    "uid": "BEF40C539BE2674F37682CC9100127B2EDB9"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Picture Number",
                            "index": 2,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 1,
                        "source": 0,
                        "sourceValue": {
                            "name": "Choice Index",
                            "index": 0,
                            "scope": 0
                        },
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
                    "indent": 1,
                    "uid": "0225CEBB2FFFE442B55A3A47AA0ADA935141"
                },
                {
                    "id": "gs.ListValueAt",
                    "params": {
                        "valueType": 2,
                        "index": {
                            "name": "Choice Index",
                            "index": 0,
                            "scope": 0
                        },
                        "listVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Choice Text",
                            "index": 0,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "D36AC4C6079EC742AA386261711F57E41284"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Picture Y",
                            "index": 3,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": 118,
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
                    "indent": 1,
                    "uid": "2F4A42537472A1426C6A9F46772F72F07E83"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Picture Y",
                            "index": 3,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 3,
                        "source": 0,
                        "sourceValue": {
                            "name": "Choice Index",
                            "index": 0,
                            "scope": 0
                        },
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
                    "indent": 1,
                    "uid": "9721F04D98D5A34ADF2B5392C99264349368"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Picture Y",
                            "index": 3,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 1,
                        "source": 0,
                        "sourceValue": 100,
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
                    "indent": 1,
                    "uid": "C09DC6B18361B745222A92B6E74E38E4174C"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Text Y",
                            "index": 4,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "Picture Y",
                            "index": 3,
                            "scope": 0
                        },
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
                    "indent": 1,
                    "uid": "8FA3AA271EDE484F56587B612984174315A4"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Text Y",
                            "index": 4,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 1,
                        "source": 0,
                        "sourceValue": 43,
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
                    "indent": 1,
                    "uid": "35DE20128C97664D5919C8A6F6DF6516A84F"
                },
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here we are showing the choice background image. "
                    },
                    "indent": 1,
                    "uid": "432856E27A7CA2416D3A9A715C0051B6DB6D",
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
                        "number": {
                            "name": "Picture Number",
                            "index": 2,
                            "scope": 0
                        },
                        "blendMode": 0,
                        "zOrder": 0,
                        "duration": 0,
                        "origin": 0,
                        "waitForCompletion": 0,
                        "positionType": 2,
                        "position": {
                            "x": 170,
                            "y": {
                                "name": "Picture Y",
                                "index": 3,
                                "scope": 0
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
                            "origin": 1,
                            "duration": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "graphic": {
                            "name": "Choice_Idle",
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
                    "uid": "D84EBAE777FBC54AEE99AFB30E1C91358478"
                },
                {
                    "id": "gs.AddHotspot",
                    "params": {
                        "shape": "rect",
                        "positionType": 2,
                        "actions": {
                            "onClick": {
                                "type": 4,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                                "label": "choice_select",
                                "switch": {
                                    "scope": 1,
                                    "index": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "scene": null,
                                "bindValueVariable": {
                                    "name": "Choice Index",
                                    "index": 0,
                                    "scope": 0
                                },
                                "bindValue": {
                                    "name": "Choice Index",
                                    "index": 0,
                                    "scope": 0
                                }
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
                            "x": 170,
                            "y": {
                                "name": "Picture Y",
                                "index": 3,
                                "scope": 0
                            },
                            "size": {
                                "width": 931,
                                "height": 118
                            }
                        },
                        "pictureNumber": {
                            "name": "Picture Number",
                            "index": 2,
                            "scope": 0
                        },
                        "number": {
                            "name": "Picture Number",
                            "index": 2,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "hoverGraphic": {
                            "name": "Choice_Active",
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
                        "selectedHoverGraphic": {
                            "name": "Choice_Active",
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
                    "uid": "95749D8C833BC34D4F49A0910F82747405FC",
                    "expanded": true
                },
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here we show the choice text. You can edit the text positioning, font-style, etc. here."
                    },
                    "indent": 1,
                    "uid": "46AD688040CFA34E507A27D5EBE0E13F00A1",
                    "expanded": true
                },
                {
                    "id": "gs.ChangeTextSettings",
                    "params": {
                        "number": {
                            "name": "Picture Number",
                            "index": 2,
                            "scope": 0
                        },
                        "padding": [
                            6,
                            0,
                            6,
                            0
                        ],
                        "font": "Times New Roman",
                        "size": 40,
                        "outline": 0,
                        "shadow": 1,
                        "outlineColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "shadowColor": {
                            "red": 86,
                            "green": 86,
                            "blue": 86,
                            "alpha": 255
                        },
                        "fieldFlags": {
                            "font": 0,
                            "size": 1,
                            "outline": 1,
                            "outlineColor": 1,
                            "shadow": 0,
                            "shadowColor": 0,
                            "padding.0": 1,
                            "padding.1": 1,
                            "padding.2": 1,
                            "padding.3": 1,
                            "lineSpacing": 1,
                            "outlineSize": 1,
                            "shadowOffsetX": 1,
                            "shadowOffsetY": 1,
                            "bold": 1,
                            "italic": 1,
                            "underline": 1,
                            "smallCaps": 1,
                            "strikeThrough": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "lineSpacing": 0,
                        "outlineSize": 4,
                        "shadowOffsetX": 1,
                        "shadowOffsetY": 1,
                        "bold": 0,
                        "italic": 0,
                        "underline": 0,
                        "smallCaps": 0,
                        "strikeThrough": 0,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 1,
                    "uid": "A7119F6C5E5AC14DAA4A7E27757593417503",
                    "expanded": false
                },
                {
                    "id": "gs.ShowText",
                    "params": {
                        "viewport": {
                            "type": "ui"
                        },
                        "predefinedPositionId": 0,
                        "positionType": 1,
                        "number": {
                            "name": "Picture Number",
                            "index": 2,
                            "scope": 0
                        },
                        "duration": 0,
                        "waitForCompletion": 0,
                        "blendMode": 0,
                        "origin": 0,
                        "zOrder": 0,
                        "text": {
                            "lcId": "518DF5DF718C874FDF5968A8845477489130",
                            "defaultText": "{C:2}{Y:I}{LT:1}"
                        },
                        "position": {
                            "x": 640,
                            "y": {
                                "name": "Text Y",
                                "index": 4,
                                "scope": 0
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
                            "animation.type": 1,
                            "origin": 1,
                            "zOrder": 1,
                            "blendMode": 1,
                            "viewport.type": 1,
                            "positionOrigin": 0
                        },
                        "expressions": [],
                        "animations": [],
                        "positionOrigin": 1,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 1,
                    "uid": "FEE382207589A44B923A7CF23E88FD32EB75",
                    "expanded": false
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Choice Index",
                            "index": 0,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 1,
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
                    "indent": 1,
                    "uid": "A88933D1604F7743138B99261564A9D6157C"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Choice Index",
                            "index": 0,
                            "scope": 0
                        },
                        "numberValue": {
                            "name": "Number of Choices",
                            "index": 1,
                            "scope": 0
                        },
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "1F24C8254FB67747BD983D28EBF8431D8F9B"
                },
                {
                    "id": "gs.BreakLoopCommand",
                    "params": {},
                    "indent": 2,
                    "uid": "759EF8D990A3874C899B3A443B6C18835E6C"
                },
                {
                    "id": "gs.Idle",
                    "params": {},
                    "indent": 0,
                    "uid": "476EED60202CB74E8F589E275FE4C60E26B3"
                },
                {
                    "id": "gs.Label",
                    "params": {
                        "name": "choice_select"
                    },
                    "indent": 0,
                    "uid": "ADA56D08210BE243844973791F8D92044D43"
                },
                {
                    "id": "gs.ListValueAt",
                    "params": {
                        "valueType": 2,
                        "index": {
                            "name": "Choice Index",
                            "index": 0,
                            "scope": 0
                        },
                        "listVariable": {
                            "name": "Choice Actions",
                            "index": 1,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Choice Action",
                            "index": 1,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "C38612BB8E800341ED7B16458FC930708653"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Choice Index",
                            "index": 0,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "2EB802C31C295341FB2A7798F37DCFE0A518"
                },
                {
                    "id": "gs.LoopCommand",
                    "params": {},
                    "indent": 0,
                    "uid": "740701CE72DA344E205878F800687F454282"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Picture Number",
                            "index": 2,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": 200,
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
                    "indent": 1,
                    "uid": "765753C34ACE9345DE4BB0D4C3C1718BEBA8"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Picture Number",
                            "index": 2,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 1,
                        "source": 0,
                        "sourceValue": {
                            "name": "Choice Index",
                            "index": 0,
                            "scope": 0
                        },
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
                    "indent": 1,
                    "uid": "42A4242A5C86974E283A33F3BB8849CA7388"
                },
                {
                    "id": "gs.ErasePicture",
                    "params": {
                        "number": {
                            "name": "Picture Number",
                            "index": 2,
                            "scope": 0
                        },
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
                            "animation.type": 1
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 1,
                    "uid": "5A6B10C378044745407ACE28B58CDA69B929",
                    "expanded": false
                },
                {
                    "id": "gs.EraseText",
                    "params": {
                        "number": {
                            "name": "Picture Number",
                            "index": 2,
                            "scope": 0
                        },
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
                            "duration": 1
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 1,
                    "uid": "9A3E071017696246B158B4727258D66B12E8"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Choice Index",
                            "index": 0,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 1,
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
                    "indent": 1,
                    "uid": "684296C77583C8458B6BA2066199B2ACB4A3"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Choice Index",
                            "index": 0,
                            "scope": 0
                        },
                        "numberValue": {
                            "name": "Number of Choices",
                            "index": 1,
                            "scope": 0
                        },
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "99DCB2B82B902348F599D4752170DFF9A5A9"
                },
                {
                    "id": "gs.BreakLoopCommand",
                    "params": {},
                    "indent": 2,
                    "uid": "BE98D4D1864A38464148DE9955029B6347D5"
                },
                {
                    "id": "gs.ListClear",
                    "params": {
                        "listVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 0,
                    "uid": "519B85BE23C4514B6E3B79769413E7DAFE12"
                },
                {
                    "id": "gs.ListClear",
                    "params": {
                        "listVariable": {
                            "name": "Choice Actions",
                            "index": 1,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "D121140C0148F24C55885E87138976A6912D"
                },
                {
                    "id": "vn.CallScene",
                    "params": {
                        "scene": {
                            "name": "Choice Action",
                            "index": 1,
                            "scope": 0
                        }
                    },
                    "indent": 0,
                    "uid": "030544CE3AE2A64E633BCB719298F964C6AF"
                }
            ],
            "index": "87C691AD6DF5C84BCF1A8CC5E61FDD36119E",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "Choice Index",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Number of Choices",
                    "index": 1,
                    "scope": 0
                },
                {
                    "name": "Picture Number",
                    "index": 2,
                    "scope": 0
                },
                {
                    "name": "Picture Y",
                    "index": 3,
                    "scope": 0
                },
                {
                    "name": "Text Y",
                    "index": 4,
                    "scope": 0
                },
                {
                    "name": "Text Width",
                    "index": 5,
                    "scope": 0
                },
                {
                    "name": "Text X",
                    "index": 6,
                    "scope": 0
                },
                {
                    "name": "Choice Action",
                    "index": 7,
                    "scope": 0
                }
            ],
            "stringVariables": [
                {
                    "name": "Choice Text",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Choice Action",
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
        "localizableStrings": {
            "518DF5DF718C874FDF5968A8845477489130": {
                "t": "{C:2}{Y:I}{LT:1}",
                "d": {
                    "eid": "FEE382207589A44B923A7CF23E88FD32EB75"
                }
            }
        }
    },
    "summary": [
        "name",
        "type",
        "order"
    ]
}