// Audio packs configuration with populated audio files
export interface AudioFile {
  name: string;
  path: string;
  filename: string;
}

export interface AudioPack {
  id: string;
  name: string;
  slug: string;
  description: string;
  folderPath: string;
  productId: string;
  audioFiles: AudioFile[];
}

// Function to create audio file object
function createAudioFile(folderPath: string, filename: string): AudioFile {
  const name = filename
    .replace(/\.(mp3|wav|flac|aiff|m4a)$/i, '') // Remove extension
    .replace(/[_-]/g, ' ') // Replace underscores and hyphens with spaces
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();

  return {
    name,
    path: `${folderPath}/${filename}`,
    filename
  };
}

// Audio packs with populated audio files
export const audioPacks: AudioPack[] = [
  {
    id: "kits",
    name: "Kits",
    slug: "intro-kit",
    description: "Drum kits and sample collections",
    folderPath: "/audio/Kits",
    productId: "eDNSV8PJGMdPtWFitxPrkQ==",
    audioFiles: [
      'PO_14_Bleep.mp3',
      '770_Dist_Clap_1.mp3',
      '770_Dist_SD_1.mp3',
      '770_Dist_SD_2.mp3',
      'PO_14_BD_1.mp3',
      'PO_14_Sub_2.mp3',
      'PO_14_Bass_A.mp3',
      'PO_14_TOM_2.mp3'
    ].map(filename => createAudioFile("/audio/Kits", filename))
  },
  {
    id: "gaussian-tremors",
    name: "Gaussian Tremors",
    slug: "gaussian-tremors",
    description: "Ambient and atmospheric sound demos",
    folderPath: "/audio/Gaussian_Tremors",
    productId: "sm089yf8HB22wTUdYe6buw==",
    audioFiles: [
      'Gaussian_Tremors_Demo_1.mp3',
      'Gaussian_Tremors_Demo_2.mp3',
      'Gaussian_Tremors_Demo_3.mp3',
      'Gaussian_Tremors_Demo_4.mp3',
      'Gaussian_Tremors_Demo_5.mp3',
      'Gaussian_Tremors_Demo_6.mp3',
      'Gaussian_Tremors_Demo_7.mp3',
      'Gaussian_Tremors_Demo_8.mp3'
    ].map(filename => createAudioFile("/audio/Gaussian_Tremors", filename))
  },
  {
    id: "foundsound-sound-perc",
    name: "Found Sound Percussion",
    slug: "found-sound-percussion",
    description: "Unique percussion sounds from found objects",
    folderPath: "/audio/Foundsound_Sound_Perc",
    productId: "wCpv2T2-YkEVN5S4-VKiBA==",
    audioFiles: [
      'AKt_Verb_Door_5.mp3',
      'Found_Sound_Perc_10.mp3',
      'Marímbula_6.mp3',
      'pipe_C.mp3',
      'Samarkand_Claps_2.mp3',
      'Samarkand_Whistle_3.mp3',
      'Tambor_1.mp3',
      'WM_Perc_tonal_3.mp3'
    ].map(filename => createAudioFile("/audio/Foundsound_Sound_Perc", filename))
  },
  {
    id: "genarch-cycle-demos",
    name: "Genarch Cycle Demos",
    slug: "genarch-cycle",
    description: "Generative architecture cycle demonstrations",
    folderPath: "/audio/Genarch_Cycle_Demos",
    productId: "YBZbq9G9akXVe9P9g5NLfA==",
    audioFiles: [
      ' GA_Cycle_Chord_7.mp3',
      ' GA_Cycle_MISC_32.mp3',
      ' GA_Cycle_MISC_37.mp3',
      ' GA_Cycle_MISC_4.mp3',
      ' GA_Cycle_MISC_5.mp3',
      'GA_Cycle_Kick_50.mp3',
      'GA_Cycle_SD_26.mp3',
      'GA_Cycle_SD_49.mp3'
    ].map(filename => createAudioFile("/audio/Genarch_Cycle_Demos", filename))
  },
  {
    id: "interference-pack-demos",
    name: "Interference Pack Demos",
    slug: "interference-pack",
    description: "Interference and distortion effects demonstrations",
    folderPath: "/audio/InterferencePack_Demos",
    productId: "8lD0nEOwzH9G3mP1GLODrQ==",
    audioFiles: [
      'Interference_Vol1 Bent Bass 1.mp3',
      'Interference_Vol1 Detuned Am Chord.mp3',
      'Interference_Vol1 Hybrid Snare.mp3',
      'Interference_Vol1 Hybrid Stick.mp3',
      'Interference_Vol1 MKF kick 3.mp3',
      'Interference_Vol1 MKF kick 5.mp3',
      'Interference_Vol1 MKF kick 7.mp3',
      'Interference_Vol1 RVRB Stick.mp3'
    ].map(filename => createAudioFile("/audio/InterferencePack_Demos", filename))
  },
  {
    id: "temporal-fauna-demos",
    name: "Temporal Fauna Demos",
    slug: "temporal-fauna",
    description: "Temporal and organic sound explorations",
    folderPath: "/audio/Temporal_Fauna_DEMOS",
    productId: "h3iis8gqsb5Pmj8P_vxcfw==",
    audioFiles: [
      'KD_Subs_3.mp3',
      'KD_Subs_6.mp3',
      'Lo-Perc_8.mp3',
      'Neblina_8.mp3',
      'Rbr_DistBass_1.mp3',
      'Sub_MiKro_1.mp3',
      'Symmetry_4.mp3',
      'Tempora_Fauna_Demo.mp3',
      'Tempora_Fauna_DemoV2.mp3',
      'Temporal_Fauna_Demo.mp3',
      'Temporal_Resolution_1.mp3'
    ].map(filename => createAudioFile("/audio/Temporal_Fauna_DEMOS", filename))
  },
  {
    id: "vapor-drums-green-demos",
    name: "Vapor Drums Green Demos",
    slug: "vapor-drums-green",
    description: "Vapor wave and atmospheric drum sounds - Green variant",
    folderPath: "/audio/Vapor_Drums_Green_Demos",
    productId: "AJNqZ3oMXl9G6xAkNg9wNA==",
    audioFiles: [
      'BDVIN_FM_Vapor_Drums_TEHN_V.mp3',
      'CLAPEDGE_FM_Vapor_Drums_TEHN_V.mp3',
      'CONGXY_FM_Vapor_Drums_TEHN_V.mp3',
      'HHO5_FM_Vapor_Drums_TEHN_V.mp3',
      'ISAO_FM_Vapor_Drums_TEHN_V.mp3',
      'METALVIN_FM_Vapor_Drums_TEHN_V.mp3',
      'PRCTONE2_FM_Vapor_Drums_TEHN_V.mp3',
      'TRIACON_FM_Vapor_Drums_TEHN_V.mp3'
    ].map(filename => createAudioFile("/audio/Vapor_Drums_Green_Demos", filename))
  },
  {
    id: "vapor-drums-red-demos",
    name: "Vapor Drums Red Demos",
    slug: "vapor-drums-red",
    description: "Vapor wave and atmospheric drum sounds - Red variant",
    folderPath: "/audio/Vapor_Drums_Red_Demos",
    productId: "tG6ebGD796t30HLKfa5i2Q==",
    audioFiles: [
      'BDVIN_FM_Vapor_Drums_TEHN_V.mp3',
      'CLAPEDGE_FM_Vapor_Drums_TEHN_V.mp3',
      'CONGXY_FM_Vapor_Drums_TEHN_V.mp3',
      'HHO5_FM_Vapor_Drums_TEHN_V.mp3',
      'ISAO_FM_Vapor_Drums_TEHN_V.mp3',
      'METALVIN_FM_Vapor_Drums_TEHN_V.mp3',
      'PRCTONE2_FM_Vapor_Drums_TEHN_V.mp3',
      'TRIACON_FM_Vapor_Drums_TEHN_V.mp3'
    ].map(filename => createAudioFile("/audio/Vapor_Drums_Red_Demos", filename))
  },
  {
    id: "replikas-modular-drums-and-sound-scapes",
    name: "Replikas Modular Drums and Sound Scapes",
    slug: "replikas-modular-drums-and-sound-scapes",
    description: "Modular drum samples and synthetic percussion sounds from Replikas",
    folderPath: "/audio/Replikas_Modular_Drums_Demo",
    productId: "6ohI7gZEqraWbi4kdhOeVQ==", // Real Gumroad product ID from API
    audioFiles: [
      'Replikas_Pads_and Synths.mp3',
      'Replikas_Synth_Bass.mp3',
      'Replikas_Subs.mp3',
      'Replikas_Snares.mp3',
      'Replikas_Demo_1.mp3',
      'Replikas_Misc_Percussion.mp3',
      'Replikas_MCO_Kicks.mp3',
      'Replikas_Doepfr_Kicks.mp3',
      'RPLKS_Sttgtr_CMAJ_Inv_Tehn_Vega.mp3',
      'Replikas_Inverted_1_Tehn_Vega.mp3',
      'RPLKS_Raves_Gb2_Tehn_Vega.mp3',
      'RPLKS_CLM_Down_CMaj9_Tehn_Vega.mp3',
      'RPLKS_DistL_C2_Tehn_Vega.mp3',
      'MDDEMO_3_Remastered.mp3',
      'RPLKS_BceX_Cmaj9_Tehn_Vega.mp3',
      'RPLKS_Bass_Bait_C2_Tehn_Vega.mp3'
    ].map(filename => createAudioFile("/audio/Replikas_Modular_Drums_Demo", filename))
  }
];

// Lookup functions
export function getAudioPackById(id: string): AudioPack | undefined {
  return audioPacks.find(pack => pack.id === id);
}

export function getAudioPackByName(name: string): AudioPack | undefined {
  return audioPacks.find(pack => pack.name.toLowerCase() === name.toLowerCase());
}

export function getAudioPackByProductId(productId: string): AudioPack | undefined {
  return audioPacks.find(pack => pack.productId === productId);
}

export function getAudioPackBySlug(slug: string): AudioPack | undefined {
  return audioPacks.find(pack => pack.slug === slug);
}

export function getAllAudioPacks(): AudioPack[] {
  return audioPacks;
}

// Static mapping for main products that don't have audio packs
const staticProductMapping: { [slug: string]: string } = {
  'sonic-entropy': '99xqpkLEY4yTbHgcsVjwcA==',
  'fm-percussion': 'zxUyXIn1veXajo6K81SdWA==',
  'tsk-0a0a-intro-kit': 'jYlJV3xNBShdlCPYFYh4Jg==', // Real TSK + /0A0A/ INTRO KIT product ID
};

// URL and slug functions
export function getProductIdBySlug(slug: string): string | undefined {
  // First check audio packs
  const pack = audioPacks.find(pack => pack.slug === slug);
  if (pack?.productId) {
    return pack.productId;
  }

  // Then check static mapping for main products
  return staticProductMapping[slug];
}

export function getSlugByProductId(productId: string): string | undefined {
  // First check audio packs
  const pack = audioPacks.find(pack => pack.productId === productId);
  if (pack?.slug) {
    return pack.slug;
  }

  // Then check static mapping for main products
  const slugEntry = Object.entries(staticProductMapping).find(([slug, id]) => id === productId);
  return slugEntry?.[0];
}

export function generateSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

export function getSlugFromTitle(title: string): string {
  return generateSlugFromTitle(title);
}

// URL generation function
export function getProductUrlSync(productId: string, productTitle?: string): string {
  // First try to get slug from audio packs mapping
  const pack = getAudioPackByProductId(productId);

  if (pack?.slug) {
    return `/products/${pack.slug}`;
  }

  // If no mapping exists, generate slug from product title
  if (productTitle) {
    const generatedSlug = generateSlugFromTitle(productTitle);
    return `/products/${generatedSlug}`;
  }

  // Fallback to product ID if no title available
  return `/products/${productId}`;
}

// Legacy alias
export const getProductUrl = getProductUrlSync;

// Function to add new audio packs for future use
export function addNewAudioPack(audioPack: AudioPack): void {
  // Add to the audioPacks array
  audioPacks.push(audioPack);
  console.log(`Added new audio pack: ${audioPack.name} with ${audioPack.audioFiles.length} files`);
}

// Helper function to create a new audio pack
export function createNewAudioPack(
  id: string,
  name: string,
  slug: string,
  description: string,
  folderPath: string,
  productId: string,
  audioFilenames: string[]
): AudioPack {
  return {
    id,
    name,
    slug,
    description,
    folderPath,
    productId,
    audioFiles: audioFilenames.map(filename => createAudioFile(folderPath, filename))
  };
}