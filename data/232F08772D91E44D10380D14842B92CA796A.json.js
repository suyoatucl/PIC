GS.dataCache['232F08772D91E44D10380D14842B92CA796A'] = {
    "uid": "232F08772D91E44D10380D14842B92CA796A",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Open Save Menu",
        "type": "data_record",
        "order": 5,
        "category": "commonEvents",
        "id": "232F08772D91E44D10380D14842B92CA796A",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Open Save Menu",
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
                        "text": "This common event opens the save menu. It is important to call \"Prepare Save Game\" here because only that commands creates the actual snapshot of the game and a screenshot from the screen. The \"Save Game\" command only writes current snapshot to disk. If there is no snapshot because \"Prepare Save Game\" has not been called, nothing will happen."
                    },
                    "indent": 0,
                    "uid": "0156D314359B8540D52836E4ACBFFE237234",
                    "expanded": true
                },
                {
                    "id": "gs.PrepareSaveGame",
                    "params": {
                        "snapshot": 1
                    },
                    "indent": 0,
                    "uid": "7973044156176441E71BA12051662332938B"
                },
                {
                    "id": "vn.ChangeScene",
                    "params": {
                        "scene": {
                            "uid": "788F76F4231BE442882AEDA37BCF0AE6556B",
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
                    "expanded": false,
                    "uid": "5670B64353A3814FC869F1E12AFC61A87F1C"
                }
            ],
            "index": "232F08772D91E44D10380D14842B92CA796A",
            "booleanVariables": [
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
            "numberVariables": [
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