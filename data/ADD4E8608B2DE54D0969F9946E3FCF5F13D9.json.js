GS.dataCache['ADD4E8608B2DE54D0969F9946E3FCF5F13D9'] = {
    "uid": "ADD4E8608B2DE54D0969F9946E3FCF5F13D9",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Show Gallery Image",
        "type": "data_record",
        "order": 1,
        "category": "commonEvents",
        "id": "ADD4E8608B2DE54D0969F9946E3FCF5F13D9",
        "isFolder": false,
        "parentId": "5EE019E2052E634969786B5545B535D57F6E",
        "data": {
            "name": "Show Gallery Image",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [
                {
                    "label": "Slot",
                    "type": 1,
                    "numberVariable": {
                        "name": "Slot",
                        "index": 0,
                        "scope": 0
                    },
                    "numberValueType": "number"
                },
                {
                    "label": "Page",
                    "type": 1,
                    "numberVariable": {
                        "name": "Page",
                        "index": 1,
                        "scope": 0
                    },
                    "numberValueType": "number"
                }
            ],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "This common events show the selected CG image in full-size in a new scene. The selected gallery-slot and page are passed via parameters.\n\nWith the help of the page-number and slot-area we calculate the actual gallery image number using the following formula:\n\n(Page - 1) * NumberOfSlotAreas + Gallery-Slot = Actual Gallery Image Number\n\nFor Example: If the user clicks on the 2. Gallery-Slot on Page 3 the actual gallery image number is: \n\n(3 - 1) * 8 + 2 = 18\n\nAfter that we use a small script call to get the name of the full-size CG image from database and store it into the global text variable 0001. We then check that name is empty, if so we jump to the \"End\" label so nothing will happen. Oterhwise we switch the scene to \"CG Gallery Image\" scene. That scene will read the global text variable 0001 \"CG Gallery Image\" and display that image in full-size."
                    },
                    "indent": 0,
                    "uid": "078825968AB0194B977B4441EAFF03E5E693",
                    "expanded": true
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Slot",
                            "index": 2,
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
                        "sourceValue": 8,
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
                    "uid": "178D80363AEE304BD28BE665F914CA812D88"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Page",
                            "index": 1,
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
                        "operation": 2,
                        "source": 0,
                        "sourceValue": 1,
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
                    "uid": "6620A9363375854E8A6AF456159C96EB4D2C"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Slot",
                            "index": 2,
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
                            "name": "Page",
                            "index": 1,
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
                    "uid": "4EEF55622BB4564DC74993B4ED43F0C18CA1"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Slot",
                            "index": 2,
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
                        "operation": 1,
                        "source": 0,
                        "sourceValue": {
                            "name": "Slot",
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
                    "uid": "7A80CE59472656433E683297F62C7C4EC7B4"
                },
                {
                    "id": "gs.Script",
                    "params": {
                        "script": "var cgNumber = GameManager.variableStore.tempNumbers[2] - 1;\nvar cg = RecordManager.cgGallery.first(function(cgItem) { return cgItem.slot-1 == cgNumber })\nvar unlocked = GameManager.globalData.cgGallery[cg.index] && GameManager.globalData.cgGallery[cg.index].unlocked\nGameManager.variableStore.strings[0] = cg && unlocked && cg.graphic ? cg.graphic.name : \"\";"
                    },
                    "indent": 0,
                    "expanded": true,
                    "uid": "AFB646C24A3B254F003AD5F82FE2737128D0"
                },
                {
                    "id": "gs.CheckTextVariable",
                    "params": {
                        "targetVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "value": "",
                        "label": "End"
                    },
                    "indent": 0,
                    "uid": "842FD2809B13214C07486826B03F1694375A"
                },
                {
                    "id": "vn.ChangeScene",
                    "params": {
                        "scene": {
                            "uid": "6B0FBC3B061A7846A419EB35B0B1312F24FF",
                            "name": "CG Gallery Image"
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
                    "uid": "899FBF9370A4F14D6A891A21A4944F5657AA"
                },
                {
                    "id": "gs.Label",
                    "params": {
                        "name": "End"
                    },
                    "indent": 0,
                    "uid": "50F138FE06BC564C59096305FEF1A0DEA6CA"
                }
            ],
            "index": "ADD4E8608B2DE54D0969F9946E3FCF5F13D9",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "Slot",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Page",
                    "index": 1,
                    "scope": 0
                },
                {
                    "name": "Slot",
                    "index": 2,
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