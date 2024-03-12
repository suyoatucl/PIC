GS.dataCache['611C50B503B7324D026B38669E1A2D89103D'] = {
    "uid": "611C50B503B7324D026B38669E1A2D89103D",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Update Pages",
        "type": "data_record",
        "order": 1,
        "category": "commonEvents",
        "id": "611C50B503B7324D026B38669E1A2D89103D",
        "isFolder": false,
        "parentId": "72A65D9D3FA5C349F70A8EB8E315DC45F796",
        "data": {
            "name": "Update Pages",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": true,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "This common event is inlined, so it is pasted into the scene at the position of the \"Call Common Event\" command. So all local variables accessed here are the local variables of the scene. The local numbers from 0001 to 0005 represent the selection-status of the 1 to 5 page numbers at the bottom of the screen. Since that page numbers are displayed via an image-map, they can be all selected independent from each that. But for this example, we have to make sure that only one page can be active at a time. So in the \"Show Image Map\" command of scene, we bound the pages 1 to 5 to the Switches 0001 to 0005.\n\nWhat we do here is that we set all 5 switches to OFF and then only turn the switch on for the current selected page. Since the switch is bound to the hotspot of the image, changing the switch also changes the hotspot state. So with that, we implemented a small logic here which makes sure that only one switch/hotspot can be selected at the same time."
                    },
                    "indent": 0,
                    "uid": "4943D52850A5F34CEA580BB4CBFEA7C6A887",
                    "expanded": true
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Page 1",
                            "index": 0,
                            "scope": 0
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
                    "uid": "DE10DB381172A246D01BAF984902DCD1641F"
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Page 2",
                            "index": 1,
                            "scope": 0
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
                    "uid": "265C235F4937D044EA5B5975AE961E7E62D4"
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Page 3",
                            "index": 2,
                            "scope": 0
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
                    "uid": "4ABBBC170EB3F5466B2A40A3C9BACF94254A"
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Page 4",
                            "index": 3,
                            "scope": 0
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
                    "uid": "F4B65ECE690AD744E45B97D3FB8EA9911CDF"
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Page 5",
                            "index": 4,
                            "scope": 0
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
                    "uid": "5ABEBB928A7EF34FFD3B20D98056077C1EEE"
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 2,
                        "targetReference": {
                            "name": "Page",
                            "index": 1,
                            "scope": 0
                        },
                        "targetVariable": {
                            "scope": 1,
                            "index": 0,
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
                    "uid": "1E2B7C8176AE624DAF0A1D02C0BC800AFC5A"
                }
            ],
            "index": "611C50B503B7324D026B38669E1A2D89103D",
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
                },
                {
                    "name": "Page",
                    "index": 1,
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