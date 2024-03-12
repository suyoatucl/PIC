GS.dataCache['0700861566A3054DA93A9DE6F6485125EA85'] = {
    "uid": "0700861566A3054DA93A9DE6F6485125EA85",
    "isLoaded": true,
    "lastModificationTime": null,
    "items": {
        "type": "vn.scene",
        "name": "feedback-1",
        "parentId": "71B17D98491438442F683CA258B3E75AC374",
        "localizableStrings": {},
        "chapterUid": "71B17D98491438442F683CA258B3E75AC374",
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "insights2",
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
                    "layer": 0,
                    "duration": 30,
                    "waitForCompletion": 1,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
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
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1,
                        "loopVertical": 1,
                        "loopHorizontal": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "B9DF422E67572345492B2AE32757A87A4F23",
                "expanded": false
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "DBDE76791B7E59434C2B9543D9A7A6D1F52D",
                    "parameters": {
                        "values": [
                            400
                        ]
                    }
                },
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "6575A4BC55B2384B3B5974F50819DA602027",
                        "name": "end-1"
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
                "uid": "4A2F2E585B30D64F0649E0A51078D9A19FDE"
            }
        ],
        "livePreviewDisabled": false,
        "order": 7
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "o",
        "chapterUid",
        "order"
    ]
}