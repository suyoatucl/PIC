GS.dataCache['48F8B42657161549B84B96159EEED379C0E0'] = {
    "uid": "48F8B42657161549B84B96159EEED379C0E0",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Update UI",
        "type": "data_record",
        "order": 7,
        "category": "commonEvents",
        "id": "48F8B42657161549B84B96159EEED379C0E0",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Update UI",
            "startCondition": 1,
            "conditionEnabled": false,
            "parallel": true,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "This common event runs parallel, means it runs and repeats the whole time in the background until we quit the game. We use a global text variable \"Current Character\" where we put the name of the currently speaking character in. Then we check if the that variable is different from our local text variable \"Character Name\". If that is the case, we know that the currently speaking character has changed, so we have to update the name-box. If you check the \"Show Message Box\" common event you can see that we use the text \"{GT:2}\" for Show Text command. So after refresh, out text will show the value of our global text variable \"Current Character\", which stores the current character name. So if we call \"Set Object Data\", our name-box will show the correct name.\n\nTo avoid that the name-box is permanently updated even if the name has not changed, which would cost performance, we set our local text variable \"Character Name\" to the value of our global text variable \"Current Character\" so the condition will no longer be true until the content of the global text variable \"Current Character\" changes again."
                    },
                    "indent": 0,
                    "uid": "4299ABDF620AB64F1749F9871ADC3C029639",
                    "expanded": true
                },
                {
                    "id": "gs.Script",
                    "params": {
                        "script": "GameManager.variableStore.stringsByDomain[\"com.degica.vnm.default\"][1] = lcs(SceneManager.scene.currentCharacter.name)"
                    },
                    "indent": 0,
                    "uid": "B235EC2B36E8F94A32194EF1A3E6CCA569F1",
                    "expanded": true
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Current Character",
                            "index": 1,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 0,
                        "textValue": {
                            "name": "Character",
                            "index": 0,
                            "scope": 0
                        },
                        "switchValue": 0,
                        "valueType": 2,
                        "operation": 1,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "097B82C61C7A9441931AA782DC44F747DCC9"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Current Character",
                            "index": 1,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 2,
                        "operation": 1,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "5ABCE5B12CC5504DB7593F192376B9874794"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 2,
                        "number": 0,
                        "layer": 0,
                        "characterId": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                        "field": 0,
                        "numberValue": 0,
                        "textValue": {
                            "name": "Current Character",
                            "index": 1,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 2,
                    "uid": "698274B1143A96431B19B4A83EF77FF4EA3F"
                },
                {
                    "id": "gs.ChangeStringVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Character Name",
                            "index": 0,
                            "scope": 0
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "operation": 0,
                        "valueType": 0,
                        "textValue": {
                            "lcId": "BA90F64D742A734A2F9A7A30277B41AF0C57",
                            "defaultText": "{GT:com.degica.vnm.default.2}"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 2,
                    "expanded": true,
                    "uid": "DECA95C945D4C443F73B00B8E1C292F2A11D"
                },
                {
                    "id": "vn.GetGameData",
                    "params": {
                        "field": 30,
                        "targetVariable": {
                            "name": "Game Skip",
                            "index": 2,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "6289BF411B1D084D393BFC75D793157BED99"
                },
                {
                    "id": "vn.GetGameData",
                    "params": {
                        "field": 11,
                        "targetVariable": {
                            "name": "Auto Message",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "6CE4E93C848E5742842992280FE04B637380"
                }
            ],
            "index": "48F8B42657161549B84B96159EEED379C0E0",
            "booleanVariables": [
                {
                    "name": "Game Skip",
                    "index": 0,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "",
                    "index": 1,
                    "scope": 1
                },
                {
                    "name": "",
                    "index": 2,
                    "scope": 1
                },
                {
                    "name": "",
                    "index": 3,
                    "scope": 1
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
                    "name": "Character Name",
                    "index": 0,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                }
            ],
            "defaultExpressionId": "BF7CB12110894142C299D341A545C910AA86"
        },
        "localizableStrings": {
            "939E154D2AB8234B2E59DBA7421ED5CB5F98": {
                "t": "{GT:2}",
                "d": {
                    "eid": "DECA95C945D4C443F73B00B8E1C292F2A11D"
                }
            }
        }
    },
    "summary": [
        "name",
        "type",
        "order"
    ]
}