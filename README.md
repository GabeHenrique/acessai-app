# Acessai App

Um aplicativo nativo criado com Capacitor que funciona como uma "casca" para o site [Acessai](https://acessai.vercel.app/).

## Características

- **Webview nativa**: Carrega o site https://acessai.vercel.app/ em uma webview
- **Permissões de localização**: Solicita permissão de acesso à localização no primeiro uso
- **Comportamento do botão voltar**: O botão/gesto voltar não fecha o aplicativo
- **Suporte à navegação por gestos**: Possui padding adequado para a barra de navegação por gestos do Android

## Tecnologias

- [Capacitor](https://capacitorjs.com/) - Framework híbrido
- Android Platform
- HTML5 + CSS3 + JavaScript

## Comandos

```bash
# Instalar dependências
npm install

# Sincronizar arquivos com a plataforma nativa
npm run sync

# Abrir projeto no Android Studio
npm run open:android

# Executar no dispositivo Android
npm run run:android
```

## Estrutura do Projeto

- `www/` - Arquivos web (HTML, CSS, JS)
- `android/` - Projeto Android nativo
- `capacitor.config.json` - Configuração do Capacitor

## Funcionalidades Implementadas

1. ✅ Interface webview apontando para https://acessai.vercel.app/
2. ✅ Solicitação de permissões de localização no primeiro acesso
3. ✅ Prevenção do fechamento do app com botão/gesto voltar
4. ✅ Padding adequado para barra de navegação por gestos do Android

## Desenvolvimento

Para desenvolver este aplicativo:

1. Clone o repositório
2. Execute `npm install`
3. Execute `npm run sync`
4. Abra no Android Studio com `npm run open:android`
5. Execute no dispositivo ou emulador