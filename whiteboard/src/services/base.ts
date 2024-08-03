type RequestOpts = Omit<RequestInit, 'method' | 'body'>

export class BaseService {
    private baseUrl: string
    private authorizationHeader: string

    constructor() {
        this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ""
        this.authorizationHeader = ""
    }

    public SetAuthorizationHeader(header: string) {
        this.authorizationHeader = header
    }

    public async Get<T>(url: string, opts?: RequestOpts): Promise<T> {
        const response = await fetch(`${this.baseUrl}/${url}`, {
            ...opts,
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.authorizationHeader,
                ...opts?.headers,
            },
        })
        const data = await response.json()
        return data
    }

    public async Post<T>(url: string, body: any, opts?: RequestOpts): Promise<T> {
        const response = await fetch(`${this.baseUrl}/${url}`, {
            ...opts,
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.authorizationHeader,
                ...opts?.headers,
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
    }

    public async Put<T>(url: string, body: any, opts?: RequestOpts): Promise<T> {
        const response = await fetch(`${this.baseUrl}/${url}`, {
            ...opts,
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.authorizationHeader,
                ...opts?.headers,
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
    }

    public async Delete<T>(url: string, opts?: RequestOpts): Promise<T> {
        const response = await fetch(`${this.baseUrl}/${url}`, {
            ...opts,
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.authorizationHeader,
                ...opts?.headers,
            },
        });
        const data = await response.json();
        return data;
    }
}

export default new BaseService()