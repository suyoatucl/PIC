GS.dataCache['281DB3B355CF0747EC8BC489D060D1E2D442'] = {
    "uid": "281DB3B355CF0747EC8BC489D060D1E2D442",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Toggle Auto Message",
        "type": "data_record",
        "order": 9,
        "category": "commonEvents",
        "id": "281DB3B355CF0747EC8BC489D060D1E2D442",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Toggle Auto Message",
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
                        "text": "We call this common event whenever the user clicks on the \"Auto\" link in our message box. In that case, we set the current auto message setting to the value of our global switch bound to the hotspot state.\n\nSo if this common event is called, Auto Message will be disabled if it was enabled before and vice versa."
                    },
                    "indent": 0,
                    "uid": "C028B5C73942304E9818D454AE315C4EF950",
                    "expanded": true
                },
                {
                    "id": "vn.SetGameData",
                    "params": {
                        "field": 3,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Auto Message",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        }
                    },
                    "indent": 0,
                    "uid": "3464BCAF798782477128A425DDC54C6404AA"
                }
            ],
            "index": "281DB3B355CF0747EC8BC489D060D1E2D442",
            "booleanVariables": [
                {
                    "name": "Auto Message",
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