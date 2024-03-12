GS.dataCache['3C67A3C670B23241C1384BC188355DF2A4C6'] = {
    "uid": "3C67A3C670B23241C1384BC188355DF2A4C6",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Input Text",
        "type": "data_record",
        "order": 1,
        "category": "commonEvents",
        "id": "3C67A3C670B23241C1384BC188355DF2A4C6",
        "isFolder": false,
        "parentId": "58EC2AB454B1364BCA6A58214044076D0EDC",
        "data": {
            "name": "Input Text",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [
                {
                    "label": "Letters",
                    "type": 1,
                    "numberVariable": {
                        "name": "Number of Letters",
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
                        "text": "This common events open an input-text/name element which allows the player to input a text/name. It takes two parameters:\n\n- Letters - The max. number of letters allowed\n- Store in - A global text variable index where the inputted text should be stored in to access from outside the common event.\n\nThe entire input-text UI is done with just two image-maps, so you only need to edit the following pictures for a custom input-text UI:\n\nnameentry_sym_ground\nnameentry_sym_selected\nnameentry_abc_ground\nnameentry_abc_selected\n\nAnd edit the hotspot positions in the two Show Image Map commands as well as the Text-Display and thats it. Check the comments below."
                    },
                    "indent": 0,
                    "uid": "38AD0C5F557B16433B0A1CB3F4888951B556",
                    "expanded": true
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Sym Selected",
                            "index": 1,
                            "scope": 0
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "494278EC4FBB084FBC185F117192ACCEB13E"
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "ABC Selected",
                            "index": 0,
                            "scope": 0
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 1,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "D9ECE4E54E864948335A2756A9FB2EEE9FAE"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Letter Counter",
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
                    "uid": "43FDDDDC42E0B548DB9B23F8BC027A9B65E1"
                },
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here you can edit the two commands below to change the position, font, etc. of the Text-Display. The Text-Display shows the current text inputted by the player."
                    },
                    "indent": 0,
                    "uid": "7C39565D62A6624D6329E5F2F0D046E18127",
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
                        "shadow": 0,
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
                    "uid": "8034678B6648C645F66BA411B8CAB35A57B4"
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
                        "positionOrigin": 3,
                        "origin": 0,
                        "zOrder": 0,
                        "text": {
                            "lcId": "907EAAED5062084C356B9C92EF65395AE14E",
                            "defaultText": "{LT:3}"
                        },
                        "position": {
                            "x": 800,
                            "y": 75
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
                            "positionOrigin": 0,
                            "zOrder": 1,
                            "blendMode": 1,
                            "viewport.type": 1
                        },
                        "expressions": [],
                        "animations": [],
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "CCFC59828A451546621B17171B894F012C6F",
                    "expanded": false
                },
                {
                    "id": "gs.ChangeStringVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Letter-Set",
                            "index": 0,
                            "scope": 0
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "operation": 0,
                        "valueType": 0,
                        "textValue": {
                            "lcId": "D3F4494B4A8C5245EF190642A3459AB0C86F",
                            "defaultText": "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "F9268CA718C4204E8D89AD07318284428CB1",
                    "expanded": true
                },
                {
                    "id": "gs.ChangeStringVariables",
                    "params": {
                        "source": 0,
                        "target": 0,
                        "sourceVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Symbol-Set",
                            "index": 3,
                            "scope": 0
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "operation": 0,
                        "valueType": 0,
                        "textValue": {
                            "lcId": "D421A8D94F25D94E934B49A92901FD7E8FED",
                            "defaultText": "1|2|3|4|5|6|7|8|9|0|Ä|Ö|Ü|$|&|ä|ö|ü|§|%|(|{|[|<|;|)|}|]|>|:|.|,|+|-|/|!|?|=|*|#|’|“|~"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "E028BE5B11644249A239ABC6781960E3267F",
                    "expanded": true
                },
                {
                    "id": "gs.ListFromText",
                    "params": {
                        "separator": ",",
                        "textVariable": {
                            "name": "Letter",
                            "index": 0,
                            "scope": 0
                        },
                        "targetVariable": {
                            "name": "Letters",
                            "index": 0,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "30A1231C636F7440E029BD219E580C840685"
                },
                {
                    "id": "gs.ListFromText",
                    "params": {
                        "separator": "|",
                        "textVariable": {
                            "name": "Symbol-Set",
                            "index": 3,
                            "scope": 0
                        },
                        "targetVariable": {
                            "name": "Symbols",
                            "index": 1,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "CC943DC035AD364B6C8ABB7571F6A586BB3F"
                },
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "You have to edit the hotspots of the following two Show Image Map calls to match your custom ui images."
                    },
                    "indent": 0,
                    "uid": "75E003323A885742E669B1F339C8C1F5BDC1",
                    "expanded": true
                },
                {
                    "id": "gs.ShowImageMap",
                    "params": {
                        "number": 102,
                        "hotspots": [
                            {
                                "x": 965,
                                "y": 141,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 965,
                                    "y": 141,
                                    "width": 130,
                                    "height": 36,
                                    "action": 1,
                                    "label": "abc",
                                    "bindToSwitch": true,
                                    "switch": {
                                        "name": "ABC Selected",
                                        "index": 0,
                                        "scope": 0
                                    },
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
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
                                    "width": 130,
                                    "height": 36
                                }
                            },
                            {
                                "x": 966,
                                "y": 192,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 966,
                                    "y": 192,
                                    "width": 124,
                                    "height": 37,
                                    "action": 1,
                                    "label": "symbols",
                                    "bindToSwitch": true,
                                    "switch": {
                                        "name": "Sym Selected",
                                        "index": 1,
                                        "scope": 0
                                    },
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
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
                                    "width": 124,
                                    "height": 37
                                }
                            },
                            {
                                "x": 967,
                                "y": 250,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 967,
                                    "y": 250,
                                    "width": 126,
                                    "height": 32,
                                    "action": 1,
                                    "label": "clear_all",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
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
                                    "width": 126,
                                    "height": 32
                                }
                            },
                            {
                                "x": 967,
                                "y": 407,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 967,
                                    "y": 407,
                                    "width": 126,
                                    "height": 32,
                                    "action": 1,
                                    "label": "finish",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
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
                                    "width": 126,
                                    "height": 32
                                }
                            },
                            {
                                "x": 369,
                                "y": 132,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 369,
                                    "y": 132,
                                    "width": 53,
                                    "height": 55,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 1,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 55
                                }
                            },
                            {
                                "x": 369,
                                "y": 187,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 369,
                                    "y": 187,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 6,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 422,
                                "y": 132,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 422,
                                    "y": 132,
                                    "width": 53,
                                    "height": 55,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 2,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 55
                                }
                            },
                            {
                                "x": 422,
                                "y": 187,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 422,
                                    "y": 187,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 7,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 475,
                                "y": 132,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 475,
                                    "y": 132,
                                    "width": 53,
                                    "height": 54,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 3,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 54
                                }
                            },
                            {
                                "x": 475,
                                "y": 186,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 475,
                                    "y": 183,
                                    "width": 53,
                                    "height": 55,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 8,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 528,
                                "y": 188,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 528,
                                    "y": 183,
                                    "width": 53,
                                    "height": 55,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 9,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 50
                                }
                            },
                            {
                                "x": 528,
                                "y": 132,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 528,
                                    "y": 132,
                                    "width": 53,
                                    "height": 56,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 4,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 56
                                }
                            },
                            {
                                "x": 581,
                                "y": 132,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 581,
                                    "y": 132,
                                    "width": 53,
                                    "height": 54,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 5,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 54
                                }
                            },
                            {
                                "x": 581,
                                "y": 186,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 581,
                                    "y": 183,
                                    "width": 53,
                                    "height": 55,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 10,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 55
                                }
                            },
                            {
                                "x": 369,
                                "y": 238,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 369,
                                    "y": 238,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 11,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 422,
                                "y": 238,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 422,
                                    "y": 238,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 12,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 475,
                                "y": 241,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 475,
                                    "y": 238,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 13,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 528,
                                "y": 238,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 528,
                                    "y": 238,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 14,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 581,
                                "y": 241,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 581,
                                    "y": 238,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 15,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 369,
                                "y": 289,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 369,
                                    "y": 289,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 16,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 422,
                                "y": 289,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 422,
                                    "y": 289,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 17,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 475,
                                "y": 292,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 475,
                                    "y": 289,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 18,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 528,
                                "y": 289,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 528,
                                    "y": 289,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 19,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 581,
                                "y": 292,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 581,
                                    "y": 289,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 20,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 369,
                                "y": 340,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 369,
                                    "y": 340,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 21,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 422,
                                "y": 340,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 422,
                                    "y": 340,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 22,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 475,
                                "y": 343,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 475,
                                    "y": 343,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 23,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 528,
                                "y": 340,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 528,
                                    "y": 340,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 24,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 581,
                                "y": 343,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 581,
                                    "y": 340,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 25,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 369,
                                "y": 391,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 369,
                                    "y": 391,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 26,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 690,
                                "y": 135,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 690,
                                    "y": 135,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 31,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 743,
                                "y": 135,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 743,
                                    "y": 135,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 32,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 796,
                                "y": 135,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 796,
                                    "y": 135,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 33,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 849,
                                "y": 135,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 849,
                                    "y": 135,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 34,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 902,
                                "y": 135,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 902,
                                    "y": 135,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 35,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 690,
                                "y": 186,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 690,
                                    "y": 186,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 36,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 743,
                                "y": 186,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 743,
                                    "y": 186,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 37,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 796,
                                "y": 186,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 796,
                                    "y": 186,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 38,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 849,
                                "y": 186,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 849,
                                    "y": 186,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 39,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 902,
                                "y": 186,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 902,
                                    "y": 186,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 40,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 690,
                                "y": 237,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 690,
                                    "y": 236,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 41,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 743,
                                "y": 237,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 743,
                                    "y": 237,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 42,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 796,
                                "y": 237,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 796,
                                    "y": 237,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 43,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 422,
                                "y": 391,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 422,
                                    "y": 391,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 27,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 475,
                                "y": 394,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 475,
                                    "y": 391,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 28,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 528,
                                "y": 391,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 528,
                                    "y": 391,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 29,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 581,
                                "y": 394,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 581,
                                    "y": 391,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 30,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            }
                        ],
                        "predefinedPositionId": 0,
                        "ground": {
                            "name": "nameentry_sym_ground",
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
                            "name": "nameentry_sym_selected",
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
                        "selected": {
                            "name": "nameentry_sym_selected",
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
                        "selectedHover": {
                            "name": "nameentry_sym_selected",
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
                        "fieldFlags": {
                            "easing.type": 1,
                            "animation.type": 1,
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
                    "expanded": false,
                    "uid": "98D7B9987F29C443945866243125B27D5267"
                },
                {
                    "id": "gs.ShowImageMap",
                    "params": {
                        "number": 101,
                        "hotspots": [
                            {
                                "x": 965,
                                "y": 141,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 965,
                                    "y": 141,
                                    "width": 130,
                                    "height": 36,
                                    "action": 1,
                                    "label": "abc",
                                    "bindToSwitch": true,
                                    "switch": {
                                        "name": "ABC Selected",
                                        "index": 0,
                                        "scope": 0
                                    },
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
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
                                    "width": 130,
                                    "height": 36
                                }
                            },
                            {
                                "x": 966,
                                "y": 192,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 966,
                                    "y": 192,
                                    "width": 124,
                                    "height": 37,
                                    "action": 1,
                                    "label": "symbols",
                                    "bindToSwitch": true,
                                    "switch": {
                                        "name": "Sym Selected",
                                        "index": 1,
                                        "scope": 0
                                    },
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
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
                                    "width": 124,
                                    "height": 37
                                }
                            },
                            {
                                "x": 967,
                                "y": 250,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 967,
                                    "y": 250,
                                    "width": 126,
                                    "height": 32,
                                    "action": 1,
                                    "label": "clear_all",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
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
                                    "width": 126,
                                    "height": 32
                                }
                            },
                            {
                                "x": 967,
                                "y": 407,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 967,
                                    "y": 407,
                                    "width": 126,
                                    "height": 32,
                                    "action": 1,
                                    "label": "finish",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
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
                                    "width": 126,
                                    "height": 32
                                }
                            },
                            {
                                "x": 369,
                                "y": 132,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 369,
                                    "y": 132,
                                    "width": 53,
                                    "height": 55,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 1,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 55
                                }
                            },
                            {
                                "x": 369,
                                "y": 187,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 369,
                                    "y": 187,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 6,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 422,
                                "y": 132,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 422,
                                    "y": 132,
                                    "width": 53,
                                    "height": 55,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 2,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 55
                                }
                            },
                            {
                                "x": 422,
                                "y": 187,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 422,
                                    "y": 187,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 7,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 475,
                                "y": 132,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 475,
                                    "y": 132,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 3,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 475,
                                "y": 183,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 475,
                                    "y": 183,
                                    "width": 53,
                                    "height": 55,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 8,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 55
                                }
                            },
                            {
                                "x": 528,
                                "y": 183,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 528,
                                    "y": 183,
                                    "width": 53,
                                    "height": 55,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 9,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 55
                                }
                            },
                            {
                                "x": 528,
                                "y": 132,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 528,
                                    "y": 132,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 4,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 581,
                                "y": 132,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 581,
                                    "y": 132,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 5,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 581,
                                "y": 183,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 581,
                                    "y": 183,
                                    "width": 53,
                                    "height": 55,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 10,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 55
                                }
                            },
                            {
                                "x": 369,
                                "y": 238,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 369,
                                    "y": 238,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 11,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 422,
                                "y": 238,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 422,
                                    "y": 238,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 12,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 475,
                                "y": 238,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 475,
                                    "y": 238,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 13,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 528,
                                "y": 238,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 528,
                                    "y": 238,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 14,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 581,
                                "y": 238,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 581,
                                    "y": 238,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 15,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 369,
                                "y": 289,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 369,
                                    "y": 289,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 16,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 422,
                                "y": 289,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 422,
                                    "y": 289,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 17,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 55
                                }
                            },
                            {
                                "x": 475,
                                "y": 289,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 475,
                                    "y": 289,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 18,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 528,
                                "y": 289,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 528,
                                    "y": 289,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 19,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 581,
                                "y": 289,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 581,
                                    "y": 289,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 20,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 369,
                                "y": 340,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 369,
                                    "y": 340,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 21,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 422,
                                "y": 344,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 422,
                                    "y": 344,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 22,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 475,
                                "y": 340,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 475,
                                    "y": 340,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 23,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 528,
                                "y": 340,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 528,
                                    "y": 340,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 24,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 581,
                                "y": 340,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 581,
                                    "y": 340,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 25,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 369,
                                "y": 391,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 369,
                                    "y": 391,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 26,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 690,
                                "y": 135,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 690,
                                    "y": 135,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 27,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 743,
                                "y": 135,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 743,
                                    "y": 135,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 28,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 796,
                                "y": 135,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 796,
                                    "y": 135,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 29,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 849,
                                "y": 135,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 849,
                                    "y": 135,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 30,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 902,
                                "y": 135,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 902,
                                    "y": 135,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 31,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 690,
                                "y": 186,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 690,
                                    "y": 186,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 32,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 743,
                                "y": 186,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 743,
                                    "y": 186,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 33,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 796,
                                "y": 186,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 796,
                                    "y": 186,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 34,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 849,
                                "y": 186,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 849,
                                    "y": 186,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 35,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 902,
                                "y": 186,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 902,
                                    "y": 186,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 36,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 690,
                                "y": 237,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 690,
                                    "y": 237,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 37,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 743,
                                "y": 237,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 743,
                                    "y": 237,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 38,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 796,
                                "y": 237,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 796,
                                    "y": 237,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 39,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 849,
                                "y": 237,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 849,
                                    "y": 237,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 40,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 902,
                                "y": 237,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 902,
                                    "y": 237,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 41,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 690,
                                "y": 288,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 690,
                                    "y": 288,
                                    "width": 53,
                                    "height": 55,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 42,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 55
                                }
                            },
                            {
                                "x": 743,
                                "y": 288,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 743,
                                    "y": 288,
                                    "width": 53,
                                    "height": 55,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 43,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 55
                                }
                            },
                            {
                                "x": 796,
                                "y": 288,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 796,
                                    "y": 288,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 44,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 849,
                                "y": 288,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 849,
                                    "y": 288,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 45,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 902,
                                "y": 288,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 902,
                                    "y": 288,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 46,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 690,
                                "y": 343,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 690,
                                    "y": 339,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 47,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 743,
                                "y": 343,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 743,
                                    "y": 339,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 48,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 796,
                                "y": 339,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 796,
                                    "y": 339,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 49,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 849,
                                "y": 339,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 849,
                                    "y": 339,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 50,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            },
                            {
                                "x": 902,
                                "y": 339,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 902,
                                    "y": 339,
                                    "width": 53,
                                    "height": 55,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 51,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 55
                                }
                            },
                            {
                                "x": 690,
                                "y": 394,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 690,
                                    "y": 390,
                                    "width": 53,
                                    "height": 51,
                                    "action": 1,
                                    "label": "process_letter",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": true,
                                    "bindValue": 52,
                                    "bindValueVariable": {
                                        "name": "Letter",
                                        "index": 0,
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
                                    "width": 53,
                                    "height": 51
                                }
                            }
                        ],
                        "predefinedPositionId": 0,
                        "ground": {
                            "name": "nameentry_abc_ground",
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
                            "name": "nameentry_abc_selected",
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
                        "selected": {
                            "name": "nameentry_abc_selected",
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
                        "selectedHover": {
                            "name": "nameentry_abc_selected",
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
                        "duration": 30,
                        "origin": 0,
                        "waitForCompletion": 0,
                        "positionType": 0,
                        "position": {
                            "x": 0,
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
                            "movement": 1,
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
                    "expanded": false,
                    "uid": "6D07EADB029D7347C82B1456B717FC48C8B1"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 102,
                        "layer": 0,
                        "characterId": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 0,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "9625E17A644E714A4399FDF58E75C1926ECC"
                },
                {
                    "id": "gs.Idle",
                    "params": {},
                    "indent": 0,
                    "uid": "1E5E10BD3424E14CDD289C60D4E3F057400D"
                },
                {
                    "id": "gs.Label",
                    "params": {
                        "name": "process_letter"
                    },
                    "indent": 0,
                    "uid": "7378D14B6E8BE14F3D484E58ACF061990DC1"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Letter Counter",
                            "index": 3,
                            "scope": 0
                        },
                        "numberValue": {
                            "name": "Number of Letters",
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
                        "operation": 4,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "94D9050B8664664329780CE2051C8F337FAF"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Letter Counter",
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
                    "uid": "19BE7FA72265964F63389B59C1633450C51D"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ABC Selected",
                            "index": 0,
                            "scope": 0
                        },
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 1,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "8B4CB1A36BEF9148BD9B9233B17C22A9911B"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Letter",
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
                    "indent": 2,
                    "uid": "70CF04D948B0E043CD280551B10E22F99BCE"
                },
                {
                    "id": "gs.ListValueAt",
                    "params": {
                        "valueType": 2,
                        "index": {
                            "name": "Letter",
                            "index": 0,
                            "scope": 0
                        },
                        "listVariable": {
                            "name": "Letters",
                            "index": 0,
                            "scope": 0
                        },
                        "targetVariable": {
                            "name": "Letter",
                            "index": 1,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 2,
                    "uid": "72FB69BC6F6E47481B0BF0E60CDC52C0258F"
                },
                {
                    "id": "gs.ChangeStringVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Text",
                            "index": 2,
                            "scope": 0
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "operation": 1,
                        "valueType": 0,
                        "textValue": {
                            "lcId": "BE68AF00628544406D586D7215CC19848765",
                            "defaultText": "{LT:2}"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "source": 1,
                        "sourceVariable": {
                            "name": "Letter",
                            "index": 1,
                            "scope": 0
                        }
                    },
                    "indent": 2,
                    "uid": "6D92E34B7F829149D05826462E9FD5AB5425",
                    "expanded": false
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "indent": 1,
                    "uid": "D9AC16065B6AA9432C395B76A04D422B62C5"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Letter",
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
                    "indent": 2,
                    "uid": "D477310F79FDE9400B28B478CB38AB00EE60"
                },
                {
                    "id": "gs.ListValueAt",
                    "params": {
                        "valueType": 2,
                        "index": {
                            "name": "Letter",
                            "index": 0,
                            "scope": 0
                        },
                        "listVariable": {
                            "name": "Symbols",
                            "index": 1,
                            "scope": 0
                        },
                        "targetVariable": {
                            "name": "Letter",
                            "index": 1,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 2,
                    "uid": "CC6C0A7D7615C541718BA2A985B78CB668D2"
                },
                {
                    "id": "gs.ChangeStringVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Text",
                            "index": 2,
                            "scope": 0
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "operation": 1,
                        "valueType": 0,
                        "textValue": {
                            "lcId": "C585967B5B2FE14AC14A93C7EA122754A881",
                            "defaultText": {
                                "t": "{LT:2}",
                                "d": {
                                    "eid": "6D92E34B7F829149D05826462E9FD5AB5425"
                                }
                            }
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "source": 1,
                        "sourceVariable": {
                            "name": "Letter",
                            "index": 1,
                            "scope": 0
                        }
                    },
                    "indent": 2,
                    "uid": "449EA39A780BB84ED56B7E53944020314ADE",
                    "expanded": false
                },
                {
                    "id": "gs.RefreshText",
                    "params": {
                        "number": 300,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 1,
                    "uid": "FAEE096E8F0B12470B79C6677527CB981683"
                },
                {
                    "id": "gs.Idle",
                    "params": {},
                    "indent": 0,
                    "uid": "A6363A101F0D534A4A4BB8D803FA1C45AE3F"
                },
                {
                    "id": "gs.Label",
                    "params": {
                        "name": "abc"
                    },
                    "indent": 0,
                    "uid": "90C9802569BFE6463F4B1645551E734F7B97"
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Sym Selected",
                            "index": 1,
                            "scope": 0
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "844BDF5153B3A84AF8496FA3BC54D6106AAE"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 101,
                        "layer": 0,
                        "characterId": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 1,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "FF553A718E39E347558BEC071FA223C6B877"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 102,
                        "layer": 0,
                        "characterId": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 0,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "C44B3A36820608483F2A1CC1E2396ECFB4AB"
                },
                {
                    "id": "gs.Idle",
                    "params": {},
                    "indent": 0,
                    "uid": "AD8A1AAF715E384DAF7BF04884693A3D4012"
                },
                {
                    "id": "gs.Label",
                    "params": {
                        "name": "symbols"
                    },
                    "indent": 0,
                    "uid": "D8207C04322D454C409B1E15F8B4CE5FF296"
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "ABC Selected",
                            "index": 0,
                            "scope": 0
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "FC2C922A581E494E591BC0643A66DA9C8577"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 101,
                        "layer": 0,
                        "characterId": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 0,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "EBAA73A69A62B945D868D426C6CA079A43E8"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 102,
                        "layer": 0,
                        "characterId": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 1,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "A247997678C8104A854B4A0215656812E096"
                },
                {
                    "id": "gs.Idle",
                    "params": {},
                    "indent": 0,
                    "uid": "C5268335113E884DC249DB41ED7B7EF83F76"
                },
                {
                    "id": "gs.Label",
                    "params": {
                        "name": "clear_all"
                    },
                    "indent": 0,
                    "uid": "63534EFD189C624CED2967466E091B163021"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Letter Counter",
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
                    "uid": "907537E8729AD24C5529A1410C8105A114AF"
                },
                {
                    "id": "gs.ChangeStringVariables",
                    "params": {
                        "source": 0,
                        "target": 0,
                        "sourceVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Text",
                            "index": 2,
                            "scope": 0
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "operation": 0,
                        "valueType": 0,
                        "textValue": "",
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "33E4EE26446B91488B6B34A72E17BC4BC664",
                    "expanded": false
                },
                {
                    "id": "gs.RefreshText",
                    "params": {
                        "number": 300,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "282D4714435C394EF16B5D52D90085DCC2C7"
                },
                {
                    "id": "gs.Idle",
                    "params": {},
                    "indent": 0,
                    "uid": "F8BBC8451731B948965801B13EAE83DE46D4"
                },
                {
                    "id": "gs.Label",
                    "params": {
                        "name": "finish"
                    },
                    "indent": 0,
                    "uid": "BE54B2C87533574CC07A6527387CDAFBCFCE"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Text",
                            "index": 2,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 2,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "07FC93AE2EC3D4400A88A2C7F3698387F5E0"
                },
                {
                    "id": "gs.Idle",
                    "params": {},
                    "indent": 1,
                    "uid": "F4A84F5E7461B349C8685683D4FBAFD90A12"
                },
                {
                    "id": "gs.ChangeStringVariables",
                    "params": {
                        "source": 1,
                        "target": 0,
                        "sourceVariable": {
                            "name": "Text",
                            "index": 2,
                            "scope": 0
                        },
                        "targetVariable": {
                            "name": "Input Text Result",
                            "index": 2,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "targetRangeScope": 1,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "operation": 0,
                        "valueType": 0,
                        "textValue": "",
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReference": {
                            "name": "Store in",
                            "index": 2,
                            "scope": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "4EEB42093B95994D6C6B78675ACECF28CD15",
                    "expanded": false
                },
                {
                    "id": "gs.ChangeStringVariables",
                    "params": {
                        "source": 0,
                        "target": 0,
                        "sourceVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Text",
                            "index": 2,
                            "scope": 0
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "operation": 0,
                        "valueType": 0,
                        "textValue": "",
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "2003D2030BAE964A512AC078A930C3EDB67E",
                    "expanded": false
                },
                {
                    "id": "gs.EraseText",
                    "params": {
                        "number": 300,
                        "duration": 30,
                        "waitForCompletion": 0,
                        "easing": {
                            "type": 3,
                            "inOut": 2
                        },
                        "animation": {
                            "type": 0,
                            "movement": 1,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 0,
                            "easing.type": 0,
                            "animation.type": 0
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "26D53E9625540147059B1C836365BE3BB7D5",
                    "expanded": false
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
                            "movement": 1,
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
                    "uid": "706FCBEF771CF74CCC8A8068A273108BE243",
                    "expanded": true
                },
                {
                    "id": "gs.EraseImageMap",
                    "params": {
                        "number": 102,
                        "duration": 30,
                        "waitForCompletion": 1,
                        "easing": {
                            "type": 3,
                            "inOut": 2
                        },
                        "animation": {
                            "type": 0,
                            "movement": 1,
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
                    "uid": "E44D14619CA1684E258AF7B772CC4F214071",
                    "expanded": true
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 101,
                        "layer": 0,
                        "characterId": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "ABC Selected",
                            "index": 0,
                            "scope": 0
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "6F0BA83F57F10848FE5BF7A12E7E6B65B5BB"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 102,
                        "layer": 0,
                        "characterId": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Sym Selected",
                            "index": 1,
                            "scope": 0
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "C790B0540F9EE8427B68BDB74F7BF136B581"
                }
            ],
            "index": "3C67A3C670B23241C1384BC188355DF2A4C6",
            "booleanVariables": [
                {
                    "name": "ABC Selected",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Sym Selected",
                    "index": 1,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "Letter",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Number of Letters",
                    "index": 1,
                    "scope": 0
                },
                {
                    "name": "Store in",
                    "index": 2,
                    "scope": 0
                },
                {
                    "name": "Letter Counter",
                    "index": 3,
                    "scope": 0
                }
            ],
            "stringVariables": [
                {
                    "name": "Letter-Set",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Letter",
                    "index": 1,
                    "scope": 0
                },
                {
                    "name": "Text",
                    "index": 2,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Symbol-Set",
                    "index": 3,
                    "scope": 0
                }
            ],
            "listVariables": [
                {
                    "name": "Letters",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Symbols",
                    "index": 1,
                    "scope": 0
                }
            ],
            "defaultExpressionId": "BF7CB12110894142C299D341A545C910AA86"
        },
        "localizableStrings": {
            "D3F4494B4A8C5245EF190642A3459AB0C86F": {
                "t": "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z",
                "d": {
                    "eid": "F9268CA718C4204E8D89AD07318284428CB1"
                }
            },
            "BE68AF00628544406D586D7215CC19848765": {
                "t": "{LT:2}",
                "d": {
                    "eid": "6D92E34B7F829149D05826462E9FD5AB5425"
                }
            },
            "907EAAED5062084C356B9C92EF65395AE14E": {
                "t": "{LT:3}",
                "d": {
                    "eid": "CCFC59828A451546621B17171B894F012C6F"
                }
            },
            "D421A8D94F25D94E934B49A92901FD7E8FED": {
                "t": "1|2|3|4|5|6|7|8|9|0|Ä|Ö|Ü|$|&|ä|ö|ü|§|%|(|{|[|<|;|)|}|]|>|:|.|,|+|-|/|!|?|=|*|#|’|“|~",
                "d": {
                    "eid": "E028BE5B11644249A239ABC6781960E3267F"
                }
            },
            "C585967B5B2FE14AC14A93C7EA122754A881": {
                "t": "{LT:2}",
                "d": {
                    "eid": "6D92E34B7F829149D05826462E9FD5AB5425"
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