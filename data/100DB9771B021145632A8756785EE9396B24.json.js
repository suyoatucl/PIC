GS.dataCache['100DB9771B021145632A8756785EE9396B24'] = {
    "uid": "100DB9771B021145632A8756785EE9396B24",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Toggle Log",
        "type": "data_record",
        "order": 8,
        "category": "commonEvents",
        "id": "100DB9771B021145632A8756785EE9396B24",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Toggle Log",
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
                        "text": "We call this common event whenever the user clicks on the \"Log\" link in our message box. In that case, we check if the backlog is currently open by checking the global \"Backlog Opened\" switch. If so, we hide the backlog and set the switch to OFF to indicate that the backlog is not visible anymore. Otherwise we open the backlog and set the switch to ON to indicate that the backlog is currently visible.\n\nThat means that whenever we call this common event, it will toggle the visibility of the backlog: If the backlog is currently opened, this common event will close it. If the backlog is currently closed, this common event will open it."
                    },
                    "indent": 0,
                    "uid": "C84D5AFC2ADC414C44794526B9EE1A6BAA71",
                    "expanded": true
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Backlog Opened",
                            "index": 1,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 1,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "CA2A152C83B3C746A85810C8C2C33BA3A875"
                },
                {
                    "id": "vn.BacklogVisibility",
                    "params": {
                        "visible": 0,
                        "backgroundVisible": 1
                    },
                    "indent": 1,
                    "uid": "6229216D75AF734BE989F14860AF37E37F6A"
                },
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
                            "name": "Backlog Opened",
                            "index": 1,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 1,
                    "uid": "3FFBF89168C761405C897531CA3FD17C192B"
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "indent": 0,
                    "uid": "11F77F31184675437F89C37580CAF83E9F08"
                },
                {
                    "id": "vn.BacklogVisibility",
                    "params": {
                        "visible": 1,
                        "backgroundVisible": 1
                    },
                    "indent": 1,
                    "uid": "D0085F6E10DD4549094BC4D1843B3F02E70B"
                },
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
                            "name": "Backlog Opened",
                            "index": 1,
                            "scope": 1,
                            "changed": true,
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
                    "indent": 1,
                    "uid": "488B6CC3194C8248931983C272748E7E3878"
                }
            ],
            "index": "100DB9771B021145632A8756785EE9396B24",
            "booleanVariables": [
                {
                    "name": "Log Opened",
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