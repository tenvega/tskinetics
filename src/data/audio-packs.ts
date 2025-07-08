export interface AudioFile {
  name: string;
  path: string;
  filename: string;
}

export interface AudioPack {
  id: string;
  name: string;
  description: string;
  folderPath: string;
  productId: string;
  audioFiles: AudioFile[];
}

export const audioPacks: AudioPack[] = [
  {
    id: "kits",
    name: "Kits",
    description: "Drum kits and sample collections",
    folderPath: "/audio/Kits",
    productId: "eDNSV8PJGMdPtWFitxPrkQ==", // Kits product
    audioFiles: [
      {
        name: "PO 14 Bleep",
        path: "/audio/Kits/PO_14_Bleep.mp3",
        filename: "PO_14_Bleep.mp3"
      },
      {
        name: "770 Dist Clap 1",
        path: "/audio/Kits/770_Dist_Clap_1.mp3",
        filename: "770_Dist_Clap_1.mp3"
      },
      {
        name: "770 Dist SD 1",
        path: "/audio/Kits/770_Dist_SD_1.mp3",
        filename: "770_Dist_SD_1.mp3"
      },
      {
        name: "770 Dist SD 2",
        path: "/audio/Kits/770_Dist_SD_2.mp3",
        filename: "770_Dist_SD_2.mp3"
      },
      {
        name: "PO 14 BD 1",
        path: "/audio/Kits/PO_14_BD_1.mp3",
        filename: "PO_14_BD_1.mp3"
      },
      {
        name: "PO 14 Sub 2",
        path: "/audio/Kits/PO_14_Sub_2.mp3",
        filename: "PO_14_Sub_2.mp3"
      },
      {
        name: "PO 14 Bass A",
        path: "/audio/Kits/PO_14_Bass_A.mp3",
        filename: "PO_14_Bass_A.mp3"
      },
      {
        name: "PO 14 TOM 2",
        path: "/audio/Kits/PO_14_TOM_2.mp3",
        filename: "PO_14_TOM_2.mp3"
      }
    ]
  },
  {
    id: "gaussian-tremors",
    name: "Gaussian Tremors",
    description: "Ambient and atmospheric sound demos",
    folderPath: "/audio/Gaussian_Tremors",
    productId: "sm089yf8HB22wTUdYe6buw==", // PRESETS FOR THE ARGON 8: Gaussian Tremors
    audioFiles: [
      {
        name: "Gaussian Tremors Demo 1",
        path: "/audio/Gaussian_Tremors/Gaussian_Tremors_Demo_1.mp3",
        filename: "Gaussian_Tremors_Demo_1.mp3"
      },
      {
        name: "Gaussian Tremors Demo 2",
        path: "/audio/Gaussian_Tremors/Gaussian_Tremors_Demo_2.mp3",
        filename: "Gaussian_Tremors_Demo_2.mp3"
      },
      {
        name: "Gaussian Tremors Demo 3",
        path: "/audio/Gaussian_Tremors/Gaussian_Tremors_Demo_3.mp3",
        filename: "Gaussian_Tremors_Demo_3.mp3"
      },
      {
        name: "Gaussian Tremors Demo 4",
        path: "/audio/Gaussian_Tremors/Gaussian_Tremors_Demo_4.mp3",
        filename: "Gaussian_Tremors_Demo_4.mp3"
      },
      {
        name: "Gaussian Tremors Demo 5",
        path: "/audio/Gaussian_Tremors/Gaussian_Tremors_Demo_5.mp3",
        filename: "Gaussian_Tremors_Demo_5.mp3"
      },
      {
        name: "Gaussian Tremors Demo 6",
        path: "/audio/Gaussian_Tremors/Gaussian_Tremors_Demo_6.mp3",
        filename: "Gaussian_Tremors_Demo_6.mp3"
      },
      {
        name: "Gaussian Tremors Demo 7",
        path: "/audio/Gaussian_Tremors/Gaussian_Tremors_Demo_7.mp3",
        filename: "Gaussian_Tremors_Demo_7.mp3"
      },
      {
        name: "Gaussian Tremors Demo 8",
        path: "/audio/Gaussian_Tremors/Gaussian_Tremors_Demo_8.mp3",
        filename: "Gaussian_Tremors_Demo_8.mp3"
      }
    ]
  },
  {
    id: "foundsound-sound-perc",
    name: "Found Sound Percussion",
    description: "Unique percussion sounds from found objects",
    folderPath: "/audio/Foundsound_Sound_Perc",
    productId: "wCpv2T2-YkEVN5S4-VKiBA==", // Found Sound Perc
    audioFiles: [
      {
        name: "AKt Verb Door 5",
        path: "/audio/Foundsound_Sound_Perc/AKt_Verb_Door_5.mp3",
        filename: "AKt_Verb_Door_5.mp3"
      },
      {
        name: "Found Sound Perc 10",
        path: "/audio/Foundsound_Sound_Perc/Found_Sound_Perc_10.mp3",
        filename: "Found_Sound_Perc_10.mp3"
      },
      {
        name: "Marímbula 6",
        path: "/audio/Foundsound_Sound_Perc/Marímbula_6.mp3",
        filename: "Marímbula_6.mp3"
      },
      {
        name: "Samarkand Claps 2",
        path: "/audio/Foundsound_Sound_Perc/Samarkand_Claps_2.mp3",
        filename: "Samarkand_Claps_2.mp3"
      },
      {
        name: "Samarkand Whistle 3",
        path: "/audio/Foundsound_Sound_Perc/Samarkand_Whistle_3.mp3",
        filename: "Samarkand_Whistle_3.mp3"
      },
      {
        name: "Tambor 1",
        path: "/audio/Foundsound_Sound_Perc/Tambor_1.mp3",
        filename: "Tambor_1.mp3"
      },
      {
        name: "WM Perc Tonal 3",
        path: "/audio/Foundsound_Sound_Perc/WM_Perc_tonal_3.mp3",
        filename: "WM_Perc_tonal_3.mp3"
      },
      {
        name: "Pipe C",
        path: "/audio/Foundsound_Sound_Perc/pipe_C.mp3",
        filename: "pipe_C.mp3"
      }
    ]
  },
  {
    id: "genarch-cycle-demos",
    name: "Genarch Cycle Demos",
    description: "Generative architecture cycle demonstrations",
    folderPath: "/audio/Genarch_Cycle_Demos",
    productId: "YBZbq9G9akXVe9P9g5NLfA==", // GenArch Cycle
    audioFiles: [
      {
        name: "GA Cycle MISC 32",
        path: "/audio/Genarch_Cycle_Demos/ GA_Cycle_MISC_32.mp3",
        filename: " GA_Cycle_MISC_32.mp3"
      },
      {
        name: "GA Cycle Chord 7",
        path: "/audio/Genarch_Cycle_Demos/ GA_Cycle_Chord_7.mp3",
        filename: " GA_Cycle_Chord_7.mp3"
      },
      {
        name: "GA Cycle MISC 37",
        path: "/audio/Genarch_Cycle_Demos/ GA_Cycle_MISC_37.mp3",
        filename: " GA_Cycle_MISC_37.mp3"
      },
      {
        name: "GA Cycle MISC 5",
        path: "/audio/Genarch_Cycle_Demos/ GA_Cycle_MISC_5.mp3",
        filename: " GA_Cycle_MISC_5.mp3"
      },
      {
        name: "GA Cycle MISC 4",
        path: "/audio/Genarch_Cycle_Demos/ GA_Cycle_MISC_4.mp3",
        filename: " GA_Cycle_MISC_4.mp3"
      },
      {
        name: "GA Cycle SD 26",
        path: "/audio/Genarch_Cycle_Demos/GA_Cycle_SD_26.mp3",
        filename: "GA_Cycle_SD_26.mp3"
      },
      {
        name: "GA Cycle Kick 50",
        path: "/audio/Genarch_Cycle_Demos/GA_Cycle_Kick_50.mp3",
        filename: "GA_Cycle_Kick_50.mp3"
      },
      {
        name: "GA Cycle SD 49",
        path: "/audio/Genarch_Cycle_Demos/GA_Cycle_SD_49.mp3",
        filename: "GA_Cycle_SD_49.mp3"
      }
    ]
  },
  {
    id: "interference-pack-demos",
    name: "Interference Pack Demos",
    description: "Interference and distortion effects demonstrations",
    folderPath: "/audio/InterferencePack_Demos",
    productId: "8lD0nEOwzH9G3mP1GLODrQ==", // Interference Sound Pack Vol. 1
    audioFiles: [
      {
        name: "Interference Vol1 Bent Bass 1",
        path: "/audio/InterferencePack_Demos/Interference_Vol1 Bent Bass 1.mp3",
        filename: "Interference_Vol1 Bent Bass 1.mp3"
      },
      {
        name: "Interference Vol1 Hybrid Snare",
        path: "/audio/InterferencePack_Demos/Interference_Vol1 Hybrid Snare.mp3",
        filename: "Interference_Vol1 Hybrid Snare.mp3"
      },
      {
        name: "Interference Vol1 Hybrid Stick",
        path: "/audio/InterferencePack_Demos/Interference_Vol1 Hybrid Stick.mp3",
        filename: "Interference_Vol1 Hybrid Stick.mp3"
      },
      {
        name: "Interference Vol1 Detuned Am Chord",
        path: "/audio/InterferencePack_Demos/Interference_Vol1 Detuned Am Chord.mp3",
        filename: "Interference_Vol1 Detuned Am Chord.mp3"
      },
      {
        name: "Interference Vol1 MKF Kick 3",
        path: "/audio/InterferencePack_Demos/Interference_Vol1 MKF kick 3.mp3",
        filename: "Interference_Vol1 MKF kick 3.mp3"
      },
      {
        name: "Interference Vol1 MKF Kick 5",
        path: "/audio/InterferencePack_Demos/Interference_Vol1 MKF kick 5.mp3",
        filename: "Interference_Vol1 MKF kick 5.mp3"
      },
      {
        name: "Interference Vol1 RVRB Stick",
        path: "/audio/InterferencePack_Demos/Interference_Vol1 RVRB Stick.mp3",
        filename: "Interference_Vol1 RVRB Stick.mp3"
      },
      {
        name: "Interference Vol1 MKF Kick 7",
        path: "/audio/InterferencePack_Demos/Interference_Vol1 MKF kick 7.mp3",
        filename: "Interference_Vol1 MKF kick 7.mp3"
      }
    ]
  },
  {
    id: "temporal-fauna-demos",
    name: "Temporal Fauna Demos",
    description: "Temporal and organic sound explorations",
    folderPath: "/audio/Temporal_Fauna_DEMOS",
    productId: "h3iis8gqsb5Pmj8P_vxcfw==", // Temporal Fauna
    audioFiles: [
      {
        name: "KD Subs 3",
        path: "/audio/Temporal_Fauna_DEMOS/KD_Subs_3.mp3",
        filename: "KD_Subs_3.mp3"
      },
      {
        name: "KD Subs 6",
        path: "/audio/Temporal_Fauna_DEMOS/KD_Subs_6.mp3",
        filename: "KD_Subs_6.mp3"
      },
      {
        name: "Lo-Perc 8",
        path: "/audio/Temporal_Fauna_DEMOS/Lo-Perc_8.mp3",
        filename: "Lo-Perc_8.mp3"
      },
      {
        name: "Neblina 8",
        path: "/audio/Temporal_Fauna_DEMOS/Neblina_8.mp3",
        filename: "Neblina_8.mp3"
      },
      {
        name: "Rbr DistBass 1",
        path: "/audio/Temporal_Fauna_DEMOS/Rbr_DistBass_1.mp3",
        filename: "Rbr_DistBass_1.mp3"
      },
      {
        name: "Sub MiKro 1",
        path: "/audio/Temporal_Fauna_DEMOS/Sub_MiKro_1.mp3",
        filename: "Sub_MiKro_1.mp3"
      },
      {
        name: "Symmetry 4",
        path: "/audio/Temporal_Fauna_DEMOS/Symmetry_4.mp3",
        filename: "Symmetry_4.mp3"
      },
      {
        name: "Temporal Resolution 1",
        path: "/audio/Temporal_Fauna_DEMOS/Temporal_Resolution_1.mp3",
        filename: "Temporal_Resolution_1.mp3"
      },
      {
        name: "Temporal Fauna Demo V2",
        path: "/audio/Temporal_Fauna_DEMOS/Tempora_Fauna_DemoV2.mp3",
        filename: "Tempora_Fauna_DemoV2.mp3"
      },
      {
        name: "Temporal Fauna Demo",
        path: "/audio/Temporal_Fauna_DEMOS/Temporal_Fauna_Demo.mp3",
        filename: "Temporal_Fauna_Demo.mp3"
      }
    ]
  },
  {
    id: "vapor-drums-demos",
    name: "Vapor Drums Demos",
    description: "Vapor wave and atmospheric drum sounds",
    folderPath: "/audio/Vapor_Drums_Demos",
    productId: "AJNqZ3oMXl9G6xAkNg9wNA==", // FM Vapor Drums-Green
    audioFiles: [
      {
        name: "BDVIN FM Vapor Drums TEHN V",
        path: "/audio/Vapor_Drums_Demos/BDVIN_FM_Vapor_Drums_TEHN_V.mp3",
        filename: "BDVIN_FM_Vapor_Drums_TEHN_V.mp3"
      },
      {
        name: "CLAPEDGE FM Vapor Drums TEHN V",
        path: "/audio/Vapor_Drums_Demos/CLAPEDGE_FM_Vapor_Drums_TEHN_V.mp3",
        filename: "CLAPEDGE_FM_Vapor_Drums_TEHN_V.mp3"
      },
      {
        name: "CONGXY FM Vapor Drums TEHN V",
        path: "/audio/Vapor_Drums_Demos/CONGXY_FM_Vapor_Drums_TEHN_V.mp3",
        filename: "CONGXY_FM_Vapor_Drums_TEHN_V.mp3"
      },
      {
        name: "HHO5 FM Vapor Drums TEHN V",
        path: "/audio/Vapor_Drums_Demos/HHO5_FM_Vapor_Drums_TEHN_V.mp3",
        filename: "HHO5_FM_Vapor_Drums_TEHN_V.mp3"
      },
      {
        name: "ISAO FM Vapor Drums TEHN V",
        path: "/audio/Vapor_Drums_Demos/ISAO_FM_Vapor_Drums_TEHN_V.mp3",
        filename: "ISAO_FM_Vapor_Drums_TEHN_V.mp3"
      },
      {
        name: "METALVIN FM Vapor Drums TEHN V",
        path: "/audio/Vapor_Drums_Demos/METALVIN_FM_Vapor_Drums_TEHN_V.mp3",
        filename: "METALVIN_FM_Vapor_Drums_TEHN_V.mp3"
      },
      {
        name: "PRCTONE2 FM Vapor Drums TEHN V",
        path: "/audio/Vapor_Drums_Demos/PRCTONE2_FM_Vapor_Drums_TEHN_V.mp3",
        filename: "PRCTONE2_FM_Vapor_Drums_TEHN_V.mp3"
      },
      {
        name: "TRIACON FM Vapor Drums TEHN V",
        path: "/audio/Vapor_Drums_Demos/TRIACON_FM_Vapor_Drums_TEHN_V.mp3",
        filename: "TRIACON_FM_Vapor_Drums_TEHN_V.mp3"
      }
    ]
  }
];

export function getAudioPackById(id: string): AudioPack | undefined {
  return audioPacks.find(pack => pack.id === id);
}

export function getAudioPackByName(name: string): AudioPack | undefined {
  return audioPacks.find(pack => pack.name.toLowerCase() === name.toLowerCase());
}

export function getAllAudioPacks(): AudioPack[] {
  return audioPacks;
}

export function getAudioPackByProductId(productId: string): AudioPack | undefined {
  return audioPacks.find(pack => pack.productId === productId);
}