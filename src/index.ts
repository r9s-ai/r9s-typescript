export interface R9sClientOptions {
  apiKey?: string;
  baseUrl?: string;
}

export class R9sClient {
  readonly apiKey?: string;
  readonly baseUrl?: string;

  constructor(options: R9sClientOptions = {}) {
    this.apiKey = options.apiKey;
    this.baseUrl = options.baseUrl;
  }
}

