GS.dataCache['C26C594D99C547420888BD65FE59F03AD507'] = {
    "uid": "C26C594D99C547420888BD65FE59F03AD507",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Update Slider",
        "type": "data_record",
        "order": 2,
        "category": "commonEvents",
        "id": "C26C594D99C547420888BD65FE59F03AD507",
        "isFolder": false,
        "parentId": "5A8B29D301CE814E2E2BF6930C0DC05DD96F",
        "data": {
            "name": "Update Slider",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [
                {
                    "label": "Value",
                    "type": 1,
                    "numberVariable": {
                        "name": "Value",
                        "index": 0,
                        "scope": 0
                    },
                    "numberValueType": "number"
                },
                {
                    "label": "Picture ID",
                    "type": 1,
                    "numberVariable": {
                        "name": "Picture ID",
                        "index": 1,
                        "scope": 0
                    },
                    "numberValueType": "number"
                },
                {
                    "label": "Max. Value",
                    "type": 1,
                    "numberVariable": {
                        "name": "Max. Value",
                        "index": 2,
                        "scope": 0
                    },
                    "numberValueType": "number"
                },
                {
                    "label": "Store in",
                    "type": 1,
                    "numberVariable": {
                        "name": "Store in",
                        "index": 3,
                        "scope": 0
                    },
                    "numberValueType": "number"
                }
            ],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "This common event updates a slider to make sure the graphical representation of the slider matches the internal value. The common event takes 4 parameters:\n\nValue - The current internal value which should be displayed through the slider\nPicture ID - The ID of the picture used by the slider to update\nMax. Value - The max. value the slider/internal-value can reach\nStore in - "
                    },
                    "indent": 0,
                    "uid": "E484568241C4584847983DA6052F00DC2239",
                    "expanded": true
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "",
                            "index": 4,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "Value",
                            "index": 0,
                            "scope": 0
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "sourceReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "CBCCA5B74720864B9C199EC2594D85F323FE"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "",
                            "index": 4,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 3,
                        "source": 0,
                        "sourceValue": 280,
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "sourceReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "7423AB2A3153C445185B88F488A2F9069099"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "",
                            "index": 4,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 4,
                        "source": 0,
                        "sourceValue": 100,
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "sourceReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "2F43FA9B593FC548DC8A7757B9A8ECA1DD02"
                },
                {
                    "id": "gs.CropPicture",
                    "params": {
                        "number": {
                            "name": "Picture ID",
                            "index": 1,
                            "scope": 0
                        },
                        "x": 0,
                        "y": 0,
                        "width": {
                            "name": "",
                            "index": 4,
                            "scope": 0
                        },
                        "height": 16,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "557919E167D18743089B2F06B4711CE3472E"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "",
                            "index": 4,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "Value",
                            "index": 0,
                            "scope": 0
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "sourceReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "3A690DD21B8B854A2B3822D9DC349133FD90"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "",
                            "index": 4,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 3,
                        "source": 0,
                        "sourceValue": {
                            "name": "Max. Value",
                            "index": 2,
                            "scope": 0
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "sourceReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "B4C6801C8E54D64F0F1A37B6A5C157543CC5"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "",
                            "index": 4,
                            "scope": 0
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 4,
                        "source": 0,
                        "sourceValue": 100,
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "sourceReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "8D9CF7E508FD6448760AA658CF4E63C27D19"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 2,
                        "targetVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 1,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReference": {
                            "name": "Store in",
                            "index": 3,
                            "scope": 0
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "",
                            "index": 4,
                            "scope": 0
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "sourceReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "18E7A9425CA6174A861B3F59E9B7A28F5052"
                }
            ],
            "index": "C26C594D99C547420888BD65FE59F03AD507",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "Value",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Picture ID",
                    "index": 1,
                    "scope": 0
                },
                {
                    "name": "Max. Value",
                    "index": 2,
                    "scope": 0
                },
                {
                    "name": "Store in",
                    "index": 3,
                    "scope": 0
                },
                {
                    "name": "",
                    "index": 4,
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