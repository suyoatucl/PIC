GS.dataCache['5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54'] = {
    "uid": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
    "isLoaded": true,
    "lastModificationTime": 1424021629456,
    "items": {
        "name": "Show Save Game Image",
        "type": "data_record",
        "order": 4,
        "category": "commonEvents",
        "data": {
            "name": "Show Save Game Image",
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
                    "label": "Save Slot",
                    "type": 1,
                    "numberVariable": {
                        "name": "Slot Area",
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
                        "text": "This Common Event shows the correct snapshot-image for the specified save game slot. The picture ID to use as well as the slot-area and page are passed via parameters.\n\nWith the help of the page-number and slot-area we calculate the actual save game slot number using the following formula:\n\n(Page - 1) * NumberOfSlotAreas + Slot-Area = Actual Save Game Slot Number\n\nFor Example: If the user clicks on the 2. Slot-Area on Page 3 the actual save game slot number is: \n\n(3 - 1) * 8 + 2 = 18\n\nAfter that, we use a script call to assign the snapshot-image to the picture with the specified picture ID. That is necessary because VN Maker has no command to access the screenshot of a save-game."
                    },
                    "indent": 0,
                    "uid": "BCBE63A47E9437410F8A15090310DA56E207",
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
                        "script": "/*\n* This script call is used to assign the correct screenshot image for the slot to the correct picture object. That is necessary because VN Maker has no command by default\n* to access save game date. But feel free to create your own commands for it via plugins!\n*/\n\n/* \n * Here we access tempNumbers which is an array containing all local number variables for this common event.\n * So store the Picture ID, Slot-Area in two local variables \"id\" and \"slotNumber\" to access them later in a shorter way. We also subtract\n * 1 from the slot-number because the internal counting starts at 0 and not at 1. \n*/\nvar id = GameManager.variableStore.tempNumbers[0];\nvar slotNumber = GameManager.variableStore.tempNumbers[3] - 1;\n\n/*\n* Here we use the Picture ID to get the corresponding picture object and store into \"picture\" variable so we can modify the picture object later. We also\n* use the slotNumber to get the corresponding slot-object which contains more info about the save-game slot. So we can check later if that slot is actually used and if yes we\n* can access the screenshot image.\n*/\nvar picture = SceneManager.scene.pictures[id];\nvar slot = GameManager.saveGameSlots[slotNumber];\n\n/* Here we check if the save game slot is used. If so, we can access the screenshot image and\n*  set it as bitmap for the picture-object so it is display on screen.\n*/\nif(slot && slot.date) \n{\n    // Let's check if there already a cached bitmap-object for our save game slot.\n    var bitmap = ResourceManager.getCustomBitmap(\"$slot_\"+slotNumber);\n\n    // If there is a cached bitmap-object but it is different from the current slot-image then\n    // we have to dispose/destroy the old cached bitmap.\n    if(bitmap && bitmap.filePath != slot.image)\n    {\n         bitmap.dispose();\n         bitmap = null;\n    }\n\n    // If not, so bitmap is null, then we have to create it\n    if(!bitmap) \n    {\n        /* Create a new bitmap-object from slot.image. The slot.image property stores the screenshot image for the\n        * save game slot as data url.\n        */\n        bitmap = new gs.Bitmap(slot.image);\n        // Put the new created bitmap object into the cache so we don't need to re-create it everytime.\n        ResourceManager.setCustomBitmap(\"$slot_\"+slotNumber, bitmap);\n        // Set a callback function called if the bitmap is loaded/ready.\n        bitmap.onload = function() \n        {\n            // We set the image name to \"null\" because we want to set an in-memory bitmap.\n            picture.image = null;\n            // Set the bitmap object for the picture to display it on screen.\n            picture.bitmap = bitmap;\n            // Set the size of the picture so it matches the size of the new assigned bitmap\n            picture.dstRect.width = bitmap.width;\n            picture.dstRect.height = bitmap.height;\n            // Set the source-rectangle so it matches the size of the new assigned bitmap.\n            picture.srcRect.set(0, 0, bitmap.width, bitmap.height);\n        };\n    }\n    // Otherwise, we can just use the cached bitmap object.\n    else\n    {\n        // We set the image name to \"null\" because we want to set an in-memory bitmap.\n        picture.image = null;\n        // Set the bitmap object for the picture to display it on screen.\n        picture.bitmap = bitmap;\n        // Set the size of the picture so it matches the size of the new assigned bitmap\n        picture.dstRect.width = bitmap.width;\n        picture.dstRect.height = bitmap.height;\n        // Set the source-rectangle so it matches the size of the new assigned bitmap.\n        picture.srcRect.set(0, 0, bitmap.width, bitmap.height);\n    }\n}\n// If the slot is a free unused save game slot, we make the picture invisible by assigning nothing \"null\" to it.\nelse\n{\n    // Set bitmap-property and image-property to null so nothing is displayed on screen for this picture.\n    picture.bitmap = null\n    picture.image = null\n}"
                    },
                    "indent": 0,
                    "expanded": true,
                    "uid": "E18F99994EA8E64BE79BF2D2A479EFE16BB1"
                }
            ],
            "index": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
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
                    "scope": 0
                },
                {
                    "name": "Slot Area",
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
                    "scope": 0
                }
            ],
            "defaultExpressionId": "BF7CB12110894142C299D341A545C910AA86"
        },
        "id": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
        "parentId": "72A65D9D3FA5C349F70A8EB8E315DC45F796",
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "order"
    ]
}