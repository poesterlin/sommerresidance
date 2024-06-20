import { writable } from "svelte/store";


interface Toast {
    id: number;
    message: string;
    type: 'error' | 'success' | 'info';
    timeout: number;
}

export const toasts = writable<Toast[]>([]);

export function addToast(type: Toast['type'], message: Toast['message'], timeout = 5000) {
    const id = Math.floor(Math.random() * 100000);
    const toast: Toast = { id, type, message, timeout };
    toasts.update(t => [...t, toast]);

    setTimeout(() => {
        toasts.update(t => t.filter(t => t.id !== id));
    }, toast.timeout);
}

