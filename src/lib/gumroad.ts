/// <reference types="astro/client" />

import type {
    GumroadProduct,
    GumroadUser,
    GumroadSale,
    Money
} from './types';

// Gumroad API Configuration
const gumroadConfig = {
    apiUrl: 'https://api.gumroad.com/v2',
    accessToken: import.meta.env.GUMROAD_ACCESS_TOKEN || 'LzlFKFPQwAPss3llZD0PbQX4FHJWmcTbQPWLT6V6rv0',
};

// Generic API request helper
async function gumroadFetch(endpoint: string, options: RequestInit = {}) {
    const url = `${gumroadConfig.apiUrl}${endpoint}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${gumroadConfig.accessToken}`,
            'Content-Type': 'application/json',
            ...options.headers,
        },
        ...options,
    });

    if (!response.ok) {
        throw new Error(`Gumroad API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();

    if (result.success === false) {
        console.error('Gumroad API error:', result.message);
        throw new Error(`Gumroad API error: ${result.message}`);
    }

    return result;
}

// Helper to generate slug from product name
function generateSlug(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
        .replace(/^-+|-+$/g, '')     // Trim leading/trailing hyphens
        .replace(/-{2,}/g, '-')      // Replace multiple hyphens with one
        .trim();
}

// Fetch products from Gumroad
export async function fetchProducts(limit = 10): Promise<GumroadProduct[]> {
    try {
        const data = await gumroadFetch('/products');

        // Transform the data to match our interface
        const products = (data.products || [])
            .filter((product: any) => product.published === true) // Only include published products
            .slice(0, limit)
            .map((product: any): GumroadProduct => {
                const bestPrice = getBestPrice(product);
                const slug = generateSlug(product.name || product.title);
                return {
                    id: product.id,
                    title: product.name || product.title,
                    name: product.name,
                    slug,
                    description: product.description || "",
                    price: bestPrice.price,
                    formatted_price: bestPrice.formatted_price,
                    currency: product.currency || "USD",
                    url: product.short_url || product.url || `https://gumroad.com/p/${product.id}`,
                    preview_url: product.preview_url,
                    thumbnail_url: product.thumbnail_url || product.cover_url,
                    cover_url: product.cover_url,
                    tags: product.tags,
                    created_at: product.created_at,
                    updated_at: product.updated_at,
                    published: product.published === true,
                    sales_count: product.sales_count || 0,
                    is_published: product.published === true,
                    short_url: product.short_url,
                    preview: product.preview,
                    file_info: product.file_info,
                    content_rating: product.content_rating,
                    require_shipping: product.require_shipping || false,
                    customizable_price: product.customizable_price || false,
                    suggested_price: product.suggested_price,
                    minimum_price: product.minimum_price,
                    purchase_email: product.purchase_email,
                    variants: product.variants || []
                };
            });
        return products;
    } catch (error) {
        console.error('Error fetching products from Gumroad:', error);
        // Return empty array on error to prevent breaking the UI
        return [];
    }
}

// Fetch single product by ID
export async function fetchProductById(productId: string): Promise<GumroadProduct | null> {
    try {
        const data = await gumroadFetch(`/products/${productId}`);

        if (!data.product) {
            return null;
        }

        const product = data.product;
        const bestPrice = getBestPrice(product);
        const slug = generateSlug(product.name || product.title);
        return {
            id: product.id,
            title: product.name || product.title,
            name: product.name,
            slug,
            description: product.description || "",
            price: bestPrice.price,
            formatted_price: bestPrice.formatted_price,
            currency: product.currency || "USD",
            url: product.short_url || product.url || `https://gumroad.com/p/${product.id}`,
            preview_url: product.preview_url,
            thumbnail_url: product.thumbnail_url || product.cover_url,
            cover_url: product.cover_url,
            tags: product.tags,
            created_at: product.created_at,
            updated_at: product.updated_at,
            published: product.published === true,
            sales_count: product.sales_count || 0,
            is_published: product.published === true,
            short_url: product.short_url,
            preview: product.preview,
            file_info: product.file_info,
            content_rating: product.content_rating,
            require_shipping: product.require_shipping || false,
            customizable_price: product.customizable_price || false,
            suggested_price: product.suggested_price,
            minimum_price: product.minimum_price,
            purchase_email: product.purchase_email,
            variants: product.variants || []
        };
    } catch (error) {
        console.error(`Error fetching product ${productId} from Gumroad:`, error);
        return null;
    }
}

// Fetch user/seller information
export async function fetchUser(): Promise<GumroadUser | null> {
    try {
        const data = await gumroadFetch('/user');

        if (!data.user) {
            return null;
        }

        const user = data.user;
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            url: user.url,
            twitter_handle: user.twitter_handle,
            bio: user.bio,
            profile_image_url: user.profile_image_url,
            display_name: user.display_name
        };
    } catch (error) {
        console.error('Error fetching user from Gumroad:', error);
        return null;
    }
}

// Fetch sales data
export async function fetchSales(after?: string, before?: string): Promise<GumroadSale[]> {
    try {
        let endpoint = '/sales';
        const params = new URLSearchParams();

        if (after) params.append('after', after);
        if (before) params.append('before', before);

        if (params.toString()) {
            endpoint += `?${params.toString()}`;
        }

        const data = await gumroadFetch(endpoint);

        return (data.sales || []).map((sale: any): GumroadSale => ({
            id: sale.id,
            seller_id: sale.seller_id,
            product_id: sale.product_id,
            product_name: sale.product_name,
            permalink: sale.permalink,
            price: sale.price,
            currency: sale.currency,
            quantity: sale.quantity,
            discover_fee_charged: sale.discover_fee_charged,
            can_contact: sale.can_contact,
            referrer: sale.referrer,
            order_id: sale.order_id,
            sale_id: sale.sale_id,
            sale_timestamp: sale.sale_timestamp,
            purchaser_id: sale.purchaser_id,
            email: sale.email,
            full_name: sale.full_name,
            zip_code: sale.zip_code,
            country: sale.country,
            state: sale.state,
            city: sale.city,
            subscription_id: sale.subscription_id,
            variants: sale.variants,
            license_key: sale.license_key,
            ip_country: sale.ip_country,
            refunded: sale.refunded || false,
            dispute_won: sale.dispute_won || false,
            chargebacked: sale.chargebacked || false,
            affiliate: sale.affiliate,
            affiliate_credit_amount_cents: sale.affiliate_credit_amount_cents
        }));
    } catch (error) {
        console.error('Error fetching sales from Gumroad:', error);
        return [];
    }
}

// Get product URL
export function getProductUrl(productId: string): string {
    return `https://gumroad.com/p/${productId}`;
}

// Get checkout URL for a product
export function getCheckoutUrl(productId: string): string {
    return `https://gumroad.com/l/${productId}`;
}
export function getBestPrice(product: any): { price: number; formatted_price: string } {
    // Check if product has variants with options that have price_difference > 0
    if (product.variants && Array.isArray(product.variants)) {
        for (const variant of product.variants) {
            if (variant.options && Array.isArray(variant.options)) {
                const optionWithPriceDiff = variant.options.find((option: any) =>
                    option.price_difference && option.price_difference > 0
                );

                if (optionWithPriceDiff) {
                    // Use the base price + price_difference (both should be in cents)
                    const totalPrice = (product.price || 0) + optionWithPriceDiff.price_difference;
                    return {
                        price: totalPrice,
                        formatted_price: formatPrice(totalPrice / 100) // Convert cents to dollars
                    };
                }
            }
        }
    }

    // Fallback to base product price
    return {
        price: product.price || 0,
        formatted_price: formatPrice((product.price || 0) / 100)
    };
}

// Format price with currency
export function formatPrice(amount: number, currencyCode: string = 'USD'): string {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
    });

    return formatter.format(amount);
}

// Convert price from cents to dollars
export function centsToDollars(cents: number): number {
    return cents / 100;
}

// Convert price from dollars to cents
export function dollarsToCents(dollars: number): number {
    return Math.round(dollars * 100);
}


// Mock collections/categories (Gumroad doesn't have built-in collections)
export async function fetchCollections(): Promise<any[]> {
    // Since Gumroad doesn't have collections, we can group by tags or return empty
    try {
        const products = await fetchProducts(50); // Get more products to analyze tags
        const tags = new Set<string>();

        products.forEach(product => {
            if (product.tags) {
                String(product.tags).split(',').forEach(tag => tags.add(tag.trim()));
            }
        });

        return Array.from(tags).map(tag => ({
            id: tag.toLowerCase().replace(/\s+/g, '-'),
            title: tag,
            handle: tag.toLowerCase().replace(/\s+/g, '-'),
            description: `Products tagged with ${tag}`
        }));
    } catch (error) {
        console.error('Error fetching collections:', error);
        return [];
    }
}

// Mock collection by handle (filter products by tag)
export async function fetchCollectionByHandle(handle: string): Promise<any | null> {
    try {
        const products = await fetchProducts(50);
        const tagName = handle.replace(/-/g, ' ');

        const filteredProducts = products.filter(product => {
            if (!product.tags) return false;
            const tags = typeof product.tags === 'string' ? product.tags : String(product.tags);
            return tags.toLowerCase().includes(tagName.toLowerCase());
        });

        return {
            id: handle,
            title: tagName.charAt(0).toUpperCase() + tagName.slice(1),
            handle: handle,
            description: `Products tagged with ${tagName}`,
            products: filteredProducts
        };
    } catch (error) {
        console.error(`Error fetching collection ${handle}:`, error);
        return null;
    }
}

// Site assets for backward compatibility
export const siteAssets = {
    logos: {
        tskMain: '/images/tenvga_isometric_logo_2.png'
    },
    background: '/images/bg.png',
    artists: {
        tehnVega: '/images/tehn_vega.jpg'
    },
    products: {
        sonicEntropy: '/images/entropy.jpg',
        bundles: '/images/bundles_curated.jpg',
        drumKits: '/images/drum_kits_curated.jpg',
        oneShots: '/images/one_shots.jpg',
        presets: '/images/presets_curated.jpg',
        fmPercussion: '/images/fm_Percussion_Bundle.jpg',
        threehundredFree: '/images/threehundred_free.jpg'
    },
    bundles: {
        sonicEntropy: '/images/entropy.jpg',
        fmPercussion: '/images/fm_Percussion_Bundle.jpg'
    },
    freeKits: {
        threehundredFree: '/images/threehundred_free.jpg'
    },
    curatedSelections: {
        drumKits: '/images/drum_kits_curated.jpg',
        oneShots: '/images/one_shots.jpg',
        presets: '/images/presets_curated.jpg',
        bundles: '/images/bundles_curated.jpg'
    }
};

// For backward compatibility with existing components  
export { fetchProductById as fetchProductByHandle };

// Legacy aliases for easier migration
// All assets are now consolidated under siteAssets 