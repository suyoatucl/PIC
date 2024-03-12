GS.dataCache['6E22FF5D1C6A79487128F7B5BAFF232629A8'] = {
    "uid": "6E22FF5D1C6A79487128F7B5BAFF232629A8",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Toggle Skip",
        "type": "data_record",
        "order": 2,
        "category": "commonEvents",
        "id": "6E22FF5D1C6A79487128F7B5BAFF232629A8",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Toggle Skip",
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
                        "text": "Since VN Maker has no built-in command by default to change skip-mode, we use a simple script line here to toggle the skip-state. Means if skip-mode is enabled, it will be disabled and vice-versa. It is the same like in \"Toggle Auto Message\" common event. The difference is just that we are using a script call here."
                    },
                    "indent": 0,
                    "uid": "2AA413AE2D2772447F7ABCC4F7B50B500F26",
                    "expanded": true
                },
                {
                    "id": "vn.SetGameData",
                    "params": {
                        "field": 21,
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": {
                            "name": "Game Skip",
                            "index": 2,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        }
                    },
                    "indent": 0,
                    "uid": "2C3362CC1AE4444E97590DF004D7029BF9AC"
                }
            ],
            "index": "6E22FF5D1C6A79487128F7B5BAFF232629A8",
            "booleanVariables": [
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