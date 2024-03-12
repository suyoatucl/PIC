GS.dataCache['3FC2C70568A4984D389A6A69669295952B9D'] = {
    "uid": "3FC2C70568A4984D389A6A69669295952B9D",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Show Message Box",
        "type": "data_record",
        "order": 2,
        "category": "commonEvents",
        "id": "3FC2C70568A4984D389A6A69669295952B9D",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Show Message Box",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": false,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "For the message box, we're going to use an image-map.\n\nFor the message body text, we're going to create a new message area and create the boundaries where where we want to display the message text in the message box.  After that, we use \"Set Message Target\" to make sure that from now on, all message commands such as \"Show Message\", etc. are displayed in that new message area.\n\nTo display the character's name we are going to use Show Text. Check \"Update Name Box\" common event for more information to find out how we can update that text if the character has changed. \n\nThe entire message box UI is done with just one image-map, so you only need to edit the following pictures for a custom message box:\n\nmsgbox_ground\nmsgbox_hover\nmsgbox_selected\n\nAnd edit the hotspot positions in the Show Image Map command as well as the Message Area and thats it."
                    },
                    "indent": 0,
                    "uid": "5BBDDED65A7BE84EBA2B55E6D9B117CD0C41",
                    "expanded": true
                },
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "You have to edit the hotspot positions on this image-map to match with your custom messagebox image."
                    },
                    "indent": 0,
                    "uid": "79EFD0DD3AA11448853AB5C3D5DD1016DD44",
                    "expanded": true
                },
                {
                    "id": "gs.ShowImageMap",
                    "params": {
                        "number": 99,
                        "hotspots": [
                            {
                                "x": 31,
                                "y": 52,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 31,
                                    "y": 52,
                                    "width": 103,
                                    "height": 35,
                                    "action": 2,
                                    "commonEventId": "100DB9771B021145632A8756785EE9396B24",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
                                    "finish": false,
                                    "zoom": 1,
                                    "angle": 0,
                                    "horizontalFlip": false
                                },
                                "color": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0,
                                    "alpha": 160
                                },
                                "size": {
                                    "width": 103,
                                    "height": 35
                                }
                            },
                            {
                                "x": 30,
                                "y": 101,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 30,
                                    "y": 101,
                                    "width": 103,
                                    "height": 35,
                                    "action": 2,
                                    "commonEventId": "232F08772D91E44D10380D14842B92CA796A",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
                                    "finish": false,
                                    "zoom": 1,
                                    "angle": 0,
                                    "horizontalFlip": false
                                },
                                "color": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0,
                                    "alpha": 160
                                },
                                "size": {
                                    "width": 103,
                                    "height": 35
                                }
                            },
                            {
                                "x": 30,
                                "y": 151,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 29,
                                    "y": 151,
                                    "width": 103,
                                    "height": 35,
                                    "action": 2,
                                    "commonEventId": "651E26D86B1CF647633BEC272FD6CEB53A8E",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
                                    "finish": false,
                                    "zoom": 1,
                                    "angle": 0,
                                    "horizontalFlip": false
                                },
                                "color": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0,
                                    "alpha": 160
                                },
                                "size": {
                                    "width": 103,
                                    "height": 35
                                }
                            },
                            {
                                "x": 31,
                                "y": 202,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 31,
                                    "y": 203,
                                    "width": 103,
                                    "height": 35,
                                    "action": 2,
                                    "commonEventId": "79F7E7BC82CD104D3D597749604D4529D8F3",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
                                    "finish": false,
                                    "zoom": 1,
                                    "angle": 0,
                                    "horizontalFlip": false
                                },
                                "color": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0,
                                    "alpha": 160
                                },
                                "size": {
                                    "width": 103,
                                    "height": 35
                                }
                            },
                            {
                                "x": 1102,
                                "y": 152,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 1102,
                                    "y": 152,
                                    "width": 103,
                                    "height": 35,
                                    "action": 2,
                                    "commonEventId": "6E22FF5D1C6A79487128F7B5BAFF232629A8",
                                    "bindToSwitch": true,
                                    "switch": {
                                        "name": "Game Skip",
                                        "index": 2,
                                        "scope": 1,
                                        "domain": "com.degica.vnm.default",
                                        "changed": true
                                    },
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
                                    "finish": false,
                                    "zoom": 1,
                                    "angle": 0,
                                    "horizontalFlip": false
                                },
                                "color": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0,
                                    "alpha": 160
                                },
                                "size": {
                                    "width": 103,
                                    "height": 35
                                }
                            },
                            {
                                "x": 1102,
                                "y": 202,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 1102,
                                    "y": 202,
                                    "width": 103,
                                    "height": 35,
                                    "action": 2,
                                    "commonEventId": "281DB3B355CF0747EC8BC489D060D1E2D442",
                                    "bindToSwitch": true,
                                    "switch": {
                                        "name": "Auto Message",
                                        "index": 3,
                                        "scope": 1,
                                        "domain": "com.degica.vnm.default",
                                        "changed": true
                                    },
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
                                    "finish": false,
                                    "zoom": 1,
                                    "angle": 0,
                                    "horizontalFlip": false
                                },
                                "color": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0,
                                    "alpha": 160
                                },
                                "size": {
                                    "width": 103,
                                    "height": 35
                                }
                            }
                        ],
                        "predefinedPositionId": 5,
                        "ground": {
                            "name": "msgbox_ground",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "grey": 0
                            }
                        },
                        "hover": {
                            "name": "msgbox_hover",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "grey": 0
                            }
                        },
                        "unselected": null,
                        "selected": {
                            "name": "msgbox_selected",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "grey": 0
                            }
                        },
                        "selectedHover": {
                            "name": "msgbox_selected",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "grey": 0
                            }
                        },
                        "duration": 30,
                        "origin": 0,
                        "waitForCompletion": 0,
                        "positionType": 0,
                        "position": {
                            "x": 0,
                            "y": 0
                        },
                        "easing": {
                            "type": 1,
                            "inOut": 0
                        },
                        "blendMode": 0,
                        "zOrder": 1000,
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
                            "animation.type": 0,
                            "origin": 1,
                            "zOrder": 0,
                            "blendMode": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "A4CCAA3728557348C32B398552015B58BC2A",
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 30
                    },
                    "indent": 0,
                    "uid": "99CA9EF3260CC14B499BC499607EA2CAE905"
                },
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here you can edit the two commands below to change the position, font, etc. of the Name-Display. The Name-Display shows the name of the current speaking character."
                    },
                    "indent": 0,
                    "uid": "AB2B8DF6638A264CE47925B222037A53B2BE",
                    "expanded": true
                },
                {
                    "id": "gs.ChangeTextSettings",
                    "params": {
                        "number": 0,
                        "padding": [
                            6,
                            0,
                            6,
                            0
                        ],
                        "font": "Tallys",
                        "size": 42,
                        "outline": 0,
                        "shadow": 0,
                        "outlineColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "shadowColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 7
                        },
                        "fieldFlags": {
                            "font": 0,
                            "size": 0,
                            "outline": 0,
                            "outlineColor": 1,
                            "shadow": 0,
                            "shadowColor": 0,
                            "padding.0": 1,
                            "padding.1": 1,
                            "padding.2": 1,
                            "padding.3": 1,
                            "lineSpacing": 1,
                            "outlineSize": 1,
                            "shadowOffsetX": 1,
                            "shadowOffsetY": 1,
                            "bold": 1,
                            "italic": 1,
                            "underline": 1,
                            "smallCaps": 1,
                            "strikeThrough": 1,
                            "color": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "lineSpacing": 0,
                        "outlineSize": 4,
                        "shadowOffsetX": 1,
                        "shadowOffsetY": 1,
                        "bold": 0,
                        "italic": 0,
                        "underline": 0,
                        "smallCaps": 0,
                        "strikeThrough": 0,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "uid": "4D8A20CA7E8AF84376986BD305D303310F8D",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "gs.ColorText",
                    "params": {
                        "number": 0,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "color": {
                            "red": 59,
                            "green": 59,
                            "blue": 59,
                            "alpha": 255
                        },
                        "duration": 0,
                        "waitForCompletion": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "uid": "9F2FF839407EA64B6D2966C892055A8665A1",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "gs.ShowText",
                    "params": {
                        "viewport": {
                            "type": "ui"
                        },
                        "predefinedPositionId": 9,
                        "positionType": 1,
                        "number": 0,
                        "duration": 0,
                        "waitForCompletion": 0,
                        "blendMode": 0,
                        "origin": 0,
                        "zOrder": 2000,
                        "text": {
                            "lcId": "E2DCDE5F5B4D75446B7B3BB290553CF85F01",
                            "defaultText": "{GT:com.degica.vnm.default.2}"
                        },
                        "position": {
                            "x": 200,
                            "y": 505
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 0,
                            "easing.type": 1,
                            "animation.type": 0,
                            "origin": 1,
                            "zOrder": 0,
                            "blendMode": 1,
                            "viewport.type": 1,
                            "positionOrigin": 1
                        },
                        "expressions": [],
                        "animations": [],
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "F48A2B1172D1A64C005A87A76172A5545D9C",
                    "expanded": true
                },
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here we create the custom message area. Edit the boundaries of that message area to fit with your custom message box image."
                    },
                    "indent": 0,
                    "uid": "79C6742142FD7146A83801037647EB20A379",
                    "expanded": true
                },
                {
                    "id": "gs.CreateMessageArea",
                    "params": {
                        "number": 0,
                        "box": {
                            "x": 190,
                            "y": 557,
                            "angle": 0,
                            "zoom": 1,
                            "data": {
                                "x": 190,
                                "y": 557,
                                "width": 877,
                                "height": 152,
                                "zoom": 1,
                                "angle": 0
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 855,
                                "height": 152
                            }
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "A66D581A67A6544D627BC414A0FC10CB7EF5"
                },
                {
                    "id": "gs.SetTargetMessage",
                    "params": {
                        "id": "gameMessage_message",
                        "number": 0,
                        "type": 1,
                        "clear": 1,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "56C1F29F6B426743A648D93731561AD75049"
                },
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here you can set the color, font, etc. of the actual message text."
                    },
                    "indent": 0,
                    "uid": "53B40BC5911DA94E0D2B3BB053357F84FA29",
                    "expanded": true
                },
                {
                    "id": "gs.MessageSettings",
                    "params": {
                        "backlog": 1,
                        "autoErase": 1,
                        "waitAtEnd": 1,
                        "font": "Rubik-Regular",
                        "size": 22,
                        "outline": 0,
                        "shadow": 0,
                        "outlineColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "shadowColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "fieldFlags": {
                            "autoErase": 1,
                            "waitAtEnd": 1,
                            "backlog": 1,
                            "font": 0,
                            "size": 0,
                            "outline": 0,
                            "outlineColor": 1,
                            "shadow": 0,
                            "shadowColor": 1,
                            "bold": 1,
                            "italic": 0,
                            "smallCaps": 1,
                            "underline": 1,
                            "strikeThrough": 1,
                            "color": 0,
                            "lineSpacing": 1,
                            "linePadding": 1,
                            "paragraphSpacing": 1,
                            "lineHeight": 1,
                            "useCharacterColor": 1,
                            "outlineSize": 1,
                            "shadowOffsetX": 1,
                            "shadowOffsetY": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "bold": 0,
                        "italic": 0,
                        "smallCaps": 0,
                        "underline": 0,
                        "strikeThrough": 0,
                        "lineSpacing": 0,
                        "linePadding": 6,
                        "paragraphSpacing": 0,
                        "lineHeight": 0,
                        "useCharacterColor": 0,
                        "outlineSize": 4,
                        "shadowOffsetX": 1,
                        "shadowOffsetY": 1
                    },
                    "uid": "67563540171B324854388FA1044331A837BA",
                    "indent": 0,
                    "expanded": false
                }
            ],
            "index": "3FC2C70568A4984D389A6A69669295952B9D",
            "booleanVariables": [
                {
                    "name": "Auto Message",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Skip",
                    "index": 1,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
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
        "localizableStrings": {
            "48E87B1220B6E343BC29C7B435CFBCAD2929": {
                "t": "{GT:2}",
                "d": {
                    "eid": "9F0A8AF45FFCE545672AA06759E0EDD38DF5"
                }
            },
            "F74D3E179E1D144DE72A81F20AD07751D490": {
                "t": "{C:1}",
                "d": {
                    "cid": 0,
                    "eid": "5C266B26860D394E4B39F3E024F939D4B4FA"
                }
            },
            "9FDD630E0219474D874AF5A9E130381B5F54": {
                "t": "Spicy jalapeno jowl kevin adipisicing dolor. Magna turkey id, sed tri-tip ex eu consequat chicken minim fatback. Sirloin andouille nisi mollit leberkas pork loin rump kevin venison pork commodo enim. In exercitation magna, chuck shoulder commodo shankle pancetta jowl andouille laboris. Consectetur cow aliquip culpa alcatra, ham hock capicola drumstick sint dolore cupim nostrud.",
                "d": {
                    "cid": 5,
                    "eid": "5CB9849270F9764EB7787448C0C381D793CA"
                }
            },
            "E2DCDE5F5B4D75446B7B3BB290553CF85F01": {
                "t": "{GT:com.degica.vnm.default.2}",
                "d": {
                    "eid": "F48A2B1172D1A64C005A87A76172A5545D9C"
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