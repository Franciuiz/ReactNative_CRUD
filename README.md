# ReactNative_CRUD
CRUD simples com react native e firebase

Dependencias no arquivo `package.json`, react-navigation precisa ser a versão 2.7.0
```
npm install -save react-navigation@2.7.0
```

## Configurar ambiente Windows para android

https://facebook.github.io/react-native/docs/getting-started

Requisitos:
NodeJs, Python2, JDK8

1. Configurar variável de ambiente do windows com JAVA_HOME e passar o caminho da versão do JDK instalada na máquina.  
2. Configurar variável de ambiente do windows com ANDROID_HOME e passar o caminho do SDK instalada na máquina.
3. Editar o path adicionando os seguintes comandos:
    ```
        %ANDROID_HOME%\emulator
        %ANDROID_HOME%\tools
        %ANDROID_HOME%\tools\bin
        %ANDROID_HOME%\platform-tools

    ```
    Se "Npm" não for reconhecido como comando valido, adicionar o path: 
    ```
        C:\Program Files\nodejs\
        npm install
    ```

    Exclusivo no MacOS:
    Executar o comando da licença e dar "yes" pra tudo:
    ```
        sdkmanager --licenses
    ```

    Comandos para testar:
    ```
        avd —version
        emulator -version
    ```

4. Exibir lista de avds:
```
    emulator -list-avds
```

5. Executar o emulador: (trocar "Nexus_6_API_23", pelo seu avd)
```
    emulator -no-snapshot -avd Nexus_6_API_23
    emulator -avd Nexus_6_API_23
```

6. Executar na raiz do projeto react native: (executar em terminal diferente do emulador)
```
    Run App Android: react-native run-android
    Run App IOS: react-native run-ios
    
```
