GS.dataCache['788F76F4231BE442882AEDA37BCF0AE6556B'] = {
    "uid": "788F76F4231BE442882AEDA37BCF0AE6556B",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Save Menu",
        "type": "vn.scene",
        "parentId": "0680E2763533F740B54A6C139E537CF59C20",
        "chapterUid": "0680E2763533F740B54A6C139E537CF59C20",
        "order": 2,
        "livePreviewDisabled": false,
        "localizableStrings": {},
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            },
            {
                "name": "Page",
                "index": 1,
                "scope": 0
            }
        ],
        "commands": [
            {
                "id": "gs.Comment",
                "params": {
                    "text": "In this scene we make our own save menu. We use an image-map to keep it simple. Feel free to use pictures, videos, hotspots, etc. to make it more dynamic. We support 5 pages with 8 save-slots per page by default which makes 40 save-slots in total. Feel free to add more! \n\nSince only 8 save-slots can be visible at a time, we only need 8 different pictures. So we call \"Show Picture\" 8 times with a dummy image to make placement a little bit easier. That dummy image is replaced later with the screenshot-image of the save-slot. Just check out \"Show Save Game Image\" common event in database.\n\nIf the user clicks on one of the 8 save-slot areas, we call the \"Save Game\" common event which saves the game into the selected save-game slot. We pass the current selected page and the number of the clicked save-slot(1 - 8) to that common event so it can calculate the actual save-slot number. Just check out \"Save Game\" common event in database.\n\nIf the users clicks on one of the 5 page-numbers, we put the number of the clicked page into the local \"Page\" number variable. Then we  call the \"Update Pages\" common event, which makes sure that only one page is displayed as selected since image-map allows to select all hotspots independent from each other. Just check \"Update Pages\" common event in database. After that we jump to the \"Refresh Pictures\" label to call the \"Show Save Game Image\" common event again for each picture so that each pictures show the correct save-game image for the selected page."
                },
                "indent": 0,
                "uid": "EE917E1E429DE945D558CFC480C3FAEDDADA",
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
                        "name": "In Game",
                        "index": 5,
                        "scope": 0
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": {
                        "name": "In Game",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "E652908A2E8E05407A6A318675804646A189"
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
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 0,
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "CE6993E27016044F4B7BFE19A0C83BFB4D78"
            },
            {
                "id": "gs.FreezeScreen",
                "params": {},
                "indent": 0,
                "uid": "6E3A4C3F68BF7942107B95A87598855DC5C9"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
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
                "uid": "53180FF23BC94443553AFE727D8B2297631A"
            },
            {
                "id": "gs.ShowImageMap",
                "params": {
                    "number": 100,
                    "hotspots": [
                        {
                            "x": 604,
                            "y": 58,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 424,
                                "y": 346,
                                "width": 92,
                                "height": 37,
                                "action": 1,
                                "label": "back",
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
                                "width": 100,
                                "height": 73
                            }
                        },
                        {
                            "x": 1192,
                            "y": 120,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 628,
                                "y": 504,
                                "width": 30,
                                "height": 33,
                                "action": 1,
                                "label": "page1",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Page 1",
                                    "index": 0,
                                    "scope": 0
                                },
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
                                "width": 50,
                                "height": 60
                            }
                        },
                        {
                            "x": 1196,
                            "y": 184,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 624,
                                "y": 116,
                                "width": 45,
                                "height": 52,
                                "action": 1,
                                "label": "page2",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Page 2",
                                    "index": 1,
                                    "scope": 0
                                },
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
                                "width": 45,
                                "height": 52
                            }
                        },
                        {
                            "x": 1195,
                            "y": 239,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 742,
                                "y": 103,
                                "width": 48,
                                "height": 55,
                                "action": 1,
                                "label": "page3",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Page 3",
                                    "index": 2,
                                    "scope": 0
                                },
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
                                "width": 48,
                                "height": 55
                            }
                        },
                        {
                            "x": 1195,
                            "y": 299,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 668,
                                "y": 84,
                                "width": 48,
                                "height": 53,
                                "action": 1,
                                "label": "page4",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Page 4",
                                    "index": 3,
                                    "scope": 0
                                },
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
                                "width": 48,
                                "height": 54
                            }
                        },
                        {
                            "x": 1197,
                            "y": 358,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 609,
                                "y": 198,
                                "width": 47,
                                "height": 56,
                                "action": 1,
                                "label": "page5",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Page 5",
                                    "index": 4,
                                    "scope": 0
                                },
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
                                "width": 47,
                                "height": 56
                            }
                        },
                        {
                            "x": 699,
                            "y": 176,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 699,
                                "y": 176,
                                "width": 183,
                                "height": 116,
                                "action": 1,
                                "label": "slot1",
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
                                "width": 183,
                                "height": 103
                            }
                        },
                        {
                            "x": 699,
                            "y": 304,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 126,
                                "y": 276,
                                "width": 183,
                                "height": 119,
                                "action": 1,
                                "label": "slot2",
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
                                "width": 183,
                                "height": 103
                            }
                        },
                        {
                            "x": 699,
                            "y": 437,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 699,
                                "y": 437,
                                "width": 183,
                                "height": 118,
                                "action": 1,
                                "label": "slot3",
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
                                "width": 183,
                                "height": 105
                            }
                        },
                        {
                            "x": 697,
                            "y": 569,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 211,
                                "y": 401,
                                "width": 186,
                                "height": 122,
                                "action": 1,
                                "label": "slot4",
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
                                "width": 186,
                                "height": 103
                            }
                        },
                        {
                            "x": 995,
                            "y": 180,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 570,
                                "y": 389,
                                "width": 183,
                                "height": 123,
                                "action": 1,
                                "label": "slot5",
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
                                "width": 189,
                                "height": 108
                            }
                        },
                        {
                            "x": 995,
                            "y": 311,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1002,
                                "y": 306,
                                "width": 183,
                                "height": 116,
                                "action": 1,
                                "label": "slot6",
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
                                "width": 190,
                                "height": 105
                            }
                        },
                        {
                            "x": 998,
                            "y": 577,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 998,
                                "y": 577,
                                "width": 183,
                                "height": 101,
                                "action": 1,
                                "label": "slot8",
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
                                "width": 183,
                                "height": 101
                            }
                        },
                        {
                            "x": 996,
                            "y": 445,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 996,
                                "y": 445,
                                "width": 186,
                                "height": 104,
                                "action": 1,
                                "label": "slot7",
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
                                "width": 186,
                                "height": 104
                            }
                        }
                    ],
                    "ground": {
                        "name": "SaveGame_Idle",
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
                        "name": "SaveGame_Hover",
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
                        "name": "SaveGame_Hover",
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
                        "name": "SaveGame_Hover",
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
                        "blendMode": 1,
                        "origin": 1
                    },
                    "zOrder": 0,
                    "blendMode": 0,
                    "predefinedPositionId": 0,
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "expanded": true,
                "uid": "7E1F03F5455C0746B76871B5316AFA5DC9B2"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Refresh Pictures"
                },
                "indent": 0,
                "uid": "0AFD1D82375F454EC3581260E1C5D00BA755"
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
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 703,
                        "y": 180,
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
                        "duration": 0,
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
                        "name": "HomeThumb",
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
                "uid": "A4B72FD35083C14C7C0AEBF779E32BC63615",
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
                    "number": 1,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 703,
                        "y": 309,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 580,
                            "y": 255,
                            "zoom": 1,
                            "angle": 0,
                            "horizontalFlip": false,
                            "width": 259,
                            "height": 146
                        },
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
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
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
                        "name": "HomeThumb",
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
                "uid": "BC25B68D1DB3654616196837428BA15E156F",
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
                    "number": 2,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 703,
                        "y": 442,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 786,
                            "y": 255,
                            "zoom": 1,
                            "angle": 0,
                            "horizontalFlip": false,
                            "width": 259,
                            "height": 146
                        },
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
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
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
                        "name": "HomeThumb",
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
                "uid": "01441FBF65C1424D007AF368C3C6978E330A",
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
                    "number": 3,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 703,
                        "y": 573,
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
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
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
                        "name": "HomeThumb",
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
                "uid": "F406000A100D4144500B43519D4D2354D40B",
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
                    "number": 4,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1001,
                        "y": 187,
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
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
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
                        "name": "HomeThumb",
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
                "uid": "331FAF8E4E950547159B9674ACE6D1B815B9",
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
                    "number": 5,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1001,
                        "y": 316,
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
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
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
                        "name": "HomeThumb",
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
                "uid": "527E8B695514084D8C8B4976DFCE7E210403",
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
                    "number": 6,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1001,
                        "y": 449,
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
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
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
                        "name": "HomeThumb",
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
                "uid": "A34795AE194BD54CF759E136198F783BA7DE",
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
                    "number": 7,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1001,
                        "y": 580,
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
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
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
                        "name": "HomeThumb",
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
                "uid": "CB2314234072D14F652A0A06F2F0371DD7D1",
                "expanded": false
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                    "parameters": {
                        "values": [
                            0,
                            1,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "F7ACA16165A48840835B94B0BDA146799026"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                    "parameters": {
                        "values": [
                            1,
                            2,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "C7D268233DC9794EAC88490027E9686B4212"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                    "parameters": {
                        "values": [
                            2,
                            3,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "93EFBE8D31AFC441E53A8381CEA1107C91AD"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                    "parameters": {
                        "values": [
                            3,
                            4,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "8CC98E6F8DE8D4490D89E9F8027C6642CD5A"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                    "parameters": {
                        "values": [
                            4,
                            5,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "67EE28E25A0248496E0AA8725CCDA9B0F207"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                    "parameters": {
                        "values": [
                            5,
                            6,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "DB5E8379155EA34D2648D9745C354CB3003F"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                    "parameters": {
                        "values": [
                            6,
                            7,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "FF325A037776764E919A6FF576DE9EBA3DBC"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                    "parameters": {
                        "values": [
                            7,
                            8,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "D315B2FE526C244D334BB416103998C2AF94"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 1.2
                },
                "indent": 0,
                "uid": "CE2E1FEE85CD88400998ED6500850782EE30"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {},
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "14CA23AF3081F74C497A57763FA645A98DDB"
            },
            {
                "id": "gs.ScreenTransition",
                "params": {
                    "graphic": null,
                    "duration": 0,
                    "vague": 30,
                    "fieldFlags": {
                        "graphic": 1,
                        "vague": 1,
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "0E5C5D7D9C65E14D5B0956E353D3EEC5DDD8"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "41C7EDAB16CC88405779E1E5EA497298BD19"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "back"
                },
                "indent": 0,
                "uid": "B346DB965886D14E525B9033C0145F5FBE81"
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
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": {
                        "name": "In Game",
                        "index": 5,
                        "scope": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "992C7794172A7847598A20E029123DC851E5"
            },
            {
                "id": "vn.ReturnToPreviousScene",
                "params": {},
                "indent": 0,
                "uid": "25E85F434241604DC659F2D7E690F858CDBD"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "EEFAD0908EECA246FD8AA7A4E0E5170E8573"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot1"
                },
                "indent": 0,
                "uid": "7A8310357E9FF34FA68ADC54718892D8E2EF"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5378E5544E833044CB196226A42ABCBC655B",
                    "parameters": {
                        "values": [
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            },
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "C2B2D8BB07D9894E25980C4604D1AF3635E6"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": 0
                },
                "indent": 0,
                "uid": "72DC67C9738B56423838B340BBA4BA7E0024"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot2"
                },
                "indent": 0,
                "uid": "E885D982752FF94B052B7F06268FD401413F"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5378E5544E833044CB196226A42ABCBC655B",
                    "parameters": {
                        "values": [
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            },
                            2
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "DD3CE32A59C5B947CA396A57F54791448C40"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": 0
                },
                "indent": 0,
                "uid": "940C688D1E48C04EB05B14C8B15921DCB07D"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot3"
                },
                "indent": 0,
                "uid": "E126C5E71700A74A771A8529A1F9B5CEBA5C"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5378E5544E833044CB196226A42ABCBC655B",
                    "parameters": {
                        "values": [
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            },
                            3
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "803BCC16334EA44719492CC705451D34C622"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": 0
                },
                "indent": 0,
                "uid": "D0A027D526784649278BED81DFB4CBD5F2BE"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot4"
                },
                "indent": 0,
                "uid": "C031C52E19C9284CA17B23D2ECCDFFCB897D"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5378E5544E833044CB196226A42ABCBC655B",
                    "parameters": {
                        "values": [
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            },
                            4
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "860E41E13049C442DA29C058807C23E2819A"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": 0
                },
                "indent": 0,
                "uid": "621527C8383580464C0B48657434F9DA562E"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot5"
                },
                "indent": 0,
                "uid": "52CCDC2570B5A54E0A7B7CB1B3CA0EFFABBE"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5378E5544E833044CB196226A42ABCBC655B",
                    "parameters": {
                        "values": [
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            },
                            5
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "BDEE6837689EB64F964BEFF47EB5779FE9DA"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": 0
                },
                "indent": 0,
                "uid": "C20996BA645AE348F53B66667F31011AFD75"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot6"
                },
                "indent": 0,
                "uid": "08C5F5837F96F3421C3A1F95531D2EF3E6FE"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5378E5544E833044CB196226A42ABCBC655B",
                    "parameters": {
                        "values": [
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            },
                            6
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "60F9BEAD8D31214D2A484F75512805BE0368"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": 0
                },
                "indent": 0,
                "uid": "FB82409D61F3F14FAB794D4502C1736B1887"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot7"
                },
                "indent": 0,
                "uid": "A8774A18525AB1424C0B35B0DA3D52A16FC7"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5378E5544E833044CB196226A42ABCBC655B",
                    "parameters": {
                        "values": [
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            },
                            7
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "AB5E983088E0A4402A5AE499353291A7105F"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": 0
                },
                "indent": 0,
                "uid": "37E6F4508A75534F3D8B4588061A8D420763"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot8"
                },
                "indent": 0,
                "uid": "B52DAA7D652DC945642A32C81BF46540D862"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5378E5544E833044CB196226A42ABCBC655B",
                    "parameters": {
                        "values": [
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            },
                            8
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "1096D43918AD234204391B43B93788A150F0"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": 0
                },
                "indent": 0,
                "uid": "284C82ED5A118645113B9B35FB0BC3619A5D"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "page1"
                },
                "indent": 0,
                "uid": "80AE1D320E315945ED89A2948CF5FD5DABFB"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
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
                "uid": "77CDA938346CA34BBA59EB947151294AEDB1"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {},
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "0786C32B6E1F2543013B1234E5D195FBBE47"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": 0
                },
                "indent": 0,
                "uid": "B5EE01D608FF9943FE2806D8F6CB82327973"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "page2"
                },
                "indent": 0,
                "uid": "3ABC40D093F78243D96ABA52EC6FF446F2B3"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
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
                    "sourceValue": 2,
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
                "uid": "48EC4BBF3277044CAA7B30E1F465A539B0AC"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {},
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "C33F876931E3B64142598DD70D7A87CD4FC9"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": 0
                },
                "indent": 0,
                "uid": "632A108623F17244A72AE912877297920AED"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "page3"
                },
                "indent": 0,
                "uid": "DCC15C8F64729541E5890F511D2A0A3C29E4"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
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
                    "sourceValue": 3,
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
                "uid": "BFCD13AB1BFA8548946B9F842946CD911D0B"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {},
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "737AD4D5788EE7433B2A0D928520B2DE97DC"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": 0
                },
                "indent": 0,
                "uid": "A7210F6B585054477918FBA1E46530274A33"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "page4"
                },
                "indent": 0,
                "uid": "3A5851EA2B7FA647F17B554333E6B6A361D2"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
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
                    "sourceValue": 4,
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
                "uid": "379EFD0579E3124AD3795FB1635645B17E50"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {},
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "A05351A199E59849B27A3041C4E652E02161"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": 0
                },
                "indent": 0,
                "uid": "8F7485B827DEF1459339FC364F3015CF465F"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "page5"
                },
                "indent": 0,
                "uid": "85A3F16E103E5748272A3553D5648FB9CAB0"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
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
                    "sourceValue": 5,
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
                "uid": "139C571265340442A63B8489E5812A7777B2"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {},
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "D71B8A3B073DD445DB9A1D9568EACCB21E48"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": 0
                },
                "indent": 0,
                "uid": "804A2F4F109A16464D6AE226423DDFA6B170"
            }
        ],
        "booleanVariables": [
            {
                "name": "Page 1",
                "index": 0,
                "scope": 0
            },
            {
                "name": "Page 2",
                "index": 1,
                "scope": 1,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "Page 3",
                "index": 2,
                "scope": 1,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "Page 4",
                "index": 3,
                "scope": 1,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "Page 5",
                "index": 4,
                "scope": 0
            },
            {
                "name": "In Game",
                "index": 5,
                "scope": 0
            }
        ],
        "stringVariables": [
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