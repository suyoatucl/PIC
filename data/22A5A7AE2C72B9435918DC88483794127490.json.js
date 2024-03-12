GS.dataCache['22A5A7AE2C72B9435918DC88483794127490'] = {
    "uid": "22A5A7AE2C72B9435918DC88483794127490",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Input Number",
        "type": "data_record",
        "order": 1,
        "category": "commonEvents",
        "id": "22A5A7AE2C72B9435918DC88483794127490",
        "isFolder": false,
        "parentId": "39BD00BB65B7854FDB59F1C4A67030425DBF",
        "data": {
            "name": "Input Number",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [
                {
                    "label": "Digits",
                    "type": 1,
                    "numberVariable": {
                        "name": "Number Of Digits",
                        "index": 0,
                        "scope": 0
                    },
                    "numberValueType": "number"
                }
            ],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "This common events open an inputtnumber element which allows the player to input a number/code. It takes two parameters:\n\n- Letters - The max. number of digits allowed\n- Store in - A global number variable index where the inputted number should be stored in to access from outside the common event.\n\nThe entire input-number UI is done with just one image-map, so you only need to edit the following pictures for a custom input-text UI:\n\nNE-IDLE-STF\nNE-ACTIVE-STF\n\nAnd edit the hotspot positions in the Show Image Map command as well as the Text-Display and thats it."
                    },
                    "indent": 0,
                    "uid": "ACB1F9CE6A59384840593E3280CDC5758FE7",
                    "expanded": true
                },
                {
                    "id": "gs.ListClear",
                    "params": {
                        "listVariable": {
                            "name": "Numbers",
                            "index": 0,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "E22D42B24ABE624A66280356E9F6AE1AB738"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Current Digit",
                            "index": 1,
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
                    "uid": "FEAAEA9291B2A446466A09962A65501A8636"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Number Of Digits",
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
                        "operation": 2,
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
                    "uid": "5CD0BD749FE2164C6C3B8B07645609395095"
                },
                {
                    "id": "gs.ChangeStringVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Number Display",
                            "index": 0,
                            "scope": 0
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "operation": 0,
                        "valueType": 0,
                        "textValue": {
                            "lcId": "CFE7C4AD5ACBE146212B9294A47B6746C42E",
                            "defaultText": "0"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "D21A851C96372342C41818B24A8D65ACD580",
                    "expanded": true
                },
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "You have to edit the hotspot positions on this image-map to match with your custom number-input image."
                    },
                    "indent": 0,
                    "uid": "AFC893365E4F39413F693D210436C1444622",
                    "expanded": true
                },
                {
                    "id": "gs.ShowImageMap",
                    "params": {
                        "number": 101,
                        "hotspots": [
                            {
                                "x": 156,
                                "y": 110,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 156,
                                    "y": 110,
                                    "width": 90,
                                    "height": 90,
                                    "action": 1,
                                    "label": "process_digit",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 2,
                                    "bindValueVariable": {
                                        "name": "Digit Value",
                                        "index": 6,
                                        "scope": 0
                                    },
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
                                    "width": 90,
                                    "height": 90
                                }
                            },
                            {
                                "x": 56,
                                "y": 200,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 56,
                                    "y": 200,
                                    "width": 90,
                                    "height": 90,
                                    "action": 1,
                                    "label": "process_digit",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 4,
                                    "bindValueVariable": {
                                        "name": "Digit Value",
                                        "index": 6,
                                        "scope": 0
                                    },
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
                                    "width": 90,
                                    "height": 90
                                }
                            },
                            {
                                "x": 56,
                                "y": 288,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 56,
                                    "y": 288,
                                    "width": 90,
                                    "height": 90,
                                    "action": 1,
                                    "label": "process_digit",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 7,
                                    "bindValueVariable": {
                                        "name": "Digit Value",
                                        "index": 6,
                                        "scope": 0
                                    },
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
                                    "width": 90,
                                    "height": 90
                                }
                            },
                            {
                                "x": 56,
                                "y": 378,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 56,
                                    "y": 378,
                                    "width": 90,
                                    "height": 90,
                                    "action": 1,
                                    "label": "delete",
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
                                    "width": 90,
                                    "height": 90
                                }
                            },
                            {
                                "x": 56,
                                "y": 110,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 56,
                                    "y": 110,
                                    "width": 90,
                                    "height": 90,
                                    "action": 1,
                                    "label": "process_digit",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 1,
                                    "bindValueVariable": {
                                        "name": "Digit Value",
                                        "index": 6,
                                        "scope": 0
                                    },
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
                                    "width": 90,
                                    "height": 90
                                }
                            },
                            {
                                "x": 156,
                                "y": 200,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 156,
                                    "y": 200,
                                    "width": 90,
                                    "height": 90,
                                    "action": 1,
                                    "label": "process_digit",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 5,
                                    "bindValueVariable": {
                                        "name": "Digit Value",
                                        "index": 6,
                                        "scope": 0
                                    },
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
                                    "width": 90,
                                    "height": 90
                                }
                            },
                            {
                                "x": 156,
                                "y": 380,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 156,
                                    "y": 380,
                                    "width": 90,
                                    "height": 90,
                                    "action": 1,
                                    "label": "process_digit",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 0,
                                    "bindValueVariable": {
                                        "name": "Digit Value",
                                        "index": 6,
                                        "scope": 0
                                    },
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
                                    "width": 90,
                                    "height": 90
                                }
                            },
                            {
                                "x": 156,
                                "y": 290,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 156,
                                    "y": 290,
                                    "width": 90,
                                    "height": 90,
                                    "action": 1,
                                    "label": "process_digit",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 8,
                                    "bindValueVariable": {
                                        "name": "Digit Value",
                                        "index": 6,
                                        "scope": 0
                                    },
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
                                    "width": 90,
                                    "height": 90
                                }
                            },
                            {
                                "x": 258,
                                "y": 201,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 258,
                                    "y": 201,
                                    "width": 90,
                                    "height": 90,
                                    "action": 1,
                                    "label": "process_digit",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 6,
                                    "bindValueVariable": {
                                        "name": "Digit Value",
                                        "index": 6,
                                        "scope": 0
                                    },
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
                                    "width": 90,
                                    "height": 90
                                }
                            },
                            {
                                "x": 258,
                                "y": 111,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 258,
                                    "y": 111,
                                    "width": 90,
                                    "height": 90,
                                    "action": 1,
                                    "label": "process_digit",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 3,
                                    "bindValueVariable": {
                                        "name": "Digit Value",
                                        "index": 6,
                                        "scope": 0
                                    },
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
                                    "width": 90,
                                    "height": 90
                                }
                            },
                            {
                                "x": 259,
                                "y": 291,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 259,
                                    "y": 291,
                                    "width": 90,
                                    "height": 90,
                                    "action": 1,
                                    "label": "process_digit",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 9,
                                    "bindValueVariable": {
                                        "name": "Digit Value",
                                        "index": 6,
                                        "scope": 0
                                    },
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
                                    "width": 90,
                                    "height": 90
                                }
                            },
                            {
                                "x": 258,
                                "y": 381,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 258,
                                    "y": 381,
                                    "width": 90,
                                    "height": 90,
                                    "action": 1,
                                    "label": "end",
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
                                    "width": 90,
                                    "height": 90
                                }
                            }
                        ],
                        "predefinedPositionId": 0,
                        "ground": {
                            "name": "NE-IDLE-STF",
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
                            "name": "NE-ACTIVE-STF",
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
                        "waitForCompletion": 0,
                        "positionType": 2,
                        "position": {
                            "x": 438,
                            "y": 0
                        },
                        "easing": {
                            "type": 3,
                            "inOut": 0
                        },
                        "blendMode": 0,
                        "zOrder": 0,
                        "animation": {
                            "type": 0,
                            "movement": 3,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "easing.type": 0,
                            "animation.type": 0,
                            "origin": 1,
                            "zOrder": 1,
                            "blendMode": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "expanded": true,
                    "uid": "0A209A0B45815543423B2C91E2F06F595459"
                },
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here you can edit the two commands below to change the position, font, etc. of the Number-Display. The Number-Display shows the current number inputted by the player."
                    },
                    "indent": 0,
                    "uid": "E899C33768BCE342FE090908AA9E2B193C09",
                    "expanded": true
                },
                {
                    "id": "gs.ChangeTextSettings",
                    "params": {
                        "number": 300,
                        "padding": [
                            6,
                            0,
                            6,
                            0
                        ],
                        "font": "Rubik-Regular",
                        "size": 60,
                        "outline": 0,
                        "shadow": 1,
                        "outlineColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "shadowColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "fieldFlags": {
                            "font": 0,
                            "size": 0,
                            "outline": 1,
                            "outlineColor": 1,
                            "shadow": 0,
                            "shadowColor": 1,
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
                    "indent": 0,
                    "uid": "B25BA12A29150543C538BEC85884D8217721",
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
                        "number": 300,
                        "duration": 0,
                        "waitForCompletion": 0,
                        "blendMode": 0,
                        "origin": 0,
                        "zOrder": 0,
                        "text": {
                            "lcId": "D3BB596C63C546407F885FF285756FFBEF18",
                            "defaultText": "{LT:1}"
                        },
                        "position": {
                            "x": 738,
                            "y": 28
                        },
                        "easing": {
                            "type": 3,
                            "inOut": 0
                        },
                        "animation": {
                            "type": 0,
                            "movement": 3,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 1,
                            "easing.type": 0,
                            "animation.type": 0,
                            "origin": 1,
                            "zOrder": 1,
                            "blendMode": 1,
                            "viewport.type": 1,
                            "positionOrigin": 0
                        },
                        "expressions": [],
                        "animations": [],
                        "positionOrigin": 2,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "83DD1BCF6202F4408B78C87408F759278B0E",
                    "expanded": false
                },
                {
                    "id": "gs.Idle",
                    "params": {},
                    "indent": 0,
                    "uid": "370DD38395E6B545BC7A5E74550F674C600D"
                },
                {
                    "id": "gs.Label",
                    "params": {
                        "name": "process_digit"
                    },
                    "indent": 0,
                    "uid": "28B5BB5E10BC4645D06B43858E99ECE00F9C"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Current Digit",
                            "index": 1,
                            "scope": 0
                        },
                        "numberValue": {
                            "name": "Number Of Digits",
                            "index": 0,
                            "scope": 0
                        },
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 5,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "7CB74808291F0448253A8F3155EEBE6AC567"
                },
                {
                    "id": "gs.ListAdd",
                    "params": {
                        "valueType": 0,
                        "listVariable": {
                            "name": "Numbers",
                            "index": 0,
                            "scope": 0
                        },
                        "numberValue": {
                            "name": "Digit Value",
                            "index": 6,
                            "scope": 0
                        },
                        "switchValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "stringValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "listValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "8ACE690B414EF148B75966910ADBFB1858A7"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Current Digit",
                            "index": 1,
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
                    "uid": "C9E81C0268D2134A048913D0AD51988E3AA1"
                },
                {
                    "id": "gs.ListJoin",
                    "params": {
                        "order": 0,
                        "listVariable": {
                            "name": "Numbers",
                            "index": 0,
                            "scope": 0
                        },
                        "targetVariable": {
                            "name": "Number Display",
                            "index": 0,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "DFA191394F3B244C1E6A4AA20153068E0B33"
                },
                {
                    "id": "gs.RefreshText",
                    "params": {
                        "number": 300,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 1,
                    "uid": "BF0DA46003EC1943493812046B8A9FEBDF91"
                },
                {
                    "id": "gs.Idle",
                    "params": {},
                    "indent": 0,
                    "uid": "DDFABD0337CA4041FD9BC0F6DDF652E6D5DE"
                },
                {
                    "id": "gs.Label",
                    "params": {
                        "name": "delete"
                    },
                    "indent": 0,
                    "uid": "F147A53365FD0343C2499142328615CF2750"
                },
                {
                    "id": "gs.ListClear",
                    "params": {
                        "listVariable": {
                            "name": "Numbers",
                            "index": 0,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "44A3FAB8694E0747741B2AF79DB8A14C3D6A"
                },
                {
                    "id": "gs.ChangeStringVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Number Display",
                            "index": 0,
                            "scope": 0
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "operation": 0,
                        "valueType": 0,
                        "textValue": {
                            "lcId": "C20B880514DEF445A18970B9488E8BD7D15B",
                            "defaultText": "0"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "B18A6D2428CCF5408279E1F58CCFFD8C76CF",
                    "expanded": false
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Current Digit",
                            "index": 1,
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
                    "uid": "9F1511299C58444A091AD997FCD594059FB7"
                },
                {
                    "id": "gs.RefreshText",
                    "params": {
                        "number": 300,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "D06355414DB1F643CC485CD4900C66D26BEA"
                },
                {
                    "id": "gs.Idle",
                    "params": {},
                    "indent": 0,
                    "uid": "9A739CAB15CD534CBA6901B78DF743EC5021"
                },
                {
                    "id": "gs.Label",
                    "params": {
                        "name": "end"
                    },
                    "indent": 0,
                    "uid": "3A6D19669730D5448B7892A173E79AA04717"
                },
                {
                    "id": "gs.EraseImageMap",
                    "params": {
                        "number": 101,
                        "duration": 30,
                        "waitForCompletion": 0,
                        "easing": {
                            "type": 3,
                            "inOut": 2
                        },
                        "animation": {
                            "type": 0,
                            "movement": 3,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "easing.type": 0,
                            "animation.type": 0
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "F1F5E71D08C4234BFB9B4BA703C53AAAEDA5",
                    "expanded": false
                },
                {
                    "id": "gs.EraseText",
                    "params": {
                        "number": 300,
                        "duration": 0,
                        "waitForCompletion": 1,
                        "easing": {
                            "type": 3,
                            "inOut": 2
                        },
                        "animation": {
                            "type": 0,
                            "movement": 3,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 1,
                            "easing.type": 0,
                            "animation.type": 0
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "733265C25282E548732BA3322A479B829D5F",
                    "expanded": true
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Current Digit",
                            "index": 1,
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
                        "operation": 2,
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
                    "uid": "B6CB602078D1D345EF4952A7E3A8AC999567"
                },
                {
                    "id": "gs.ListValueAt",
                    "params": {
                        "valueType": 0,
                        "index": {
                            "name": "Current Digit",
                            "index": 1,
                            "scope": 0
                        },
                        "listVariable": {
                            "name": "Numbers",
                            "index": 0,
                            "scope": 0
                        },
                        "targetVariable": {
                            "name": "Result",
                            "index": 3,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "7F81709521BFA7425C89AA219095AC554B2B"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Multiplicator",
                            "index": 14,
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
                        "sourceValue": 10,
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
                    "uid": "2BCBC8CE76721543D8887725D82AE9FB1DFE"
                },
                {
                    "id": "gs.LoopCommand",
                    "params": {},
                    "indent": 0,
                    "uid": "68201304552A4848CD0A09B1085996D87172"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Current Digit",
                            "index": 1,
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
                        "operation": 2,
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
                    "uid": "D80AC6FA87AFE14C3B383957CD1AF5AC5063"
                },
                {
                    "id": "gs.ListValueAt",
                    "params": {
                        "valueType": 0,
                        "index": {
                            "name": "Current Digit",
                            "index": 1,
                            "scope": 0
                        },
                        "listVariable": {
                            "name": "Numbers",
                            "index": 0,
                            "scope": 0
                        },
                        "targetVariable": {
                            "name": "Value",
                            "index": 4,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "BB51C90C545322448A6ABA5417B031C5E509"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Value",
                            "index": 4,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "name": "Current Digit",
                            "index": 1,
                            "scope": 0
                        },
                        "operation": 3,
                        "source": 0,
                        "sourceValue": {
                            "name": "Multiplicator",
                            "index": 14,
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
                    "uid": "01E4137A1B52744B45393965A4606095AEAB"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Value",
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
                        "sourceValue": {
                            "name": "Value",
                            "index": 4,
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
                            "name": "Current Digit",
                            "index": 1,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "sourceReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 1,
                    "uid": "24BA895F888045486D29750382F9BACFFDAD"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Multiplicator",
                            "index": 14,
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
                        "sourceValue": 10,
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
                    "uid": "FD63A4D2316A614821380C543BF089287FA9"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Current Digit",
                            "index": 1,
                            "scope": 0
                        },
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 5,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "AEA4403B592688493A8AA2B31DBBCB62220C"
                },
                {
                    "id": "gs.BreakLoopCommand",
                    "params": {},
                    "indent": 2,
                    "uid": "9B2F430E5B7CF242195BF367238D6A4CC22C"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Input Number Result",
                            "scope": 1,
                            "index": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 1,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "name": "Store Variable",
                            "index": 5,
                            "scope": 0
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "Result",
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
                    "indent": 0,
                    "uid": "B4DB429677526247285AEF63EAAB5541A82D"
                }
            ],
            "index": "22A5A7AE2C72B9435918DC88483794127490",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "Number Of Digits",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Current Digit",
                    "index": 1,
                    "scope": 0
                },
                {
                    "name": "Increment",
                    "index": 2,
                    "scope": 0
                },
                {
                    "name": "Result",
                    "index": 3,
                    "scope": 0
                },
                {
                    "name": "Value",
                    "index": 4,
                    "scope": 0
                },
                {
                    "name": "Store Variable",
                    "index": 5,
                    "scope": 0
                },
                {
                    "name": "Digit Value",
                    "index": 6,
                    "scope": 0
                },
                {
                    "name": "",
                    "index": 7,
                    "scope": 0
                },
                {
                    "name": "",
                    "index": 8,
                    "scope": 0
                },
                {
                    "name": "",
                    "index": 9,
                    "scope": 1,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "",
                    "index": 10,
                    "scope": 1,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "",
                    "index": 11,
                    "scope": 1,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "",
                    "index": 12,
                    "scope": 1,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "",
                    "index": 13,
                    "scope": 1,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Multiplicator",
                    "index": 14,
                    "scope": 0
                }
            ],
            "stringVariables": [
                {
                    "name": "Number Display",
                    "index": 0,
                    "scope": 0
                }
            ],
            "listVariables": [
                {
                    "name": "Numbers",
                    "index": 0,
                    "scope": 0
                }
            ],
            "defaultExpressionId": "BF7CB12110894142C299D341A545C910AA86"
        },
        "localizableStrings": {
            "D3BB596C63C546407F885FF285756FFBEF18": {
                "t": "{LT:1}",
                "d": {
                    "eid": "83DD1BCF6202F4408B78C87408F759278B0E"
                }
            },
            "C20B880514DEF445A18970B9488E8BD7D15B": {
                "t": "0",
                "d": {
                    "eid": "B18A6D2428CCF5408279E1F58CCFFD8C76CF"
                }
            },
            "CFE7C4AD5ACBE146212B9294A47B6746C42E": {
                "t": "0",
                "d": {
                    "eid": "D21A851C96372342C41818B24A8D65ACD580"
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