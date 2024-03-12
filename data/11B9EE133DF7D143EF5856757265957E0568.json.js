GS.dataCache['11B9EE133DF7D143EF5856757265957E0568'] = {
    "uid": "11B9EE133DF7D143EF5856757265957E0568",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Update Log",
        "type": "data_record",
        "order": 6,
        "category": "commonEvents",
        "id": "11B9EE133DF7D143EF5856757265957E0568",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Update Log",
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
                        "text": "This common event runs in the background in parallel to the scene but only if the backlog is currently visible. It gets the current state of the left mouse button and stores it into the local \"Left Button\" number variable. If that variable is 1 it means that the button is currently pressed. In that case, we call the \"Toggle Log\" common event to close the backlog."
                    },
                    "indent": 0,
                    "uid": "0C8AC44B8EEA11409D8A5762D051F4AF5ABB",
                    "expanded": true
                },
                {
                    "id": "gs.GetInputData",
                    "params": {
                        "field": 11,
                        "state": 0,
                        "targetVariable": {
                            "name": "Left Button",
                            "index": 0,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "C946FEA570ADF3421959CB4162B46BE9850F"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Left Button",
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
                    "indent": 0,
                    "uid": "50291C70961D6748EF2B00E15AB7946C50F0"
                },
                {
                    "id": "gs.CallCommonEvent",
                    "params": {
                        "commonEventId": "100DB9771B021145632A8756785EE9396B24",
                        "parameters": {
                            "values": []
                        }
                    },
                    "indent": 1,
                    "uid": "EB6E19F485A9F84D008B1643F3946D73FFCA"
                }
            ],
            "index": "11B9EE133DF7D143EF5856757265957E0568",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "conditionSwitch": {
                "name": "Backlog Opened",
                "index": 1,
                "scope": 1,
                "changed": true,
                "domain": "com.degica.vnm.default"
            },
            "numberVariables": [
                {
                    "name": "Left Button",
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