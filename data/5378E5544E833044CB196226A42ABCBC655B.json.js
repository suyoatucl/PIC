GS.dataCache['5378E5544E833044CB196226A42ABCBC655B'] = {
    "uid": "5378E5544E833044CB196226A42ABCBC655B",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Save Game",
        "type": "data_record",
        "order": 1,
        "category": "commonEvents",
        "id": "5378E5544E833044CB196226A42ABCBC655B",
        "isFolder": false,
        "parentId": "72A65D9D3FA5C349F70A8EB8E315DC45F796",
        "data": {
            "name": "Save Game",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [
                {
                    "label": "Page",
                    "type": 1,
                    "numberVariable": {
                        "name": "Page",
                        "index": 1,
                        "scope": 0
                    },
                    "numberValueType": "number"
                },
                {
                    "label": "Slot",
                    "type": 1,
                    "numberVariable": {
                        "name": "Slot",
                        "index": 2,
                        "scope": 0
                    },
                    "numberValueType": "number"
                }
            ],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "This Common Event saves the game to a save game slot. The page-number and slot-area are passed via parameters.\n\nWith the help of the page-number and slot-area we calculate the actual save game slot number using the following formula:\n\n(Page - 1) * NumberOfSlotAreas + Slot-Area = Actual Save Game Slot Number\n\nFor Example: If the user clicks on the 2. Slot-Area on Page 3 the actual save game slot number is: \n\n(3 - 1) * 8 + 2 = 18\n\nAfter we calculated the correct slot-number, we use \"Save Game\" command to load that save game. It is important that the \"Prepare Save Game\" command is called BEFORE this\ncommon event is called. Because only \"Prepare Save Game\" creates the snapshot of the game and the screenshot. The \"Save Game\" command only writes the snapshot of the game to disk. But if there is no snapshot, it does nothing."
                    },
                    "indent": 0,
                    "uid": "3E7A6FA93072E54D563A25B4EA482425AFFE",
                    "expanded": true
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Page",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "78433B1C7E81F64723498E11AC239F6A0C71"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Slot",
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
                        "sourceValue": {
                            "name": "Page",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "2E8C2E9B80CF7548EA5B6DC3F9E824E7DB88"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Slot",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 3,
                        "source": 0,
                        "sourceValue": 8,
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "20EB5817536AF84C27692424345D96E17E61"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Slot",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 1,
                        "source": 0,
                        "sourceValue": {
                            "name": "Slot",
                            "index": 2,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "929A390811BB15421E6A1BF696440E556F0E"
                },
                {
                    "id": "gs.SaveGame",
                    "params": {
                        "slot": {
                            "name": "Slot",
                            "index": 0,
                            "scope": 0
                        },
                        "thumbWidth": 166,
                        "thumbHeight": 94
                    },
                    "indent": 0,
                    "uid": "3536A2F42762634A6A3990922DA8123140F9"
                }
            ],
            "index": "5378E5544E833044CB196226A42ABCBC655B",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "Slot",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Page",
                    "index": 1,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Slot",
                    "index": 2,
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