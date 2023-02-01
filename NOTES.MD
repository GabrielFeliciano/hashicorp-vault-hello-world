# Caracteristicas importantes

- Possivel separar envs por aplicações e ambiente (prod, dev)
- Fácil de usar em equipe
- Versionamento
- Integrações (AWS, CICD, etc..)
- Segurança
- Preço

# Managers encontrados

## 1. Dotnet vault

### Caracteristicas

- Preço: 4 dolares por mês por pessoa
  Para 10 pessoas: $40 (240, se R$1 = $6)

- Fácil de usar, interface é 'copia' do github

- Possui versionamento

- Possui programa CLI (npx dotenv-vault)

### Integração

- Possui addons para Vercel, Github, AWS Secrets e AWS Param Store (https://www.dotenv.org/docs/addons/aws-parameter-store)

### Configuração

1. Cria conta
2. Cria um projeto e add as secrets
3. Agora, é o possivel fazer integrações com outros serviços
4. Também é possivel baixar a ferramenta CLI que baixar as secrets como arquivos env (npx dotenv-vault pull)

---

## 2. Doppler

### Caracteristicas

- Preço: Grátis para 5 pessoas, 7 dolares por mês para cada pessoa adicional
  Para 10 pessoas: $35 (210, se R$1 = $6)

- Fácil de usar

- Possui versionamento, e além de poder criar ambientes como prod ou dev, é possivel criar branches a partir desses ambientes como lisa-dev ou pedro-dev.

- Possui programa CLI (doppler)

### Integração

- Integração com AWS Secrets, AWS Param Store, AWS Lambda, Github secrets, Vercel (https://www.doppler.com/integrations)

### Configuração

1. Cria conta
2. Cria um projeto e add as secrets
3. Agora, é o possivel fazer integrações com outros serviços
4. Também é possivel baixar a ferramenta CLI que rodar qualquer comando com as secrets como variaveis de ambiente através de uma injeção (doppler run -- npm run start:dev). Também dá para baixar os arquivos .env (doppler secrets download --no-file --format env > .env), não recomendado

###

---

## 3. Hashicorp

### Caracteristicas

- Self host, ou cloud

- Preço: 4 centavos de dolar por hora ($0.04/hr, ou $25.92/mouth) para um cluster extra-small com tier Development na AWS (2 vCPU, 1 GiB RAM)

  Ou, ($0.59/hr, ou $421.20/mouth) por cluster extra-small com tier Starter

- Possui versionamento para engine key-value v2

- Possui programa CLI (vault)

- Poderoso, permite coisas como gerar secrets dinamicamente, mas é complexo o uso

- Por poder ser self hosted e open-source, é considerado uma opção bem segura diferente das duas de cima que é necessário confiar em um organização externa.

### Configuração

1. Cria conta no site
2. Cria um vault cluster
3. Cria um método de autenticação, e para os usuários poderem ler e editar as chaves, é necessário criar uma policy
4. Agora para usar essas secrets, é necessário autenticar e puxar as secrets através da API, através de requisições http. Também é possivel usar o Vault Agent, um daemon que faz autenticação e puxa secrets.

# Menções

## Envault (github OSS Project)

- Projeto open-source, só self-host
