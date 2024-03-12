GS.dataCache['DBDE76791B7E59434C2B9543D9A7A6D1F52D'] = {
    "uid": "DBDE76791B7E59434C2B9543D9A7A6D1F52D",
    "isLoaded": true,
    "lastModificationTime": null,
    "items": {
        "name": "Input",
        "type": "data_record",
        "category": "commonEvents",
        "id": "DBDE76791B7E59434C2B9543D9A7A6D1F52D",
        "isFolder": false,
        "data": {
            "name": "Input",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [
                {
                    "label": "Letters",
                    "type": 1,
                    "numberVariable": {
                        "name": "Number of Letters",
                        "index": 1,
                        "scope": 0
                    },
                    "numberValueType": "number"
                }
            ],
            "commands": [
                {
                    "id": "gs.Script",
                    "params": {
                        "script": "var playername = prompt('Please leave your valuable feedback if possible:'); //the tip show to players\nGameManager.variableStore.strings[0] = playername"
                    },
                    "indent": 0,
                    "expanded": true,
                    "uid": "633100345258124C9358D007344A7BFC88F2"
                }
            ],
            "index": "DBDE76791B7E59434C2B9543D9A7A6D1F52D",
            "booleanVariables": [
                {
                    "name": "ABC Selected",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Sym Selected",
                    "index": 1,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "Letter",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Number of Letters",
                    "index": 1,
                    "scope": 0
                },
                {
                    "name": "Store in",
                    "index": 2,
                    "scope": 0
                },
                {
                    "name": "Letter Counter",
                    "index": 3,
                    "scope": 0
                }
            ],
            "stringVariables": [
                {
                    "name": "Letter-Set",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Letter",
                    "index": 1,
                    "scope": 0
                },
                {
                    "name": "Text",
                    "index": 2,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Symbol-Set",
                    "index": 3,
                    "scope": 0
                }
            ],
            "listVariables": [
                {
                    "name": "Letters",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Symbols",
                    "index": 1,
                    "scope": 0
                }
            ],
            "defaultExpressionId": "BF7CB12110894142C299D341A545C910AA86"
        },
        "localizableStrings": {
            "6AE73B4921A2B04A3558FA0706B65C04D245": {
                "t": "{LT:3}"
            },
            "902807048701D6448D383C463FE2D3B410A5": {
                "t": "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
            },
            "35061EAD125FD3481B49CF33FD0264901EAF": {
                "t": "1|2|3|4|5|6|7|8|9|0|Ä|Ö|Ü|$|&|ä|ö|ü|§|%|(|{|[|<|;|)|}|]|>|:|.|,|+|-|/|!|?|=|*|#|’|“|~"
            },
            "C413AEEA5E0DD34E9D7B01D5CA40449B3905": {
                "t": "{LT:2}"
            },
            "BC4267EA315C1242ED59DF0891B18D011B7C": {
                "t": "{LT:2}",
                "d": {
                    "eid": "6D92E34B7F829149D05826462E9FD5AB5425"
                }
            }
        },
        "order": 9,
        "parentId": "58EC2AB454B1364BCA6A58214044076D0EDC"
    },
    "summary": [
        "name",
        "type",
        "order"
    ]
}