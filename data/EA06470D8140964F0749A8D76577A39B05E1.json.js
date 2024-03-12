GS.dataCache['EA06470D8140964F0749A8D76577A39B05E1'] = {
    "uid": "EA06470D8140964F0749A8D76577A39B05E1",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Hide Message Box",
        "type": "data_record",
        "order": 1,
        "category": "commonEvents",
        "id": "EA06470D8140964F0749A8D76577A39B05E1",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Hide Message Box",
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
                        "text": "To hide our message box, we just erase the text for the character name, the message box image-map as well as the message area. After that we use \"Set Message Target\" with \"gameMessage_message\" to make sure that from now on, all message commands such as \"Show Message\", etc. are displayed in the default message area defined by the JSON layout."
                    },
                    "indent": 0,
                    "uid": "48D6C00D71DF044DD338CCD5195E0E137188",
                    "expanded": true
                },
                {
                    "id": "gs.EraseImageMap",
                    "params": {
                        "number": 99,
                        "duration": 30,
                        "waitForCompletion": 0,
                        "easing": {
                            "type": 1,
                            "inOut": 2
                        },
                        "animation": {
                            "type": 0,
                            "movement": 3,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "easing.type": 0,
                            "animation.type": 0
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "E9E1300F28E31243D9081E98F54A3CF0F431",
                    "expanded": true
                },
                {
                    "id": "gs.EraseText",
                    "params": {
                        "number": 0,
                        "duration": 0,
                        "waitForCompletion": 0,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 0,
                            "movement": 3,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 1,
                            "easing.type": 1,
                            "animation.type": 0
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "6BF7BE8E4359924CB55AEB67BD73ED1133AA",
                    "expanded": true
                },
                {
                    "id": "gs.EraseMessageArea",
                    "params": {
                        "number": 0,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "506E7E761A5213417B18DE906DCEEE6A4EEB"
                },
                {
                    "id": "gs.SetTargetMessage",
                    "params": {
                        "id": "gameMessage_message",
                        "number": 0,
                        "type": 0,
                        "clear": 1,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "81046CAF2F6E2942042B54D95C16DF186C8C"
                }
            ],
            "index": "EA06470D8140964F0749A8D76577A39B05E1",
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