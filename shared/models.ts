// TypeScript types for shared models

type User = {
    id: string;
    name: string;
    email: string;
};


type Content = {
    id: string;
    title: string;
    description: string;
};


type ContentAccess = {
    userId: string;
    contentId: string;
    accessGrantedAt: Date;
};


type Payment = {
    id: string;
    userId: string;
    amount: number;
    currency: string;
    paymentDate: Date;
};


type Subscription = {
    id: string;
    userId: string;
    startDate: Date;
    endDate: Date;
    status: "active" | "inactive";
};


type PlaybackEvent = {
    userId: string;
    contentId: string;
    playbackStartedAt: Date;
    playbackEndedAt: Date;
};


type AuditLog = {
    id: string;
    action: string;
    timestamp: Date;
    userId: string;
};


type ApiResponse<T> = {
    data: T;
    error?: string;
};


type ApiRequest<T> = {
    method: "GET" | "POST" | "PUT" | "DELETE";
    body?: T;
};