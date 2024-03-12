GS.dataCache['D8E05EB72661774C22191695989A9A5A66FA'] = {
    "uid": "D8E05EB72661774C22191695989A9A5A66FA",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Load Game",
        "type": "data_record",
        "order": 2,
        "category": "commonEvents",
        "id": "D8E05EB72661774C22191695989A9A5A66FA",
        "isFolder": false,
        "parentId": "72A65D9D3FA5C349F70A8EB8E315DC45F796",
        "data": {
            "name": "Load Game",
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
                        "text": "This Common Event loads a save game. The page-number and slot-area are passed via parameters.\n\nFirst we call the \"Confirm\" common event to show a confirmation box to make the user really wants to load the selected save game. We store the result of that confirmation box in a global variable called \"Confirmation Result\". If that variable is 1, it means that the user selected \"Yes\". If so, we can load the game. Otherwise we do nothing.\n\nWith the help of the page-number and slot-area we calculate the actual save game slot number using the following formula:\n\n(Page - 1) * NumberOfPages + Slot-Area = Actual Save Game Slot Number\n\nFor Example: If the user clicks on the 2. Slot-Area on Page 3 the actual save game slot number is: \n\n(3 - 1) * 5 + 2 = 12\n\nAfter we calculated the correct slot-number, we use \"Load Game\" command to load that save game."
                    },
                    "indent": 0,
                    "uid": "2B37430742531443752B06E7FD039D7865FF",
                    "expanded": true
                },
                {
                    "id": "gs.CallCommonEvent",
                    "params": {
                        "commonEventId": "2379347586025344D738BEE5A39A37A44990",
                        "parameters": {
                            "values": [
                                "Prompt_Confirm_SaveLoad",
                                16,
                                1
                            ]
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "C4677D2655A7954F961A18506E5598DE726C"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Confirmation Result",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 1,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "F1E5CED17FC9D6495848EB076E6352CAC8CF"
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
                    "indent": 1,
                    "uid": "E46E3C5D11DAF348A62B3F78D3A5D0FA19EA"
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
                    "indent": 1,
                    "uid": "871606919F7AF140221A0F99450A100FACE9"
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
                    "indent": 1,
                    "uid": "60F68C8166087649C7683AB3E32C2BBB0F2D"
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
                    "indent": 1,
                    "uid": "7CA239683049B04E5B9935E099580DE28408"
                },
                {
                    "id": "gs.LoadGame",
                    "params": {
                        "slot": {
                            "name": "Slot",
                            "index": 0,
                            "scope": 0
                        }
                    },
                    "indent": 1,
                    "uid": "95BFD1632E4C4747B0487223499A0630725D"
                }
            ],
            "index": "D8E05EB72661774C22191695989A9A5A66FA",
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
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
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
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
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