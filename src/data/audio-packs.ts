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

import fs from 'fs';
import path from 'path';

// Helper to get all audio files in a folder
function getAudioFilesFromFolder(folderPath: string): AudioFile[] {
  const relFolder = folderPath.replace(/^\//, '');
  const absFolder = path.join(process.cwd(), 'public', relFolder);
  if (!fs.existsSync(absFolder)) return [];
  return fs.readdirSync(absFolder)
    .filter(f => f.match(/\.(mp3|wav|flac|aiff|m4a)$/i))
    .map(filename => createAudioFile(folderPath, filename));
}

// Helper to generate slug from folder name or product title
export function generateSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Main function to attach audio files to products by slug
export function attachAudioFilesToProducts(products: any[]): any[] {
  const audioDir = path.join(process.cwd(), 'public', 'audio');
  let audioFolders: string[] = [];
  if (fs.existsSync(audioDir)) {
    audioFolders = fs.readdirSync(audioDir).filter(folder => {
      const abs = path.join(audioDir, folder);
      return fs.statSync(abs).isDirectory();
    });
  }

  return products.map(product => {
    const slug = product.slug || generateSlugFromTitle(product.name || product.title || '');
    const folderMatch = audioFolders.find(folder => folder === slug);
    if (folderMatch) {
      const folderPath = `/audio/${folderMatch}`;
      product.audioFiles = getAudioFilesFromFolder(folderPath);
    } else {
      product.audioFiles = [];
    }
    return product;
  });
}

// Helper to prettify folder name
function prettifyFolderName(folder: string): string {
  return folder
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim();
}

// URL and slug functions
export function getProductIdBySlug(slug: string): string | undefined {
  // First check audio packs
  // const pack = audioPacks.find(pack => pack.slug === slug); // This line is removed
  // if (pack?.productId) { // This line is removed
  //   return pack.productId; // This line is removed
  // } // This line is removed

  // Then check static mapping for main products
  // return staticProductMapping[slug]; // This line is removed
  return undefined; // Placeholder as audioPacks is removed
}

export function getSlugByProductId(productId: string): string | undefined {
  // First check audio packs
  // const pack = audioPacks.find(pack => pack.productId === productId); // This line is removed
  // if (pack?.slug) { // This line is removed
  //   return pack.slug; // This line is removed
  // } // This line is removed

  // Then check static mapping for main products
  // const slugEntry = Object.entries(staticProductMapping).find(([slug, id]) => id === productId); // This line is removed
  // return slugEntry?.[0]; // This line is removed
  return undefined; // Placeholder as audioPacks is removed
}

export function getSlugFromTitle(title: string): string {
  return generateSlugFromTitle(title);
}

// URL generation function
export function getProductUrlSync(productId: string, productTitle?: string): string {
  // First try to get slug from audio packs mapping
  // const pack = getAudioPackByProductId(productId); // This line is removed

  // if (pack?.slug) { // This line is removed
  //   return `/products/${pack.slug}`; // This line is removed
  // } // This line is removed

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
  // audioPacks.push(audioPack); // This line is removed
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