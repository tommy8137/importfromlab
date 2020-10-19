module.exports = [
  {
    'xlsxKey': 'CI1RI0',
    'rowIndex': 0,
    'cellIndex': 0,
    'label': 'A.材料費',
    'type': 'formula',
    'description': '=IF(OR(CI1RI9="Other_Fill_ME_Remark",CI1RI18="Other_Fill_ME_Remark"),"", CI1RI16+CI1RI25)',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  },
  {
    'xlsxKey': 'CI1RI1',
    'rowIndex': 1,
    'cellIndex': 0,
    'label': '塑膠成型單/雙射',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.00000',
    },
    'byKey': 'partlistvalue.Price.partItemInfo.type2',
    'contents': [],
    'mapper': {
      'Double_Injection': '雙射',
      '_default': '單射',
    }
  },
  {
    'xlsxKey': 'CI1RI2',
    'rowIndex': 2,
    'cellIndex': 0,
    'label': 'L (mm)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0',
    },
    'byKey': 'partlistvalue.formData.toolingPartList.hpUser.hppartssizespec.hppartssizelength',
    'contents': []
  },
  {
    'xlsxKey': 'CI1RI3',
    'rowIndex': 3,
    'cellIndex': 0,
    'label': 'W (mm)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0',
    },
    'byKey': 'partlistvalue.formData.toolingPartList.hpUser.hppartssizespec.hppartssizewidth',
    'contents': []
  },
  {
    'xlsxKey': 'CI1RI4',
    'rowIndex': 4,
    'cellIndex': 0,
    'label': 'H (mm)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0',
    },
    'byKey': 'partlistvalue.formData.toolingPartList.hpUser.hppartssizespec.hppartssizehigh',
    'contents': []
  },
  {
    'xlsxKey': 'CI1RI5',
    'rowIndex': 5,
    'cellIndex': 0,
    'label': 'Thickness (mm)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0',
    },
    'byKey': 'partlistvalue.formData.toolingPartList.hpUser.hpthickness',
    'contents': []
  },
  {
    'xlsxKey': 'CI1RI6',
    'rowIndex': 6,
    'cellIndex': 0,
    'label': 'Material Color',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.00000',
    },
    'byKey': 'partlistvalue.formData.toolingPartList.hpUser.hpMaterialColor',
    'contents': []
  },
  {
    'xlsxKey': 'CI0RI7',
    'rowIndex': 7,
    'cellIndex': 0,
    'label': '一射',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.00000',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI7',
        'rowIndex': 7,
        'cellIndex': 1,
        'label': 'Material Spec 材質 (一射)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hpUser.hpmaterialspec1',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI8',
        'rowIndex': 8,
        'cellIndex': 1,
        'label': 'Material Spec 一射 (原料材質) Remark',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hpUser.hpMaterialspec1Remark',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI9',
        'rowIndex': 9,
        'cellIndex': 1,
        'label': 'Material 牌號 (一射)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hpUser.hpmaterial',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI10',
        'rowIndex': 10,
        'cellIndex': 1,
        'label': 'Material 一射 (牌號) Remark',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hpUser.hpMaterial1Remark',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI11',
        'rowIndex': 11,
        'cellIndex': 1,
        'label': 'Material Price (kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.prices.housingPlastic.hpPrice',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI12',
        'rowIndex': 12,
        'cellIndex': 1,
        'label': 'Parts Weight (g)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hpUser.hppartweightone',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI13',
        'rowIndex': 13,
        'cellIndex': 1,
        'label': '料頭重 (g)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hpTooling.hpToolingPartsWeightSpec1',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI14',
        'rowIndex': 14,
        'cellIndex': 1,
        'label': 'Loss Rate(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.hpMaterialLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI15',
        'rowIndex': 15,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'Material Price (kg) / 1000 * (Parts Weight (g) + 料頭重 (g) / 模具穴數) * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI16',
        'rowIndex': 16,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=IF(CI1RI9="Other_Fill_ME_Remark","", CI1RI11/1000*(CI1RI12+CI1RI13/CI1RI29)*(1+CI1RI14))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': []
      }
    ]
  },
  {
    'xlsxKey': 'CI0RI17',
    'rowIndex': 17,
    'cellIndex': 0,
    'label': '二射',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.00000',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI17',
        'rowIndex': 17,
        'cellIndex': 1,
        'label': 'Material Spec 材質 (二射)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hpUser.hpmaterialspec2',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI18',
        'rowIndex': 18,
        'cellIndex': 1,
        'label': 'Material 牌號 (二射)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hpUser.hpmaterial2',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI19',
        'rowIndex': 19,
        'cellIndex': 1,
        'label': 'Material 二射 (牌號) Remark',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hpUser.hpMaterial2Remark',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI20',
        'rowIndex': 20,
        'cellIndex': 1,
        'label': 'Material Price (kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.prices.housingPlastic.hpPrice2',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI21',
        'rowIndex': 21,
        'cellIndex': 1,
        'label': 'Parts Weight (g)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hpUser.hppartweighttwo',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI22',
        'rowIndex': 22,
        'cellIndex': 1,
        'label': '料頭重 (g)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hpTooling.hpToolingPartsWeightSpec2',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI23',
        'rowIndex': 23,
        'cellIndex': 1,
        'label': 'Loss Rate(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.hpMaterialLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI24',
        'rowIndex': 24,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'Material Price (kg) / 1000 * (Parts Weight (g) + 料頭重 (g) / 模具穴數) * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI25',
        'rowIndex': 25,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=IF(CI1RI18="Other_Fill_ME_Remark","",IF($C$9<>"Double_Injection",0,CI1RI20/1000*(CI1RI21+CI1RI22/CI1RI29)*(1+CI1RI23)))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': []
      }
    ]
  },
  {
    'xlsxKey': 'CI1RI26',
    'rowIndex': 26,
    'cellIndex': 0,
    'label': 'B.成型費',
    'type': 'formula',
    'description': '=CI1RI34',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  },
  {
    'xlsxKey': 'CI0RI27',
    'rowIndex': 27,
    'cellIndex': 0,
    'label': '成型費',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI27',
        'rowIndex': 27,
        'cellIndex': 1,
        'label': '機台費 (Min.)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.hpToolingMachinePrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI28',
        'rowIndex': 28,
        'cellIndex': 1,
        'label': '機台噸數 (Ton)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hpTooling.hpToolingMachineTon',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI29',
        'rowIndex': 29,
        'cellIndex': 1,
        'label': '模具穴數',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hpTooling.hpToolingHole',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI30',
        'rowIndex': 30,
        'cellIndex': 1,
        'label': 'Cycle Time (Sec)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hpTooling.hpToolingCT',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI31',
        'rowIndex': 31,
        'cellIndex': 1,
        'label': 'Loss Rate(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.formingLoassRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI32',
        'rowIndex': 32,
        'cellIndex': 1,
        'label': 'FCST寬放值',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.formingAllowance.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI33',
        'rowIndex': 33,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '機台費 (Min.) * Cycle Time (Sec) / 60 / 模具穴數 * (1 + Loss Rate) * (1 + FCST寬放值)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI34',
        'rowIndex': 34,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI27*CI1RI30/60/CI1RI29*(1+CI1RI31)*(1+CI1RI32)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': []
      }
    ]
  },
  {
    'xlsxKey': 'CI1RI35',
    'rowIndex': 35,
    'cellIndex': 0,
    'label': 'C.塗裝噴漆費',
    'type': 'formula',
    'description': '=CI1RI55+CI1RI59+CI1RI70+CI1RI81',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  },
  {
    'xlsxKey': 'CI0RI36',
    'rowIndex': 36,
    'cellIndex': 0,
    'label': 'Process Type-噴塗製程 & NCVM',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.00000',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI36',
        'rowIndex': 36,
        'cellIndex': 1,
        'label': '噴漆類型 TYPE',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingType',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI37',
        'rowIndex': 37,
        'cellIndex': 1,
        'label': 'Color 色系',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingColor',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI38',
        'rowIndex': 38,
        'cellIndex': 1,
        'label': '塗料廠商',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingVendor',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI39',
        'rowIndex': 39,
        'cellIndex': 1,
        'label': '噴漆膜厚上限值 (um)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPaintingThickness',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI40',
        'rowIndex': 40,
        'cellIndex': 1,
        'label': '噴塗面-長 (L/mm)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPaintingLength',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI41',
        'rowIndex': 41,
        'cellIndex': 1,
        'label': '噴塗面-寬 (W/mm)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPaintingWidth',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI42',
        'rowIndex': 42,
        'cellIndex': 1,
        'label': '噴塗面-高 (H/mm)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPaintingHeight',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI43',
        'rowIndex': 43,
        'cellIndex': 1,
        'label': '噴漆面 頂面數',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPaintingAreaLW.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI44',
        'rowIndex': 44,
        'cellIndex': 1,
        'label': '噴漆面 長側面',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPaintingAreaLH.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI45',
        'rowIndex': 45,
        'cellIndex': 1,
        'label': '噴漆面 短側面數',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPaintingAreaWH.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI46',
        'rowIndex': 46,
        'cellIndex': 1,
        'label': '噴漆工時(Day/hrs)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.summary.housingPlastic.cmfPPaintingWorkTime',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI47',
        'rowIndex': 47,
        'cellIndex': 1,
        'label': '日產能(Pcs/Day)',
        'type': 'formula',
        'description': '=IFERROR(60*60*CI1RI46/CI1RI50*CI1RI49*(1-CI1RI48),"")',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'contents': [],
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.production_capacity_per_day.value',
      },
      {
        'xlsxKey': 'CI1RI48',
        'rowIndex': 48,
        'cellIndex': 1,
        'label': '噴塗不良率(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.paintingDefectRateValue.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI49',
        'rowIndex': 49,
        'cellIndex': 1,
        'label': '一次可噴成品數量 (pcs)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPaintingPcs.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI50',
        'rowIndex': 50,
        'cellIndex': 1,
        'label': 'Cycle time (Sec)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.Price.housingPlastic.cmfPaintingCycleTime',
        'contents': []
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
  },
  {
    'xlsxKey': 'CI0RI51',
    'rowIndex': 51,
    'cellIndex': 0,
    'label': '單件人工費用(USD/Pcs)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI51',
        'rowIndex': 51,
        'cellIndex': 1,
        'label': '總人工費用(USD/Day)',
        'type': 'formula',
        'description': '=CI1RI53*60*CI1RI46*CI1RI52',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI52',
        'rowIndex': 52,
        'cellIndex': 1,
        'label': '噴塗線人工數',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.summary.housingPlastic.printing_workers',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI53',
        'rowIndex': 53,
        'cellIndex': 1,
        'label': '人工費用(usd per man/min)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPaintingUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI54',
        'rowIndex': 54,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '總人工費用(USD/Day) / 日產能(Pcs/Day)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI55',
        'rowIndex': 55,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=IFERROR(IF(OR($C$9="IMR",CI1RI36="N/A"),0,CI1RI51/CI1RI47), 0)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
  },
  {
    'xlsxKey': 'CI0RI56',
    'rowIndex': 56,
    'cellIndex': 0,
    'label': '噴漆機台費用(USD/Pcs)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.00000',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI56',
        'rowIndex': 56,
        'cellIndex': 1,
        'label': '機台類型',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.Price.housingPlastic.cmfPaintingMachineType',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI57',
        'rowIndex': 57,
        'cellIndex': 1,
        'label': '噴漆機台費用(min)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPaintingMachinePrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI58',
        'rowIndex': 58,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '噴漆機台費用 * 60 * 噴漆工時(Day/hrs) / 日產能(Pcs/Day)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI59',
        'rowIndex': 59,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=IFERROR(IF(OR($C$9="IMR",CI1RI36="N/A"),0,CI1RI57*60*CI1RI46/CI1RI47),0)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
  },
  {
    'xlsxKey': 'CI0RI60',
    'rowIndex': 60,
    'cellIndex': 0,
    'label': '單件底漆費用\r\n(USD/Pcs)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI60',
        'rowIndex': 60,
        'cellIndex': 1,
        'label': 'Paintingable amount (pcs/kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.prices.housingPlastic.printingable_amount',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI61',
        'rowIndex': 61,
        'cellIndex': 1,
        'label': '底漆 Coating數',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPrimerQTY.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI62',
        'rowIndex': 62,
        'cellIndex': 1,
        'label': '主劑單價 (USD/kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPaintingPrimerMainUnitPrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI63',
        'rowIndex': 63,
        'cellIndex': 1,
        'label': '硬化劑/固化劑單價 (USD/kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPaintingPrimerHardenerUnitPrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI64',
        'rowIndex': 64,
        'cellIndex': 1,
        'label': '溶劑/稀釋劑單價 (USD/kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPaintingPrimerSolventUnitPrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI65',
        'rowIndex': 65,
        'cellIndex': 1,
        'label': '主劑 比例',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPaintingPrimerMainAmount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI66',
        'rowIndex': 66,
        'cellIndex': 1,
        'label': '硬化劑/固化劑 比例',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPaintingPrimerHardenerAmount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI67',
        'rowIndex': 67,
        'cellIndex': 1,
        'label': '溶劑/稀釋劑 比例',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPaintingPrimerSolventAmount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI68',
        'rowIndex': 68,
        'cellIndex': 1,
        'label': '底塗油漆單價 (USD/KG)',
        'type': 'formula',
        'description': '=IFERROR(CI1RI62*(CI1RI65/(CI1RI65+CI1RI66+CI1RI67))+CI1RI63*(CI1RI66/(CI1RI65+CI1RI66+CI1RI67))+CI1RI64*(CI1RI67/(CI1RI65+CI1RI66+CI1RI67)),"")',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPaintingPrimerPrice.value',
      },
      {
        'xlsxKey': 'CI1RI69',
        'rowIndex': 69,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '底塗油漆單價 (USD/KG) / Paintingable amount (pcs/kg) * 底漆 Coating數 * (1 + 噴塗不良率(%))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI70',
        'rowIndex': 70,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=IFERROR(IF(OR($C$9="IMR",CI1RI36="N/A"),0,CI1RI68/CI1RI60*CI1RI61*(1+CI1RI48)),0)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
  },
  {
    'xlsxKey': 'CI0RI71',
    'rowIndex': 71,
    'cellIndex': 0,
    'label': '單件面漆費用(USD/Pcs)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI71',
        'rowIndex': 71,
        'cellIndex': 1,
        'label': 'Paintingable amount (pcs/kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.prices.housingPlastic.printingable_amount',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI72',
        'rowIndex': 72,
        'cellIndex': 1,
        'label': '面漆 Coating數',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPTopcoatQTY',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI73',
        'rowIndex': 73,
        'cellIndex': 1,
        'label': '主劑單價 (USD/kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPaintingTopcoatMainUnitPrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI74',
        'rowIndex': 74,
        'cellIndex': 1,
        'label': '硬化劑/固化劑單價 (USD/kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPaintingTopcoatHardenerUnitPrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI75',
        'rowIndex': 75,
        'cellIndex': 1,
        'label': '溶劑/稀釋劑單價 (USD/kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPaintingTopcoatSolventUnitPrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI76',
        'rowIndex': 76,
        'cellIndex': 1,
        'label': '主劑 比例',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPaintingTopcoatMainAmount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI77',
        'rowIndex': 77,
        'cellIndex': 1,
        'label': '硬化劑/固化劑 比例',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPaintingTopcoatHardenerAmount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI78',
        'rowIndex': 78,
        'cellIndex': 1,
        'label': '溶劑/稀釋劑 比例',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPaintingTopcoatSolventAmount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI79',
        'rowIndex': 79,
        'cellIndex': 1,
        'label': '面塗油漆單價 (USD/KG)',
        'type': 'formula',
        'description': '=IFERROR(CI1RI73*(CI1RI76/(CI1RI76+CI1RI77+CI1RI78))+CI1RI74*(CI1RI77/(CI1RI76+CI1RI77+CI1RI78))+CI1RI75*(CI1RI78/(CI1RI76+CI1RI77+CI1RI78)),"")',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPaintingTopcoatPrice.value',
      },
      {
        'xlsxKey': 'CI1RI80',
        'rowIndex': 80,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '面塗油漆單價 (USD/KG) / Paintingable amount (pcs/kg) * 面漆 Coating數 * (1 + 噴塗不良率(%))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI81',
        'rowIndex': 81,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=IFERROR(IF(OR($C$9="IMR",CI1RI36="N/A"),0, CI1RI79/CI1RI71*CI1RI72*(1+CI1RI48)), 0)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
  },
  {
    'xlsxKey': 'CI1RI82',
    'rowIndex': 82,
    'cellIndex': 0,
    'label': 'D.二次加工費',
    'type': 'formula',
    'description': '=CI1RI87+CI1RI93+CI1RI98+CI1RI103+CI1RI107+CI1RI112+CI1RI117+CI1RI121+CI1RI125+CI1RI129+CI1RI133+CI1RI138+CI1RI143',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  },
  {
    'xlsxKey': 'CI0RI83',
    'rowIndex': 83,
    'cellIndex': 0,
    'label': '埋釘製程',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI83',
        'rowIndex': 83,
        'cellIndex': 1,
        'label': '數量',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPEmbedNail.cmfPEmbedNailCount',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI84',
        'rowIndex': 84,
        'cellIndex': 1,
        'label': 'Unit Price (USD)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.prices.housingPlastic.cmfPEmbedNailPrice',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI85',
        'rowIndex': 85,
        'cellIndex': 1,
        'label': 'LOSS(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.prices.housingPlastic.cmfPEmbedNailLossRate',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI86',
        'rowIndex': 86,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'Usage Amount*Unit Price (USD)*(1+LOSS(%))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI87',
        'rowIndex': 87,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI83*CI1RI84*(1+CI1RI85)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPEmbedNail.cmfPEmbedNailCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPEmbedNail.cmfPEmbedNailCheckBox',
  },
  {
    'xlsxKey': 'CI0RI88',
    'rowIndex': 88,
    'cellIndex': 0,
    'label': '印刷製程',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.00000',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI88',
        'rowIndex': 88,
        'cellIndex': 1,
        'label': '類型 (Type)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPrinting.cmfPPrintingType',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI89',
        'rowIndex': 89,
        'cellIndex': 1,
        'label': '數量(特徵)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPrinting.cmfPPrintingCount',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI90',
        'rowIndex': 90,
        'cellIndex': 1,
        'label': 'Unit Price (USD)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPriningUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI91',
        'rowIndex': 91,
        'cellIndex': 1,
        'label': 'LOSS(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPPriningLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI92',
        'rowIndex': 92,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'Usage Amount * Unit Price (USD) * (1 + LOSS(%))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI93',
        'rowIndex': 93,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI89*CI1RI90*(1+CI1RI91)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPrinting.cmfPPrintingCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPrinting.cmfPPrintingCheckBox',
  },
  {
    'xlsxKey': 'CI0RI94',
    'rowIndex': 94,
    'cellIndex': 0,
    'label': '成品CNC製程 - 局部加工',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI94',
        'rowIndex': 94,
        'cellIndex': 1,
        'label': '數量',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPCNCArea.cmfPCNCProcessingAreaCount',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI95',
        'rowIndex': 95,
        'cellIndex': 1,
        'label': 'Unit Price (USD)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.prices.housingPlastic.cmfPCNCProcessingAreaUP',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI96',
        'rowIndex': 96,
        'cellIndex': 1,
        'label': 'LOSS(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPCNCProcessingAreaLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI97',
        'rowIndex': 97,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'Usage Amount * Unit Price (USD) * (1 + LOSS(%))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI98',
        'rowIndex': 98,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI94*CI1RI95*(1+CI1RI96)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPCNCArea.cmfPCNCProcessingAreaCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPCNCArea.cmfPCNCProcessingAreaCheckBox',
  },
  {
    'xlsxKey': 'CI0RI99',
    'rowIndex': 99,
    'cellIndex': 0,
    'label': 'NC除料頭',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI99',
        'rowIndex': 99,
        'cellIndex': 1,
        'label': '次數',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPCNCFeeder.cmfPCNCFeederCount',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI100',
        'rowIndex': 100,
        'cellIndex': 1,
        'label': 'Unit Price (USD)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPCNCFeederUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI101',
        'rowIndex': 101,
        'cellIndex': 1,
        'label': 'LOSS(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPCNCFeederLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI102',
        'rowIndex': 102,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'Usage Amount * Unit Price (USD) * (1 + LOSS(%))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI103',
        'rowIndex': 103,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI99*CI1RI100*(1+CI1RI101)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPCNCFeeder.cmfPCNCFeederCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPCNCFeeder.cmfPCNCFeederCheckBox',
  },
  {
    'xlsxKey': 'CI0RI104',
    'rowIndex': 104,
    'cellIndex': 0,
    'label': '成品打磨 (PL線)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI104',
        'rowIndex': 104,
        'cellIndex': 1,
        'label': 'Unit Price (USD)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPProductPolishingPLUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI105',
        'rowIndex': 105,
        'cellIndex': 1,
        'label': 'LOSS(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPProductPolishingPLLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI106',
        'rowIndex': 106,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'Unit Price (USD) * (1 + LOSS(%))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI107',
        'rowIndex': 107,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI104*(1+CI1RI105)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPProductPolishingPL.cmfPProductPolishingPLExist',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPProductPolishingPL.cmfPProductPolishingPLExist',
  },
  {
    'xlsxKey': 'CI0RI108',
    'rowIndex': 108,
    'cellIndex': 0,
    'label': '熱熔',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI108',
        'rowIndex': 108,
        'cellIndex': 1,
        'label': 'Usage Amount',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPHotMeltCount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI109',
        'rowIndex': 109,
        'cellIndex': 1,
        'label': 'Unit Price (USD)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.prices.housingPlastic.cmfPHotMeltUP',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI110',
        'rowIndex': 110,
        'cellIndex': 1,
        'label': 'LOSS(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.prices.housingPlastic.cmfPHotMeltLossRate',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI111',
        'rowIndex': 111,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'Usage Amount * Unit Price (USD) * (1 + LOSS(%))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI112',
        'rowIndex': 112,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI108*CI1RI109*(1+CI1RI110)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPHotMelt.cmfPHotMeltCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPHotMelt.cmfPHotMeltCheckBox',
  },
  {
    'xlsxKey': 'CI0RI113',
    'rowIndex': 113,
    'cellIndex': 0,
    'label': 'BONDING',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI113',
        'rowIndex': 113,
        'cellIndex': 1,
        'label': 'Usage Amount',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPBondingCount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI114',
        'rowIndex': 114,
        'cellIndex': 1,
        'label': 'Unit Price (USD)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPBondingUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI115',
        'rowIndex': 115,
        'cellIndex': 1,
        'label': 'LOSS(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPBondingLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI116',
        'rowIndex': 116,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'Usage Amount * Unit Price (USD) * (1 + LOSS(%))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI117',
        'rowIndex': 117,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI113*CI1RI114*(1+CI1RI115)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPBonding.cmfPBondingCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPBonding.cmfPBondingCheckBox',
  },
  {
    'xlsxKey': 'CI0RI118',
    'rowIndex': 118,
    'cellIndex': 0,
    'label': 'EMI Sputtering',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI118',
        'rowIndex': 118,
        'cellIndex': 1,
        'label': 'Unit Price (USD)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfEMIsputteringPrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI119',
        'rowIndex': 119,
        'cellIndex': 1,
        'label': 'LOSS(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfEMIsputteringLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI120',
        'rowIndex': 120,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'Unit Price (USD) * (1 + LOSS(%))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI121',
        'rowIndex': 121,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI118*(1+CI1RI119)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPEMISputtering.cmfPEMISputteringCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPEMISputtering.cmfPEMISputteringCheckBox',
  },
  {
    'xlsxKey': 'CI0RI122',
    'rowIndex': 122,
    'cellIndex': 0,
    'label': 'Polish (應力痕)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI122',
        'rowIndex': 122,
        'cellIndex': 1,
        'label': 'Unit Price (USD)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.prices.housingPlastic.cmfPPolishStressMarkUP',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI123',
        'rowIndex': 123,
        'cellIndex': 1,
        'label': 'LOSS(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.prices.housingPlastic.cmfPPolishStressMarkLossRate',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI124',
        'rowIndex': 124,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'Unit Price (USD) * (1 + LOSS(%))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI125',
        'rowIndex': 125,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI122*(1+CI1RI123)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPolishStressMark.cmfPPolishStressMarkExist',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPolishStressMark.cmfPPolishStressMarkExist',
  },
  {
    'xlsxKey': 'CI0RI126',
    'rowIndex': 126,
    'cellIndex': 0,
    'label': '除屑 (IMR)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI126',
        'rowIndex': 126,
        'cellIndex': 1,
        'label': 'Unit Price (USD)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.prices.housingPlastic.cmfPChipRemovalUP',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI127',
        'rowIndex': 127,
        'cellIndex': 1,
        'label': 'LOSS(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.prices.housingPlastic.cmfPChipRemovalLossRate',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI128',
        'rowIndex': 128,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'Unit Price (USD) * (1 + LOSS(%))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI129',
        'rowIndex': 129,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI126*(1+CI1RI127)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPChipRemoval.cmfPChipRemovalExist',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPChipRemoval.cmfPChipRemovalExist',
  },
  {
    'xlsxKey': 'CI0RI130',
    'rowIndex': 130,
    'cellIndex': 0,
    'label': '滾邊or去毛邊(PL面)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI130',
        'rowIndex': 130,
        'cellIndex': 1,
        'label': 'Unit Price (USD)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.prices.housingPlastic.cmfPRollingOrDeburringUP',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI131',
        'rowIndex': 131,
        'cellIndex': 1,
        'label': 'LOSS(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.prices.housingPlastic.cmfPRollingOrDeburringLossRate',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI132',
        'rowIndex': 132,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'Unit Price (USD) * (1 + LOSS(%))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI133',
        'rowIndex': 133,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI130*(1+CI1RI131)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPRollingOrDeburring.cmfPRollingOrDeburringExist',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPRollingOrDeburring.cmfPRollingOrDeburringExist',
  },
  {
    'xlsxKey': 'CI0RI134',
    'rowIndex': 134,
    'cellIndex': 0,
    'label': '雷雕ICON',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI134',
        'rowIndex': 134,
        'cellIndex': 1,
        'label': 'Usage Amount',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.cmfPLaserMarkingCount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI135',
        'rowIndex': 135,
        'cellIndex': 1,
        'label': 'Unit Price (USD)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.prices.housingPlastic.cmfPLaserMarkingUP',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI136',
        'rowIndex': 136,
        'cellIndex': 1,
        'label': 'LOSS(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.prices.housingPlastic.cmfPLaserMarkingLossRate',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI137',
        'rowIndex': 137,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'Usage Amount * Unit Price (USD) * (1 + LOSS(%))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI138',
        'rowIndex': 138,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI134*CI1RI135*(1+CI1RI136)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPLaserMarking.cmfPLaserMarkingCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPLaserMarking.cmfPLaserMarkingCheckBox',
  },
  {
    'xlsxKey': 'CI0RI139',
    'rowIndex': 139,
    'cellIndex': 0,
    'label': 'NCVM製程',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI139',
        'rowIndex': 139,
        'cellIndex': 1,
        'label': 'Unit Price (USD)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.summary.housingPlastic.cmfPNCVMUP',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI140',
        'rowIndex': 140,
        'cellIndex': 1,
        'label': 'NCVM製程面積',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.ncvm_area_l_w.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI141',
        'rowIndex': 141,
        'cellIndex': 1,
        'label': 'LOSS(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.summary.housingPlastic.cmfPNCVMLossRate',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI142',
        'rowIndex': 142,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'Unit Price (USD) * NCVM製程面積 * (1 + LOSS(%))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI143',
        'rowIndex': 143,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=IF(CI1RI36="NCVM",CI1RI139*CI1RI140*(1+CI1RI141),0)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': []
      }
    ]
  },
  {
    'xlsxKey': 'CI1RI144',
    'rowIndex': 144,
    'cellIndex': 0,
    'label': 'A.材料費:',
    'type': 'formula',
    'description': '=CI1RI0',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  },
  {
    'xlsxKey': 'CI1RI145',
    'rowIndex': 145,
    'cellIndex': 0,
    'label': 'B.成型費:',
    'type': 'formula',
    'description': '=CI1RI26',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  },
  {
    'xlsxKey': 'CI1RI146',
    'rowIndex': 146,
    'cellIndex': 0,
    'label': 'C.塗裝噴漆費:',
    'type': 'formula',
    'description': '=CI1RI35',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  },
  {
    'xlsxKey': 'CI1RI147',
    'rowIndex': 147,
    'cellIndex': 0,
    'label': 'D.二次加工費(Total):',
    'type': 'formula',
    'description': '=CI1RI82',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  },
  {
    'xlsxKey': 'CI1RI148',
    'rowIndex': 148,
    'cellIndex': 0,
    'label': '管銷&利潤 比例',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '0.0####%',
    },
    'byKey': 'partlistprice.forDebug.debugInfo.housingPlastic.profit_rate.value',
    'contents': []
  },
  {
    'xlsxKey': 'CI1RI149',
    'rowIndex': 149,
    'cellIndex': 0,
    'label': 'E.管銷&利潤',
    'type': 'formula',
    'description': '=CI1RI145*CI1RI148',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  },
  {
    'xlsxKey': 'CI1RI150',
    'rowIndex': 150,
    'cellIndex': 0,
    'label': 'F. 成品總價',
    'type': 'formula',
    'description': '=IF(CI1RI144="","", CI1RI144+CI1RI145+CI1RI146+CI1RI147+CI1RI149)',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  }
]
