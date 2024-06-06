TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6",
  "vfov": 180,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_E2ECB6F2_ECAC_1C85_41E2_E2F04B2015E8",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C, this.camera_F13D41DC_EDDC_F4BD_41CC_AB276F529E5B); this.mainPlayList.set('selectedIndex', 14)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 21.66,
        "yaw": 166.13,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 148,
           "width": 200,
           "url": "media/panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -20.07
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 21.66,
        "yaw": 166.13,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 307,
           "width": 412,
           "url": "media/panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -20.07
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_E2B35B4C_ECD4_759D_41AA_0EBA841ED097",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_E3033629_ECDC_7F87_41E3_8DA76E1F83EE, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.05,
        "yaw": 125.19,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 75,
           "width": 77,
           "url": "media/panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": 21.09
       }
      ],
      "items": [
       {
        "hfov": 8.05,
        "yaw": 125.19,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 151,
           "width": 154,
           "url": "media/panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 21.09
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_FCCDE09D_ECDC_34BF_41EB_A2AF023C2C70",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_FC7140A4_ECDC_348D_41E1_015A97B0C6B9, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.74,
        "yaw": 44.68,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 79,
           "width": 99,
           "url": "media/panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -14.9
       }
      ],
      "items": [
       {
        "hfov": 10.74,
        "yaw": 44.68,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 159,
           "width": 198,
           "url": "media/panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -14.9
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_FD110117_ECDC_158B_41E5_4ACAF339189E",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_E3071CF2_ECDC_0C85_41EB_E4CE8F81F2E9, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.7,
        "yaw": 0.08,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 69,
           "width": 69,
           "url": "media/panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": 6.56
       }
      ],
      "items": [
       {
        "hfov": 7.7,
        "yaw": 0.08,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 138,
           "width": 138,
           "url": "media/panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6_0_HS_3_0.png"
          }
         ]
        },
        "pitch": 6.56
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_FDF8A27A_ECD4_3785_41DC_847EC792A8A0",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_FD08A39C_ECD4_14BD_41D4_BC56D0973514, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.96,
        "yaw": -151.96,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 83,
           "width": 86,
           "url": "media/panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6_0_HS_4_0_0_map.gif"
          }
         ]
        },
        "pitch": 21.82
       }
      ],
      "items": [
       {
        "hfov": 8.96,
        "yaw": -151.96,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 167,
           "width": 172,
           "url": "media/panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6_0_HS_4_0.png"
          }
         ]
        },
        "pitch": 21.82
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_E37399E2_ECD4_F485_41EB_3CAC846D41D1",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9, this.camera_F13441D5_EDDC_F48F_41E7_82AA79B4F124); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 22.46,
        "yaw": -65.98,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 200,
           "url": "media/panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6_0_HS_5_0_0_map.gif"
          }
         ]
        },
        "pitch": -3.44
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 22.46,
        "yaw": -65.98,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 402,
           "width": 402,
           "url": "media/panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6_0_HS_5_0.png"
          }
         ]
        },
        "pitch": -3.44
       }
      ]
     }
    ]
   }
  ],
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "id": "panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9",
     "vfov": 180,
     "hfovMin": 60,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9.jpeg"
         }
        ]
       },
       "thumbnailUrl": "media/panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_E32E0AE7_ECD4_148B_41DE_4A51ECB54FF1",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6, this.camera_F1618175_EDDC_F58F_41C4_68961B39190C); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 11.27,
           "yaw": 32.34,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 111,
              "width": 108,
              "url": "media/panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -21.76
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 11.27,
           "yaw": 32.34,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 222,
              "width": 216,
              "url": "media/panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -21.76
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_FC85A5EB_ECD4_1C9B_41E9_E3FEDB23157D",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5, this.camera_F16E6183_EDDC_F48B_41D6_33D20400E880); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 11.25,
           "yaw": 57.16,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 87,
              "width": 100,
              "url": "media/panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -1.76
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 11.25,
           "yaw": 57.16,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 175,
              "width": 201,
              "url": "media/panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -1.76
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_F5C3C48F_EDB4_7C9B_41E0_4C46F1C16D4C",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_E1317DAB_ECB4_0C9A_41B2_3EF76D17CA5A, this.camera_F162117C_EDDC_F47D_41E8_79A254656ACE); this.mainPlayList.set('selectedIndex', 8)",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 15.78,
           "yaw": -124.37,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 138,
              "width": 141,
              "url": "media/panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "pitch": -1.4
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 15.78,
           "yaw": -124.37,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 276,
              "width": 282,
              "url": "media/panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -1.4
          }
         ]
        }
       ]
      }
     ],
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6",
       "yaw": 32.34,
       "backwardYaw": -65.98,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "id": "panorama_E1317DAB_ECB4_0C9A_41B2_3EF76D17CA5A",
        "vfov": 180,
        "hfovMin": 60,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_E1317DAB_ECB4_0C9A_41B2_3EF76D17CA5A_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_E1317DAB_ECB4_0C9A_41B2_3EF76D17CA5A.jpeg"
            }
           ]
          },
          "thumbnailUrl": "media/panorama_E1317DAB_ECB4_0C9A_41B2_3EF76D17CA5A_t.jpg",
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_F524F2F9_EDAC_1487_41E7_8139E6C71C63",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411, this.camera_F11D01BA_EDDC_F485_41CB_CE8E7B6E429F); this.mainPlayList.set('selectedIndex', 7)",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 12.09,
              "yaw": 163.36,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 109,
                 "width": 109,
                 "url": "media/panorama_E1317DAB_ECB4_0C9A_41B2_3EF76D17CA5A_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -9.71
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "hfov": 12.09,
              "yaw": 163.36,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 219,
                 "width": 219,
                 "url": "media/panorama_E1317DAB_ECB4_0C9A_41B2_3EF76D17CA5A_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -9.71
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_F724BBD4_EDAD_F48D_41D3_6870316A5DD6",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9, this.camera_F11A11C0_EDDC_F486_41D4_A26B78734F4A); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 14.98,
              "yaw": 1.98,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 161,
                 "width": 134,
                 "url": "media/panorama_E1317DAB_ECB4_0C9A_41B2_3EF76D17CA5A_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -5.78
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "hfov": 14.98,
              "yaw": 1.98,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 323,
                 "width": 269,
                 "url": "media/panorama_E1317DAB_ECB4_0C9A_41B2_3EF76D17CA5A_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -5.78
             }
            ]
           }
          ]
         }
        ],
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "id": "panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411",
           "vfov": 180,
           "hfovMin": 60,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411.jpeg"
               }
              ]
             },
             "thumbnailUrl": "media/panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411_t.jpg",
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_FA2F42D3_ED54_348B_41ED_7149824468D9",
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_F50AF24C_ED54_379D_41A0_79B0BF41EEA9, this.camera_F116B1B3_EDDC_F48B_41E9_A5EE280C7F22); this.mainPlayList.set('selectedIndex', 16)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 14.73,
                 "yaw": -6.27,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 139,
                    "width": 133,
                    "url": "media/panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -8.77
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 14.73,
                 "yaw": -6.27,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 279,
                    "width": 266,
                    "url": "media/panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -8.77
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_FAFD69DB_EDAC_14BB_41E3_3F9DC3533238",
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_E1314249_ECB4_1787_41D1_9C471F9F36AC, this.camera_F100C1A5_EDDC_F48F_41C3_9C3730990E75); this.mainPlayList.set('selectedIndex', 6)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 17.13,
                 "yaw": -17.07,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 133,
                    "width": 159,
                    "url": "media/panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -16.14
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 17.13,
                 "yaw": -17.07,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 266,
                    "width": 318,
                    "url": "media/panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -16.14
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_F7A1FB56_EDB4_158D_41C0_50CBFC35A6C7",
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_E1317DAB_ECB4_0C9A_41B2_3EF76D17CA5A, this.camera_F10981AC_EDDC_F49D_41EB_56C9AB0538B2); this.mainPlayList.set('selectedIndex', 8)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 14.68,
                 "yaw": -178.39,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 99,
                    "width": 133,
                    "url": "media/panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -10.16
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 14.68,
                 "yaw": -178.39,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 198,
                    "width": 266,
                    "url": "media/panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -10.16
                }
               ]
              }
             ]
            }
           ],
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "id": "panorama_E1314249_ECB4_1787_41D1_9C471F9F36AC",
              "vfov": 180,
              "hfovMin": 60,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_E1314249_ECB4_1787_41D1_9C471F9F36AC_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_E1314249_ECB4_1787_41D1_9C471F9F36AC.jpeg"
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_E1314249_ECB4_1787_41D1_9C471F9F36AC_t.jpg",
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_FB9AF36E_ED54_159A_41E2_41829F3A5690",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411, this.camera_F1C581E3_EDDC_F48B_41DB_A33A3802B5A4); this.mainPlayList.set('selectedIndex', 7)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 21.7,
                    "yaw": -178.97,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 135,
                       "width": 195,
                       "url": "media/panorama_E1314249_ECB4_1787_41D1_9C471F9F36AC_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -7.97
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "hfov": 21.7,
                    "yaw": -178.97,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 271,
                       "width": 391,
                       "url": "media/panorama_E1314249_ECB4_1787_41D1_9C471F9F36AC_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -7.97
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_FA0D4728_ED54_3D85_41AE_EF40061C14C7",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B, this.camera_F1C021EA_EDDC_F485_41E3_1F8419828B63); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 19.77,
                    "yaw": -2.4,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 118,
                       "width": 178,
                       "url": "media/panorama_E1314249_ECB4_1787_41D1_9C471F9F36AC_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -9.06
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "hfov": 19.77,
                    "yaw": -2.4,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 237,
                       "width": 357,
                       "url": "media/panorama_E1314249_ECB4_1787_41D1_9C471F9F36AC_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -9.06
                   }
                  ]
                 }
                ]
               }
              ],
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411",
                "yaw": -178.97,
                "backwardYaw": -17.07,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "id": "panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B",
                 "vfov": 180,
                 "hfovMin": 60,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 3217,
                      "width": 6434,
                      "url": "media/panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B.jpeg"
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B_t.jpg",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_FD68539C_ECB4_34BD_41E6_A22FF6DCB696",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_FE1117CA_ECBC_7C85_41CE_C5E32688EF49, this.camera_F1D211F8_EDDC_F485_41DD_748D836F828E); this.mainPlayList.set('selectedIndex', 12)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 13.48,
                       "yaw": -22.84,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 124,
                          "width": 134,
                          "url": "media/panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -26.43
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "hfov": 13.48,
                       "yaw": -22.84,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 248,
                          "width": 269,
                          "url": "media/panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -26.43
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_FAB50269_ED54_F787_41EA_9143B947B0B5",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_E1314249_ECB4_1787_41D1_9C471F9F36AC, this.camera_F1CAA1F1_EDDC_F487_41EB_BDDB5DB3619D); this.mainPlayList.set('selectedIndex', 6)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 18.83,
                       "yaw": -161.09,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 105,
                          "width": 168,
                          "url": "media/panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B_0_HS_3_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -2.93
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "hfov": 18.83,
                       "yaw": -161.09,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 211,
                          "width": 336,
                          "url": "media/panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B_0_HS_3_0.png"
                         }
                        ]
                       },
                       "pitch": -2.93
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_F7927209_EDAC_7787_41D9_2F9681A70138",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98, this.camera_F1E7C1FF_EDDC_F47B_41D1_61F6B366D006); this.mainPlayList.set('selectedIndex', 18)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 14.67,
                       "yaw": -14.66,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 105,
                          "width": 131,
                          "url": "media/panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B_0_HS_4_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -6.29
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "hfov": 14.67,
                       "yaw": -14.66,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 211,
                          "width": 263,
                          "url": "media/panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B_0_HS_4_0.png"
                         }
                        ]
                       },
                       "pitch": -6.29
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_E1314249_ECB4_1787_41D1_9C471F9F36AC",
                   "yaw": -161.09,
                   "backwardYaw": -2.4,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "id": "panorama_FE1117CA_ECBC_7C85_41CE_C5E32688EF49",
                    "vfov": 180,
                    "hfovMin": 60,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 2688,
                         "width": 5376,
                         "url": "media/panorama_FE1117CA_ECBC_7C85_41CE_C5E32688EF49_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_FE1117CA_ECBC_7C85_41CE_C5E32688EF49.jpeg"
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_FE1117CA_ECBC_7C85_41CE_C5E32688EF49_t.jpg",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_FEFE66F9_ECB4_1C87_41ED_0F12E76A36C7",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.showPopupMedia(this.window_FE3AEFE0_ECB4_0C85_41E2_DCD91C214724, this.video_FEAFA015_ECAC_138F_41DE_39A54F4A5D2A, this.playList_FE0FFF54_ECAC_0D8D_41B3_0931938C0F23, '90%', '90%', true, true); this.playList_FE0FFF54_ECAC_0D8D_41B3_0931938C0F23.set('selectedIndex', 0); ; this.viewer_uidFE0F9F54_ECAC_0D8D_41D6_D92D5EAC68C9VideoPlayer.play(); ",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 23.38,
                          "yaw": -73.73,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 173,
                             "width": 185,
                             "url": "media/panorama_FE1117CA_ECBC_7C85_41CE_C5E32688EF49_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": 19.43
                         }
                        ],
                        "items": [
                         {
                          "hfov": 23.38,
                          "yaw": -73.73,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 346,
                             "width": 370,
                             "url": "media/panorama_FE1117CA_ECBC_7C85_41CE_C5E32688EF49_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": 19.43
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_F8909341_ED54_1586_41D4_1B089D909CBE",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B, this.camera_F19F3222_EDDC_F785_41ED_618ACA18F43B); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 19.74,
                          "yaw": -13.66,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 168,
                             "width": 149,
                             "url": "media/panorama_FE1117CA_ECBC_7C85_41CE_C5E32688EF49_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -8.89
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "hfov": 19.74,
                          "yaw": -13.66,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 337,
                             "width": 298,
                             "url": "media/panorama_FE1117CA_ECBC_7C85_41CE_C5E32688EF49_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -8.89
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B",
                      "yaw": -13.66,
                      "backwardYaw": -22.84,
                      "distance": 1
                     }
                    ],
                    "partial": false,
                    "pitch": 0,
                    "hfov": 360,
                    "thumbnailUrl": "media/panorama_FE1117CA_ECBC_7C85_41CE_C5E32688EF49_t.jpg",
                    "class": "Panorama",
                    "hfovMax": 120,
                    "label": "24"
                   },
                   "yaw": -22.84,
                   "backwardYaw": -13.66,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "id": "panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98",
                    "vfov": 180,
                    "hfovMin": 60,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 2688,
                         "width": 5376,
                         "url": "media/panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98.jpeg"
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98_t.jpg",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_F7B5B1F6_EDAC_748D_41E9_809D69104D23",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.mainPlayList.set('selectedIndex', 12)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 17.81,
                          "yaw": -20.59,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 114,
                             "width": 139,
                             "url": "media/panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -17.36
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "hfov": 17.81,
                          "yaw": -20.59,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 228,
                             "width": 278,
                             "url": "media/panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -17.36
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_F7C777D7_EDAC_3C8B_41C4_49FDB0F84FB6",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B, this.camera_F18B621B_EDDC_F7BB_41C8_16C799B0153B); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 23.74,
                          "yaw": -3.51,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 132,
                             "width": 178,
                             "url": "media/panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": 7.09
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "hfov": 23.74,
                          "yaw": -3.51,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 265,
                             "width": 357,
                             "url": "media/panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": 7.09
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_F15609E5_EDAC_348F_41DD_94A84226776C",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_F26B86B1_EDD4_1C87_4192_2B970F2B94B9, this.camera_F181F214_EDDC_F78D_41D5_F758471E7156); this.mainPlayList.set('selectedIndex', 19)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 17.46,
                          "yaw": 108.09,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 112,
                             "width": 131,
                             "url": "media/panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -8.16
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "hfov": 17.46,
                          "yaw": 108.09,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 224,
                             "width": 263,
                             "url": "media/panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -8.16
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "id": "panorama_F26B86B1_EDD4_1C87_4192_2B970F2B94B9",
                       "vfov": 180,
                       "hfovMin": 60,
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "height": 2688,
                            "width": 5376,
                            "url": "media/panorama_F26B86B1_EDD4_1C87_4192_2B970F2B94B9_hq.jpeg"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_F26B86B1_EDD4_1C87_4192_2B970F2B94B9.jpeg"
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_F26B86B1_EDD4_1C87_4192_2B970F2B94B9_t.jpg",
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_F6CC22BE_EDD4_F4FD_41EC_5D3B2D325918",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98, this.camera_F164C16D_EDDC_F59F_41DB_FA32C3C6C014); this.mainPlayList.set('selectedIndex', 18)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 20.35,
                             "yaw": 74.59,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 188,
                                "width": 152,
                                "url": "media/panorama_F26B86B1_EDD4_1C87_4192_2B970F2B94B9_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -4.81
                            }
                           ],
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "hfov": 20.35,
                             "yaw": 74.59,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 376,
                                "width": 304,
                                "url": "media/panorama_F26B86B1_EDD4_1C87_4192_2B970F2B94B9_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -4.81
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_F1136228_EDD4_1785_41E3_7B5208955B39",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.mainPlayList.set('selectedIndex', 11)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 24.37,
                             "yaw": -150.96,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 200,
                                "width": 170,
                                "url": "media/panorama_F26B86B1_EDD4_1C87_4192_2B970F2B94B9_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -5.97
                            }
                           ],
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "hfov": 24.37,
                             "yaw": -150.96,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 429,
                                "width": 365,
                                "url": "media/panorama_F26B86B1_EDD4_1C87_4192_2B970F2B94B9_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -5.97
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98",
                         "yaw": 74.59,
                         "backwardYaw": 108.09,
                         "distance": 1
                        }
                       ],
                       "partial": false,
                       "pitch": 0,
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_F26B86B1_EDD4_1C87_4192_2B970F2B94B9_t.jpg",
                       "class": "Panorama",
                       "hfovMax": 120,
                       "label": "21"
                      },
                      "yaw": 108.09,
                      "backwardYaw": 74.59,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B",
                      "yaw": -3.51,
                      "backwardYaw": -14.66,
                      "distance": 1
                     }
                    ],
                    "partial": false,
                    "pitch": 0,
                    "hfov": 360,
                    "thumbnailUrl": "media/panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98_t.jpg",
                    "class": "Panorama",
                    "hfovMax": 120,
                    "label": "23"
                   },
                   "yaw": -14.66,
                   "backwardYaw": -3.51,
                   "distance": 1
                  }
                 ],
                 "partial": false,
                 "pitch": 0,
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B_t.jpg",
                 "class": "Panorama",
                 "hfovMax": 120,
                 "label": "dji6"
                },
                "yaw": -2.4,
                "backwardYaw": -161.09,
                "distance": 1
               }
              ],
              "partial": false,
              "pitch": 0,
              "hfov": 360,
              "thumbnailUrl": "media/panorama_E1314249_ECB4_1787_41D1_9C471F9F36AC_t.jpg",
              "class": "Panorama",
              "hfovMax": 120,
              "label": "dji7"
             },
             "yaw": -17.07,
             "backwardYaw": -178.97,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_E1317DAB_ECB4_0C9A_41B2_3EF76D17CA5A",
             "yaw": -178.39,
             "backwardYaw": 163.36,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "id": "panorama_F50AF24C_ED54_379D_41A0_79B0BF41EEA9",
              "vfov": 180,
              "hfovMin": 60,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_F50AF24C_ED54_379D_41A0_79B0BF41EEA9_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_F50AF24C_ED54_379D_41A0_79B0BF41EEA9.jpeg"
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_F50AF24C_ED54_379D_41A0_79B0BF41EEA9_t.jpg",
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_FA0FA637_ED54_FF8B_41CA_83708E6B8B1D",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.showPopupMedia(this.window_FAE1B3E1_ED54_3487_41D1_066A9E2BEF5F, this.video_F4273EDF_ED54_0CBB_41E8_0A0B314DF423, this.playList_F6EA1E50_EDAC_0F86_41D1_48375617D9EB, '90%', '90%', false, true); this.playList_F6EA1E50_EDAC_0F86_41D1_48375617D9EB.set('selectedIndex', 0); ; this.viewer_uidF6EAFE51_EDAC_0F87_41E1_7CA94A86F04BVideoPlayer.play(); ",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 14.99,
                    "yaw": -86.02,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 137,
                       "width": 137,
                       "url": "media/panorama_F50AF24C_ED54_379D_41A0_79B0BF41EEA9_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 13.25
                   }
                  ],
                  "items": [
                   {
                    "hfov": 14.99,
                    "yaw": -86.02,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 275,
                       "width": 275,
                       "url": "media/panorama_F50AF24C_ED54_379D_41A0_79B0BF41EEA9_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": 13.25
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_FA5B29DE_ED54_74BD_41CB_89A62E658836",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411, this.camera_F129B1CE_EDDC_F49D_41E8_F3A0CEAB79B7); this.mainPlayList.set('selectedIndex', 7)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 29.43,
                    "yaw": 74.34,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 178,
                       "width": 200,
                       "url": "media/panorama_F50AF24C_ED54_379D_41A0_79B0BF41EEA9_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 5.37
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "hfov": 29.43,
                    "yaw": 74.34,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 473,
                       "width": 528,
                       "url": "media/panorama_F50AF24C_ED54_379D_41A0_79B0BF41EEA9_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": 5.37
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_F7125248_EDB4_7785_41E2_568CDCCC8E02",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 15.39,
                    "yaw": 107.12,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 137,
                       "width": 137,
                       "url": "media/panorama_F50AF24C_ED54_379D_41A0_79B0BF41EEA9_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 2.45
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "hfov": 15.39,
                    "yaw": 107.12,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 275,
                       "width": 275,
                       "url": "media/panorama_F50AF24C_ED54_379D_41A0_79B0BF41EEA9_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": 2.45
                   }
                  ]
                 }
                ]
               }
              ],
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411",
                "yaw": 74.34,
                "backwardYaw": -6.27,
                "distance": 1
               }
              ],
              "partial": false,
              "pitch": 0,
              "hfov": 360,
              "thumbnailUrl": "media/panorama_F50AF24C_ED54_379D_41A0_79B0BF41EEA9_t.jpg",
              "class": "Panorama",
              "hfovMax": 120,
              "label": "4"
             },
             "yaw": -6.27,
             "backwardYaw": 74.34,
             "distance": 1
            }
           ],
           "partial": false,
           "pitch": 0,
           "hfov": 360,
           "thumbnailUrl": "media/panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411_t.jpg",
           "class": "Panorama",
           "hfovMax": 120,
           "label": "dji8"
          },
          "yaw": 163.36,
          "backwardYaw": -178.39,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9",
          "yaw": 1.98,
          "backwardYaw": -124.37,
          "distance": 1
         }
        ],
        "partial": false,
        "pitch": 0,
        "hfov": 360,
        "thumbnailUrl": "media/panorama_E1317DAB_ECB4_0C9A_41B2_3EF76D17CA5A_t.jpg",
        "class": "Panorama",
        "hfovMax": 120,
        "label": "dji9"
       },
       "yaw": -124.37,
       "backwardYaw": 1.98,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "id": "panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5",
        "vfov": 180,
        "hfovMin": 60,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5.jpeg"
            }
           ]
          },
          "thumbnailUrl": "media/panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5_t.jpg",
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_FDFD7EA4_ECDC_0C8D_41DE_C0401967DC1F",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB, this.camera_F17F8198_EDDC_F485_41ED_339D3FB97ADB); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 14.9,
              "yaw": -4.3,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 131,
                 "width": 134,
                 "url": "media/panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -8.18
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "hfov": 14.9,
              "yaw": -4.3,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 263,
                 "width": 269,
                 "url": "media/panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -8.18
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_F5FE5EE9_EDB4_0C87_41E3_80F3ADA9E808",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9, this.camera_F170E191_EDDC_F487_41E2_2F1201419B02); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 11.62,
              "yaw": 165.62,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 104,
                 "width": 105,
                 "url": "media/panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -10.58
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "hfov": 11.62,
              "yaw": 165.62,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 208,
                 "width": 211,
                 "url": "media/panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -10.58
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_F142B378_EDDC_3585_41E7_63C1D521C930",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C, this.camera_F16AD18A_EDDC_F485_41D0_CF21546F2A82); this.mainPlayList.set('selectedIndex', 14)",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 11.59,
              "yaw": 169.05,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 117,
                 "width": 117,
                 "url": "media/panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "pitch": -28.1
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "hfov": 11.59,
              "yaw": 169.05,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 234,
                 "width": 234,
                 "url": "media/panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5_0_HS_3_0.png"
                }
               ]
              },
              "pitch": -28.1
             }
            ]
           }
          ]
         }
        ],
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "id": "panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C",
           "vfov": 180,
           "hfovMin": 60,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 2688,
                "width": 5376,
                "url": "media/panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C.jpeg"
               }
              ]
             },
             "thumbnailUrl": "media/panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C_t.jpg",
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_FE7CB613_ED74_1F8B_41E0_48A06E78D5D6",
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showWindow(this.window_F9A7B32B_ED74_159B_41E4_9535248ED437, null, false)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 9.42,
                 "yaw": 26.63,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 71,
                    "width": 77,
                    "url": "media/panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 24.46
                }
               ],
               "items": [
                {
                 "hfov": 9.42,
                 "yaw": 26.63,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 143,
                    "width": 154,
                    "url": "media/panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": 24.46
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_F854853C_ED74_1DFD_4197_199E12622B06",
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showWindow(this.window_FB1960B4_ED74_148D_41E6_5B11D72438A8, null, false)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 9.24,
                 "yaw": 49.7,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 77,
                    "width": 72,
                    "url": "media/panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 18.84
                }
               ],
               "items": [
                {
                 "hfov": 9.24,
                 "yaw": 49.7,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 154,
                    "width": 145,
                    "url": "media/panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": 18.84
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_F98A3543_ED6C_1D8B_41E4_784BC764458D",
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5, this.camera_F303B0E1_EDDC_F487_41E1_90A5A3A163FD); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 20.37,
                 "yaw": 82.18,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 158,
                    "width": 152,
                    "url": "media/panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -4
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 20.37,
                 "yaw": 82.18,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 317,
                    "width": 304,
                    "url": "media/panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -4
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_F98FC414_ED6C_F38D_41DD_D5FF4782ACB6",
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6, this.camera_F305D0D5_EDDC_F48F_41DF_58DE254848E9); this.mainPlayList.set('selectedIndex', 0)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 16.22,
                 "yaw": -69.5,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 135,
                    "width": 124,
                    "url": "media/panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -12.62
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 16.22,
                 "yaw": -69.5,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 270,
                    "width": 248,
                    "url": "media/panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -12.62
                }
               ]
              }
             ]
            }
           ],
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6",
             "yaw": -69.5,
             "backwardYaw": 166.13,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5",
             "yaw": 82.18,
             "backwardYaw": 169.05,
             "distance": 1
            }
           ],
           "partial": false,
           "pitch": 0,
           "hfov": 360,
           "thumbnailUrl": "media/panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C_t.jpg",
           "class": "Panorama",
           "hfovMax": 120,
           "label": "9"
          },
          "yaw": 169.05,
          "backwardYaw": 82.18,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9",
          "yaw": 165.62,
          "backwardYaw": 57.16,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "id": "panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB",
           "vfov": 180,
           "hfovMin": 60,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB.jpeg"
               }
              ]
             },
             "thumbnailUrl": "media/panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB_t.jpg",
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_FC2F5FC8_ECAC_0C85_41D9_3F723E1E13C1",
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_E13156F3_ECB4_7C8B_41BB_80548F33D4FE, this.camera_F1A0A229_EDDC_F787_41EC_9AC6EECBBAA1); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 14.09,
                 "yaw": -10.72,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 141,
                    "width": 126,
                    "url": "media/panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -6.51
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 14.09,
                 "yaw": -10.72,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 282,
                    "width": 253,
                    "url": "media/panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -6.51
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_F83DCCDA_ED6C_0C85_41E2_F47D6B3744E6",
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_FB6CB292_ED53_F485_41E6_125AE579F622, this.camera_F1B55230_EDDC_F785_41EC_429DB8D9DB6A); this.mainPlayList.set('selectedIndex', 15)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 14.66,
                 "yaw": 179.34,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 147,
                    "width": 131,
                    "url": "media/panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -6.28
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 14.66,
                 "yaw": 179.34,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 294,
                    "width": 263,
                    "url": "media/panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -6.28
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_F4839E57_EDB4_0F8B_41E9_40C4CE8AB2F5",
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5, this.camera_F1B8D236_EDDC_F78A_41C7_C11390E80E60); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 15.68,
                 "yaw": 165.91,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 125,
                    "width": 142,
                    "url": "media/panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -9.85
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 15.68,
                 "yaw": 165.91,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 250,
                    "width": 284,
                    "url": "media/panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -9.85
                }
               ]
              }
             ]
            }
           ],
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "id": "panorama_E13156F3_ECB4_7C8B_41BB_80548F33D4FE",
              "vfov": 180,
              "hfovMin": 60,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_E13156F3_ECB4_7C8B_41BB_80548F33D4FE_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_E13156F3_ECB4_7C8B_41BB_80548F33D4FE.jpeg"
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_E13156F3_ECB4_7C8B_41BB_80548F33D4FE_t.jpg",
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_FC774952_ECDC_3585_41B1_E7F8D2E6C612",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD28EF28_ECD4_0D85_41EC_9DF50E6A73E1, this.camera_F1FDF20D_EDDC_F79F_41ED_0CFA39B13E94); this.mainPlayList.set('selectedIndex', 10)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 13.48,
                    "yaw": 1.83,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 114,
                       "width": 121,
                       "url": "media/panorama_E13156F3_ECB4_7C8B_41BB_80548F33D4FE_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -7.38
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "hfov": 13.48,
                    "yaw": 1.83,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 229,
                       "width": 242,
                       "url": "media/panorama_E13156F3_ECB4_7C8B_41BB_80548F33D4FE_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -7.38
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_F4017BA5_EDBC_148F_41DC_D7D80D102DFA",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB, this.camera_F1EBA206_EDDC_F78D_41EA_4C7CC46B2B47); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 17.81,
                    "yaw": 147.3,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 123,
                       "width": 159,
                       "url": "media/panorama_E13156F3_ECB4_7C8B_41BB_80548F33D4FE_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -0.88
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "hfov": 17.81,
                    "yaw": 147.3,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 247,
                       "width": 318,
                       "url": "media/panorama_E13156F3_ECB4_7C8B_41BB_80548F33D4FE_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -0.88
                   }
                  ]
                 }
                ]
               }
              ],
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB",
                "yaw": 147.3,
                "backwardYaw": -10.72,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "id": "panorama_FD28EF28_ECD4_0D85_41EC_9DF50E6A73E1",
                 "vfov": 180,
                 "hfovMin": 60,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 2688,
                      "width": 5376,
                      "url": "media/panorama_FD28EF28_ECD4_0D85_41EC_9DF50E6A73E1_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_FD28EF28_ECD4_0D85_41EC_9DF50E6A73E1.jpeg"
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_FD28EF28_ECD4_0D85_41EC_9DF50E6A73E1_t.jpg",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_FC44D2AC_ECD4_F49D_41E4_701606C953CD",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_E13156F3_ECB4_7C8B_41BB_80548F33D4FE, this.camera_F04DF23D_EDDC_F7FF_41ED_3B2FC91228AB); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 22.78,
                       "yaw": -178.04,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 186,
                          "width": 173,
                          "url": "media/panorama_FD28EF28_ECD4_0D85_41EC_9DF50E6A73E1_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -10.79
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "hfov": 22.78,
                       "yaw": -178.04,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 372,
                          "width": 346,
                          "url": "media/panorama_FD28EF28_ECD4_0D85_41EC_9DF50E6A73E1_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -10.79
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_FC54A3DD_ECD4_14BF_4199_7FF0DE406491",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_FEFC87CE_ECAC_3C9D_41EC_99ED5CCABF46, this.camera_F050C244_EDDC_F78D_41E2_615C4149D5B4); this.mainPlayList.set('selectedIndex', 11)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 19.27,
                       "yaw": 30.06,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 161,
                          "width": 145,
                          "url": "media/panorama_FD28EF28_ECD4_0D85_41EC_9DF50E6A73E1_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -9.55
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "hfov": 19.27,
                       "yaw": 30.06,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 322,
                          "width": 291,
                          "url": "media/panorama_FD28EF28_ECD4_0D85_41EC_9DF50E6A73E1_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -9.55
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_E13156F3_ECB4_7C8B_41BB_80548F33D4FE",
                   "yaw": -178.04,
                   "backwardYaw": 1.83,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "id": "panorama_FEFC87CE_ECAC_3C9D_41EC_99ED5CCABF46",
                    "vfov": 180,
                    "hfovMin": 60,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 2688,
                         "width": 5376,
                         "url": "media/panorama_FEFC87CE_ECAC_3C9D_41EC_99ED5CCABF46_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_FEFC87CE_ECAC_3C9D_41EC_99ED5CCABF46.jpeg"
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_FEFC87CE_ECAC_3C9D_41EC_99ED5CCABF46_t.jpg",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_FDE2421E_ECB4_17BD_41DE_1E665956BB9A",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 19.72,
                          "yaw": -10.59,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 157,
                             "width": 151,
                             "url": "media/panorama_FEFC87CE_ECAC_3C9D_41EC_99ED5CCABF46_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -13.42
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "hfov": 19.72,
                          "yaw": -10.59,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 315,
                             "width": 302,
                             "url": "media/panorama_FEFC87CE_ECAC_3C9D_41EC_99ED5CCABF46_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -13.42
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_FDA6356E_ECB4_3D9A_41EB_A2F8F6229671",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_FD28EF28_ECD4_0D85_41EC_9DF50E6A73E1, this.camera_F105F19E_EDDC_F4BD_41C8_E38C691B0606); this.mainPlayList.set('selectedIndex', 10)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 19.97,
                          "yaw": -155.34,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 117,
                             "width": 156,
                             "url": "media/panorama_FEFC87CE_ECAC_3C9D_41EC_99ED5CCABF46_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -18.02
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "hfov": 19.97,
                          "yaw": -155.34,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 235,
                             "width": 313,
                             "url": "media/panorama_FEFC87CE_ECAC_3C9D_41EC_99ED5CCABF46_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -18.02
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_FD28EF28_ECD4_0D85_41EC_9DF50E6A73E1",
                      "yaw": -155.34,
                      "backwardYaw": 30.06,
                      "distance": 1
                     }
                    ],
                    "partial": false,
                    "pitch": 0,
                    "hfov": 360,
                    "thumbnailUrl": "media/panorama_FEFC87CE_ECAC_3C9D_41EC_99ED5CCABF46_t.jpg",
                    "class": "Panorama",
                    "hfovMax": 120,
                    "label": "20"
                   },
                   "yaw": 30.06,
                   "backwardYaw": -155.34,
                   "distance": 1
                  }
                 ],
                 "partial": false,
                 "pitch": 0,
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_FD28EF28_ECD4_0D85_41EC_9DF50E6A73E1_t.jpg",
                 "class": "Panorama",
                 "hfovMax": 120,
                 "label": "18"
                },
                "yaw": 1.83,
                "backwardYaw": -178.04,
                "distance": 1
               }
              ],
              "partial": false,
              "pitch": 0,
              "hfov": 360,
              "thumbnailUrl": "media/panorama_E13156F3_ECB4_7C8B_41BB_80548F33D4FE_t.jpg",
              "class": "Panorama",
              "hfovMax": 120,
              "label": "dji5"
             },
             "yaw": -10.72,
             "backwardYaw": 147.3,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "id": "panorama_FB6CB292_ED53_F485_41E6_125AE579F622",
              "vfov": 180,
              "hfovMin": 60,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 2688,
                   "width": 5376,
                   "url": "media/panorama_FB6CB292_ED53_F485_41E6_125AE579F622_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_FB6CB292_ED53_F485_41E6_125AE579F622.jpeg"
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_FB6CB292_ED53_F485_41E6_125AE579F622_t.jpg",
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_F9C8E4C4_ED54_1C8D_41DE_D0B00B207AE8",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB, this.camera_F120D1C7_EDDC_F48A_41DC_E4F08EB89DE7); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 33.91,
                    "yaw": -23.15,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 200,
                       "width": 200,
                       "url": "media/panorama_FB6CB292_ED53_F485_41E6_125AE579F622_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -8.46
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "hfov": 33.91,
                    "yaw": -23.15,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 512,
                       "width": 512,
                       "url": "media/panorama_FB6CB292_ED53_F485_41E6_125AE579F622_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -8.46
                   }
                  ]
                 }
                ]
               }
              ],
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB",
                "yaw": -23.15,
                "backwardYaw": 179.34,
                "distance": 1
               }
              ],
              "partial": false,
              "pitch": 0,
              "hfov": 360,
              "thumbnailUrl": "media/panorama_FB6CB292_ED53_F485_41E6_125AE579F622_t.jpg",
              "class": "Panorama",
              "hfovMax": 120,
              "label": "15"
             },
             "yaw": 179.34,
             "backwardYaw": -23.15,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5",
             "yaw": 165.91,
             "backwardYaw": -4.3,
             "distance": 1
            }
           ],
           "partial": false,
           "pitch": 0,
           "hfov": 360,
           "thumbnailUrl": "media/panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB_t.jpg",
           "class": "Panorama",
           "hfovMax": 120,
           "label": "dji4"
          },
          "yaw": -4.3,
          "backwardYaw": 165.91,
          "distance": 1
         }
        ],
        "partial": false,
        "pitch": 0,
        "hfov": 360,
        "thumbnailUrl": "media/panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5_t.jpg",
        "class": "Panorama",
        "hfovMax": 120,
        "label": "dji3"
       },
       "yaw": 57.16,
       "backwardYaw": 165.62,
       "distance": 1
      }
     ],
     "partial": false,
     "pitch": 0,
     "hfov": 360,
     "thumbnailUrl": "media/panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9_t.jpg",
     "class": "Panorama",
     "hfovMax": 120,
     "label": "DJI2.0JPG"
    },
    "yaw": -65.98,
    "backwardYaw": 32.34,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C",
    "yaw": 166.13,
    "backwardYaw": -69.5,
    "distance": 1
   }
  ],
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6_t.jpg",
  "class": "Panorama",
  "hfovMax": 120,
  "label": "DJI1"
 },
 {
  "preloadEnabled": false,
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration"
 },
 {
  "id": "panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 154.07,
   "pitch": 2.45
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9",
 {
  "id": "panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5",
 {
  "id": "panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB",
 {
  "id": "panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_E13156F3_ECB4_7C8B_41BB_80548F33D4FE",
 {
  "id": "panorama_E13156F3_ECB4_7C8B_41BB_80548F33D4FE_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B",
 {
  "id": "panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_E1314249_ECB4_1787_41D1_9C471F9F36AC",
 {
  "id": "panorama_E1314249_ECB4_1787_41D1_9C471F9F36AC_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411",
 {
  "id": "panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_E1317DAB_ECB4_0C9A_41B2_3EF76D17CA5A",
 {
  "id": "panorama_E1317DAB_ECB4_0C9A_41B2_3EF76D17CA5A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "thumbnailUrl": "media/album_E3CBAABC_ECDC_14FD_41E6_E9D817074EA8_t.png",
  "id": "album_E3CBAABC_ECDC_14FD_41E6_E9D817074EA8",
  "label": "\u0424\u043e\u0442\u043e \u0410\u043b\u044c\u0431\u043e\u043c DJI_0678",
  "class": "PhotoAlbum",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_E3CBAABC_ECDC_14FD_41E6_E9D817074EA8_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "duration": 5000,
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.57",
       "zoomFactor": 1.1,
       "y": "0.54"
      }
     },
     "media": {
      "thumbnailUrl": "media/album_E3CBAABC_ECDC_14FD_41E6_E9D817074EA8_0_t.jpg",
      "id": "album_E3CBAABC_ECDC_14FD_41E6_E9D817074EA8_0",
      "label": "DJI_0678",
      "duration": 5000,
      "width": 4644,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_E3CBAABC_ECDC_14FD_41E6_E9D817074EA8_0.JPG"
        }
       ]
      },
      "class": "Photo",
      "height": 1858
     }
    }
   ]
  }
 },
 {
  "viewerArea": "this.MainViewer",
  "class": "PhotoAlbumPlayer",
  "id": "MainViewerPhotoAlbumPlayer"
 },
 "this.album_E3CBAABC_ECDC_14FD_41E6_E9D817074EA8_0",
 "this.panorama_FD28EF28_ECD4_0D85_41EC_9DF50E6A73E1",
 {
  "id": "panorama_FD28EF28_ECD4_0D85_41EC_9DF50E6A73E1_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_FEFC87CE_ECAC_3C9D_41EC_99ED5CCABF46",
 {
  "id": "panorama_FEFC87CE_ECAC_3C9D_41EC_99ED5CCABF46_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_FE1117CA_ECBC_7C85_41CE_C5E32688EF49",
 {
  "id": "panorama_FE1117CA_ECBC_7C85_41CE_C5E32688EF49_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "thumbnailUrl": "media/video_FEAFA015_ECAC_138F_41DE_39A54F4A5D2A_t.jpg",
  "class": "Video",
  "id": "video_FEAFA015_ECAC_138F_41DE_39A54F4A5D2A",
  "label": "7931003008682810403",
  "width": 848,
  "loop": false,
  "video": {
   "class": "VideoResource",
   "height": 464,
   "mp4Url": "media/video_FEAFA015_ECAC_138F_41DE_39A54F4A5D2A.mp4",
   "width": 848
  },
  "height": 464,
  "scaleMode": "fit_to_width"
 },
 {
  "viewerArea": "this.MainViewer",
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "displayPlaybackBar": true
 },
 "this.panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C",
 {
  "id": "panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_FB6CB292_ED53_F485_41E6_125AE579F622",
 {
  "id": "panorama_FB6CB292_ED53_F485_41E6_125AE579F622_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_F50AF24C_ED54_379D_41A0_79B0BF41EEA9",
 {
  "id": "panorama_F50AF24C_ED54_379D_41A0_79B0BF41EEA9_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "thumbnailUrl": "media/video_F4273EDF_ED54_0CBB_41E8_0A0B314DF423_t.jpg",
  "class": "Video",
  "id": "video_F4273EDF_ED54_0CBB_41E8_0A0B314DF423",
  "label": "-8323487735674065444",
  "width": 1280,
  "loop": false,
  "video": {
   "class": "VideoResource",
   "height": 720,
   "mp4Url": "media/video_F4273EDF_ED54_0CBB_41E8_0A0B314DF423.mp4",
   "width": 1280
  },
  "height": 720,
  "scaleMode": "fit_inside"
 },
 "this.panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98",
 {
  "id": "panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_F26B86B1_EDD4_1C87_4192_2B970F2B94B9",
 {
  "id": "panorama_F26B86B1_EDD4_1C87_4192_2B970F2B94B9_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "camera": "this.panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_E380704E_ECB4_139D_41C0_A787FCBD6AC6"
   },
   {
    "camera": "this.panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_E136C63A_ECB4_1F85_41EA_CADFF92832B9"
   },
   {
    "camera": "this.panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_E1312B92_ECB4_1485_41E5_4695E9D27AF5"
   },
   {
    "camera": "this.panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_E1311149_ECB4_7587_41E8_4B50EC00D5CB"
   },
   {
    "camera": "this.panorama_E13156F3_ECB4_7C8B_41BB_80548F33D4FE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_E13156F3_ECB4_7C8B_41BB_80548F33D4FE"
   },
   {
    "camera": "this.panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_E1310C9E_ECB4_0CBA_41E7_AE371020264B"
   },
   {
    "camera": "this.panorama_E1314249_ECB4_1787_41D1_9C471F9F36AC_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_E1314249_ECB4_1787_41D1_9C471F9F36AC"
   },
   {
    "camera": "this.panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_E13117F2_ECB4_1C85_41D2_F41F06DDB411"
   },
   {
    "camera": "this.panorama_E1317DAB_ECB4_0C9A_41B2_3EF76D17CA5A_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_E1317DAB_ECB4_0C9A_41B2_3EF76D17CA5A"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.album_E3CBAABC_ECDC_14FD_41E6_E9D817074EA8"
   },
   {
    "camera": "this.panorama_FD28EF28_ECD4_0D85_41EC_9DF50E6A73E1_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_FD28EF28_ECD4_0D85_41EC_9DF50E6A73E1"
   },
   {
    "camera": "this.panorama_FEFC87CE_ECAC_3C9D_41EC_99ED5CCABF46_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_FEFC87CE_ECAC_3C9D_41EC_99ED5CCABF46"
   },
   {
    "camera": "this.panorama_FE1117CA_ECBC_7C85_41CE_C5E32688EF49_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_FE1117CA_ECBC_7C85_41CE_C5E32688EF49"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.video_FEAFA015_ECAC_138F_41DE_39A54F4A5D2A",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 13, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 13, this.video_FEAFA015_ECAC_138F_41DE_39A54F4A5D2A)"
   },
   {
    "camera": "this.panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_F9B090E1_ED74_3487_41D8_A65D1CB6372C"
   },
   {
    "camera": "this.panorama_FB6CB292_ED53_F485_41E6_125AE579F622_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_FB6CB292_ED53_F485_41E6_125AE579F622"
   },
   {
    "camera": "this.panorama_F50AF24C_ED54_379D_41A0_79B0BF41EEA9_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_F50AF24C_ED54_379D_41A0_79B0BF41EEA9"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "media": "this.video_F4273EDF_ED54_0CBB_41E8_0A0B314DF423",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 17, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 17, this.video_F4273EDF_ED54_0CBB_41E8_0A0B314DF423)"
   },
   {
    "camera": "this.panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "media": "this.panorama_F11D9223_EDAC_178B_41D7_F16AC7FC7F98"
   },
   {
    "camera": "this.panorama_F26B86B1_EDD4_1C87_4192_2B970F2B94B9_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 0)",
    "media": "this.panorama_F26B86B1_EDD4_1C87_4192_2B970F2B94B9"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_FE0FFF54_ECAC_0D8D_41B3_0931938C0F23",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidFE0F9F54_ECAC_0D8D_41D6_D92D5EAC68C9VideoPlayer)",
    "media": "this.video_FEAFA015_ECAC_138F_41DE_39A54F4A5D2A",
    "class": "VideoPlayListItem",
    "player": {
     "viewerArea": {
      "playbackBarProgressBorderSize": 0,
      "toolTipFontStyle": "normal",
      "playbackBarHeadWidth": 6,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadHeight": 15,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipShadowColor": "#333333",
      "playbackBarHeadShadow": true,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarOpacity": 1,
      "playbackBarRight": 0,
      "class": "ViewerArea",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderColor": "#767676",
      "minHeight": 50,
      "progressBarBorderRadius": 0,
      "progressBarOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBarBorderSize": 0,
      "paddingTop": 0,
      "borderSize": 0,
      "progressBarBorderColor": "#000000",
      "playbackBarHeadOpacity": 1,
      "width": "100%",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipPaddingLeft": 6,
      "progressBottom": 2,
      "minWidth": 100,
      "toolTipShadowOpacity": 1,
      "toolTipBorderRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipTextShadowBlurRadius": 3,
      "height": "100%",
      "progressHeight": 10,
      "toolTipFontColor": "#606060",
      "progressBackgroundColorDirection": "vertical",
      "paddingBottom": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressLeft": 0,
      "playbackBarProgressBorderRadius": 0,
      "paddingRight": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingTop": 4,
      "playbackBarProgressOpacity": 1,
      "progressBorderSize": 0,
      "transitionMode": "blending",
      "playbackBarHeadBorderColor": "#000000",
      "toolTipBorderSize": 1,
      "playbackBarBottom": 0,
      "id": "viewer_uidF3677096_EDDC_F48D_41D3_4AB8878BD5F1",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "toolTipShadowBlurRadius": 3,
      "toolTipFontWeight": "normal",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "progressBorderColor": "#000000",
      "shadow": false,
      "borderRadius": 0,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarBackgroundOpacity": 1,
      "playbackBarBorderSize": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "progressBorderRadius": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "paddingLeft": 0,
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "playbackBarBorderColor": "#FFFFFF",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadShadowColor": "#000000",
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipShadowSpread": 0,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarProgressBorderColor": "#000000",
      "toolTipPaddingRight": 6,
      "playbackBarHeight": 10,
      "progressBackgroundColorRatios": [
       0
      ],
      "toolTipShadowVerticalLength": 0,
      "progressOpacity": 1,
      "progressRight": 0,
      "toolTipFontFamily": "Arial",
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "playbackBarHeadShadowBlurRadius": 3
     },
     "class": "VideoPlayer",
     "id": "viewer_uidFE0F9F54_ECAC_0D8D_41D6_D92D5EAC68C9VideoPlayer",
     "displayPlaybackBar": true
    },
    "start": "this.viewer_uidFE0F9F54_ECAC_0D8D_41D6_D92D5EAC68C9VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_FE0FFF54_ECAC_0D8D_41B3_0931938C0F23, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FE0FFF54_ECAC_0D8D_41B3_0931938C0F23, 0, this.video_FEAFA015_ECAC_138F_41DE_39A54F4A5D2A)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_F6EA1E50_EDAC_0F86_41D1_48375617D9EB",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidF6EAFE51_EDAC_0F87_41E1_7CA94A86F04BVideoPlayer)",
    "media": "this.video_F4273EDF_ED54_0CBB_41E8_0A0B314DF423",
    "class": "VideoPlayListItem",
    "player": {
     "viewerArea": {
      "playbackBarProgressBorderSize": 0,
      "toolTipFontStyle": "normal",
      "playbackBarHeadWidth": 6,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadHeight": 15,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipShadowColor": "#333333",
      "playbackBarHeadShadow": true,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarOpacity": 1,
      "playbackBarRight": 0,
      "class": "ViewerArea",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderColor": "#767676",
      "minHeight": 50,
      "progressBarBorderRadius": 0,
      "progressBarOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBarBorderSize": 0,
      "paddingTop": 0,
      "borderSize": 0,
      "progressBarBorderColor": "#000000",
      "playbackBarHeadOpacity": 1,
      "width": "100%",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipPaddingLeft": 6,
      "progressBottom": 2,
      "minWidth": 100,
      "toolTipShadowOpacity": 1,
      "toolTipBorderRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipTextShadowBlurRadius": 3,
      "height": "100%",
      "progressHeight": 10,
      "toolTipFontColor": "#606060",
      "progressBackgroundColorDirection": "vertical",
      "paddingBottom": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressLeft": 0,
      "playbackBarProgressBorderRadius": 0,
      "paddingRight": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingTop": 4,
      "playbackBarProgressOpacity": 1,
      "progressBorderSize": 0,
      "transitionMode": "blending",
      "playbackBarHeadBorderColor": "#000000",
      "toolTipBorderSize": 1,
      "playbackBarBottom": 0,
      "id": "viewer_uidF360809E_EDDC_F4BD_41B8_C5CC1E0B88F8",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "toolTipShadowBlurRadius": 3,
      "toolTipFontWeight": "normal",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "progressBorderColor": "#000000",
      "shadow": false,
      "borderRadius": 0,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarBackgroundOpacity": 1,
      "playbackBarBorderSize": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "progressBorderRadius": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "paddingLeft": 0,
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "playbackBarBorderColor": "#FFFFFF",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadShadowColor": "#000000",
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipShadowSpread": 0,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarProgressBorderColor": "#000000",
      "toolTipPaddingRight": 6,
      "playbackBarHeight": 10,
      "progressBackgroundColorRatios": [
       0
      ],
      "toolTipShadowVerticalLength": 0,
      "progressOpacity": 1,
      "progressRight": 0,
      "toolTipFontFamily": "Arial",
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "playbackBarHeadShadowBlurRadius": 3
     },
     "class": "VideoPlayer",
     "id": "viewer_uidF6EAFE51_EDAC_0F87_41E1_7CA94A86F04BVideoPlayer",
     "displayPlaybackBar": true
    },
    "start": "this.viewer_uidF6EAFE51_EDAC_0F87_41E1_7CA94A86F04BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_F6EA1E50_EDAC_0F86_41D1_48375617D9EB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_F6EA1E50_EDAC_0F86_41D1_48375617D9EB, 0, this.video_F4273EDF_ED54_0CBB_41E8_0A0B314DF423)"
   }
  ]
 },
 {
  "titlePaddingRight": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titleFontFamily": "Arial",
  "bodyPaddingLeft": 5,
  "modal": true,
  "bodyPaddingBottom": 5,
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "titleFontStyle": "normal",
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidF35C6087_EDDC_F48B_41D5_6198BF690351",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "scrollBarVisible": "rollOver",
    "height": "17%",
    "width": "100%",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "scrollBarColor": "#000000"
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "id": "image_uidF35C6087_EDDC_F48B_41D5_6198BF690351_1",
    "minWidth": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "url": "media/photo_FCA6734C_ECDC_359D_41BB_6BC84822DBAD.JPG",
    "borderRadius": 0,
    "height": "82%",
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": "100%"
   }
  ],
  "title": "\u044b\u043f\u0443\u043f\u043a\u0435\u0440\u043f\u043a\u0440\u043a\u0435\u0440\u043a\u0440\u043a\u043f\u0440\u043a\u043a\u0440\u0435\u0440\u0443\u043a\u0440\u044b\u0435\u0440\u044b\u0440\u0432\u0430\u0440\u0442\u0443\u0440\u0443\u0440\u0443\u043a\u044b\u0440\u0441\u043a\u0440\u043a\u0440\u043c\u043f\u0430\u043f\u0438\u043f\u0430\u0442\u043f\u0435\u0442\u043a\u0435\u0440",
  "shadowVerticalLength": 0,
  "titleFontWeight": "normal",
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "width": 600,
  "footerBackgroundColorDirection": "vertical",
  "height": 300,
  "headerPaddingBottom": 10,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 5,
  "headerBorderColor": "#000000",
  "titleFontColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_E3033629_ECDC_7F87_41E3_8DA76E1F83EE",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#000000",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadowHorizontalLength": 3,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "layout": "vertical",
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ]
 },
 {
  "titlePaddingRight": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titleFontFamily": "Arial",
  "bodyPaddingLeft": 5,
  "modal": true,
  "bodyPaddingBottom": 5,
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "titleFontStyle": "normal",
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidF35BB089_EDDC_F487_41B3_23308C5B07D2",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "scrollBarVisible": "rollOver",
    "height": "12%",
    "width": "100%",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "scrollBarColor": "#000000"
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "id": "image_uidF35BB089_EDDC_F487_41B3_23308C5B07D2_1",
    "minWidth": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "url": "media/photo_FC82CFEC_ECDC_0C9D_41D1_8854CE03BCB2.JPG",
    "borderRadius": 0,
    "height": "87%",
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": "100%"
   }
  ],
  "title": "",
  "shadowVerticalLength": 0,
  "titleFontWeight": "normal",
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "width": 400,
  "footerBackgroundColorDirection": "vertical",
  "height": 400,
  "headerPaddingBottom": 10,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 5,
  "headerBorderColor": "#000000",
  "titleFontColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_FC7140A4_ECDC_348D_41E1_015A97B0C6B9",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#000000",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadowHorizontalLength": 3,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "layout": "vertical",
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ]
 },
 {
  "titlePaddingRight": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titleFontFamily": "Arial",
  "bodyPaddingLeft": 5,
  "modal": true,
  "bodyPaddingBottom": 5,
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "titleFontStyle": "normal",
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidF35B408F_EDDC_F49B_419F_5D5AEB44EC46",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "scrollBarVisible": "rollOver",
    "height": "10%",
    "width": "100%",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "scrollBarColor": "#000000"
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "id": "image_uidF35B408F_EDDC_F49B_419F_5D5AEB44EC46_1",
    "minWidth": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "url": "media/photo_FC787674_ECDC_1F8D_41B7_35E7A98E77A3.JPG",
    "borderRadius": 0,
    "height": "89%",
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": "100%"
   }
  ],
  "title": "",
  "shadowVerticalLength": 0,
  "titleFontWeight": "normal",
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "width": 300,
  "footerBackgroundColorDirection": "vertical",
  "height": 600,
  "headerPaddingBottom": 10,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 5,
  "headerBorderColor": "#000000",
  "titleFontColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_E3071CF2_ECDC_0C85_41EB_E4CE8F81F2E9",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#000000",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadowHorizontalLength": 3,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "layout": "vertical",
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ]
 },
 {
  "titlePaddingRight": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titleFontFamily": "Arial",
  "bodyPaddingLeft": 5,
  "modal": true,
  "bodyPaddingBottom": 5,
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "titleFontStyle": "normal",
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidF35AE090_EDDC_F485_41E6_50B2B902D42B",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "scrollBarVisible": "rollOver",
    "height": "10%",
    "width": "100%",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "scrollBarColor": "#000000"
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "id": "image_uidF35AE090_EDDC_F485_41E6_50B2B902D42B_1",
    "minWidth": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "url": "media/photo_FE098745_ECD4_1D8E_41C8_8B9CF5E6FC61.JPG",
    "borderRadius": 0,
    "height": "89%",
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": "100%"
   }
  ],
  "title": "",
  "shadowVerticalLength": 0,
  "titleFontWeight": "normal",
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "width": 550,
  "footerBackgroundColorDirection": "vertical",
  "height": 300,
  "headerPaddingBottom": 10,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 5,
  "headerBorderColor": "#000000",
  "titleFontColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_FD08A39C_ECD4_14BD_41D4_BC56D0973514",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#000000",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadowHorizontalLength": 3,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "layout": "vertical",
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ]
 },
 {
  "titlePaddingRight": 5,
  "closeButtonPressedBackgroundOpacity": 1,
  "backgroundColor": [],
  "titleFontFamily": "Arial",
  "closeButtonBackgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "modal": true,
  "bodyPaddingBottom": 0,
  "titlePaddingTop": 5,
  "closeButtonPaddingTop": 0,
  "closeButtonPressedBorderColor": "#000000",
  "headerBackgroundOpacity": 0,
  "closeButtonBackgroundColor": [],
  "scrollBarWidth": 10,
  "titleFontStyle": "normal",
  "closeButtonRollOverBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "closeButtonBackgroundColorDirection": "vertical",
  "closeButtonIconHeight": 20,
  "minHeight": 20,
  "children": [
   "this.viewer_uidF3677096_EDDC_F48D_41D3_4AB8878BD5F1"
  ],
  "title": "",
  "titleFontWeight": "normal",
  "headerVerticalAlign": "middle",
  "closeButtonBorderColor": "#000000",
  "overflow": "scroll",
  "paddingTop": 0,
  "borderSize": 0,
  "footerBackgroundOpacity": 0,
  "minWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 5,
  "closeButtonRollOverIconLineWidth": 1,
  "titleTextDecoration": "none",
  "closeButtonPressedIconLineWidth": 3,
  "veilColorRatios": [
   0,
   0.27
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColor": [],
  "paddingBottom": 0,
  "closeButtonBorderSize": 0,
  "bodyPaddingTop": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBorderColor": "#000000",
  "titleFontColor": "#000000",
  "paddingRight": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundOpacity": 1,
  "footerBorderColor": "#000000",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonRollOverBackgroundOpacity": 1,
  "id": "window_FE3AEFE0_ECB4_0C85_41E2_DCD91C214724",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonIconColor": "#B2B2B2",
  "gap": 10,
  "scrollBarColor": "#000000",
  "shadow": false,
  "borderRadius": 5,
  "bodyBorderSize": 0,
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "bodyBackgroundOpacity": 0,
  "bodyBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPaddingBottom": 0,
  "footerHeight": 5,
  "closeButtonPaddingRight": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "footerBorderSize": 0,
  "bodyPaddingRight": 0,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 20,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "headerBackgroundColorDirection": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "close": "this.playList_FE0FFF54_ECAC_0D8D_41B3_0931938C0F23.set('selectedIndex', -1);",
  "closeButtonPaddingLeft": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "layout": "vertical",
  "scrollBarMargin": 2,
  "closeButtonPressedBorderSize": 0,
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "closeButtonIconLineWidth": 2
 },
 {
  "titlePaddingRight": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titleFontFamily": "Arial",
  "bodyPaddingLeft": 5,
  "modal": true,
  "bodyPaddingBottom": 5,
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "titleFontStyle": "normal",
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidF366D096_EDDC_F48D_41DC_F5003DAE45BF",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "scrollBarVisible": "rollOver",
    "height": "10%",
    "width": "100%",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "scrollBarColor": "#000000"
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "id": "image_uidF366D096_EDDC_F48D_41DC_F5003DAE45BF_1",
    "minWidth": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "url": "media/photo_F8E05868_ED74_7385_41E8_991736BA4F23.JPG",
    "borderRadius": 0,
    "height": "89%",
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": "100%"
   }
  ],
  "title": "",
  "shadowVerticalLength": 0,
  "titleFontWeight": "normal",
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "width": 400,
  "footerBackgroundColorDirection": "vertical",
  "height": 700,
  "headerPaddingBottom": 10,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 5,
  "headerBorderColor": "#000000",
  "titleFontColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_F9A7B32B_ED74_159B_41E4_9535248ED437",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#000000",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadowHorizontalLength": 3,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "layout": "vertical",
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ]
 },
 {
  "titlePaddingRight": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titleFontFamily": "Arial",
  "bodyPaddingLeft": 5,
  "modal": true,
  "bodyPaddingBottom": 5,
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarWidth": 10,
  "titleFontStyle": "normal",
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidF361909D_EDDC_F4BF_41E7_B1F2507F76AE",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "scrollBarVisible": "rollOver",
    "height": "10%",
    "width": "100%",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "scrollBarColor": "#000000"
   },
   {
    "paddingTop": 0,
    "borderSize": 0,
    "id": "image_uidF361909D_EDDC_F4BF_41E7_B1F2507F76AE_1",
    "minWidth": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "url": "media/photo_FA38AD74_ED74_0D8D_41EC_AC83BC96C50F.JPG",
    "borderRadius": 0,
    "height": "89%",
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "class": "Image",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": "100%"
   }
  ],
  "title": "",
  "shadowVerticalLength": 0,
  "titleFontWeight": "normal",
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "width": 300,
  "footerBackgroundColorDirection": "vertical",
  "height": 300,
  "headerPaddingBottom": 10,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 5,
  "headerBorderColor": "#000000",
  "titleFontColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_FB1960B4_ED74_148D_41E6_5B11D72438A8",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#000000",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadowHorizontalLength": 3,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "layout": "vertical",
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ]
 },
 {
  "titlePaddingRight": 5,
  "backgroundColor": [],
  "titleFontFamily": "Arial",
  "bodyPaddingLeft": 0,
  "modal": true,
  "bodyPaddingBottom": 0,
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 0,
  "closeButtonBackgroundColor": [],
  "scrollBarWidth": 10,
  "titleFontStyle": "normal",
  "closeButtonRollOverBackgroundColor": [],
  "class": "Window",
  "closeButtonBorderRadius": 11,
  "closeButtonIconHeight": 20,
  "minHeight": 20,
  "children": [
   "this.viewer_uidF360809E_EDDC_F4BD_41B8_C5CC1E0B88F8"
  ],
  "title": "",
  "shadowVerticalLength": 0,
  "titleFontWeight": "normal",
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "minWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 5,
  "titleTextDecoration": "none",
  "shadowColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "headerPaddingTop": 10,
  "scrollBarVisible": "rollOver",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedIconLineWidth": 3,
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [],
  "paddingBottom": 0,
  "bodyPaddingTop": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBorderColor": "#000000",
  "titleFontColor": "#000000",
  "paddingRight": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarColor": "#000000",
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "id": "window_FAE1B3E1_ED54_3487_41D1_066A9E2BEF5F",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonIconColor": "#B2B2B2",
  "gap": 10,
  "shadow": true,
  "borderRadius": 5,
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "titleFontSize": 14,
  "bodyBackgroundOpacity": 0,
  "scrollBarOpacity": 0.5,
  "footerBackgroundOpacity": 0,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyPaddingRight": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 20,
  "headerBackgroundColorDirection": "vertical",
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "close": "this.playList_F6EA1E50_EDAC_0F86_41D1_48375617D9EB.set('selectedIndex', -1);",
  "shadowHorizontalLength": 3,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "layout": "vertical",
  "closeButtonPressedIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "titlePaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "closeButtonIconLineWidth": 2
 },
 {
  "id": "camera_F305D0D5_EDDC_F48F_41DF_58DE254848E9",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -13.87,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F303B0E1_EDDC_F487_41E1_90A5A3A163FD",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -10.95,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F164C16D_EDDC_F59F_41DB_FA32C3C6C014",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -71.91,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F1618175_EDDC_F58F_41C4_68961B39190C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 114.02,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F162117C_EDDC_F47D_41E8_79A254656ACE",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.02,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F16E6183_EDDC_F48B_41D6_33D20400E880",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -14.38,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F16AD18A_EDDC_F485_41D0_CF21546F2A82",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -97.82,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F170E191_EDDC_F487_41E2_2F1201419B02",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -122.84,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F17F8198_EDDC_F485_41ED_339D3FB97ADB",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -14.09,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F105F19E_EDDC_F4BD_41C8_E38C691B0606",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -149.94,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F100C1A5_EDDC_F48F_41C3_9C3730990E75",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.03,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F10981AC_EDDC_F49D_41EB_56C9AB0538B2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.64,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F116B1B3_EDDC_F48B_41E9_A5EE280C7F22",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -105.66,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F11D01BA_EDDC_F485_41CB_CE8E7B6E429F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.61,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F11A11C0_EDDC_F486_41D4_A26B78734F4A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 55.63,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F120D1C7_EDDC_F48A_41DC_E4F08EB89DE7",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -0.66,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F129B1CE_EDDC_F49D_41E8_F3A0CEAB79B7",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.73,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F13441D5_EDDC_F48F_41E7_82AA79B4F124",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -147.66,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F13D41DC_EDDC_F4BD_41CC_AB276F529E5B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 110.5,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F1C581E3_EDDC_F48B_41DB_A33A3802B5A4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 162.93,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F1C021EA_EDDC_F485_41E3_1F8419828B63",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 18.91,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F1CAA1F1_EDDC_F487_41EB_BDDB5DB3619D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.6,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F1D211F8_EDDC_F485_41DD_748D836F828E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 166.34,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F1E7C1FF_EDDC_F47B_41D1_61F6B366D006",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.49,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F1EBA206_EDDC_F78D_41EA_4C7CC46B2B47",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 169.28,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F1FDF20D_EDDC_F79F_41ED_0CFA39B13E94",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.96,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F181F214_EDDC_F78D_41D5_F758471E7156",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -105.41,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F18B621B_EDDC_F7BB_41C8_16C799B0153B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 165.34,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F19F3222_EDDC_F785_41ED_618ACA18F43B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 157.16,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F1A0A229_EDDC_F787_41EC_9AC6EECBBAA1",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -32.7,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F1B55230_EDDC_F785_41EC_429DB8D9DB6A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 156.85,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F1B8D236_EDDC_F78A_41C7_C11390E80E60",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 175.7,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F04DF23D_EDDC_F7FF_41ED_3B2FC91228AB",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.17,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_F050C244_EDDC_F78D_41E2_615C4149D5B4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 24.66,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "thumbnailUrl": "media/photo_FCA6734C_ECDC_359D_41BB_6BC84822DBAD_t.jpg",
  "id": "photo_FCA6734C_ECDC_359D_41BB_6BC84822DBAD",
  "label": "DJI_0678",
  "duration": 5000,
  "width": 4644,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_FCA6734C_ECDC_359D_41BB_6BC84822DBAD.JPG"
    }
   ]
  },
  "class": "Photo",
  "height": 1858
 },
 {
  "thumbnailUrl": "media/photo_FC82CFEC_ECDC_0C9D_41D1_8854CE03BCB2_t.jpg",
  "id": "photo_FC82CFEC_ECDC_0C9D_41D1_8854CE03BCB2",
  "label": "IMG_0402",
  "duration": 5000,
  "width": 4124,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_FC82CFEC_ECDC_0C9D_41D1_8854CE03BCB2.JPG"
    }
   ]
  },
  "class": "Photo",
  "height": 3648
 },
 {
  "thumbnailUrl": "media/photo_FC787674_ECDC_1F8D_41B7_35E7A98E77A3_t.jpg",
  "id": "photo_FC787674_ECDC_1F8D_41B7_35E7A98E77A3",
  "label": "IMG_0399",
  "duration": 5000,
  "width": 2439,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_FC787674_ECDC_1F8D_41B7_35E7A98E77A3.JPG"
    }
   ]
  },
  "class": "Photo",
  "height": 5471
 },
 {
  "thumbnailUrl": "media/photo_FE098745_ECD4_1D8E_41C8_8B9CF5E6FC61_t.jpg",
  "id": "photo_FE098745_ECD4_1D8E_41C8_8B9CF5E6FC61",
  "label": "DJI_0677",
  "duration": 5000,
  "width": 5464,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_FE098745_ECD4_1D8E_41C8_8B9CF5E6FC61.JPG"
    }
   ]
  },
  "class": "Photo",
  "height": 3070
 },
 {
  "thumbnailUrl": "media/photo_F8E05868_ED74_7385_41E8_991736BA4F23_t.jpg",
  "id": "photo_F8E05868_ED74_7385_41E8_991736BA4F23",
  "label": "DJI_0680",
  "duration": 5000,
  "width": 1857,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_F8E05868_ED74_7385_41E8_991736BA4F23.JPG"
    }
   ]
  },
  "class": "Photo",
  "height": 2373
 },
 {
  "thumbnailUrl": "media/photo_FA38AD74_ED74_0D8D_41EC_AC83BC96C50F_t.jpg",
  "id": "photo_FA38AD74_ED74_0D8D_41EC_AC83BC96C50F",
  "label": "DJI_0681",
  "duration": 5000,
  "width": 2802,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_FA38AD74_ED74_0D8D_41EC_AC83BC96C50F.JPG"
    }
   ]
  },
  "class": "Photo",
  "height": 2036
 }
], "children": [
 {
  "playbackBarProgressBorderSize": 0,
  "toolTipFontStyle": "normal",
  "playbackBarHeadWidth": 6,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadHeight": 15,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowColor": "#333333",
  "playbackBarHeadShadow": true,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarRight": 0,
  "class": "ViewerArea",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBorderColor": "#767676",
  "minHeight": 50,
  "progressBarBorderRadius": 0,
  "progressBarOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "progressBarBorderSize": 0,
  "paddingTop": 0,
  "borderSize": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "width": "100%",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingLeft": 6,
  "progressBottom": 0,
  "minWidth": 100,
  "toolTipShadowOpacity": 1,
  "toolTipBorderRadius": 3,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowBlurRadius": 3,
  "height": "100%",
  "progressHeight": 10,
  "toolTipFontColor": "#606060",
  "progressBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressLeft": 0,
  "playbackBarProgressBorderRadius": 0,
  "paddingRight": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipPaddingTop": 4,
  "playbackBarProgressOpacity": 1,
  "progressBorderSize": 0,
  "transitionMode": "blending",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBorderSize": 1,
  "playbackBarBottom": 5,
  "id": "MainViewer",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "toolTipFontWeight": "normal",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderColor": "#000000",
  "shadow": false,
  "borderRadius": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBorderRadius": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "paddingLeft": 0,
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBorderSize": 0,
  "toolTipShadowSpread": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "playbackBarHeight": 10,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowVerticalLength": 0,
  "progressOpacity": 1,
  "progressRight": 0,
  "toolTipFontFamily": "Arial",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "id": "rootPlayer",
 "gap": 10,
 "shadow": false,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.5,
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "paddingLeft": 0,
 "scripts": {
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); }
 },
 "overflow": "visible",
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 20,
 "width": "100%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundPreloadEnabled": true,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "layout": "absolute"
})