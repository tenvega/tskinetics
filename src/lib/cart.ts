/**
 * Shopping Cart Management
 * Session-based storage (clears when browser closes)
 * Analytics-ready with tracking hooks
 */

export interface CartItem {
    shortCode: string;      // Gumroad product short code (e.g., "hvhjo")
    productId: string;      // Full product ID
    title: string;
    price: number;          // Price in cents
    formattedPrice: string;
    thumbnailUrl?: string;
    quantity: number;
    addedAt: string;        // ISO timestamp for analytics
}

export interface Cart {
    items: CartItem[];
    totalItems: number;
    totalPrice: number;     // Total in cents
    formattedTotal: string;
    lastUpdated: string;
}

const CART_KEY = 'tsk_cart';

/**
 * Initialize cart from session storage
 */
function getStoredCart(): Cart {
    if (typeof window === 'undefined') {
        return createEmptyCart();
    }

    try {
        const stored = sessionStorage.getItem(CART_KEY);
        if (!stored) {
            return createEmptyCart();
        }

        const cart: Cart = JSON.parse(stored);
        return cart;
    } catch (error) {
        console.error('Error loading cart:', error);
        return createEmptyCart();
    }
}

/**
 * Save cart to session storage
 */
function saveCart(cart: Cart): void {
    if (typeof window === 'undefined') return;

    try {
        sessionStorage.setItem(CART_KEY, JSON.stringify(cart));

        // Dispatch custom event for UI updates
        window.dispatchEvent(new CustomEvent('cart-updated', {
            detail: cart
        }));

        // Analytics hook - ready for future implementation
        window.dispatchEvent(new CustomEvent('analytics-cart-update', {
            detail: {
                action: 'cart_modified',
                itemCount: cart.totalItems,
                totalValue: cart.totalPrice / 100,
                timestamp: new Date().toISOString()
            }
        }));
    } catch (error) {
        console.error('Error saving cart:', error);
    }
}

/**
 * Create an empty cart
 */
function createEmptyCart(): Cart {
    return {
        items: [],
        totalItems: 0,
        totalPrice: 0,
        formattedTotal: '$0.00',
        lastUpdated: new Date().toISOString()
    };
}

/**
 * Calculate cart totals
 */
function calculateTotals(items: CartItem[]): { totalItems: number; totalPrice: number; formattedTotal: string } {
    console.log('💰 Calculating totals for items:', items);
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => {
        console.log(`💰 Item: ${item.title}, Price: ${item.price}, Quantity: ${item.quantity}, Subtotal: ${item.price * item.quantity}`);
        return sum + (item.price * item.quantity);
    }, 0);
    const formattedTotal = `$${(totalPrice / 100).toFixed(2)}`;

    console.log('💰 Final totals:', { totalItems, totalPrice, formattedTotal });
    return { totalItems, totalPrice, formattedTotal };
}

/**
 * Add item to cart
 */
export function addToCart(item: Omit<CartItem, 'quantity' | 'addedAt'>): Cart {
    console.log('🛒 addToCart called with:', item);
    const cart = getStoredCart();
    console.log('🛒 Current cart before adding:', cart);

    // Check if item already exists in cart
    const existingItemIndex = cart.items.findIndex(
        cartItem => cartItem.shortCode === item.shortCode
    );

    if (existingItemIndex > -1) {
        // Increment quantity if item already exists
        cart.items[existingItemIndex].quantity += 1;
    } else {
        // Add new item
        cart.items.push({
            ...item,
            quantity: 1,
            addedAt: new Date().toISOString()
        });
    }

    // Recalculate totals
    const totals = calculateTotals(cart.items);
    cart.totalItems = totals.totalItems;
    cart.totalPrice = totals.totalPrice;
    cart.formattedTotal = totals.formattedTotal;
    cart.lastUpdated = new Date().toISOString();

    saveCart(cart);

    // Analytics hook - item added
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('analytics-add-to-cart', {
            detail: {
                productId: item.productId,
                productName: item.title,
                price: item.price / 100,
                quantity: 1,
                timestamp: new Date().toISOString()
            }
        }));
    }

    return cart;
}

/**
 * Remove item from cart
 */
export function removeFromCart(shortCode: string): Cart {
    const cart = getStoredCart();

    // Find the item being removed for analytics
    const removedItem = cart.items.find(item => item.shortCode === shortCode);

    // Remove item
    cart.items = cart.items.filter(item => item.shortCode !== shortCode);

    // Recalculate totals
    const totals = calculateTotals(cart.items);
    cart.totalItems = totals.totalItems;
    cart.totalPrice = totals.totalPrice;
    cart.formattedTotal = totals.formattedTotal;
    cart.lastUpdated = new Date().toISOString();

    saveCart(cart);

    // Analytics hook - item removed
    if (typeof window !== 'undefined' && removedItem) {
        window.dispatchEvent(new CustomEvent('analytics-remove-from-cart', {
            detail: {
                productId: removedItem.productId,
                productName: removedItem.title,
                price: removedItem.price / 100,
                quantity: removedItem.quantity,
                timestamp: new Date().toISOString()
            }
        }));
    }

    return cart;
}

/**
 * Update item quantity
 */
export function updateQuantity(shortCode: string, quantity: number): Cart {
    const cart = getStoredCart();

    if (quantity <= 0) {
        return removeFromCart(shortCode);
    }

    const itemIndex = cart.items.findIndex(item => item.shortCode === shortCode);

    if (itemIndex > -1) {
        const oldQuantity = cart.items[itemIndex].quantity;
        cart.items[itemIndex].quantity = quantity;

        // Recalculate totals
        const totals = calculateTotals(cart.items);
        cart.totalItems = totals.totalItems;
        cart.totalPrice = totals.totalPrice;
        cart.formattedTotal = totals.formattedTotal;
        cart.lastUpdated = new Date().toISOString();

        saveCart(cart);

        // Analytics hook - quantity changed
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('analytics-update-cart-quantity', {
                detail: {
                    productId: cart.items[itemIndex].productId,
                    productName: cart.items[itemIndex].title,
                    oldQuantity,
                    newQuantity: quantity,
                    timestamp: new Date().toISOString()
                }
            }));
        }
    }

    return cart;
}

/**
 * Get current cart
 */
export function getCart(): Cart {
    return getStoredCart();
}

/**
 * Get cart item count
 */
export function getCartCount(): number {
    const cart = getStoredCart();
    return cart.totalItems;
}

/**
 * Get cart total price
 */
export function getCartTotal(): { price: number; formatted: string } {
    const cart = getStoredCart();
    return {
        price: cart.totalPrice,
        formatted: cart.formattedTotal
    };
}

/**
 * Clear entire cart
 */
export function clearCart(): void {
    if (typeof window === 'undefined') return;

    const cart = getStoredCart();
    const itemCount = cart.totalItems;

    sessionStorage.removeItem(CART_KEY);

    // Dispatch event for UI updates
    window.dispatchEvent(new CustomEvent('cart-updated', {
        detail: createEmptyCart()
    }));

    // Analytics hook - cart cleared
    window.dispatchEvent(new CustomEvent('analytics-cart-cleared', {
        detail: {
            itemCount,
            timestamp: new Date().toISOString()
        }
    }));
}

/**
 * Build Gumroad checkout URL with all cart items
 * NOTE: Gumroad's API doesn't support multiple different products in one checkout
 * We'll open separate tabs for each product
 */
export function buildCheckoutUrl(): string {
    const cart = getStoredCart();

    if (cart.items.length === 0) {
        return '';
    }

    // For a single item, return direct checkout URL
    if (cart.items.length === 1) {
        const item = cart.items[0];
        return `https://gumroad.com/checkout?product=${encodeURIComponent(item.shortCode)}&quantity=${item.quantity}`;
    }

    // For multiple items, return marker for special handling
    return 'MULTIPLE_ITEMS';
}

/**
 * Check if item is in cart
 */
export function isInCart(shortCode: string): boolean {
    const cart = getStoredCart();
    return cart.items.some(item => item.shortCode === shortCode);
}

/**
 * Get item from cart by short code
 */
export function getCartItem(shortCode: string): CartItem | undefined {
    const cart = getStoredCart();
    return cart.items.find(item => item.shortCode === shortCode);
}

/**
 * Get all checkout URLs for cart items (for multiple product checkout)
 */
export function getAllCheckoutUrls(): string[] {
    const cart = getStoredCart();
    return cart.items.map(item =>
        `https://gumroad.com/checkout?product=${encodeURIComponent(item.shortCode)}&quantity=${item.quantity}`
    );
}

/**
 * Handle multi-product checkout with better UX
 * Opens tabs sequentially with user confirmation
 */
export function handleMultiProductCheckout(): void {
    const cart = getStoredCart();

    if (cart.items.length === 0) {
        return;
    }

    // Single item - direct checkout in new tab
    if (cart.items.length === 1) {
        const url = buildCheckoutUrl();
        window.open(url, '_blank');
        
        // Analytics hook
        dispatchCheckoutAnalytics('single_item');
        return;
    }

    // Multiple items - show user-friendly message
    const itemList = cart.items.map((item, i) => `${i + 1}. ${item.title}`).join('\n');
    const message = 
        `Your cart contains ${cart.items.length} items:\n\n${itemList}\n\n` +
        `Due to Gumroad's checkout system, each item will open in a separate tab.\n\n` +
        `TIP: After checkout, you can close all tabs except the last one.\n\n` +
        `Click OK to proceed to checkout.`;

    if (confirm(message)) {
        const checkoutUrls = getAllCheckoutUrls();
        
        // Open tabs with a staggered delay to avoid popup blockers
        checkoutUrls.forEach((url, index) => {
            setTimeout(() => {
                window.open(url, '_blank');
            }, index * 500); // 500ms between each tab
        });

        // Analytics hook
        dispatchCheckoutAnalytics('multi_item');
    }
}

/**
 * Dispatch checkout analytics event
 */
function dispatchCheckoutAnalytics(method: string): void {
    if (typeof window === 'undefined') return;

    const cart = getStoredCart();
    window.dispatchEvent(new CustomEvent('analytics-begin-checkout', {
        detail: {
            itemCount: cart.totalItems,
            totalValue: cart.totalPrice / 100,
            products: cart.items.map(item => ({
                id: item.productId,
                name: item.title,
                price: item.price / 100,
                quantity: item.quantity
            })),
            timestamp: new Date().toISOString(),
            method
        }
    }));
}

