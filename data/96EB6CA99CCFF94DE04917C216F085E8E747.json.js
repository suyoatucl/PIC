GS.dataCache['96EB6CA99CCFF94DE04917C216F085E8E747'] = {
    "uid": "96EB6CA99CCFF94DE04917C216F085E8E747",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Title Screen",
        "type": "vn.scene",
        "parentId": "0680E2763533F740B54A6C139E537CF59C20",
        "chapterUid": "0680E2763533F740B54A6C139E537CF59C20",
        "order": 0,
        "commands": [
            {
                "id": "gs.Comment",
                "params": {
                    "text": "In this scene we make the title screen. We use an image-map to keep it simple as possible. Feel free to use single-images, videos, hotspots, etc. to make it more dynamic.\n\nFor each menu-entry we create a hotspot on the image-map and jump to the appropriate label if the hotspot gets clicked."
                },
                "uid": "A2460E090335B947411B02A444E2658A7A40",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.UIAccess",
                "params": {
                    "saveMenu": 0,
                    "loadMenu": 0,
                    "generalMenu": 0,
                    "backlog": 1,
                    "fieldFlags": {
                        "saveMenu": 0,
                        "loadMenu": 0,
                        "generalMenu": 0,
                        "backlog": 1
                    }
                },
                "indent": 0,
                "uid": "08CAD2067291764778691245746ECFA10589"
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
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
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
                "uid": "239768BF2B0F624C0E2AA6F70BE1ABC0F276"
            },
            {
                "id": "gs.ShowImageMap",
                "params": {
                    "number": 0,
                    "hotspots": [
                        {
                            "x": 828,
                            "y": 195,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 951,
                                "y": 195,
                                "width": 134,
                                "height": 51,
                                "action": 1,
                                "label": "start",
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
                                "width": 267,
                                "height": 51
                            }
                        },
                        {
                            "x": 830,
                            "y": 259,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 963,
                                "y": 259,
                                "width": 116,
                                "height": 61,
                                "action": 1,
                                "label": "load",
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
                                "width": 269,
                                "height": 61
                            }
                        },
                        {
                            "x": 830,
                            "y": 333,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 959,
                                "y": 333,
                                "width": 181,
                                "height": 68,
                                "action": 1,
                                "label": "options",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "finish": false,
                                "zoom": null,
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
                                "width": 218,
                                "height": 59
                            }
                        },
                        {
                            "x": 829,
                            "y": 402,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 959,
                                "y": 402,
                                "width": 242,
                                "height": 74,
                                "action": 1,
                                "label": "cg",
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
                                "width": 164,
                                "height": 55
                            }
                        },
                        {
                            "x": 832,
                            "y": 477,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 958,
                                "y": 477,
                                "width": 111,
                                "height": 69,
                                "action": 1,
                                "label": "quit",
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
                                "width": 150,
                                "height": 58
                            }
                        }
                    ],
                    "ground": {
                        "name": "titlescreen_idle",
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
                        "name": "titlescreen_hover",
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
                        "zOrder": 0,
                        "blendMode": 0
                    },
                    "zOrder": 0,
                    "blendMode": 0,
                    "predefinedPositionId": 0,
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "expanded": false,
                "uid": "64C4FBD88DE0B049104B9F12352D74226EE8"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "start"
                },
                "indent": 0,
                "uid": "1C7AB8380D48F74EE13BB5C752D92F3472E1"
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
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
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
                "uid": "7EB8E04865A0A3446E1A88B35A68D1A02A4B"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "3305C56CKBF5BA44BFS8614EE4B277E49F6A",
                        "name": "Sample Scene"
                    },
                    "duration": 20,
                    "erasePictures": 1,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "savePrevious": 0
                },
                "indent": 0,
                "uid": "2FB8DFBC269AD445DF487D74FE478C720A1E",
                "expanded": false
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "762E97CE6FC4C3439D88C4D1BC61A00E7392"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "load"
                },
                "indent": 0,
                "uid": "F86170F130E3E7479B4B1F155BC1A607681D"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "E8023FF12DF3024AE35A80B7D3690BED05F3",
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
                "uid": "2FF8DAD062CB0343668B4E73DAB00E8A2457",
                "expanded": false
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "6807E3E6471AF54EE498EC41540E637CF0F0"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "options"
                },
                "indent": 0,
                "uid": "E4AC6F4B67A687475E8B49A6949F7E72F285"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "20047CED82D9664F912885F8DD2F79B3C1E8",
                        "name": "Settings Menu"
                    },
                    "duration": 20,
                    "erasePictures": 1,
                    "eraseTexts": 1,
                    "eraseVideos": 1,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "savePrevious": 1
                },
                "indent": 0,
                "uid": "DCA7132F66774541EC48F605CDAC757506FD",
                "expanded": false
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "7129C97614E4074A966B57A71755BD499C08"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "cg"
                },
                "indent": 0,
                "uid": "6712E13B7B578441715B71297860B1BD0B50"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "83F3B6066A2EE444DD0AD086BF9D53D4A299",
                        "name": "CG Gallery"
                    },
                    "duration": 20,
                    "erasePictures": 1,
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
                "uid": "63EE6569129FA7480209F4090C49C221AA50",
                "expanded": true
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "F53EB3594E28A740945BF6B27BB39E04558C"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "quit"
                },
                "indent": 0,
                "uid": "23401433646EF548765B6540472D01DE7696"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": null,
                    "savePrevious": 0,
                    "duration": 20,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "59F3F93334A82344443A1358E60490C39909"
            }
        ],
        "livePreviewDisabled": false,
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ]
}