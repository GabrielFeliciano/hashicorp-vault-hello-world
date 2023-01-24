import { Injectable, OnModuleInit } from '@nestjs/common';
import * as vault from 'node-vault';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

export enum Env {
  MESSAGE = 'MESSAGE',
}

@Injectable()
export class EnvService implements OnModuleInit {
  addr = process.env.ADDRESS;
  username = process.env.VAULT_USERNAME;
  password = process.env.VAULT_PASSWORD;

  client: vault.client;
  token: string;
  secrets: Record<string, string>;

  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async onModuleInit() {
    await this.login();
    await this.fetchSecrets();
  }

  async login() {
    interface BodyGet {
      auth: {
        client_token: string;
      };
    }

    const result = this.httpService.post<BodyGet>(
      `${this.addr}/v1/auth/userpass/login/${this.username}`,
      { password: this.password },
      {
        headers: { 'X-Vault-Namespace': 'admin' },
        validateStatus: () => true,
      },
    );
    const response = await firstValueFrom(result);

    this.token = response.data?.auth?.client_token ?? '';
  }

  async fetchSecrets() {
    interface BodyGet {
      data: {
        data: Record<string, string>;
      };
    }

    const result = this.httpService.get<BodyGet>(
      `${this.addr}/v1/secret/data/sample-secret`,
      {
        headers: { 'X-Vault-Token': this.token, 'X-Vault-Namespace': 'admin' },
        validateStatus: () => true,
      },
    );
    const response = await firstValueFrom(result);

    this.secrets = response.data?.data?.data ?? {};
  }

  async get(key: Env): Promise<string> {
    return this.secrets[key] ?? this.configService.get(key);
  }
}
