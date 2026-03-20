// Shared constants for the application

export const APP_NAME = 'YourAppName';

export const LANGUAGES = ['ar', 'en'];

export const JWT_CONFIG = {
    secret: 'your_jwt_secret',
    expiration: '1h', // or your preferred expiration time
};

export const PAGINATION = {
    ITEMS_PER_PAGE: 10,
};

export const STREAMING = {
    BUFFER_SIZE: 1024,
};

export const NETWORK_QUALITY = {
    POOR: 'poor',
    AVERAGE: 'average',
    GOOD: 'good',
};

export const PAYMENT_PLANS = {
    FREE: 'free',
    BASIC: 'basic',
    PREMIUM: 'premium',
};

export const RATE_LIMITS = {
    MAX_REQUESTS_PER_MINUTE: 60,
};

export const ERROR_CODES = {
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    SERVER_ERROR: 500,
};
