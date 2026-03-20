const API_ENDPOINTS = {
    auth: {
        login: '/api/auth/login',
        logout: '/api/auth/logout',
        register: '/api/auth/register',
    },
    content: {
        getPosts: '/api/content/posts',
        getPost: (id) => `/api/content/posts/${id}`,
    },
    stream: {
        getStreams: '/api/stream',
        getStream: (id) => `/api/stream/${id}`,
    },
    payments: {
        createPayment: '/api/payments/create',
        getPayment: (id) => `/api/payments/${id}`,
    },
    user: {
        getUserProfile: '/api/user/profile',
        updateUserProfile: '/api/user/profile/update',
    },
    admin: {
        getUsers: '/api/admin/users',
        getUserDetails: (id) => `/api/admin/users/${id}`,
    }
};

export default API_ENDPOINTS;