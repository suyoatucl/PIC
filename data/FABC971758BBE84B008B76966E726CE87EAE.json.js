GS.dataCache['FABC971758BBE84B008B76966E726CE87EAE'] = {
    "uid": "FABC971758BBE84B008B76966E726CE87EAE",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Show Gallery Thumb",
        "type": "data_record",
        "order": 2,
        "category": "commonEvents",
        "id": "FABC971758BBE84B008B76966E726CE87EAE",
        "data": {
            "name": "Show Gallery Thumb",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "parameters": [
                {
                    "label": "Picture ID",
                    "type": 1,
                    "numberVariable": {
                        "name": "Picture ID",
                        "index": 0,
                        "scope": 0
                    },
                    "numberValueType": "number"
                },
                {
                    "label": "Gallery Slot",
                    "type": 1,
                    "numberVariable": {
                        "name": "Gallery Area",
                        "index": 1,
                        "scope": 0
                    },
                    "numberValueType": "number"
                },
                {
                    "label": "Page",
                    "type": 1,
                    "numberVariable": {
                        "name": "Page",
                        "index": 2,
                        "scope": 0
                    },
                    "numberValueType": "number"
                }
            ],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "This Common Event shows the correct gallery thumb-image for the specified gallery slot. The picture ID to use as well as the slot-area and page are passed via parameters.\n\nWith the help of the page-number and slot-area we calculate the actual gallery image number using the following formula:\n\n(Page - 1) * NumberOfSlotAreas + Gallery-Slot = Actual Gallery Image Number\n\nFor Example: If the user clicks on the 2. Gallery-Slot on Page 3 the actual gallery image number is: \n\n(3 - 1) * 8 + 2 = 18\n\nAfter that, we use a script call to assign the gallery thumb image to the picture with the specified picture ID. That is necessary because VN Maker has no commands to access database data. However, instead of a script-call, the CG Gallery can also be hard-coded. So if you have trouble understanding the script call, you can deleted and just add your own event-based logic."
                    },
                    "indent": 0,
                    "uid": "E6910D160B49D141FC09E8F140FCEBE75F28",
                    "expanded": true
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Slot",
                            "index": 3,
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
                    "uid": "0BE0D3D62B01E4404E696176758CFDDC04E4"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Page",
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
                    "uid": "460CBD4E2E2D164ABF4984E439C864B96519"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Slot",
                            "index": 3,
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
                    "uid": "A4AB3D53744FF34ECB68A1218D46B4BCF91B"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Slot",
                            "index": 3,
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
                            "name": "Slot Area",
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
                    "uid": "32F1C8F82EA43345887A8D2733FCE51B7477"
                },
                {
                    "id": "gs.Script",
                    "params": {
                        "script": "/* \n * Here we access tempNumbers which is an array containing all local number variables for this common event.\n * So we store the Picture ID and CG image number in two local variables \"id\" and \"cgNumber\" to access them later in a shorter way. We also subtract\n * 1 from the gallery-slot-number because the internal counting starts at 0 and not at 1. \n*/\nvar id = GameManager.variableStore.tempNumbers[0];\nvar cgNumber = GameManager.variableStore.tempNumbers[3] - 1;\n\n/*\n* Here we use the Picture ID to get the corresponding picture object and store into \"picture\" variable so we can modify the picture object later. We also\n* use the cgNumber to get the corresponding cg-image-object from database which contains more info about the CG image.\n*/\nSceneManager.scene.behavior.changePictureDomain(\"com.degica.vnm.default\")\nvar picture = SceneManager.scene.pictures[id];\nvar cg = RecordManager.cgGallery.first(function(cgItem){ return cgItem.slot-1 == cgNumber; })\n/*\n* Here we check if the CG image exists and if its unlocked.\n*/\nconsole.log(cg)\nconsole.log(GameManager.globalData.cgGallery[cg.index])\n\nif(cg && GameManager.globalData.cgGallery[cg.index].unlocked) \n{\n    GameManager.variableStore.tempStrings[0] = cg.thumb.name\n}\n// Otherwise we make the picture invisible\nelse\n{\n    GameManager.variableStore.tempStrings[0] = \" \"\n}"
                    },
                    "indent": 0,
                    "expanded": true,
                    "uid": "B19C83901DBC4148988827472861853FB9E0"
                },
                {
                    "id": "gs.ChangeStringVariables",
                    "params": {
                        "source": 0,
                        "target": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "operation": 0,
                        "valueType": 0,
                        "textValue": {
                            "lcId": "E53588A51BC5354AF87972647042F036CACF",
                            "defaultText": " "
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "C1F136545D6E8645552AAF099B73732A62D4",
                    "expanded": false
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 0,
                        "textValue": {
                            "name": "",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 0,
                        "valueType": 2,
                        "operation": 1,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "F6FF0C576F572441F968EF3167AA92AF0A7A"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": {
                            "name": "Picture ID",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": 0,
                        "field": 0,
                        "numberValue": 0,
                        "textValue": {
                            "name": "",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "1B139B693E9FD442AA88FC346222F337BCAA"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": {
                            "name": "Picture ID",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": 0,
                        "field": 8,
                        "numberValue": 255,
                        "textValue": {
                            "scope": 1,
                            "index": 0
                        },
                        "switchValue": 1
                    },
                    "indent": 1,
                    "uid": "2F6B37BD9D43334D139AB3D305CAEAD8AF1E"
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "indent": 0,
                    "uid": "8F9917543B7CF048EC4BCDF154D9516D8E90"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": {
                            "name": "Picture ID",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": 0,
                        "field": 8,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0
                        },
                        "switchValue": 0
                    },
                    "indent": 1,
                    "uid": "1FFBFDC3592D8245D898FC489B1E051958BF"
                }
            ],
            "index": "FABC971758BBE84B008B76966E726CE87EAE",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "singleInstance": false,
            "numberVariables": [
                {
                    "name": "Picture ID",
                    "index": 0,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Gallery Area",
                    "index": 1,
                    "scope": 0
                },
                {
                    "name": "Page",
                    "index": 2,
                    "scope": 0
                },
                {
                    "name": "Slot",
                    "index": 3,
                    "scope": 0
                }
            ],
            "stringVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "",
                    "index": 1,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                }
            ],
            "defaultExpressionId": "BF7CB12110894142C299D341A545C910AA86"
        },
        "localizableStrings": {
            "E53588A51BC5354AF87972647042F036CACF": {
                "t": " ",
                "d": {
                    "eid": "C1F136545D6E8645552AAF099B73732A62D4"
                }
            }
        },
        "parentId": "5EE019E2052E634969786B5545B535D57F6E"
    },
    "summary": [
        "name",
        "type",
        "order"
    ]
}