# VR-Tour

**Aplicação para passeios virtuais imersivos**

O **VR-Tour** é uma aplicação web que proporciona experiências de passeios virtuais interativos, utilizando imagens estereoscópicas para criar uma imersão realista. Construído com **React** e **Three.js**, o projeto suporta navegação intuitiva e é otimizado para visualização em navegadores modernos.

## Funcionalidades

- **Geração de Imagens**: Imagens estereoscópicas são criadas em ferramentas como **Blender** ou **Lumion** e processadas para a aplicação por meio de um script Python (`res/prepare.py`).
- **Navegação Intuitiva**: A configuração da navegação é definida em um arquivo JSON (`src/conf.json`), permitindo personalização simplificada.
- **Interface de Direção**: Setas indicativas, posicionadas ao redor do observador, orientam de forma fluida para as próximas cenas.
- **Suporte a Realidade Virtual**: Integração com bibliotecas como `@react-three/xr` para experiências em VR.

## Demonstração

Confira um exemplo funcional do projeto:
🔗 [Visualizar Demonstração](https://fefurst.github.io/vr-tour/)

## Pré-requisitos

Para executar o projeto localmente, você precisará de:

- **Node.js** (versão 16 ou superior) e **npm** instalados. [Baixe aqui](https://nodejs.org/).
- **Python** (versão 3.6 ou superior) para executar o script de preparação de imagens (`res/prepare.py`).
- Um editor de código, como **VS Code**, para ajustar configurações.

## Como Executar Localmente

Siga os passos abaixo para rodar o projeto em sua máquina:

1. **Clone o Repositório**:
    ```bash
    git clone https://github.com/fefurst/vr-tour.git
    cd vr-tour
    ```

2. **Instale as Dependências**:
    ```bash
    npm install
    ```

3. **Prepare as Imagens** (opcional):
    - Gere imagens estereoscópicas usando ferramentas como Blender ou Lumion.
    - Execute o script de preparação:
        ```bash
        python res/prepare.py
        ```

4. **Configure a Navegação**:
    - Edite o arquivo `src/conf.json` para personalizar as rotas e cenas do passeio virtual.

5. **Inicie o Servidor de Desenvolvimento**:
    ```bash
    npm start
    ```
    - A aplicação será aberta automaticamente em `http://localhost:3000`.

6. **Build para Produção** (opcional):
    ```bash
    npm run build
    ```
    - Os arquivos otimizados serão gerados na pasta `build/`.

7. **Deploy para GitHub Pages** (opcional):
    ```bash
    npm run deploy
    ```
    - Isso publicará a aplicação no GitHub Pages, conforme configurado no `homepage` do `package.json`.

## Tecnologias Utilizadas

- **React** (`react`, `react-dom`): Interface de usuário reativa.
- **Three.js** (`three`, `@react-three/fiber`, `@react-three/drei`): Renderização 3D.
- **Realidade Virtual** (`@react-three/xr`): Suporte a experiências VR.
- **GitHub Pages** (`gh-pages`): Hospedagem da demonstração.
- **Python**: Script para processamento de imagens (`res/prepare.py`).

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou reportar problemas! Para contribuir:
1. Fork o repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`).
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin feature/nova-funcionalidade`).
5. Abra um **Pull Request**.

## Licença

Este projeto é licenciado sob a licença **ISC**. Veja o arquivo `LICENSE` para mais detalhes.

## Autor

Desenvolvido por **Felipe Furst**.
