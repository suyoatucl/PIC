GS.dataCache['B5EB90613FD27245BC7A8EF5B9C7EB66C47C'] = {
    "uid": "B5EB90613FD27245BC7A8EF5B9C7EB66C47C",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Add Choice",
        "type": "data_record",
        "order": 2,
        "category": "commonEvents",
        "id": "B5EB90613FD27245BC7A8EF5B9C7EB66C47C",
        "isFolder": false,
        "parentId": "F26220389226014E955B8907DC7C1FEBEF5E",
        "data": {
            "name": "Add Choice",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [
                {
                    "label": "Text",
                    "type": 3,
                    "stringVariable": {
                        "name": "Text",
                        "index": 0,
                        "scope": 0
                    },
                    "stringValueType": "text"
                },
                {
                    "label": "Call Scene",
                    "type": 3,
                    "stringVariable": {
                        "name": "Scene ID",
                        "index": 1,
                        "scope": 0
                    },
                    "stringValueType": "sceneId"
                }
            ],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Adds a choice to the list of choices which can be displayed via Show Choices common event. After Show Choices common event has been called, the choice list is empy again. It takes two parameters:\n\nText - The Choice Text which should be displayed\nCall Scene - A scene which will be called if the choice has been selected. The scene will be called the same way as Call Scene command."
                    },
                    "indent": 0,
                    "uid": "9BD01D67005723402148F806DDEE937AE826",
                    "expanded": true
                },
                {
                    "id": "gs.ListAdd",
                    "params": {
                        "valueType": 2,
                        "listVariable": {
                            "name": "Choices",
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 0,
                        "switchValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "stringValue": {
                            "name": "Text",
                            "index": 0,
                            "scope": 0
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
                    "indent": 0,
                    "uid": "96E0F71F3934D14668589CD58F9A8C5894AA"
                },
                {
                    "id": "gs.ListAdd",
                    "params": {
                        "valueType": 2,
                        "listVariable": {
                            "name": "Choice Actions",
                            "index": 1,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 0,
                        "switchValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "stringValue": {
                            "name": "Scene ID",
                            "index": 1,
                            "scope": 0
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
                    "indent": 0,
                    "uid": "7A9139104DD1204EFB5960A450C657D483F7"
                }
            ],
            "index": "B5EB90613FD27245BC7A8EF5B9C7EB66C47C",
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
                    "name": "Text",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Scene ID",
                    "index": 1,
                    "scope": 0
                }
            ],
            "listVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "defaultExpressionId": "BF7CB12110894142C299D341A545C910AA86"
        }
    },
    "summary": [
        "name",
        "type",
        "order"
    ]
}