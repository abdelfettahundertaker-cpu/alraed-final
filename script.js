const whatsappNumber = "212677315076";
const IMAGE_BASE_PATH = "assets/img/";

function assetPath(fileName) {
  if (!fileName) return "";
  return fileName.startsWith(IMAGE_BASE_PATH) ? fileName : `${IMAGE_BASE_PATH}${fileName}`;
}

const brandLogos = {
  "Jinko Solar": "jinko-solar_fcbIf7ovcVjjmWWO3oI0_101215148_254245532673015_4595731159815553024_o.jpg",
  "Canadian Solar": "canadian-solar_Mpp6z8IFhAaH1wliz9lR_logo-canadian-solar.jpg",
  "JA Solar": "ja-solar_pR5V2h3GjGh2rLCfHxV1_LOGO JA SOLAR.jpg",
  Runergy: "runergy_g95SyO92weKU3PtPsnnh_runergy.webp",
  Sungrow: "1RQLYGAna7nNT4e0QWsQ_sungrow-logo.jpg",
  SolaX: "djSw7fuQ7rhsIH3Z8A5e_Logo-solax.jpg",
  MUST: "must_sHJJrvCEPwAuuj4Zyvk1_MA03PSm0eI7nechndoh6_logo-must.jpeg",
  VEICHI: "veichilogo.png",
  Brusol: "brusol_j5wRqD4orUYVusgUNQMw_logo-brusol.jpg",
  Longi: "longi_c9w2M1httxnveVHSHeNv_longi.webp",
  Huawei: "huaweilogo.png",
};

const resolvedBrandLogos = Object.fromEntries(
  Object.entries(brandLogos).map(([name, logo]) => [name, assetPath(logo)]),
);

const productInventoryFiles = [
  "batterie-supplementaire-ecoflow-delta-pro-36kwh_viAKC4v39cPsnDB0F71Y_IMAGE1-2 (17).webp.png",
  "batterie-supplementaire-ecoflow-delta-pro-36kwh_viAKC4v39cPsnDB0F71Y_IMAGE1-2 (17).webp (1).png",
  "batterie-solaire_totKyfr1jdMZoNTLQ2AY_batterie.webp",
  "batterie-solaire-ultracell-gel-12v_nMTzRiqNSG6m7Wi1xnpl_IMAGE1 (48).webp.png",
  "batterie-solaire-outdo-gel-12v_EwY1JFZHXDNcNQ4DcdcJ_IMAGE1-4 (22).webp.png",
  "batterie-solaire-leoch-gel-12v_15SYXo1vRdYdz1D2UEwY_IMAGE1-1 (50).webp.png",
  "batterie-powerkit-5kwh_vt86mPvY5GpDZ6luXbw6_9.webp.png",
  "batterie-lithium-dyness-dl50c-512kwh_jA2hH3YUEg3TMirZ45u5_Lithium DL5.0C.webp.png",
  "batterie-lfp_oXBdzFMwfF6i37qhLUFB_K.webp.png",
  "batterie-brusol-gel-12v_IS6pjeY7TDTzfRymLbqm_LL.webp.png",
  "panneau-solaire-portable-ecoflow-400w-mc4_EOa6hHoedPns9CbZ3FwP_IMAGE1-1 (9).webp.png",
  "panneau-solaire-portable-ecoflow-110w-mc4_cDZfwL8P7ZXStMk5p0hV_IMAGE1-1 (12).webp.png",
  "panneau-solaire-portable-ecoflow-110w-mc4_cDZfwL8P7ZXStMk5p0hV_IMAGE1-1 (12) (1).webp.png",
  "panneau-solaire-jinko-solar-590-watt_TfUF8XJAO7OluMMTAXV3_jinko 593.webp.png",
  "panneau-solaire-jinko-solar-570-590-watt-tiger-neo-n-type-72hl4-v_bzm2T9x8jGu4gARPzUmf_e.webp.png",
  "panneau-solaire-jinko-solar-530-550-watt-tiger-pro-72hc-p-type_nLGKyXmUWFRlcV50LzV5_jinko 591.webp.png",
  "panneau-solaire-jinko-595w-tiger-neo-n-type-72hl4-v_weSbknvSEzTvpG0jalAx_Jinko 690 (1).webp.png",
  "panneau-solaire-jinko-555w-tiger-neo-n-type_0KnNpggVw0tRjA9ArNHx_jinko 555 (1).webp.png",
  "panneau-solaire-ja-solar_Vsqotyy1Zyi7LE639gmr_GK.webp.png",
  "panneau-solaire-ecoflow-portable_W7K6wfLOgOr9NQ60duft_IMAGE1-27.webp.png",
  "panneau-solaire-bifacial-portable-ecoflow-220w-mc4_48Sg5XaQd1UlvQw5MTK9_IMAGE1-2 (10).webp.png",
  "paire-de-connecteurs-mc4-pour-cable-en-4mm2-a-6mm2_i6zK073XE2qJfiBTQycP_IMAGE1-2 (47).webp.png",
  "ouvre-porte-gsm-gunes_QCKJQn4l34Ciw8s6LQ0I_IMAGE1-1 (55).webp.png",
  "onduleur-sungrow-hybride-avec-batterie-lithium_WLlhKNOsf6uAg4Bsbt9X_VV.webp.png",
  "onduleur-on-grid_WeBY1GKtuupbp7VWabzt_Onduleur On-grid.webp",
  "onduleur-on-grid-solax-x1-3k-5k-monophase_QZ8I7BDULwMUBJ32nkWG_IMAGE1 (37).webp.png",
  "onduleur-must-power-pure-sinus_VoStc9ugpjoazkYk2n5B_IMAGE1 (35).webp.png",
  "onduleur-injection-sunrgow-on-grid_81xq7Ou652CjCiAEHsEu_IMAGE1-3 (28).webp.png",
  "luminaire-solaire-jd_L2L1HiIFCJskok0NwZEk_IMAGE1-1 (44).webp.png",
  "lampadaire-solaire-diamant_MMgJiiip5YTERU5G65jt_IMAGE1-1 (42).webp.png",
  "inverseur-3-position_znaW4MIB21fx6Vk0HEa0_IMAGE1-1 (59).webp.png",
  "glacier-detachable-wheels-and-lever_YRDNe63btR1EXeC8uSf6_33.webp.png",
  "extension-cable-3m-mc4-ecoflow_7iabp9Xa8EBPwKlFYAU8_pk.webp.png",
  "ecoflow-river-pro-2_zEvdqMkAs0Qay77IUKO8_IMAGE1-1.webp.png",
  "ecoflow-river-max-2_3dJ5gPvSbcrHol2ayHJK_IMAGE1 (4).webp.png",
  "ecoflow-delta-pro_8I3EnewAzztMJ2QVPJP3_IMAGE1-10.webp.png",
  "ecoflow-delta-2_NTk0eYSL6z5I59F36W1i_IMAGE1-8.webp.png",
  "convertisseur_EaD454snEmF3RtpDloPH_Convertisseur.webp",
  "convertisseur-zat-1200w-1500w-24-vdc-to-220-vac_RQloDu2Vb18g2mYu1gXw_IMAGE1 (52).webp.png",
  "compteur-smart-meter-triphase-chint-dtsu666-t_1GTFssh68T66Df7tuTMU_IMAGE1 (60).webp.png",
  "compteur-smart-meter-monophase-chint-dtsu666-s_6K2pZ7GVLZRuvjUfHO6o_IMAGE1-1 (60).webp.png",
  "coffret-metallique-prefabrique-avec-platine_SxNWsdle5uJdSP32WcUi_IMAGE1-1 (63).webp.png",
  "cle-dongle-wifi-solax-power_i3SYOSooL8RucCjvxIM5_IMAGEE.webp.png",
  "cle-dongle-wifi-solax-power_i3SYOSooL8RucCjvxIM5_IMAGEE.webp (1).png",
  "camera-solaire_2ztigI0H3r8N1q8s0ccV_camera solaire.webp",
  "onduleur-injection-on-grid-solax-x3-triphase-5kw-8kw-10kw-15kw_39VbEm8P8A1PZEir5cEB_IMAGE1-2 (34).webp.png",
  "onduleur-injection-invt-on-grid_uX626R5peppkYpfQOsna_IMAGE1 (39).webp.png",
  "onduleur-hybride-must-vpm-1-2-3-5kw_Pqcfff6fO8PUSbniakLG_PO.webp.png",
  "onduleur-hybride-must-vhm-3-5kva_Cuit4LXH2ByUX606OK78_IMAGE1-2 (32).webp.png",
  "onduleur-hybride-must-pv1800-prem-series-55kw_R1rZCntiPiXxYj7re8df_jinko 593.webp.png",
  "onduleur-hybride-must-pro-52kva_pao0vxn9lxx7sZjB1Po9_GGHJ.webp.png",
  "onduleur-hybride-must-12-24kva_mxAYQr2WVM2A37rDhy4W_IMMAG.webp.png",
  "onduleur-dinjection-triphase-must-on-grid_7U8oevJswJ4j1MXORv3S_IMAGE1-1 (41).webp.png",
  "onduleur-dinjection-monophase-must-on-grid_WU9hc33UXxDOKsklrGGs_IMAGE1-1 (37).webp.png",
  "onduleur-deye_kCt9m2OFXinOsR61WLwz_deye.webp",
  "pompe-dc-avec-controleur-1500w_g39DTunpf05vRJv5jo3B_jinko 593-3.webp.png",
  "pompe-dc-avec-controleur-1300w_gDhaEs7X9X6dzhIrunUN_jinko 593-2.webp.png",
  "pompe-dc-avec-controleur-1100w_7LjT2nHxnEswzMR3B8Ww_jinko 593-1.webp.png",
  "pompe-dc-ac-avec-controleur-2200w_VmWOlGC7649bGPrCO7bW_jinko 593-4.webp.png",
  "panneaux-solaires_mADAqe3DKJ6SHWXnMNVn_panneaux solaires.webp",
  "panneaux-solaire-695-watts-canadian-solar-neo-n-type-bifacial_B54fNHFSLmoxu1ooFmCh_CCC SO-1.webp.png",
  "panneaux-solaire-585-watts-jinko-solar-tiger-neo-n-type-72hl4-bdv_JszImQ3hdixv0aXNclU9_Jinko 685 (1).webp.png",
  "panneaux-solaire-585-w-canadian-solar-n-type-topcon-technology_HRdUU2zr9H8wE2v0kXR4_CCC SO.webp.png",
  "panneaux-solaire-575-watts-jinko-solar-tiger-pro-p-type-bifacial_tI4N8poVwwKBm5szMeNh_Jinko 592 (1).webp.png",
  "panneaux-solaire-540w-jinko-solar-tiger-pro-p-type-bifacial_jUyjK4AuuAJa283BRHdY_jinko 540.webp.png",
  "panneau-solaire-trina-solar_8AvPtHoNrkpDDRz9Lfii_DD.webp.png",
  "panneau-solaire-runergy-575w-bifacial-dual-glass-n-type_TuWu30G2qouKtJXb5ahI_575W bi.webp.png",
  "panneau-solaire-rigide-400w_sFyCEbK8k3iWd3ZEOQ47_IMAGE1 (14).webp.png",
  "panneau-solaire-rigide-100w_R7xS0XS7HukR2PJoBWAo_IMAGE1 (13).webp.png",
  "projecteur-solaire-xy_waKF9nlyPmfKfDsjTOl9_IMAGE1-3 (31).webp.png",
  "projecteur-solaire-blue-carbon-ld-500w_CxnG3llYO5fZkgs5p8k8_Projecteur solaire BLUE CARBON 300W (29).webp.png",
  "projecteur-solaire-blue-carbon-ld-400w_SkGuXsD6RFxoq5dheaJ7_Projecteur solaire BLUE CARBON 300W (24).webp.png",
  "projecteur-solaire-blue-carbon-ld-300w_xdCR2O5HRUPwGyqXtWzZ_Projecteur solaire BLUE CARBON 300W (36).webp.png",
  "projecteur-solaire-blue-carbon-ld-200w_Eo1vjzNubaRIEhLyIEG2_Projecteur solaire BLUE CARBON 200W (2).webp.png",
  "projecteur-solaire-blue-carbon-200w-300w-400w-500w_I1o1qIRlNRW7byj2xxhy_Projecteur solaire BLUE CARBON 200W (4).webp.png",
  "pompe-dc-avec-controleur-750w-hd-3sc38-95-72-750_yCcncxFpKDzdhZ9fHVSB_jinko 593.webp.png",
  "regulateur-solaire_mMFiBMXK67GqejUe7cgp_Re?gulateur de charge.webp",
  "station-energie-portable-ecoflow-delta-2-max-2400w-2kwh_2SvRcPXXOvy4pAbUL4FZ_IMAGE1 (28).webp.png",
  "station-denergie-portable_hGdAAGKQAaP9EQKhIwWZ_Station d'energie.webp",
  "station-energie-portable-ecoflow-delta-pro-int-3600w-36kwh_VVl5f7UcGoV4pb0K9c8R_IMAGE1-2 (16).webp.png",
  "station-energie-portable-ecoflow-river-2_ehXq6f4dep1T2w0vO8sm_IMAGE1-1 (26).webp.png",
  "borne-de-recharge-electrique-74-kw-ac-evse-avec-2-connecteurs_q2j6ZbPJnYQuEq5e8WzQ_IMAGE1-1 (24).webp.png",
  "testeur-de-batterie-agm-gel-ba101-12v_yWjfQKRG7w0SJmbX1bEL_JSS.webp.png",
  "top-cable-solaire-1500vdc-bobine-de-500m_xwrHBtMv5qOs9f5Dsbxj_Frame 40378r.webp.png",
  "voyant-lumineux-led-24v_FiRJNEkEh9iV8Do2MfkS_IMAGE1-4 (23).webp.png",
  "variateur-veichi-si23_ie3n7YbyaMVqOytSYxuu_IMAGE1-3 (36).webp.png",
  "variateur-veichi-si23_ie3n7YbyaMVqOytSYxuu_IMAGE1-3 (36).webp (1).png",
  "variateur-solaire_0lfyxAtj7BhJun1F4fLj_Variateur solaire.webp",
  "variateur-invt-pour-controleur-de-pompe-solaire-nouveau-modele_OWVhCn4DpibLcaYFekaZ_jinko 593.webp.png",
];

const curatedProducts = [
  {
    id: "jinko-590",
    name: "Panneau solaire Jinko Solar 590W Tiger Neo N-Type",
    brand: "Jinko Solar",
    category: "Panneaux solaires",
    image: "panneau-solaire-jinko-solar-590-watt_TfUF8XJAO7OluMMTAXV3_jinko 593.webp.png",
    price: 826.5,
    oldPrice: 950,
    stock: "En stock",
    featuredRank: 1,
    promo: "Promo",
    description: "Module haute performance pour villas, toitures commerciales et installations professionnelles.",
    tags: ["590W", "N-Type", "Autoconsommation"],
    features: [
      "Rendement élevé pour les sites résidentiels et professionnels.",
      "Bonne tenue en température et long cycle de production.",
      "Idéal en couplage avec des onduleurs hybrides et on-grid.",
    ],
    audiences: ["residentiel", "professionnel"],
  },
  {
    id: "canadian-585",
    name: "Panneau solaire 585W Canadian Solar TOPCon",
    brand: "Canadian Solar",
    category: "Panneaux solaires",
    image: "panneaux-solaire-585-w-canadian-solar-n-type-topcon-technology_HRdUU2zr9H8wE2v0kXR4_CCC SO.webp.png",
    price: 1400,
    oldPrice: null,
    stock: "En stock",
    featuredRank: 2,
    promo: null,
    description: "Un panneau premium pour les projets exigeants avec une forte stabilité de production.",
    tags: ["585W", "TOPCon", "Projet tertiaire"],
    features: [
      "Technologie TOPCon pour un meilleur rendement.",
      "Adapté aux installations de grande surface.",
      "Compatible avec les projets résidentiels haut de gamme et les PME.",
    ],
    audiences: ["residentiel", "professionnel", "industriel"],
  },
  {
    id: "ja-460",
    name: "Panneau solaire JA Solar 460W",
    brand: "JA Solar",
    category: "Panneaux solaires",
    image: "panneau-solaire-ja-solar_Vsqotyy1Zyi7LE639gmr_GK.webp.png",
    price: 1650,
    oldPrice: 1850,
    stock: "Sur commande",
    featuredRank: 3,
    promo: "Série pro",
    description: "Solution équilibrée pour les maisons, les locaux et les projets avec budget contrôlé.",
    tags: ["460W", "Mono PERC", "Maison"],
    features: [
      "Format adapté aux toitures résidentielles.",
      "Marque reconnue sur le marché solaire.",
      "Bon compromis entre coût et production.",
    ],
    audiences: ["residentiel", "professionnel"],
  },
  {
    id: "runergy-575",
    name: "Panneau solaire Runergy 575W bifacial dual glass",
    brand: "Runergy",
    category: "Panneaux solaires",
    image: "panneau-solaire-runergy-575w-bifacial-dual-glass-n-type_TuWu30G2qouKtJXb5ahI_575W bi.webp.png",
    price: 1350,
    oldPrice: null,
    stock: "En stock",
    featuredRank: 4,
    promo: null,
    description: "Modèle bifacial pour un rendement optimisé sur les projets commerciaux et industriels.",
    tags: ["575W", "Bifacial", "Dual glass"],
    features: [
      "Conçu pour des sites à haute exigence de rendement.",
      "Verre double pour plus de durabilité.",
      "Convient aux structures ombrières et aux toitures techniques.",
    ],
    audiences: ["professionnel", "industriel"],
  },
  {
    id: "must-vhm",
    name: "Onduleur hybride MUST VHM 3-5kVA",
    brand: "MUST",
    category: "Onduleurs hybrides",
    image: "onduleur-hybride-must-vhm-3-5kva_Cuit4LXH2ByUX606OK78_IMAGE1-2 (32).webp.png",
    price: 3640,
    oldPrice: null,
    stock: "En stock",
    featuredRank: 5,
    promo: "Best seller",
    description: "Un classique pour les installations résidentielles avec batterie et secours.",
    tags: ["3-5kVA", "Hybride", "Batterie"],
    features: [
      "Compatible avec les batteries pour l'autonomie de la maison.",
      "Utilisation simple pour les villas et les petites activités.",
      "Idéal pour stabiliser la consommation et limiter les coupures.",
    ],
    audiences: ["residentiel", "professionnel"],
  },
  {
    id: "must-pro-52",
    name: "Onduleur hybride MUST PRO 5.2kVA",
    brand: "MUST",
    category: "Onduleurs hybrides",
    image: "onduleur-hybride-must-pro-52kva_pao0vxn9lxx7sZjB1Po9_GGHJ.webp.png",
    price: 6100,
    oldPrice: null,
    stock: "En stock",
    featuredRank: 6,
    promo: null,
    description: "Onduleur hybride robuste pour habitat, commerce et petits sites pros.",
    tags: ["5.2kVA", "Hybride", "Secours"],
    features: [
      "Puissance adaptée aux besoins mixtes jour/nuit.",
      "Bon choix pour maisons spacieuses et boutiques.",
      "Associe parfaitement les panneaux et le stockage.",
    ],
    audiences: ["residentiel", "professionnel"],
  },
  {
    id: "sungrow-grid",
    name: "Onduleur à injection Sungrow On-Grid",
    brand: "Sungrow",
    category: "Onduleurs on-grid",
    image: "onduleur-injection-sunrgow-on-grid_81xq7Ou652CjCiAEHsEu_IMAGE1-3 (28).webp.png",
    price: 8950,
    oldPrice: null,
    stock: "En stock",
    featuredRank: 7,
    promo: null,
    description: "Solution de raccordement réseau efficace pour l'autoconsommation professionnelle.",
    tags: ["On-grid", "Sungrow", "Injection"],
    features: [
      "Très bon choix pour les factures élevées en entreprise.",
      "Optimise la production en raccordement réseau.",
      "Parfait pour les toitures commerciales ou les sites industriels légers.",
    ],
    audiences: ["professionnel", "industriel"],
  },
  {
    id: "solax-x3",
    name: "Onduleur à injection SolaX X3 triphasé 10-15kW",
    brand: "SolaX",
    category: "Onduleurs on-grid",
    image: "onduleur-injection-on-grid-solax-x3-triphase-5kw-8kw-10kw-15kw_39VbEm8P8A1PZEir5cEB_IMAGE1-2 (34).webp.png",
    price: 11450,
    oldPrice: 12390,
    stock: "En stock",
    featuredRank: 8,
    promo: "Triphasé",
    description: "Modèle triphasé pour les activités professionnelles et les ateliers à forte charge.",
    tags: ["Triphasé", "10-15kW", "Commerce"],
    features: [
      "Dimensionné pour les PME et les ateliers.",
      "Convient à des architectures multi-string.",
      "Gestion stable des charges professionnelles.",
    ],
    audiences: ["professionnel", "industriel"],
  },
  {
    id: "dyness-dl50c",
    name: "Batterie lithium Dyness DL5.0C 5.12kWh",
    brand: "Dyness",
    category: "Batteries",
    image: "batterie-lithium-dyness-dl50c-512kwh_jA2hH3YUEg3TMirZ45u5_Lithium DL5.0C.webp.png",
    price: 14800,
    oldPrice: null,
    stock: "En stock",
    featuredRank: 9,
    promo: null,
    description: "Stockage lithium haute fiabilité pour l'autonomie de la maison et des sites professionnels.",
    tags: ["5.12kWh", "Lithium", "Stockage"],
    features: [
      "Module lithium pour des cycles répétés.",
      "Bon choix pour sécuriser la nuit et les coupures.",
      "Se combine avec des onduleurs hybrides premium.",
    ],
    audiences: ["residentiel", "professionnel"],
  },
  {
    id: "deye-seg51",
    name: "Batterie lithium Deye SE-G5.1 5.12kWh",
    brand: "Deye",
    category: "Batteries",
    image: "w51v7UgId5AEIYA4CVeV_SE-G5.1 - 5.12 kwh (1).webp.png",
    price: 14300,
    oldPrice: null,
    stock: "En stock",
    featuredRank: 10,
    promo: "Stockage pro",
    description: "Stockage fiable pour villas autonomes, commerces et projets de secours.",
    tags: ["5.12kWh", "Lithium", "Cycles profonds"],
    features: [
      "Excellente option pour l'hybridation avec le solaire.",
      "Usage résidentiel ou tertiaire.",
      "Design compact pour une intégration facile.",
    ],
    audiences: ["residentiel", "professionnel"],
  },
  {
    id: "outdo-gel",
    name: "Batterie solaire OUTDO GEL 12V",
    brand: "Outdo",
    category: "Batteries",
    image: "batterie-solaire-outdo-gel-12v_EwY1JFZHXDNcNQ4DcdcJ_IMAGE1-4 (22).webp.png",
    price: 1900,
    oldPrice: null,
    stock: "En stock",
    featuredRank: 11,
    promo: null,
    description: "Batterie gel accessible pour les petites installations et les solutions de secours.",
    tags: ["12V", "GEL", "Secours"],
    features: [
      "Adaptable à de petites configurations autonomes.",
      "Choix économique pour les besoins essentiels.",
      "Compatible avec les kits d'éclairage et les petits onduleurs.",
    ],
    audiences: ["residentiel", "site autonome"],
  },
  {
    id: "brusol-gel",
    name: "Batterie Brusol GEL 12V",
    brand: "Brusol",
    category: "Batteries",
    image: "batterie-brusol-gel-12v_IS6pjeY7TDTzfRymLbqm_LL.webp.png",
    price: 1650,
    oldPrice: null,
    stock: "En stock",
    featuredRank: 12,
    promo: "Prix malin",
    description: "Solution simple pour sites de secours, petits locaux et kits autonomes.",
    tags: ["12V", "GEL", "Budget"],
    features: [
      "Prix compétitif.",
      "Bon choix pour installation secondaire.",
      "Intéressante pour le secours de petits usages.",
    ],
    audiences: ["residentiel", "site autonome"],
  },
  {
    id: "ecoflow-delta2max",
    name: "Station énergie portable EcoFlow DELTA 2 MAX 2400W / 2kWh",
    brand: "EcoFlow",
    category: "Stations portables",
    image: "station-energie-portable-ecoflow-delta-2-max-2400w-2kwh_2SvRcPXXOvy4pAbUL4FZ_IMAGE1 (28).webp.png",
    price: 20689,
    oldPrice: null,
    stock: "En stock",
    featuredRank: 13,
    promo: "Nomade premium",
    description: "Autonomie mobile haut de gamme pour chantiers, villas et interventions terrain.",
    tags: ["2400W", "Portable", "Secours"],
    features: [
      "Idéale pour les besoins mobiles et le secours rapide.",
      "Usage chantier, événement, villa et bureau.",
      "Compatible avec panneaux portables EcoFlow.",
    ],
    audiences: ["professionnel", "site autonome", "residentiel"],
  },
  {
    id: "ecoflow-river-pro2",
    name: "EcoFlow River Pro 2",
    brand: "EcoFlow",
    category: "Stations portables",
    image: "ecoflow-river-pro-2_zEvdqMkAs0Qay77IUKO8_IMAGE1-1.webp.png",
    price: 8959,
    oldPrice: null,
    stock: "En stock",
    featuredRank: 14,
    promo: null,
    description: "Station portable polyvalente pour les besoins nomades, le secours et les activités de terrain.",
    tags: ["Portable", "Camping", "Bureau mobile"],
    features: [
      "Format plus compact pour interventions rapides.",
      "Alimente les essentiels du quotidien ou du terrain.",
      "Complément idéal pour les panneaux portables.",
    ],
    audiences: ["site autonome", "professionnel"],
  },
  {
    id: "veichi-si23",
    name: "Variateur VEICHI SI23",
    brand: "VEICHI",
    category: "Variateurs & contrôle",
    image: "variateur-veichi-si23_ie3n7YbyaMVqOytSYxuu_IMAGE1-3 (36).webp.png",
    price: 2300,
    oldPrice: null,
    stock: "En stock",
    featuredRank: 15,
    promo: null,
    description: "Variateur fiable pour le pilotage moteur et les applications solaires techniques.",
    tags: ["VEICHI", "Contrôle", "Pompage"],
    features: [
      "Permet une régulation stable des charges moteur.",
      "Adapté aux applications de pompage et de process.",
      "Bonne intégrabilité sur les projets techniques.",
    ],
    audiences: ["professionnel", "industriel"],
  },
  {
    id: "invt-pompe",
    name: "Variateur INVT pour contrôleur de pompe solaire",
    brand: "INVT",
    category: "Variateurs & contrôle",
    image: "variateur-invt-pour-controleur-de-pompe-solaire-nouveau-modele_OWVhCn4DpibLcaYFekaZ_jinko 593.webp.png",
    price: 2520,
    oldPrice: null,
    stock: "En stock",
    featuredRank: 16,
    promo: "Pompage",
    description: "Pièce clé pour les solutions de pompage solaire et les applications hydrauliques.",
    tags: ["INVT", "Pompage", "Contrôleur"],
    features: [
      "Optimise le fonctionnement des pompes solaires.",
      "Utilisation en agriculture, forage ou alimentation en eau.",
      "Pilote les variations de charge plus finement.",
    ],
    audiences: ["pompage", "professionnel", "industriel"],
  },
  {
    id: "pompe-1300",
    name: "Pompe DC avec contrôleur 1300W",
    brand: "Handuro",
    category: "Pompage solaire",
    image: "pompe-dc-avec-controleur-1300w_gDhaEs7X9X6dzhIrunUN_jinko 593-2.webp.png",
    price: 3600,
    oldPrice: null,
    stock: "En stock",
    featuredRank: 17,
    promo: null,
    description: "Solution de pompage solaire pour l'agriculture, les réserves d'eau et les usages terrain.",
    tags: ["1300W", "DC", "Agriculture"],
    features: [
      "Dimensionnée pour un pompage solaire efficace.",
      "Adaptée aux besoins agricoles et ruraux.",
      "Bonne intégration avec les variateurs solaires.",
    ],
    audiences: ["pompage", "professionnel"],
  },
  {
    id: "pompe-2200",
    name: "Pompe DC/AC avec contrôleur 2200W",
    brand: "Handuro",
    category: "Pompage solaire",
    image: "pompe-dc-ac-avec-controleur-2200w_VmWOlGC7649bGPrCO7bW_jinko 593-4.webp.png",
    price: 5400,
    oldPrice: null,
    stock: "En stock",
    featuredRank: 18,
    promo: "Haute puissance",
    description: "Pompage solaire plus puissant pour exploitation agricole et installations exigeantes.",
    tags: ["2200W", "DC/AC", "Forage"],
    features: [
      "Réserve de puissance plus confortable.",
      "Conçu pour des usages plus intensifs.",
      "Bonne option pour projets hydrauliques semi-industriels.",
    ],
    audiences: ["pompage", "industriel"],
  },
  {
    id: "bluecarbon-500",
    name: "Projecteur solaire Blue Carbon LD 500W",
    brand: "Blue Carbon",
    category: "Éclairage & accessoires",
    image: "projecteur-solaire-blue-carbon-ld-500w_CxnG3llYO5fZkgs5p8k8_Projecteur solaire BLUE CARBON 300W (29).webp.png",
    price: 1549,
    oldPrice: null,
    stock: "En stock",
    featuredRank: 19,
    promo: null,
    description: "Éclairage solaire extérieur pour les zones résidentielles, les parkings et les entrepôts.",
    tags: ["500W", "Extérieur", "Sécurité"],
    features: [
      "Bon choix pour la sécurisation extérieure.",
      "Usage villa, chantier, dépôt ou parking.",
      "Installation rapide sans gros génie civil.",
    ],
    audiences: ["residentiel", "professionnel", "industriel"],
  },
  {
    id: "borne-74",
    name: "Borne de recharge électrique 7.4kW AC EVSE",
    brand: "ALRAED Mobility",
    category: "Bornes & comptage",
    image: "borne-de-recharge-electrique-74-kw-ac-evse-avec-2-connecteurs_q2j6ZbPJnYQuEq5e8WzQ_IMAGE1-1 (24).webp.png",
    price: 8900,
    oldPrice: null,
    stock: "Sur commande",
    featuredRank: 20,
    promo: "Mobilité",
    description: "Borne de recharge pour villas, entreprises et parkings de flotte.",
    tags: ["7.4kW", "EV", "AC"],
    features: [
      "Renforce l'offre solaire par la mobilité électrique.",
      "Usage résidentiel premium et professionnel.",
      "Compatible avec les espaces de recharge à double connectique.",
    ],
    audiences: ["residentiel", "professionnel"],
  },
  {
    id: "smart-meter",
    name: "Compteur Smart Meter monophasé CHINT DTSU666-S",
    brand: "CHINT",
    category: "Bornes & comptage",
    image: "compteur-smart-meter-monophase-chint-dtsu666-s_6K2pZ7GVLZRuvjUfHO6o_IMAGE1-1 (60).webp.png",
    price: 2300,
    oldPrice: null,
    stock: "En stock",
    featuredRank: 21,
    promo: null,
    description: "Mesure intelligente de l'énergie pour les installations solaires et le suivi de consommation.",
    tags: ["Compteur", "Monitoring", "Monophasé"],
    features: [
      "Aide à piloter la consommation et le retour sur investissement.",
      "Intéressant pour les maisons connectées et les petits locaux.",
      "Améliore le suivi des performances.",
    ],
    audiences: ["residentiel", "professionnel"],
  },
];

const categoryOrder = [
  "Panneaux solaires",
  "Onduleurs hybrides",
  "Onduleurs on-grid",
  "Convertisseurs & off-grid",
  "Batteries",
  "Stations portables",
  "Variateurs & contrôle",
  "Pompage solaire",
  "Éclairage & accessoires",
  "Bornes & comptage",
  "Accessoires & protection",
];

function getInventoryKey(filename) {
  return String(filename || "")
    .split("_")[0]
    .toLowerCase();
}

function sortCategoryNames(a, b) {
  const aIndex = categoryOrder.indexOf(a);
  const bIndex = categoryOrder.indexOf(b);
  const safeA = aIndex === -1 ? categoryOrder.length : aIndex;
  const safeB = bIndex === -1 ? categoryOrder.length : bIndex;
  return safeA - safeB || a.localeCompare(b, "fr");
}

function inferCategoryFromSlug(slug) {
  if (/pompe|pompage/.test(slug)) return "Pompage solaire";
  if (/variateur|regulateur|inverseur/.test(slug)) return "Variateurs & contrôle";
  if (/borne|compteur/.test(slug)) return "Bornes & comptage";
  if (/projecteur|lampadaire|luminaire|camera|voyant/.test(slug)) return "Éclairage & accessoires";
  if (/station|ecoflow-delta|ecoflow-river|glacier/.test(slug)) return "Stations portables";
  if (/coffret|cle|dongle|connecteurs|cable|testeur|ouvre-porte/.test(slug)) return "Accessoires & protection";
  if (/batterie|powerkit|lfp/.test(slug)) return "Batteries";
  if (/onduleur/.test(slug) && /hybride|deye/.test(slug)) return "Onduleurs hybrides";
  if (/onduleur|convertisseur/.test(slug)) {
    if (/pure-sinus|convertisseur/.test(slug)) return "Convertisseurs & off-grid";
    return "Onduleurs on-grid";
  }
  if (/panneau|panneaux/.test(slug)) return "Panneaux solaires";
  return "Accessoires & protection";
}

function inferBrandFromSlug(slug) {
  if (/jinko/.test(slug)) return "Jinko Solar";
  if (/canadian/.test(slug)) return "Canadian Solar";
  if (/ja-solar|(^|-)ja($|-)/.test(slug)) return "JA Solar";
  if (/runergy/.test(slug)) return "Runergy";
  if (/trina/.test(slug)) return "Trina Solar";
  if (/sungrow/.test(slug)) return "Sungrow";
  if (/solax/.test(slug)) return "SolaX";
  if (/must/.test(slug)) return "MUST";
  if (/dyness/.test(slug)) return "Dyness";
  if (/deye/.test(slug)) return "Deye";
  if (/outdo/.test(slug)) return "Outdo";
  if (/brusol/.test(slug)) return "Brusol";
  if (/leoch/.test(slug)) return "Leoch";
  if (/ultracell/.test(slug)) return "Ultracell";
  if (/ecoflow|delta|river|glacier/.test(slug)) return "EcoFlow";
  if (/veichi/.test(slug)) return "VEICHI";
  if (/invt/.test(slug)) return "INVT";
  if (/blue-carbon/.test(slug)) return "Blue Carbon";
  if (/chint/.test(slug)) return "CHINT";
  if (/gunes/.test(slug)) return "Gunes";
  return "ALRAED Energy";
}

function formatSlugToken(token, index, tokens) {
  const lower = token.toLowerCase();
  const smallWords = new Set(["de", "du", "des", "et", "avec", "pour", "a", "au", "aux", "en", "to"]);
  const specialMap = {
    wifi: "WiFi",
    mc4: "MC4",
    gsm: "GSM",
    led: "LED",
    lfp: "LFP",
    evse: "EVSE",
    jd: "JD",
    xy: "XY",
    ac: "AC",
    dc: "DC",
    vdc: "VDC",
    vac: "VAC",
    dtsu666: "DTSU666",
    ba101: "BA101",
    kw: "kW",
    kva: "kVA",
    kwh: "kWh",
    wh: "Wh",
  };

  if (specialMap[lower]) return specialMap[lower];
  if (/^\d+(?:[.-]\d+)?kw$/.test(lower)) return lower.replace(/kw$/, "kW");
  if (/^\d+(?:[.-]\d+)?kva$/.test(lower)) return lower.replace(/kva$/, "kVA");
  if (/^\d+(?:[.-]\d+)?kwh$/.test(lower)) return lower.replace(/kwh$/, "kWh");
  if (/^\d+(?:[.-]\d+)?wh$/.test(lower)) return lower.replace(/wh$/, "Wh");
  if (/^[a-z]\d[a-z0-9-]*$/.test(lower)) return lower.toUpperCase();
  if (/^\d+[a-z]+$/.test(lower)) return lower;
  if (index > 0 && index < tokens.length - 1 && smallWords.has(lower)) return lower;
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function humanizeInventorySlug(slug) {
  const cleaned = slug
    .replace(/^station-denergie\b/, "station-d-energie")
    .replace(/^onduleur-dinjection\b/, "onduleur-d-injection")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return cleaned
    .split(" ")
    .filter(Boolean)
    .map((token, index, tokens) => formatSlugToken(token, index, tokens))
    .join(" ")
    .replace(/\bRegulateur\b/g, "Régulateur")
    .replace(/\bControleur\b/g, "Contrôleur")
    .replace(/\bControle\b/g, "Contrôle")
    .replace(/\bMonophase\b/g, "Monophasé")
    .replace(/\bTriphase\b/g, "Triphasé")
    .replace(/\bD Injection\b/g, "d'injection")
    .replace(/\bD Energie\b/g, "d'énergie")
    .replace(/\bN Type\b/g, "N-Type")
    .replace(/\bOn Grid\b/g, "On-Grid")
    .replace(/\bPure Sinus\b/g, "Pure sinus");
}

function inferTagsFromSlug(slug, category) {
  const tags = new Set();
  const powerMatches = slug.match(/\b\d+(?:-\d+)?(?:kw|kva|kwh|wh|w)\b/g) || [];
  powerMatches.slice(0, 2).forEach((match) => {
    if (match.endsWith("kva")) tags.add(match.replace(/kva$/, "kVA"));
    else if (match.endsWith("kwh")) tags.add(match.replace(/kwh$/, "kWh"));
    else if (match.endsWith("kw")) tags.add(match.replace(/kw$/, "kW"));
    else if (match.endsWith("wh")) tags.add(match.replace(/wh$/, "Wh"));
    else tags.add(match.replace(/w$/, "W"));
  });

  if (slug.includes("hybride")) tags.add("Hybride");
  if (slug.includes("on-grid") || slug.includes("injection")) tags.add("On-grid");
  if (slug.includes("portable")) tags.add("Portable");
  if (slug.includes("lithium")) tags.add("Lithium");
  if (slug.includes("gel")) tags.add("GEL");
  if (slug.includes("bifacial")) tags.add("Bifacial");
  if (slug.includes("topcon")) tags.add("TOPCon");
  if (slug.includes("n-type")) tags.add("N-Type");
  if (slug.includes("mc4")) tags.add("MC4");
  if (slug.includes("wifi")) tags.add("WiFi");
  if (slug.includes("smart-meter")) tags.add("Smart meter");
  if (slug.includes("pompe")) tags.add("Pompage");
  if (slug.includes("camera")) tags.add("Sécurité");
  if (slug.includes("projecteur") || slug.includes("lampadaire") || slug.includes("luminaire")) tags.add("Éclairage");
  if (slug.includes("borne")) tags.add("Recharge EV");
  if (!tags.size) tags.add(category);

  return [...tags].slice(0, 4);
}

function buildAutoDescription(category, slug) {
  if (slug.includes("portable")) return "Solution portable à intégrer dans un devis rapide pour le secours, le terrain ou l'autonomie mobile.";
  if (slug.includes("bifacial")) return "Référence adaptée aux projets recherchant plus de rendement et une configuration optimisée.";

  const descriptions = {
    "Panneaux solaires": "Module photovoltaïque disponible dans le dossier produit pour habitat, commerce ou site professionnel.",
    "Onduleurs hybrides": "Onduleur à considérer pour une installation solaire avec gestion d'énergie et batterie.",
    "Onduleurs on-grid": "Référence orientée autoconsommation et injection réseau pour projets tertiaires et industriels.",
    "Convertisseurs & off-grid": "Équipement utile pour les besoins hors réseau, secours ou conversion d'énergie.",
    Batteries: "Solution de stockage à intégrer selon l'autonomie, la puissance et le profil de consommation.",
    "Stations portables": "Énergie mobile et prête à l'emploi pour chantier, villa, secours ou usage nomade.",
    "Variateurs & contrôle": "Produit dédié au pilotage, à la régulation ou au contrôle d'équipements solaires.",
    "Pompage solaire": "Équipement de pompage ou de contrôle pour forage, agriculture et transfert d'eau.",
    "Éclairage & accessoires": "Produit solaire pour l'éclairage, la sécurité extérieure ou les besoins de signalisation.",
    "Bornes & comptage": "Référence pour la recharge électrique, le suivi énergétique et le comptage intelligent.",
    "Accessoires & protection": "Accessoire utile pour la connexion, la protection ou la finition de l'installation.",
  };

  return descriptions[category] || "Produit ajouté automatiquement depuis le dossier pour préparer un devis plus complet.";
}

function buildAutoFeatures(category, slug) {
  const defaults = {
    "Panneaux solaires": [
      "Compatible avec des projets résidentiels, professionnels ou industriels selon le dimensionnement.",
      "Étude possible avec onduleur, structure et protection adaptés au site.",
      "Disponible sur demande avec accompagnement ALRAED Energy.",
    ],
    "Onduleurs hybrides": [
      "Convient aux installations avec besoin d'autonomie ou de secours.",
      "Peut être étudié avec batteries et panneaux déjà sélectionnés.",
      "Configuration à valider selon la puissance et les charges du site.",
    ],
    "Onduleurs on-grid": [
      "Pensé pour réduire durablement la facture électrique en autoconsommation.",
      "À associer à des panneaux adaptés au profil de consommation.",
      "Dimensionnement recommandé avant validation du devis.",
    ],
    "Convertisseurs & off-grid": [
      "Intéressant pour les sites isolés et les besoins de secours.",
      "Choix à confirmer selon tension, puissance et autonomie recherchée.",
      "Peut être proposé avec batterie, protection et câblage.",
    ],
    Batteries: [
      "Solution de stockage à ajuster selon autonomie, cycles et puissance utile.",
      "Compatible avec des configurations résidentielles ou professionnelles.",
      "Demandez une proposition complète avec onduleur et protections.",
    ],
    "Stations portables": [
      "Format pratique pour les usages mobiles, le secours ou les sites temporaires.",
      "Peut être combiné avec panneaux portables et accessoires compatibles.",
      "Capacité et puissance à confirmer selon vos appareils.",
    ],
    "Variateurs & contrôle": [
      "Améliore le pilotage des équipements et la stabilité de fonctionnement.",
      "Particulièrement utile pour pompage, moteurs et automatismes.",
      "Compatibilité à valider avec l'installation existante.",
    ],
    "Pompage solaire": [
      "Conçu pour des besoins d'eau en agriculture, forage ou site technique.",
      "À étudier selon hauteur, débit et alimentation disponibles.",
      "Peut être associé à variateur, contrôleur et panneaux adaptés.",
    ],
    "Éclairage & accessoires": [
      "Convient aux besoins d'éclairage extérieur, de sécurité ou de confort.",
      "Choix à adapter selon la zone d'installation et l'autonomie souhaitée.",
      "Disponible sur demande avec conseil d'usage.",
    ],
    "Bornes & comptage": [
      "Solution utile pour recharge électrique ou suivi avancé de la consommation.",
      "Peut compléter une installation solaire déjà en place.",
      "Configuration à confirmer selon le réseau et l'usage du site.",
    ],
    "Accessoires & protection": [
      "Élément complémentaire pour finaliser une installation propre et fiable.",
      "À sélectionner selon la compatibilité électrique et mécanique du projet.",
      "Disponible avec conseil technique avant validation.",
    ],
  };

  const contextual = [];
  if (slug.includes("triphase")) contextual.push("Adapté aux installations triphasées.");
  if (slug.includes("monophase")) contextual.push("Adapté aux installations monophasées.");
  if (slug.includes("wifi")) contextual.push("Permet un usage connecté et un suivi plus simple.");
  if (slug.includes("portable")) contextual.push("Format facile à déplacer et rapide à mettre en service.");

  return [...contextual, ...(defaults[category] || defaults["Accessoires & protection"])].slice(0, 3);
}

function inferAudiencesForCategory(category) {
  const audiences = {
    "Panneaux solaires": ["residentiel", "professionnel", "industriel"],
    "Onduleurs hybrides": ["residentiel", "professionnel"],
    "Onduleurs on-grid": ["professionnel", "industriel"],
    "Convertisseurs & off-grid": ["residentiel", "site autonome"],
    Batteries: ["residentiel", "professionnel", "site autonome"],
    "Stations portables": ["residentiel", "professionnel", "site autonome"],
    "Variateurs & contrôle": ["professionnel", "industriel"],
    "Pompage solaire": ["pompage", "professionnel", "industriel"],
    "Éclairage & accessoires": ["residentiel", "professionnel"],
    "Bornes & comptage": ["residentiel", "professionnel", "industriel"],
    "Accessoires & protection": ["residentiel", "professionnel"],
  };

  return audiences[category] || ["professionnel"];
}

function buildAutoProductFromFile(fileName, featuredRank) {
  const slug = getInventoryKey(fileName);
  const category = inferCategoryFromSlug(slug);
  const brand = inferBrandFromSlug(slug);

  return {
    id: `auto-${slug}`,
    name: humanizeInventorySlug(slug),
    brand,
    category,
    image: fileName,
    price: null,
    oldPrice: null,
    stock: "Sur demande",
    featuredRank,
    promo: null,
    description: buildAutoDescription(category, slug),
    tags: inferTagsFromSlug(slug, category),
    features: buildAutoFeatures(category, slug),
    audiences: inferAudiencesForCategory(category),
  };
}

const excludedAutoProductKeys = new Set([
  "batterie-solaire",
  "camera-solaire",
  "convertisseur",
  "onduleur-deye",
  "onduleur-on-grid",
  "panneaux-solaires",
  "regulateur-solaire",
  "station-denergie-portable",
  "variateur-solaire",
]);

function buildProductCatalog(curatedList, inventoryFiles) {
  const curatedKeys = new Set(curatedList.map((product) => getInventoryKey(product.image)));
  const seenAutoKeys = new Set();
  const autoProducts = [];

  inventoryFiles.forEach((fileName) => {
    const key = getInventoryKey(fileName);
    if (!key || curatedKeys.has(key) || seenAutoKeys.has(key) || excludedAutoProductKeys.has(key)) return;

    seenAutoKeys.add(key);
    autoProducts.push(buildAutoProductFromFile(fileName, curatedList.length + autoProducts.length + 1));
  });

  return [...curatedList, ...autoProducts];
}

const products = buildProductCatalog(curatedProducts, productInventoryFiles).map((product) => ({
  ...product,
  image: assetPath(product.image),
}));

const categoryDescriptions = {
  "Convertisseurs & off-grid": "Conversion d'énergie et solutions hors réseau pour le secours et les sites autonomes.",
  "Accessoires & protection": "Connectique, protections, coffrets et compléments pour une installation bien finie.",
  "Panneaux solaires": "Modules photovoltaïques pour l'habitat, le commerce et les grandes surfaces.",
  "Onduleurs hybrides": "Solutions avec batterie et gestion intelligente de l'énergie.",
  "Onduleurs on-grid": "Équipements de raccordement réseau pour une autoconsommation performante.",
  Batteries: "Stockage gel ou lithium pour l'autonomie et la continuité de service.",
  "Stations portables": "Énergie mobile pour le secours, les chantiers, les villas et les activités terrain.",
  "Variateurs & contrôle": "Pilotage, régulation et gestion de charges ou de pompage.",
  "Pompage solaire": "Pompes et contrôleurs pour l'eau, le forage et l'agriculture.",
  "Éclairage & accessoires": "Projecteurs, luminaires et équipements de sécurisation solaire.",
  "Bornes & comptage": "Recharge électrique, smart metering et infrastructure de mesure.",
};

const state = {
  search: "",
  category: "all",
  brand: "all",
  sort: "featured",
  cart: loadCart(),
  modalProductId: null,
};

const wizardState = {
  residentBill: "",
  residentSave: "",
};

const els = {
  menuToggle: document.getElementById("menuToggle"),
  mainNav: document.getElementById("mainNav"),
  floatingWhatsapp: document.getElementById("floatingWhatsapp"),
  leadOpeners: document.querySelectorAll("[data-open-lead]"),
  leadClosers: document.querySelectorAll("[data-close-lead]"),
  categoryGrid: document.getElementById("categoryGrid"),
  brandGrid: document.getElementById("brandGrid"),
  partnersGrid: document.getElementById("partnersGrid"),
  categorySelect: document.getElementById("categorySelect"),
  brandSelect: document.getElementById("brandSelect"),
  sortSelect: document.getElementById("sortSelect"),
  searchInput: document.getElementById("searchInput"),
  resetFilters: document.getElementById("resetFilters"),
  productGrid: document.getElementById("productGrid"),
  resultsMeta: document.getElementById("resultsMeta"),
  resultsTitle: document.getElementById("resultsTitle"),
  activeFilters: document.getElementById("activeFilters"),
  emptyState: document.getElementById("emptyState"),
  cartToggle: document.getElementById("cartToggle"),
  mobileCartToggle: document.getElementById("mobileCartToggle"),
  openCartFromFilters: document.getElementById("openCartFromFilters"),
  closeCart: document.getElementById("closeCart"),
  cartDrawer: document.getElementById("cartDrawer"),
  drawerBackdrop: document.getElementById("drawerBackdrop"),
  cartCount: document.getElementById("cartCount"),
  cartItems: document.getElementById("cartItems"),
  cartTotal: document.getElementById("cartTotal"),
  cartSummary: document.getElementById("cartSummary"),
  clearCart: document.getElementById("clearCart"),
  projectType: document.getElementById("projectType"),
  projectCity: document.getElementById("projectCity"),
  projectNotes: document.getElementById("projectNotes"),
  messagePreview: document.getElementById("messagePreview"),
  checkoutWhatsapp: document.getElementById("checkoutWhatsapp"),
  productModal: document.getElementById("productModal"),
  modalContent: document.getElementById("modalContent"),
  closeModal: document.getElementById("closeModal"),
  quoteForm: document.getElementById("quoteForm"),
  quoteName: document.getElementById("quoteName"),
  quotePhone: document.getElementById("quotePhone"),
  quoteEmail: document.getElementById("quoteEmail"),
  quoteType: document.getElementById("quoteType"),
  quoteCity: document.getElementById("quoteCity"),
  quoteDetails: document.getElementById("quoteDetails"),
  residentWizard: document.getElementById("residentWizard"),
  residentProgressBar: document.getElementById("residentProgressBar"),
  residentProgressText: document.getElementById("residentProgressText"),
  residentStep1: document.getElementById("residentStep1"),
  residentStep2: document.getElementById("residentStep2"),
  residentStep3: document.getElementById("residentStep3"),
  residentSummary: document.getElementById("residentSummary"),
  residentWaLink: document.getElementById("residentWaLink"),
  residentBackToBilling: document.getElementById("residentBackToBilling"),
  residentBackToSavings: document.getElementById("residentBackToSavings"),
  residentRestart: document.getElementById("residentRestart"),
  industrialWizard: document.getElementById("industrialWizard"),
  industrialProgressBar: document.getElementById("industrialProgressBar"),
  industrialProgressText: document.getElementById("industrialProgressText"),
  industrialStep1: document.getElementById("industrialStep1"),
  industrialStep2: document.getElementById("industrialStep2"),
  industrialCity: document.getElementById("industrialCity"),
  industrialActivity: document.getElementById("industrialActivity"),
  industrialNote: document.getElementById("industrialNote"),
  industrialNext: document.getElementById("industrialNext"),
  industrialSummary: document.getElementById("industrialSummary"),
  industrialWaLink: document.getElementById("industrialWaLink"),
  industrialBack: document.getElementById("industrialBack"),
  industrialRestart: document.getElementById("industrialRestart"),
};

function loadCart() {
  try {
    const raw = localStorage.getItem("alraed-cart");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveCart() {
  try {
    localStorage.setItem("alraed-cart", JSON.stringify(state.cart));
  } catch {
    // Ignore storage issues and keep the cart in memory.
  }
}

function formatMAD(value) {
  if (!Number.isFinite(value)) return "Sur demande";
  return `${new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value)} MAD`;
}

function hasDisplayPrice(product) {
  return Number.isFinite(product?.price) && product.price > 0;
}

function getPriceLabel(product) {
  return hasDisplayPrice(product) ? formatMAD(product.price) : "Sur demande";
}

function getLineTotalLabel(product, quantity = 1) {
  return hasDisplayPrice(product) ? formatMAD(product.price * quantity) : "Sur demande";
}

function getCartTotalLabel(entries = getCartEntries()) {
  if (entries.length === 0) return formatMAD(0);

  const pricedEntries = entries.filter((entry) => hasDisplayPrice(entry.product));
  const hasQuotedEntries = pricedEntries.length !== entries.length;

  if (pricedEntries.length === 0) return "Sur demande";

  const pricedTotal = pricedEntries.reduce((sum, entry) => sum + entry.product.price * entry.quantity, 0);
  return hasQuotedEntries ? `${formatMAD(pricedTotal)} + sur demande` : formatMAD(pricedTotal);
}

function getDiscountPercentage(product) {
  if (!product.oldPrice || product.oldPrice <= product.price) return null;
  return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
}

function getCategories() {
  const grouped = new Map();
  products.forEach((product) => {
    if (!grouped.has(product.category)) {
      grouped.set(product.category, []);
    }
    grouped.get(product.category).push(product);
  });
  return [...grouped.entries()].map(([name, items]) => ({
    name,
    count: items.length,
    description: categoryDescriptions[name] || "Sélection de produits organisés par usage et par marque.",
    brands: [...new Set(items.map((item) => item.brand))].slice(0, 3),
  }));
}

function getBrands() {
  const grouped = new Map();
  products.forEach((product) => {
    if (!grouped.has(product.brand)) {
      grouped.set(product.brand, 0);
    }
    grouped.set(product.brand, grouped.get(product.brand) + 1);
  });
  return [...grouped.entries()]
    .map(([name, count]) => ({ name, count, logo: resolvedBrandLogos[name] || null }))
    .sort((a, b) => a.name.localeCompare(b.name, "fr"));
}

function getFilteredProducts() {
  const query = state.search.trim().toLowerCase();

  const filtered = products.filter((product) => {
    const matchesSearch =
      !query ||
      [product.name, product.brand, product.category, ...(product.tags || [])]
        .join(" ")
        .toLowerCase()
        .includes(query);

    const matchesCategory = state.category === "all" || product.category === state.category;
    const matchesBrand = state.brand === "all" || product.brand === state.brand;

    return matchesSearch && matchesCategory && matchesBrand;
  });

  switch (state.sort) {
    case "priceAsc":
      filtered.sort((a, b) => {
        const priceA = hasDisplayPrice(a) ? a.price : Number.POSITIVE_INFINITY;
        const priceB = hasDisplayPrice(b) ? b.price : Number.POSITIVE_INFINITY;
        return priceA - priceB || a.featuredRank - b.featuredRank;
      });
      break;
    case "priceDesc":
      filtered.sort((a, b) => {
        const priceA = hasDisplayPrice(a) ? a.price : Number.NEGATIVE_INFINITY;
        const priceB = hasDisplayPrice(b) ? b.price : Number.NEGATIVE_INFINITY;
        return priceB - priceA || a.featuredRank - b.featuredRank;
      });
      break;
    case "promo":
      filtered.sort((a, b) => Number(Boolean(b.oldPrice)) - Number(Boolean(a.oldPrice)) || a.featuredRank - b.featuredRank);
      break;
    default:
      filtered.sort((a, b) => a.featuredRank - b.featuredRank);
  }

  return filtered;
}

function getCartEntries() {
  return Object.entries(state.cart)
    .map(([id, quantity]) => {
      const product = products.find((item) => item.id === id);
      return product ? { product, quantity } : null;
    })
    .filter(Boolean);
}

function getCartTotal() {
  return getCartEntries().reduce(
    (sum, entry) => sum + (hasDisplayPrice(entry.product) ? entry.product.price * entry.quantity : 0),
    0,
  );
}

function inferProjectType() {
  if (els.projectType.value !== "auto") {
    return els.projectType.value;
  }

  const entries = getCartEntries();
  const categories = entries.map((entry) => entry.product.category);
  const total = getCartTotal();

  if (categories.includes("Pompage solaire")) return "pompage solaire";
  if (categories.includes("Bornes & comptage")) return "mobilité électrique et pilotage énergétique";
  if (categories.includes("Stations portables")) return "site autonome ou besoin mobile";
  if (categories.includes("Onduleurs on-grid") && total > 20000) return "usine ou site industriel";
  if (categories.includes("Onduleurs hybrides") || categories.includes("Batteries")) return "quartier résidentiel ou bâtiment avec autonomie";
  if (total > 30000) return "bâtiment professionnel ou site industriel";
  return "installation solaire";
}

function inferObjective() {
  const entries = getCartEntries();
  const categories = new Set(entries.map((entry) => entry.product.category));

  if (categories.has("Pompage solaire")) return "produire et pomper de l'eau avec une alimentation solaire stable";
  if (categories.has("Batteries")) return "augmenter l'autonomie et sécuriser l'énergie pendant les coupures";
  if (categories.has("Onduleurs on-grid")) return "réduire durablement la facture électrique par autoconsommation";
  if (categories.has("Stations portables")) return "avoir une réserve d'énergie mobile et rapide à déployer";
  if (categories.has("Bornes & comptage")) return "piloter la consommation et intégrer la recharge électrique";
  return "recevoir une proposition technique cohérente avec le besoin du site";
}

function buildWhatsAppMessage(singleProduct = null) {
  if (singleProduct) {
    const singleProductPriceLine = hasDisplayPrice(singleProduct)
      ? `Prix affichÃ©: ${formatMAD(singleProduct.price)}.`
      : "Prix: sur demande.";
    return [
      "Bonjour ALRAED Energy,",
      `Je souhaite plus d'informations sur le produit : ${singleProduct.name}.`,
      `Marque: ${singleProduct.brand}.`,
      `Catégorie: ${singleProduct.category}.`,
      `Prix affiché: ${formatMAD(singleProduct.price)}.`,
      "Pouvez-vous me confirmer la disponibilité, les options et le délai ?",
    ].join("\n");
  }

  const entries = getCartEntries();
  const city = els.projectCity.value.trim();
  const notes = els.projectNotes.value.trim();
  const brands = [...new Set(entries.map((entry) => entry.product.brand))];
  const projectType = inferProjectType();
  const objective = inferObjective();

  const lines = [
    "Bonjour ALRAED Energy,",
    `Je souhaite recevoir un devis pour ${projectType}.`,
  ];

  if (city) {
    lines.push(`Zone du projet: ${city}.`);
  }

  if (entries.length > 0) {
    lines.push("Produits sélectionnés :");
    entries.forEach((entry) => {
      lines.push(`- ${entry.quantity} x ${entry.product.name} (${getLineTotalLabel(entry.product, entry.quantity)})`);
    });
    lines.push(`Total estimatif du panier : ${getCartTotalLabel(entries)}.`);
  } else {
    lines.push("Je souhaite d'abord une orientation sur la meilleure configuration.");
  }

  if (brands.length > 0) {
    lines.push(`Marques concernées : ${brands.join(", ")}.`);
  }

  lines.push(`Objectif principal: ${objective}.`);
  lines.push("Merci de me proposer la bonne configuration, la disponibilite et le delai.");

  if (notes) {
    lines.push(`Precision: ${notes}`);
  }

  return lines.join("\n");
}

function buildWhatsAppLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function buildQuoteWhatsAppMessage() {
  const fullName = els.quoteName.value.trim();
  const phone = els.quotePhone.value.trim();
  const email = els.quoteEmail.value.trim();
  const projectType = els.quoteType.value.trim();
  const city = els.quoteCity.value.trim();
  const details = els.quoteDetails.value.trim();

  return [
    "Bonjour ALRAED Energy,",
    "Je souhaite demander un devis pour mon projet solaire.",
    "",
    `- Nom complet: ${fullName || "-"}`,
    `- Téléphone: ${phone || "-"}`,
    email ? `- Email: ${email}` : null,
    `- Type: ${projectType || "-"}`,
    `- Ville: ${city || "-"}`,
    details ? `- Détails: ${details}` : "- Détails: -",
  ]
    .filter(Boolean)
    .join("\n");
}

function openDialog(dialog) {
  if (dialog && typeof dialog.showModal === "function" && !dialog.open) {
    dialog.showModal();
  }
}

function closeDialog(dialog) {
  if (dialog?.open) {
    dialog.close();
  }
}

function bindDialogOutsideClose(dialog, onClose = () => dialog.close()) {
  if (!dialog) return;
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const clickedOutside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;

    if (clickedOutside) {
      onClose();
    }
  });
}

function syncResidentChoices() {
  document.querySelectorAll("[data-resident-bill]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.residentBill === wizardState.residentBill);
  });

  document.querySelectorAll("[data-resident-save]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.residentSave === wizardState.residentSave);
  });
}

function setResidentStep(step) {
  [els.residentStep1, els.residentStep2, els.residentStep3].forEach((section, index) => {
    section.hidden = index !== step - 1;
  });

  els.residentProgressText.textContent = `${step}/3`;
  els.residentProgressBar.style.width = step === 1 ? "33%" : step === 2 ? "66%" : "100%";
  syncResidentChoices();
}

function getResidentEstimatedSavings() {
  const billBase = {
    "500 à 1000 DH": 750,
    "1500 à 2500 DH": 2000,
    "3000 à 5000 DH": 4000,
  }[wizardState.residentBill] || 0;

  const rate = {
    "50%": 0.5,
    "75%": 0.75,
    "90%": 0.9,
  }[wizardState.residentSave] || 0;

  return Math.round(billBase * rate);
}

function buildResidentWhatsAppMessage() {
  const estimatedSavings = getResidentEstimatedSavings();

  return [
    "Bonjour ALRAED Energy,",
    "Je suis intéressé par une solution solaire pour un quartier résidentiel ou une maison.",
    "",
    `- Facture d'électricité: ${wizardState.residentBill || "à préciser"}`,
    `- Objectif d'économie: ${wizardState.residentSave || "à préciser"}`,
    estimatedSavings ? `- Économie estimée: environ ${estimatedSavings} DH / mois` : null,
    "",
    "Merci de me proposer une solution adaptée à mon besoin.",
  ]
    .filter(Boolean)
    .join("\n");
}

function updateResidentSummary() {
  const estimatedSavings = getResidentEstimatedSavings();
  const parts = [
    `Facture: ${wizardState.residentBill || "-"}`,
      `Objectif: ${wizardState.residentSave || "-"}`,
  ];

  if (estimatedSavings) {
    parts.push(`Gain estimé: ~${estimatedSavings} DH/mois`);
  }

  els.residentSummary.textContent = parts.join(" | ");
  els.residentWaLink.href = buildWhatsAppLink(buildResidentWhatsAppMessage());
}

function resetResidentWizard() {
  wizardState.residentBill = "";
  wizardState.residentSave = "";
  updateResidentSummary();
  setResidentStep(1);
}

function openResidentWizard() {
  resetResidentWizard();
  openDialog(els.residentWizard);
}

function setIndustrialStep(step) {
  [els.industrialStep1, els.industrialStep2].forEach((section, index) => {
    section.hidden = index !== step - 1;
  });

  els.industrialProgressText.textContent = `${step}/2`;
  els.industrialProgressBar.style.width = step === 1 ? "50%" : "100%";
}

function buildIndustrialWhatsAppMessage() {
  const city = els.industrialCity.value.trim() || "à préciser";
  const activity = els.industrialActivity.value.trim() || "à préciser";
  const note = els.industrialNote.value.trim();

  return [
    "Bonjour ALRAED Energy,",
    "Je souhaite un devis pour un projet solaire industriel.",
    "",
    `- Ville: ${city}`,
    `- Type d'activité: ${activity}`,
    note ? `- Remarque: ${note}` : null,
    "",
    "Je vais envoyer dans cette conversation les factures d'électricité des 6 derniers mois pour l'étude.",
    "Merci de me proposer la solution adaptée.",
  ]
    .filter(Boolean)
    .join("\n");
}

function updateIndustrialSummary() {
  const city = els.industrialCity.value.trim() || "-";
  const activity = els.industrialActivity.value.trim() || "-";

  els.industrialSummary.textContent = `Ville: ${city} | Activité: ${activity}`;
  els.industrialWaLink.href = buildWhatsAppLink(buildIndustrialWhatsAppMessage());
}

function openIndustrialWizard() {
  setIndustrialStep(1);
  updateIndustrialSummary();
  openDialog(els.industrialWizard);
  window.setTimeout(() => {
    els.industrialCity.focus();
  }, 60);
}

function openLeadFlow(flow) {
  if (flow === "residentiel") {
    openResidentWizard();
    return;
  }

  if (flow === "industriel") {
    openIndustrialWizard();
  }
}

function renderCategoryCards() {
  const categories = getCategories();
  els.categoryGrid.innerHTML = categories
    .map((category) => {
      const isActive = state.category === category.name;
      return `
        <article class="category-card ${isActive ? "active" : ""}">
          <div class="category-meta">
            <span class="eyebrow">Catégorie</span>
            <span class="category-count">${category.count} produits</span>
          </div>
          <h3>${category.name}</h3>
          <p>${category.description}</p>
          <div class="category-brands">
            ${category.brands.map((brand) => `<span class="chip">${brand}</span>`).join("")}
          </div>
          <button class="button button-secondary" type="button" data-category-button="${category.name}">
            ${isActive ? "Catégorie active" : "Voir cette catégorie"}
          </button>
        </article>
      `;
    })
    .join("");
}

function renderBrandCards() {
  const brands = getBrands();
  els.brandGrid.innerHTML = brands
    .map((brand) => {
      const isActive = state.brand === brand.name;
      const visual = brand.logo
        ? `<img src="${brand.logo}" alt="${brand.name}" />`
        : `<div class="chip">${brand.name}</div>`;
      return `
        <article class="brand-card ${isActive ? "active" : ""}">
          ${visual}
          <strong>${brand.name}</strong>
          <small>${brand.count} produit${brand.count > 1 ? "s" : ""}</small>
          <button class="button button-secondary" type="button" data-brand-button="${brand.name}">
            ${isActive ? "Marque active" : "Filtrer"}
          </button>
        </article>
      `;
    })
    .join("");
}

function renderPartnerLogos() {
  if (!els.partnersGrid) return;

  const partners = Object.entries(resolvedBrandLogos).map(([name, logo]) => ({ name, logo }));

  els.partnersGrid.innerHTML = partners
    .map(
      (partner) => `
        <article class="partner-card">
          <img src="${partner.logo}" alt="Logo ${partner.name}" loading="lazy" />
          <span>${partner.name}</span>
        </article>
      `,
    )
    .join("");
}

function renderSelectOptions() {
  const categories = getCategories();
  const brands = getBrands();

  els.categorySelect.innerHTML = [
    `<option value="all">Toutes les catégories</option>`,
    ...categories.map((category) => `<option value="${category.name}">${category.name}</option>`),
  ].join("");

  els.brandSelect.innerHTML = [
    `<option value="all">Toutes les marques</option>`,
    ...brands.map((brand) => `<option value="${brand.name}">${brand.name}</option>`),
  ].join("");

  els.categorySelect.value = state.category;
  els.brandSelect.value = state.brand;
  els.sortSelect.value = state.sort;
}

function renderActiveFilters() {
  const filters = [];
  if (state.search) filters.push({ label: `Recherche: ${state.search}`, key: "search" });
  if (state.category !== "all") filters.push({ label: `Catégorie: ${state.category}`, key: "category" });
  if (state.brand !== "all") filters.push({ label: `Marque: ${state.brand}`, key: "brand" });
  if (state.sort !== "featured") {
    const labels = {
      priceAsc: "Prix croissant",
      priceDesc: "Prix décroissant",
      promo: "Promotions d'abord",
    };
    filters.push({ label: `Tri: ${labels[state.sort]}`, key: "sort" });
  }

  els.activeFilters.innerHTML = filters
    .map(
      (filter) =>
        `<button type="button" data-clear-filter="${filter.key}">${filter.label} x</button>`,
    )
    .join("");
}

function renderProductCardMarkup(product) {
  const discount = getDiscountPercentage(product);
  const tags = product.tags || [];

  return `
    <article class="product-card">
      <div class="product-media">
        <img src="${product.image}" alt="${product.name}" />
        ${
          discount
            ? `<span class="discount-badge">-${discount}%</span>`
            : product.promo
              ? `<span class="promo-badge">${product.promo}</span>`
              : ""
        }
      </div>
      <div class="product-body">
        <div class="product-head">
          <h3>${product.name}</h3>
        </div>
        <div class="product-meta">
          <span class="chip">${product.brand}</span>
          <span class="chip">${product.category}</span>
          <span class="stock-badge">${product.stock}</span>
        </div>
        <p>${product.description}</p>
        <div class="price-line">
          <strong>${getPriceLabel(product)}</strong>
          ${product.oldPrice ? `<s>${formatMAD(product.oldPrice)}</s>` : ""}
        </div>
        <div class="product-tags">
          ${tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="product-actions">
          <button class="button button-secondary" type="button" data-view-product="${product.id}">
            Voir fiche
          </button>
          <button class="button button-primary" type="button" data-add-product="${product.id}">
            Ajouter
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  const groupedView = state.category === "all";
  els.resultsMeta.textContent = `${filtered.length} produit${filtered.length > 1 ? "s" : ""}`;
  els.resultsTitle.textContent =
    state.category !== "all"
      ? state.category
      : state.brand !== "all"
        ? `Sélection ${state.brand}`
        : "Produits recommandés";

  if (state.category === "all") {
    els.resultsTitle.textContent =
      state.brand !== "all"
        ? `Catalogue ${state.brand} par catégorie`
        : state.search
          ? "Résultats par catégorie"
          : "Tous les produits par catégorie";
  }

  els.emptyState.hidden = filtered.length !== 0;
  els.productGrid.hidden = filtered.length === 0;

  els.productGrid.classList.toggle("product-grid--grouped", groupedView && filtered.length > 0);

  if (groupedView) {
    const groupedProducts = new Map();
    filtered.forEach((product) => {
      if (!groupedProducts.has(product.category)) {
        groupedProducts.set(product.category, []);
      }
      groupedProducts.get(product.category).push(product);
    });

    els.productGrid.innerHTML = [...groupedProducts.entries()]
      .sort(([a], [b]) => sortCategoryNames(a, b))
      .map(
        ([categoryName, items]) => `
          <section class="product-category-group">
            <div class="product-category-heading">
              <div>
                <span class="eyebrow">Catégorie</span>
                <h3>${categoryName}</h3>
              </div>
              <p>${items.length} produit${items.length > 1 ? "s" : ""}</p>
            </div>
            <div class="product-category-grid">
              ${items.map((product) => renderProductCardMarkup(product)).join("")}
            </div>
          </section>
        `,
      )
      .join("");
    return;
  }

  els.productGrid.innerHTML = filtered.map((product) => renderProductCardMarkup(product)).join("");
  return;

}

function renderCart() {
  const entries = getCartEntries();
  const totalItems = entries.reduce((sum, entry) => sum + entry.quantity, 0);
  const total = getCartTotal();

  els.cartCount.textContent = String(totalItems);
  els.cartTotal.textContent = getCartTotalLabel(entries);
  els.cartSummary.textContent =
    totalItems > 0
      ? `${totalItems} article${totalItems > 1 ? "s" : ""} dans le panier`
      : "Le panier est vide.";

  if (entries.length === 0) {
    els.cartItems.innerHTML = `
      <div class="empty-cart">
        <strong>Votre panier est vide.</strong>
        <p>Ajoutez des produits pour préparer un message WhatsApp avec prix, quantités et contexte projet.</p>
      </div>
    `;
  } else {
    els.cartItems.innerHTML = entries
      .map(
        ({ product, quantity }) => `
          <article class="cart-item">
            <img src="${product.image}" alt="${product.name}" />
            <div class="cart-item-content">
              <div class="cart-item-top">
                <div>
                  <strong>${product.name}</strong>
                  <p>${product.brand} | ${product.category}</p>
                </div>
                <span>${getLineTotalLabel(product, quantity)}</span>
              </div>
              <div class="cart-item-controls">
                <div class="quantity-control">
                  <button type="button" data-qty-minus="${product.id}">-</button>
                  <span>${quantity}</span>
                  <button type="button" data-qty-plus="${product.id}">+</button>
                </div>
                <button class="remove-link" type="button" data-remove-item="${product.id}">
                  Supprimer
                </button>
              </div>
            </div>
          </article>
        `,
      )
      .join("");
  }

  const message = buildWhatsAppMessage();
  els.messagePreview.value = message;
  els.checkoutWhatsapp.href = buildWhatsAppLink(message);
}

function renderModal() {
  const product = products.find((item) => item.id === state.modalProductId);
  if (!product) return;

  els.modalContent.innerHTML = `
    <div class="modal-media">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="modal-copy">
      <span class="eyebrow">${product.brand} | ${product.category}</span>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="price-line">
        <strong>${getPriceLabel(product)}</strong>
        ${product.oldPrice ? `<s>${formatMAD(product.oldPrice)}</s>` : ""}
      </div>
      <div class="product-tags">
        ${(product.tags || []).map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <ul>
        ${(product.features || []).map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
      <div class="product-actions">
        <button class="button button-primary" type="button" data-add-product="${product.id}">
          Ajouter au panier
        </button>
        <a class="button button-secondary" href="${buildWhatsAppLink(buildWhatsAppMessage(product))}" target="_blank" rel="noreferrer">
          Demander sur WhatsApp
        </a>
      </div>
    </div>
  `;
}

function rerender() {
  renderCategoryCards();
  renderBrandCards();
  renderActiveFilters();
  renderProducts();
  renderCart();
}

function openDrawer() {
  els.drawerBackdrop.hidden = false;
  els.cartDrawer.classList.add("open");
  els.cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
}

function closeDrawer() {
  els.drawerBackdrop.hidden = true;
  els.cartDrawer.classList.remove("open");
  els.cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
}

function openModal(productId) {
  state.modalProductId = productId;
  renderModal();
  if (typeof els.productModal.showModal === "function") {
    els.productModal.showModal();
  }
}

function closeModal() {
  state.modalProductId = null;
  if (els.productModal.open) {
    els.productModal.close();
  }
}

function updateFilter(partial) {
  Object.assign(state, partial);
  rerender();
}

function addToCart(productId) {
  state.cart[productId] = (state.cart[productId] || 0) + 1;
  saveCart();
  renderCart();
}

function changeQuantity(productId, delta) {
  const current = state.cart[productId] || 0;
  const next = current + delta;
  if (next <= 0) {
    delete state.cart[productId];
  } else {
    state.cart[productId] = next;
  }
  saveCart();
  renderCart();
}

function clearFilter(key) {
  if (key === "search") {
    state.search = "";
    els.searchInput.value = "";
  }
  if (key === "category") {
    state.category = "all";
    els.categorySelect.value = "all";
  }
  if (key === "brand") {
    state.brand = "all";
    els.brandSelect.value = "all";
  }
  if (key === "sort") {
    state.sort = "featured";
    els.sortSelect.value = "featured";
  }
  rerender();
}

function resetFilters() {
  state.search = "";
  state.category = "all";
  state.brand = "all";
  state.sort = "featured";
  els.searchInput.value = "";
  els.categorySelect.value = "all";
  els.brandSelect.value = "all";
  els.sortSelect.value = "featured";
  rerender();
}

function handleProductAction(target) {
  const addId = target.closest("[data-add-product]")?.dataset.addProduct;
  if (addId) {
    addToCart(addId);
    openDrawer();
    return true;
  }

  const viewId = target.closest("[data-view-product]")?.dataset.viewProduct;
  if (viewId) {
    openModal(viewId);
    return true;
  }

  return false;
}

function initEvents() {
  els.menuToggle.addEventListener("click", () => {
    const open = els.mainNav.classList.toggle("open");
    els.menuToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  });

  els.mainNav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    els.mainNav.classList.remove("open");
    els.menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });

  els.leadOpeners.forEach((button) => {
    button.addEventListener("click", () => {
      openLeadFlow(button.dataset.openLead);
    });
  });

  els.leadClosers.forEach((button) => {
    button.addEventListener("click", () => {
      closeDialog(document.getElementById(button.dataset.closeLead));
    });
  });

  document.querySelectorAll("[data-resident-bill]").forEach((button) => {
    button.addEventListener("click", () => {
      wizardState.residentBill = button.dataset.residentBill || "";
      setResidentStep(2);
    });
  });

  document.querySelectorAll("[data-resident-save]").forEach((button) => {
    button.addEventListener("click", () => {
      wizardState.residentSave = button.dataset.residentSave || "";
      updateResidentSummary();
      setResidentStep(3);
    });
  });

  els.residentBackToBilling.addEventListener("click", () => {
    setResidentStep(1);
  });

  els.residentBackToSavings.addEventListener("click", () => {
    setResidentStep(2);
  });

  els.residentRestart.addEventListener("click", resetResidentWizard);
  els.residentWizard.addEventListener("close", resetResidentWizard);

  [els.industrialCity, els.industrialActivity, els.industrialNote].forEach((input) => {
    input.addEventListener("input", updateIndustrialSummary);
    input.addEventListener("change", updateIndustrialSummary);
  });

  els.industrialNext.addEventListener("click", () => {
    updateIndustrialSummary();
    setIndustrialStep(2);
  });

  els.industrialBack.addEventListener("click", () => {
    setIndustrialStep(1);
  });

  els.industrialRestart.addEventListener("click", () => {
    els.industrialCity.value = "";
    els.industrialActivity.value = "";
    els.industrialNote.value = "";
    updateIndustrialSummary();
    setIndustrialStep(1);
    els.industrialCity.focus();
  });

  els.industrialWizard.addEventListener("close", () => {
    setIndustrialStep(1);
    updateIndustrialSummary();
  });

  bindDialogOutsideClose(els.productModal, closeModal);
  bindDialogOutsideClose(els.residentWizard);
  bindDialogOutsideClose(els.industrialWizard);

  els.floatingWhatsapp.addEventListener("click", () => {
    window.open(
      buildWhatsAppLink(
        "Bonjour ALRAED Energy,\nJe souhaite des informations sur vos solutions solaires et votre catalogue.",
      ),
      "_blank",
      "noopener,noreferrer",
    );
  });

  els.categorySelect.addEventListener("change", (event) => {
    updateFilter({ category: event.target.value });
  });

  els.brandSelect.addEventListener("change", (event) => {
    updateFilter({ brand: event.target.value });
  });

  els.sortSelect.addEventListener("change", (event) => {
    updateFilter({ sort: event.target.value });
  });

  els.searchInput.addEventListener("input", (event) => {
    updateFilter({ search: event.target.value });
  });

  els.resetFilters.addEventListener("click", resetFilters);
  els.openCartFromFilters.addEventListener("click", openDrawer);
  els.cartToggle.addEventListener("click", openDrawer);
  els.mobileCartToggle.addEventListener("click", openDrawer);
  els.closeCart.addEventListener("click", closeDrawer);
  els.drawerBackdrop.addEventListener("click", closeDrawer);
  els.clearCart.addEventListener("click", () => {
    state.cart = {};
    saveCart();
    renderCart();
  });

  els.quoteForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    window.open(buildWhatsAppLink(buildQuoteWhatsAppMessage()), "_blank", "noopener,noreferrer");
  });

  [els.projectType, els.projectCity, els.projectNotes].forEach((input) => {
    input.addEventListener("input", renderCart);
    input.addEventListener("change", renderCart);
  });

  els.categoryGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category-button]");
    if (!button) return;
    const category = button.dataset.categoryButton;
    const nextValue = state.category === category ? "all" : category;
    state.category = nextValue;
    els.categorySelect.value = nextValue;
    rerender();
    document.getElementById("catalogue").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  els.brandGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-brand-button]");
    if (!button) return;
    const brand = button.dataset.brandButton;
    const nextValue = state.brand === brand ? "all" : brand;
    state.brand = nextValue;
    els.brandSelect.value = nextValue;
    rerender();
    document.getElementById("catalogue").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.querySelectorAll("[data-solution]").forEach((button) => {
    button.addEventListener("click", () => {
      const solution = button.dataset.solution;
      if (!solution) return;
      const messages = {
        residentiel:
          "Bonjour ALRAED Energy,\nJe souhaite un devis pour un projet solaire de quartier résidentiel ou de maisons.",
        professionnel:
          "Bonjour ALRAED Energy,\nJe souhaite un devis pour un bâtiment professionnel ou un commerce.",
        industriel:
          "Bonjour ALRAED Energy,\nJe souhaite un devis pour une usine ou un site industriel.",
      };
      window.open(buildWhatsAppLink(messages[solution]), "_blank", "noopener,noreferrer");
    });
  });

  els.activeFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-clear-filter]");
    if (!button) return;
    clearFilter(button.dataset.clearFilter);
  });

  els.productGrid.addEventListener("click", (event) => {
    handleProductAction(event.target);
  });

  els.modalContent.addEventListener("click", (event) => {
    if (handleProductAction(event.target)) {
      closeModal();
    }
  });

  els.cartItems.addEventListener("click", (event) => {
    const minusId = event.target.closest("[data-qty-minus]")?.dataset.qtyMinus;
    if (minusId) {
      changeQuantity(minusId, -1);
      return;
    }
    const plusId = event.target.closest("[data-qty-plus]")?.dataset.qtyPlus;
    if (plusId) {
      changeQuantity(plusId, 1);
      return;
    }
    const removeId = event.target.closest("[data-remove-item]")?.dataset.removeItem;
    if (removeId) {
      delete state.cart[removeId];
      saveCart();
      renderCart();
    }
  });

  els.closeModal.addEventListener("click", closeModal);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      closeDrawer();
      closeDialog(els.residentWizard);
      closeDialog(els.industrialWizard);
    }
  });
}

function init() {
  resetResidentWizard();
  updateIndustrialSummary();
  setIndustrialStep(1);
  renderSelectOptions();
  renderPartnerLogos();
  rerender();
  initEvents();
}

init();
