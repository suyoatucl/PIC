GS.dataCache['651E26D86B1CF647633BEC272FD6CEB53A8E'] = {
    "uid": "651E26D86B1CF647633BEC272FD6CEB53A8E",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Open Load Menu",
        "type": "data_record",
        "order": 11,
        "category": "commonEvents",
        "id": "651E26D86B1CF647633BEC272FD6CEB53A8E",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Open Load Menu",
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
                        "text": "This common events opens the load menu."
                    },
                    "indent": 0,
                    "uid": "11393F3B50FE9344E87B36273837F59C8CB4",
                    "expanded": true
                },
                {
                    "id": "vn.ChangeScene",
                    "params": {
                        "scene": {
                            "uid": "E8023FF12DF3024AE35A80B7D3690BED05F3",
                            "name": "Load Menu"
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
                    "uid": "7A35830215A98149E85B3114C99FE35EB482"
                }
            ],
            "index": "651E26D86B1CF647633BEC272FD6CEB53A8E",
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