var PDF_DIFF = PDF_DIFF || {};
PDF_DIFF.diff_report_data = {
    "test_pdf_json_obj": {
        "pageCount": 1,
        "fileName": "test.pdf",
        "keywords": "",
        "author": "",
        "subject": "",
        "created": "Tue Nov 21 15:24:23 CST 2017",
        "title": "",
        "version": "1.5",
        "pages": [{
            "num": 0,
            "width": 595.3200073242188,
            "imageTag": "test-0.png",
            "height": 841.9199829101562
        }],
        "fileSize": "631177 Bytes",
        "modified": "Tue Nov 21 15:24:23 CST 2017",
        "producer": "Microsoft® Word 2013",
        "location": "C:\\dev\\mine\\git\\xdiff.ncc\\src\\test\\resources\\testcases\\xdiff\\image\\simple\\test.pdf"
    },
    "Base_Stroke_Color": "red",
    "Base_Fill_Color": "rgba(138, 43, 226, 0.2)",
    "Test_Fill_Color": "rgba(138, 43, 226, 0.2)",
    "FileFormat": "pdf",
    "diff_accepted_page_nums": [],
    "ShowDifferentPagesOnly": false,
    "Test_Stroke_Color": "red",
    "diff_page_count": 1,
    "page_xor_images": {"0": "0-xor.png"},
    "Rendering_Resolution": 96,
    "diff_page_nums": [0],
    "base_pdf_json_obj": {
        "pageCount": 1,
        "fileName": "control.pdf",
        "keywords": "",
        "author": "",
        "subject": "",
        "created": "Tue Nov 21 15:05:03 CST 2017",
        "title": "",
        "version": "1.5",
        "pages": [{
            "num": 0,
            "width": 595.3200073242188,
            "imageTag": "base-0.png",
            "height": 841.9199829101562
        }],
        "fileSize": "631909 Bytes",
        "modified": "Tue Nov 21 15:05:03 CST 2017",
        "producer": "Microsoft® Word 2013",
        "location": "C:\\dev\\mine\\git\\xdiff.ncc\\src\\test\\resources\\testcases\\xdiff\\image\\simple\\control.pdf"
    },
    "diff_content_json_obj": [{
        "PageNo": 0,
        "Result": {
            "Path": [],
            "Annot": [],
            "Page": [],
            "Text": [],
            "Image": [
                {
                    "SubOutline": [
                        [],
                        []
                    ],
                    "AcceptDiffRegion": [
                        [],
                        []
                    ],
                    "Attributes": [
                        {
                            "Equals": false,
                            "Value": [
                                "191",
                                "276"
                            ],
                            "Key": "Width"
                        },
                        {
                            "Equals": false,
                            "Value": [
                                "56",
                                "72"
                            ],
                            "Key": "Height"
                        },
                        {
                            "Equals": false,
                            "Value": [
                                "32088",
                                "59616"
                            ],
                            "Key": "Byte Count"
                        },
                        {
                            "Equals": true,
                            "Value": [
                                "8",
                                "8"
                            ],
                            "Key": "BitsPerComponent"
                        },
                        {
                            "Equals": true,
                            "Value": [
                                "png",
                                "png"
                            ],
                            "Key": "Suffix"
                        },
                        {
                            "Equals": true,
                            "Value": [
                                "x=227.28, y=277.32, width=98.28, height=20.4",
                                "x=227.28, y=277.32, width=98.28, height=20.4"
                            ],
                            "Key": "Position & Size"
                        }
                    ],
                    "Outline": [
                        [
                            227.28,
                            277.32,
                            98.28,
                            20.4
                        ],
                        [
                            227.28,
                            277.32,
                            98.28,
                            20.4
                        ]
                    ]
                },
                {
                    "SubOutline": [
                        [],
                        []
                    ],
                    "AcceptDiffRegion": [
                        [],
                        []
                    ],
                    "Attributes": [
                        {
                            "Equals": false,
                            "Value": [
                                "",
                                "387"
                            ],
                            "Key": "Width"
                        },
                        {
                            "Equals": false,
                            "Value": [
                                "",
                                "290"
                            ],
                            "Key": "Height"
                        },
                        {
                            "Equals": false,
                            "Value": [
                                "",
                                "336690"
                            ],
                            "Key": "Byte Count"
                        },
                        {
                            "Equals": false,
                            "Value": [
                                "",
                                "8"
                            ],
                            "Key": "BitsPerComponent"
                        },
                        {
                            "Equals": false,
                            "Value": [
                                "",
                                "jpg"
                            ],
                            "Key": "Suffix"
                        },
                        {
                            "Equals": false,
                            "Value": [
                                "",
                                "x=432.6, y=659.88, width=114.6, height=82.32"
                            ],
                            "Key": "Position & Size"
                        }
                    ],
                    "Outline": [
                        [],
                        [
                            432.6,
                            659.88,
                            114.6,
                            82.32
                        ]
                    ]
                }
            ],
            "Accept_Difference": []
        }
    }]
}