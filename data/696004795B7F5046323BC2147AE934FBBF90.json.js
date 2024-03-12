GS.dataCache['696004795B7F5046323BC2147AE934FBBF90'] = {
    "uid": "696004795B7F5046323BC2147AE934FBBF90",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Open Settings Menu (Right Click)",
        "type": "data_record",
        "order": 3,
        "category": "commonEvents",
        "id": "696004795B7F5046323BC2147AE934FBBF90",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Open Settings Menu (Right Click)",
            "startCondition": 1,
            "conditionEnabled": true,
            "parallel": true,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "This common event runs in the background in parallel to the scene to allow the player to open the settings menu with right click. It check if the right mouse button has been pressed using the \"Input Data\" command. It stores the state of the right button in the local number variable 0001 \"Right Button\". If that variable contains 1, it means the button is pressed. In that case, it switches to the \"Settings Menu\" scene. That all only happens if the \"In Game\" switch is ON which indicates that we are in a game scene right now and not in another menu."
                    },
                    "indent": 0,
                    "uid": "C3417E5D8B09E9414A886364678C81E97910",
                    "expanded": true
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Backlog Opened",
                            "index": 1,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 0,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "CDD749796453F2489258E10656F188C683B7"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "In Settings Menu",
                            "index": 4,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "FBEEC77616B1C34FFD7A93B389AE8866F646"
                },
                {
                    "id": "gs.GetInputData",
                    "params": {
                        "field": 12,
                        "state": 0,
                        "targetVariable": {
                            "name": "Right Button",
                            "index": 0,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 2,
                    "uid": "009B8DBE4DB7D84A429A9397374944F35289"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Right Button",
                            "index": 0,
                            "scope": 0
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
                    "indent": 2,
                    "uid": "19A38A8D8BCF824CED2BF89927D400362649"
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
                        "value": 1,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 3,
                    "uid": "06A5C2C039A7234B844AC687D63F9C1FE0F2"
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
                        "value": 1,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 3,
                    "uid": "FFEAEE7E81025842E478FAD7FC636E91A8EE"
                },
                {
                    "id": "vn.ChangeScene",
                    "params": {
                        "scene": {
                            "uid": "20047CED82D9664F912885F8DD2F79B3C1E8",
                            "name": "Settings Menu"
                        },
                        "savePrevious": 1,
                        "duration": 20,
                        "erasePictures": 0,
                        "eraseTexts": 0,
                        "eraseVideos": 0,
                        "fieldFlags": {
                            "duration": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 3,
                    "uid": "4A63E5D98A1CE740C728054544963ADAC580",
                    "expanded": false
                }
            ],
            "index": "696004795B7F5046323BC2147AE934FBBF90",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "Right Button",
                    "index": 0,
                    "scope": 0
                }
            ],
            "stringVariables": [
                {
                    "name": "Scene ID",
                    "index": 0,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                }
            ],
            "conditionSwitch": {
                "name": "In Game",
                "scope": 1,
                "index": 0,
                "changed": true,
                "domain": "com.degica.vnm.default"
            },
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