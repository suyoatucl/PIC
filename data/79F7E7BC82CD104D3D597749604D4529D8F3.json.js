GS.dataCache['79F7E7BC82CD104D3D597749604D4529D8F3'] = {
    "uid": "79F7E7BC82CD104D3D597749604D4529D8F3",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Open Settings Menu",
        "type": "data_record",
        "order": 4,
        "category": "commonEvents",
        "id": "79F7E7BC82CD104D3D597749604D4529D8F3",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Open Settings Menu",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
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
                    "indent": 0,
                    "uid": "FC0A252A52AB444E343B2863D89C21C7D517"
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
                    "indent": 0,
                    "uid": "4B4922278B8EE842DE782CA43CD1008FC07E",
                    "expanded": false
                }
            ],
            "index": "79F7E7BC82CD104D3D597749604D4529D8F3",
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