export interface Product {
    id: string;
    title: string;
    price: number;
    image: string;
    audioPreview?: string;
    tags: string[];
    artist?: string;
    description?: string;
}

export interface AudioPlayerProps {
    src: string;
    title: string;
    waveformData?: number[];
    autoplay?: boolean;
}

// Gumroad Product interface based on common API patterns
export interface GumroadProduct {
    id: string;
    title: string;
    name?: string; // Some APIs use 'name' instead of 'title'
    slug?: string; // SEO-friendly slug for URLs and audio folder mapping
    description: string;
    price: number; // Price in cents from Gumroad API
    formatted_price: string;
    currency: string;
    url: string; // Product page URL
    preview_url?: string;
    thumbnail_url?: string;
    cover_url?: string;
    tags?: string;
    created_at: string;
    updated_at: string;
    published: boolean;
    sales_count?: number;
    is_published?: boolean;
    short_url?: string;
    preview?: string;
    file_info?: {
        size_bytes?: number;
        file_type?: string;
    };
    content_rating?: string;
    require_shipping?: boolean;
    customizable_price?: boolean;
    suggested_price?: number;
    minimum_price?: number;
    purchase_email?: string;
    variants?: GumroadVariant[];
}

export interface GumroadVariant {
    title: string;
    options: GumroadVariantOption[];
}

export interface GumroadVariantOption {
    name: string;
    price_difference: number;
    is_pay_what_you_want: boolean;
    recurrence_prices?: any;
    url?: string;
}
export interface GumroadUser {
    id: string;
    name: string;
    email: string;
    url: string;
    twitter_handle?: string;
    bio?: string;
    profile_image_url?: string;
    display_name?: string;
}

export interface GumroadSale {
    id: string;
    seller_id: string;
    product_id: string;
    product_name: string;
    permalink: string;
    price: number;
    currency: string;
    quantity: number;
    discover_fee_charged: boolean;
    can_contact: boolean;
    referrer: string;
    order_id: string;
    sale_id: string;
    sale_timestamp: string;
    purchaser_id: string;
    email: string;
    full_name: string;
    zip_code?: string;
    country?: string;
    state?: string;
    city?: string;
    subscription_id?: string;
    variants?: string;
    license_key?: string;
    ip_country?: string;
    refunded: boolean;
    dispute_won: boolean;
    chargebacked: boolean;
    affiliate?: string;
    affiliate_credit_amount_cents?: number;
}

// Money/Price formatting interface
export interface Money {
    amount: string;
    currency_code: string;
}

