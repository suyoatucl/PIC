GS.dataCache['20047CED82D9664F912885F8DD2F79B3C1E8'] = {
    "uid": "20047CED82D9664F912885F8DD2F79B3C1E8",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Settings Menu",
        "type": "vn.scene",
        "parentId": "0680E2763533F740B54A6C139E537CF59C20",
        "chapterUid": "0680E2763533F740B54A6C139E537CF59C20",
        "order": 4,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.Comment",
                "params": {
                    "text": "In the scene we make our settings menu. We use an image-map to keep things simple. Feel free to use pictures, videos, hotspots, etc. to make it more dynamic.\n\nWe add hotspots on the image-map for ON/OFF like settings. Whenever a hotspot is clicked, a switch is turned ON/OFF and we jump to the approriate label to check the switches and use Set Game Data command to change the settings interally.\n\nFor each slider, we create an independent 20x23 pixel draggable hotspot. The track-rect covers the entire slider-area, means that the 20x23 pixel hotspot can be dragged only horizontal and cannot leave the left and right bounds of the slider. If a hotspot is draggable, we can store the position of the hotspot as a percentage in a variable. That percentage is 0% if the hotspot hits the left-edge of the track-rect and 100% if the hotspot hits the right-edge of the track-rect. For Example: For the Text Speed slider, we store the percentage in local number variable \"0001: Text Speed X\".\n\nWhenever the hotspot is dragged, we jump to the appropriate \"On Drag - XXX\" label and call the \"Update Slider\" common event. We pass the percentage value, the max. value of the settings as parameter so that common event can update the visual representation of the slider. That common event will also convert the percentage-value into the correct internal value and stores it into the global variable we pass as parameter. So after we called that common event, the global variable contains the correct internal value so we can use that variable as input for Set Game Data command. Check out \"Update Slider\" common event in database."
                },
                "indent": 0,
                "uid": "B20BF46E702E4341F35B29275CA1DCDE7DAB",
                "expanded": true
            },
            {
                "id": "gs.FreezeScreen",
                "params": {},
                "indent": 0,
                "uid": "0E7F2D8354B3924C5B7BE666B258F816571D"
            },
            {
                "id": "gs.ShowImageMap",
                "params": {
                    "number": 100,
                    "hotspots": [
                        {
                            "x": 603,
                            "y": 59,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1194,
                                "y": 655,
                                "width": 55,
                                "height": 65,
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
                                "width": 103,
                                "height": 72
                            }
                        },
                        {
                            "x": 810,
                            "y": 176,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 295,
                                "y": 178,
                                "width": 137,
                                "height": 27,
                                "action": 1,
                                "label": "display_window",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Display - Window",
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
                                "width": 141,
                                "height": 27
                            }
                        },
                        {
                            "x": 953,
                            "y": 172,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 313,
                                "y": 123,
                                "width": 169,
                                "height": 35,
                                "action": 1,
                                "label": "display_fullscreen",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Display - Fullscreen",
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
                                "width": 169,
                                "height": 35
                            }
                        },
                        {
                            "x": 949,
                            "y": 229,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 315,
                                "y": 186,
                                "width": 79,
                                "height": 40,
                                "action": 1,
                                "label": "skipmsg_all_msg",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Skip Msg - All Msg.",
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
                                "width": 131,
                                "height": 35
                            }
                        },
                        {
                            "x": 807,
                            "y": 229,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 519,
                                "y": 50,
                                "width": 117,
                                "height": 41,
                                "action": 1,
                                "label": "skipmsg_seen_msg",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Skip Msg - Seen Msg.",
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
                                "width": 117,
                                "height": 35
                            }
                        },
                        {
                            "x": 805,
                            "y": 266,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 860,
                                "y": 300,
                                "width": 142,
                                "height": 36,
                                "action": 1,
                                "label": "skip_choices",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Skip Choices",
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
                                "width": 142,
                                "height": 30
                            }
                        },
                        {
                            "x": 949,
                            "y": 266,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1005,
                                "y": 300,
                                "width": 123,
                                "height": 36,
                                "action": 1,
                                "label": "skip_voices",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Skip Voices",
                                    "index": 5,
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
                                "width": 123,
                                "height": 31
                            }
                        },
                        {
                            "x": 591,
                            "y": 619,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 591,
                                "y": 619,
                                "width": 198,
                                "height": 83,
                                "action": 1,
                                "label": "title",
                                "bindToSwitch": false,
                                "bindEnabledState": true,
                                "enabledSwitch": {
                                    "name": "In Game",
                                    "scope": 1,
                                    "index": 0,
                                    "changed": true,
                                    "domain": "com.degica.vnm.default"
                                },
                                "bindValueTo": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 198,
                                "height": 83
                            }
                        },
                        {
                            "x": 918,
                            "y": 607,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 918,
                                "y": 607,
                                "width": 264,
                                "height": 96,
                                "action": 1,
                                "label": "reset_global",
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
                                "width": 264,
                                "height": 96
                            }
                        }
                    ],
                    "ground": {
                        "name": "Settings_Idle",
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
                        "name": "Settings_Hover",
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
                        "name": "Settings_Hover",
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
                        "name": "Settings_Hover",
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
                        "blendMode": 0,
                        "origin": 1
                    },
                    "blendMode": 0,
                    "zOrder": 0,
                    "numberDomain": "com.degica.vnm.default",
                    "predefinedPositionId": 0
                },
                "indent": 0,
                "expanded": false,
                "uid": "6B8039632E6606400968EDA71C17D9E02727"
            },
            {
                "id": "gs.GetInputData",
                "params": {
                    "field": 0,
                    "state": 0,
                    "targetVariable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    }
                },
                "indent": 0,
                "uid": "12D6D22237BD05464E59E9E7D937C5BDF785"
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "shape": "rect",
                    "positionType": 0,
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
                            "label": "On Drag - Text Speed",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        }
                    },
                    "dragging": {
                        "enabled": 1,
                        "variable": {
                            "name": "Text Speed X",
                            "index": 0,
                            "scope": 0
                        },
                        "horizontal": 1,
                        "vertical": 0,
                        "rect": {
                            "x": 817,
                            "y": 364,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 817,
                                "y": 364,
                                "width": 280,
                                "height": 16,
                                "horizontalFlip": false,
                                "zoom": 1,
                                "angle": 0
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 280,
                                "height": 16
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 1076,
                        "y": 364,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1076,
                            "y": 364,
                            "width": 20,
                            "height": 16,
                            "horizontalFlip": false,
                            "zoom": 1,
                            "angle": 0
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 20,
                            "height": 16
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "301561DA6FC4A84B785B06C7BAF3BA202CFA",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 1,
                        "width": 316,
                        "height": 23
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 0,
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
                        "x": 817,
                        "y": 363,
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
                    "graphic": {
                        "name": "slider_hover",
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
                "uid": "BAA3CD021AB3C24AA509E6C5B1859002C78C",
                "expanded": false
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "shape": "rect",
                    "positionType": 0,
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
                            "label": "On Drag - Auto Speed",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        }
                    },
                    "dragging": {
                        "enabled": 1,
                        "variable": {
                            "name": "Auto Message X",
                            "index": 2,
                            "scope": 0
                        },
                        "horizontal": 1,
                        "vertical": 0,
                        "rect": {
                            "x": 817,
                            "y": 397,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 817,
                                "y": 397,
                                "width": 280,
                                "height": 16,
                                "horizontalFlip": false,
                                "zoom": 1,
                                "angle": 0
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 280,
                                "height": 16
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 1076,
                        "y": 396,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1128,
                            "y": 364,
                            "width": 20,
                            "height": 16,
                            "horizontalFlip": false,
                            "zoom": 1,
                            "angle": 0
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 20,
                            "height": 16
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "number": 1,
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "77445C394DC9414E197900F234D81B496F63",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 1,
                        "width": 316,
                        "height": 23
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 0,
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
                    "positionType": 2,
                    "position": {
                        "x": 817,
                        "y": 397
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
                    "graphic": {
                        "name": "slider_hover",
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
                "uid": "30C9DADD2C47C849E18A3F8426215BB2A2D6",
                "expanded": false
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "shape": "rect",
                    "positionType": 0,
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
                            "label": "On Drag - BGM",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        }
                    },
                    "dragging": {
                        "enabled": 1,
                        "variable": {
                            "name": "BGM Volume X",
                            "index": 3,
                            "scope": 0
                        },
                        "horizontal": 1,
                        "vertical": 0,
                        "rect": {
                            "x": 817,
                            "y": 492,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 817,
                                "y": 492,
                                "width": 280,
                                "height": 16,
                                "horizontalFlip": false,
                                "zoom": 1,
                                "angle": 0
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 280,
                                "height": 16
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 1128,
                        "y": 563,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1128,
                            "y": 539,
                            "width": 20,
                            "height": 23,
                            "horizontalFlip": false,
                            "zoom": 1,
                            "angle": 0
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 20,
                            "height": 23
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "number": 2,
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "2EA5080C2E06B7498C6BA8F7DB072F51A565",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 1,
                        "width": 316,
                        "height": 23
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 0,
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
                    "positionType": 2,
                    "position": {
                        "x": 817,
                        "y": 493
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
                    "graphic": {
                        "name": "slider_hover",
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
                "uid": "A3D06FDF78DC3049EA399B5598DC4F461499",
                "expanded": false
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "shape": "rect",
                    "positionType": 0,
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
                            "label": "On Drag - SFX",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        }
                    },
                    "dragging": {
                        "enabled": 1,
                        "variable": {
                            "name": "SE Volume X",
                            "index": 4,
                            "scope": 0
                        },
                        "horizontal": 1,
                        "vertical": 0,
                        "rect": {
                            "x": 817,
                            "y": 528,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 817,
                                "y": 528,
                                "width": 280,
                                "height": 16,
                                "horizontalFlip": false,
                                "zoom": 1,
                                "angle": 0
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 280,
                                "height": 16
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 1128,
                        "y": 607,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1128,
                            "y": 604,
                            "width": 20,
                            "height": 23,
                            "horizontalFlip": false,
                            "zoom": 1,
                            "angle": 0
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 20,
                            "height": 23
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "number": 3,
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "48162A587632684BA01A26712D6C45F23A1B",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 1,
                        "width": 316,
                        "height": 23
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 0,
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
                    "waitForCompletion": 1,
                    "positionType": 2,
                    "position": {
                        "x": 817,
                        "y": 527
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
                    "graphic": {
                        "name": "slider_hover",
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
                "uid": "AE78B50F48E731428C6AEAF0FF4F96A7F77D",
                "expanded": false
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "shape": "rect",
                    "positionType": 0,
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
                            "label": "On Drag - Voice",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        }
                    },
                    "dragging": {
                        "enabled": 1,
                        "variable": {
                            "name": "Voice Volume X",
                            "index": 5,
                            "scope": 0
                        },
                        "horizontal": 1,
                        "vertical": 0,
                        "rect": {
                            "x": 817,
                            "y": 560,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 817,
                                "y": 560,
                                "width": 280,
                                "height": 16,
                                "horizontalFlip": false,
                                "zoom": 1,
                                "angle": 0
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 280,
                                "height": 16
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 1128,
                        "y": 652,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1128,
                            "y": 652,
                            "width": 20,
                            "height": 23,
                            "horizontalFlip": false,
                            "zoom": 1,
                            "angle": 0
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 20,
                            "height": 23
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "number": 4,
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "F49A1F595345B44C2529F5F426BBEFD3EB9F",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 1,
                        "width": 316,
                        "height": 23
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 0,
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
                    "waitForCompletion": 1,
                    "positionType": 2,
                    "position": {
                        "x": 817,
                        "y": 561
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
                    "graphic": {
                        "name": "slider_hover",
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
                "uid": "780D504A70ADF540951AA7558975E1D6674F",
                "expanded": false
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 0.06
                },
                "indent": 0,
                "uid": "F2C6081A2ACBB54CA46AB491EB65CFC9D478"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 19,
                    "targetVariable": {
                        "name": "Display - Fullscreen",
                        "index": 1,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "72B7E0167C37B243392AAC616DE47A92DDD1"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 19,
                    "targetVariable": {
                        "name": "Display - Window",
                        "index": 0,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "F3E78E0063F8D543BB7B901817B324D29F98"
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
                        "name": "Display - Window",
                        "index": 0,
                        "scope": 0
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 2,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "374E8E26249D384EE938396527A37D22B0CC"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 9,
                    "targetVariable": {
                        "name": "Skip Msg - All Msg.",
                        "index": 2,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "C282926E29AF454B6D58B514745818DD0EC0"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 9,
                    "targetVariable": {
                        "name": "Skip Msg - Seen Msg.",
                        "index": 3,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "B3D5271922C2B34505381C33653D5611339B"
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
                        "name": "Skip Msg - Seen Msg.",
                        "index": 3,
                        "scope": 0
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 2,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "0AAA95AE0FCE21450849D7380877E146D9E7"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 17,
                    "targetVariable": {
                        "name": "Continue Skipping",
                        "index": 4,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "31117EC5690F9649703810A3E6376EBA0294"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 18,
                    "targetVariable": {
                        "name": "Stop Skipping",
                        "index": 5,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "778755086811A948747AC5F34DA61DB00072"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 10,
                    "targetVariable": {
                        "name": "Text Speed X",
                        "index": 0,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "6741CDD426170843707812C75001FB75655F"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 12,
                    "targetVariable": {
                        "name": "Auto Message X",
                        "index": 2,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "E37352C37976774F61884ED8A7EBF07470C1"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 22,
                    "targetVariable": {
                        "name": "BGM Volume X",
                        "index": 3,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "EB8D65298CA6844E91285985795A126AF723"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 24,
                    "targetVariable": {
                        "name": "SE Volume X",
                        "index": 4,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "E236106C8837A74D465A19528F933422BB04"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 23,
                    "targetVariable": {
                        "name": "Voice Volume X",
                        "index": 5,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "5CFC6C117435D4432D1A863952C1F7950490"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Text Speed X",
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
                    "operation": 3,
                    "source": 0,
                    "sourceValue": 25,
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
                "uid": "0F5AFA364DD87647102945C89CEF602C7D53"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Auto Message X",
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
                    "operation": 3,
                    "source": 0,
                    "sourceValue": 25,
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
                "uid": "24E9FD4F4A84424B6958B9014EC6DF255712"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "Text Speed X",
                                "index": 0,
                                "scope": 0
                            },
                            0,
                            4,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "BED7F14E8B19054DF03987661BEF6D9C5FD6"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "Auto Message X",
                                "index": 2,
                                "scope": 0
                            },
                            1,
                            4,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "071F8DFD19F6064D653AEC56AA2183CEF4AE"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "BGM Volume X",
                                "index": 3,
                                "scope": 0
                            },
                            2,
                            100,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "46C7F27531B6674E278856427B53D8E824E0"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "SE Volume X",
                                "index": 4,
                                "scope": 0
                            },
                            3,
                            100,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "5A03E12918D8F54DFE6AD2B62723302DC21B"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "Voice Volume X",
                                "index": 5,
                                "scope": 0
                            },
                            4,
                            100,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "AA93EA991A1820480578A98198289B5EE88A"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 1.2
                },
                "indent": 0,
                "uid": "C3E2B55042B41249B83959E5EDCD74D4ED5F"
            },
            {
                "id": "gs.ScreenTransition",
                "params": {
                    "graphic": null,
                    "duration": 30,
                    "vague": 30,
                    "fieldFlags": {
                        "graphic": 1,
                        "vague": 1,
                        "duration": 0
                    }
                },
                "uid": "F6815A101913F64F0518A4324EF6B22A8C4E",
                "indent": 0
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "6F0E9C2D77B91540D74A7568DBE89B0141D1"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "back"
                },
                "indent": 0,
                "uid": "1188736F548DA34FDA48EEE9806DA2EF8435"
            },
            {
                "id": "gs.SaveSettings",
                "params": {},
                "indent": 0,
                "uid": "082AD4346B1CD248D6699913879FDC9D2AAE"
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "In Settings Menu",
                        "index": 4,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "738051D58233D6480C58663018A5A4552202"
            },
            {
                "id": "vn.ReturnToPreviousScene",
                "params": {},
                "indent": 0,
                "uid": "AD70A38143B0B14D562ACAF1F3AAC35A8AB7"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "1EB0CBD37D16F84D463B6772A85D433CF468"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "save"
                },
                "indent": 0,
                "uid": "5F2BF1741359644BE279306579D90BD945D9"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "788F76F4231BE442882AEDA37BCF0AE6556B",
                        "name": "Save Menu"
                    },
                    "duration": 20,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "savePrevious": 1
                },
                "indent": 0,
                "uid": "185BF80C8B24F8474A691782E9434E8D22D3",
                "expanded": false
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "18D761617DE4234C2E4AB3A3AE5E82ED3C7F"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "load"
                },
                "indent": 0,
                "uid": "A3B5E76342AF044FBE3973B79C0C917D8360"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "E8023FF12DF3024AE35A80B7D3690BED05F3",
                        "name": "Load Menu"
                    },
                    "duration": 20,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "savePrevious": 1
                },
                "indent": 0,
                "uid": "E155581C23E1A449AF7899732A7F5372AEAC"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "734EDAEC2608E54DAA2B41763CFE16AF7B1C"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "title"
                },
                "indent": 0,
                "uid": "80DE0FDD48698849358AF3C4C813CD4CD2A5"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "2379347586025344D738BEE5A39A37A44990",
                    "parameters": {
                        "values": [
                            "Prompt_Quit",
                            "FDE10D61363F62471D2990437FBB8C1DBA5B",
                            0
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "E505B2153FCEE249150890593F2F53C05481"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "4997617001B6B74E00296224EEF27BCBBD6B"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "reset_global"
                },
                "indent": 0,
                "uid": "AF564D4C653ED1463F8A3637EEB915D5F1E9"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "2379347586025344D738BEE5A39A37A44990",
                    "parameters": {
                        "values": [
                            "Prompt_Confirm_SaveLoad",
                            "7EE85C655388A944A87909421BAD5A565F5D",
                            0
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "25AE4F5125BD2445298B8178A0999CFA1DC1"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "675BC1397B024345813A9EE2F045129B065C"
            },
            {
                "id": "gs.Comment",
                "params": {
                    "text": "Here we Change the settings\n\n\n\n"
                },
                "indent": 0,
                "uid": "A854D6527D0C304BE77966A7CB6FC3E05363",
                "expanded": true
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "display_window"
                },
                "indent": 0,
                "uid": "1A6C28CE572AA248C619CC877B03CD2B8AF3"
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
                        "name": "Display - Fullscreen",
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
                "uid": "C44F1EAE5765E7458E9BE838BEBE5EA24EF7"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 11,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0
                },
                "indent": 0,
                "uid": "B766460D83FB9540D71B06B2DF2CA3CA4030"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "B1D1E2964824844D5B3B4912CF2E2A160116"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "display_fullscreen"
                },
                "indent": 0,
                "uid": "D880BD56335C63427128FC468DCA0305DCB6"
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
                        "name": "Display - Window",
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
                "uid": "4CCCCE6F443EE7418F3BA432895652974064"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 11,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 1
                },
                "indent": 0,
                "uid": "0D73B4EE69FC814C2B0B6BD961881A8405B3"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "20BF569814A1E449F04BF7453F69EBA60743"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "skipmsg_all_msg"
                },
                "indent": 0,
                "uid": "8A9F712D69A699413459BA8606C7EFB82855"
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
                        "name": "Skip Msg - Seen Msg.",
                        "index": 3,
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
                "uid": "D5DA946E871D65472F1ABBD6F0DD7FCD3EB9"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 1,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 1
                },
                "indent": 0,
                "uid": "0A989B0910B301434D181084E83C69A832EB"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "771837C915E96946614A40B17A22B945D0DD"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "skipmsg_seen_msg"
                },
                "indent": 0,
                "uid": "6238FCFB62A4F246F95A430449B24162C209"
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
                        "name": "Skip Msg - All Msg.",
                        "index": 2,
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
                "uid": "3AA798A72554734CA64BE3F4FA9FA7D68296"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 1,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0
                },
                "indent": 0,
                "uid": "1944A91C7455F4466778C6B2796E212FB4A9"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "0236DE9888BB164A8108588237EEA8979F27"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "skip_voices"
                },
                "indent": 0,
                "uid": "121F7E2856E8C44F058A2878A75500D0F01E"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 10,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": {
                        "name": "Skip Voices",
                        "index": 5,
                        "scope": 0
                    }
                },
                "indent": 0,
                "uid": "5E7EEB0B45BE1443EE6892D4898C64D8D74B"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "64F49E8F1CCCA34092585610AA11723F0642"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "skip_choices"
                },
                "indent": 0,
                "uid": "0F6AB29F870B8344A95AFEF31A0256BA130F"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 9,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": {
                        "name": "Skip Choices",
                        "index": 4,
                        "scope": 0
                    }
                },
                "indent": 0,
                "uid": "7ECB99BD6968964ECC3B9CE239CD023607CD"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "8727D48F044106450178C193DFAB5B60CE47"
            },
            {
                "id": "gs.Comment",
                "params": {
                    "text": "Here we handle the slider updates\n\n\n\n"
                },
                "indent": 0,
                "uid": "A5D1CAD42A5FC74EB77964532EB65EBCCB59",
                "expanded": true
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "On Drag - Text Speed"
                },
                "indent": 0,
                "uid": "352F9C9D0417D74CC66AD125450AAFE7E768"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "Slider X",
                                "index": 0,
                                "scope": 0
                            },
                            0,
                            5,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "7BE4AC5A2499664EED8A43267953FED4DE82"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 2,
                    "numberValue": {
                        "name": "",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0,
                    "decimalValue": {
                        "name": "",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    }
                },
                "indent": 0,
                "uid": "37C23502143791416968B294634698C59486"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "0329F1118055B74B6F7AB916A8D5E002FDED"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "On Drag - Auto Speed"
                },
                "indent": 0,
                "uid": "4DA4FCDE6008914458792759C49FC3345CC4"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "Auto Message X",
                                "index": 2,
                                "scope": 0
                            },
                            1,
                            5,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "255E76A65F4BF74457881794004DB88A13E9"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 4,
                    "numberValue": {
                        "name": "",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0
                },
                "indent": 0,
                "uid": "B9A1BAC31D8AF9440F7AF8D5CF6AFA551E4D"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "BC794D3455FEC14B611A70406E8CAF072ADC"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "On Drag - BGM"
                },
                "indent": 0,
                "uid": "07D4EECE3A29C6495C5BAFD2D78B8287D8FA"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "BGM Volume X",
                                "index": 3,
                                "scope": 0
                            },
                            2,
                            100,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "2821799021CB464EEC3A5C24C00CBA26D512"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 14,
                    "numberValue": {
                        "name": "",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0
                },
                "indent": 0,
                "uid": "193CF83E5428D840328BF2C82CEEE590F419"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "FE02438A2CB1D644861828A8EC79387E06F7"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "On Drag - SFX"
                },
                "indent": 0,
                "uid": "C6888DF693B3C247E12A4A2048BE9700EEBB"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "SE Volume X",
                                "index": 4,
                                "scope": 0
                            },
                            3,
                            100,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "1D2113526CA87344AA2BF2E81BCAC583CE3C"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 16,
                    "numberValue": {
                        "name": "",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0
                },
                "indent": 0,
                "uid": "165DA45D75EC23406E0A68B6D09C073B483D"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "57383757166658438E7BBC0470E49E74B81F"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "On Drag - Voice"
                },
                "indent": 0,
                "uid": "9A58BCF74B25C2473E189D17D2BC8B9B1135"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "Voice Volume X",
                                "index": 5,
                                "scope": 0
                            },
                            4,
                            100,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "1DD0F0965C47B243EF4942834B2E6AC8536B"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 15,
                    "numberValue": {
                        "name": "",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0
                },
                "indent": 0,
                "uid": "B11F4C0D7C27E948332AB063E8DDB9C90989"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "62DCEA9A0C19F54C2D5B10D4AB3A58507C75"
            }
        ],
        "livePreviewDisabled": false,
        "booleanVariables": [
            {
                "name": "Display - Window",
                "index": 0,
                "scope": 0
            },
            {
                "name": "Display - Fullscreen",
                "index": 1,
                "scope": 0
            },
            {
                "name": "Skip Msg - All Msg.",
                "index": 2,
                "scope": 0
            },
            {
                "name": "Skip Msg - Seen Msg.",
                "index": 3,
                "scope": 0
            },
            {
                "name": "Skip Choices",
                "index": 4,
                "scope": 0
            },
            {
                "name": "Skip Voices",
                "index": 5,
                "scope": 0
            },
            {
                "name": "In Game",
                "index": 6,
                "scope": 0
            }
        ],
        "numberVariables": [
            {
                "name": "Text Speed X",
                "index": 0,
                "scope": 0
            },
            {
                "name": "Message Speed",
                "index": 1,
                "scope": 0
            },
            {
                "name": "Auto Message X",
                "index": 2,
                "scope": 0
            },
            {
                "name": "BGM Volume X",
                "index": 3,
                "scope": 0
            },
            {
                "name": "SE Volume X",
                "index": 4,
                "scope": 0
            },
            {
                "name": "Voice Volume X",
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