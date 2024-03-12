GS.dataCache['FDE10D61363F62471D2990437FBB8C1DBA5B'] = {
    "uid": "FDE10D61363F62471D2990437FBB8C1DBA5B",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Back to Title",
        "type": "data_record",
        "order": 1,
        "category": "commonEvents",
        "id": "FDE10D61363F62471D2990437FBB8C1DBA5B",
        "isFolder": false,
        "parentId": "677243CC39A690411E097A987D96083D4045",
        "data": {
            "name": "Back to Title",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "This common event brings the user back to the title screen."
                    },
                    "indent": 0,
                    "expanded": true,
                    "uid": "7CD20B1115D1144A703868C79E286CE7BDFC"
                },
                {
                    "id": "gs.ListClear",
                    "params": {
                        "listVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 0,
                    "uid": "933D31DA130C04457F1B6C15E70921561E93"
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
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 0
                    },
                    "indent": 0,
                    "uid": "68D2971438392340B76B7FB0C999689890AA"
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
                            "domain": "com.degica.vnm.default"
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
                    "uid": "78C28ACF3081694C266AA5C80B8A0278ED88"
                },
                {
                    "id": "vn.ChangeScene",
                    "params": {
                        "scene": {
                            "uid": "96EB6CA99CCFF94DE04917C216F085E8E747",
                            "name": "Title Screen"
                        },
                        "savePrevious": 0,
                        "duration": 20,
                        "erasePictures": 1,
                        "eraseTexts": 1,
                        "eraseVideos": 1,
                        "fieldFlags": {
                            "duration": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "expanded": false,
                    "uid": "1C2C62C25336A349371B1FD841DEFD0CC22B"
                }
            ],
            "index": "FDE10D61363F62471D2990437FBB8C1DBA5B",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "defaultExpressionId": "BF7CB12110894142C299D341A545C910AA86",
            "stringVariables": [
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
            "listVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ]
        },
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "order"
    ]
}