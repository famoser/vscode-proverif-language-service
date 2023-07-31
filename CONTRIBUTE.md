# Contribute

Contributions welcome! Be aware of the automated tests (and keep them running).

Heavily inspired by the [language server example](https://code.visualstudio.com/api/language-extensions/language-server-extension-guide) published by Microsoft. 

Run & test locally:

- Run `npm install` in this folder. This installs all necessary npm modules in both the client and server folder.
- Open VS Code on this folder.
- Press Ctrl+Shift+B to start compiling the client and server in [watch mode](https://code.visualstudio.com/docs/editor/tasks#:~:text=The%20first%20entry%20executes,the%20HelloWorld.js%20file.).
- Switch to the Run and Debug View in the Sidebar (Ctrl+Shift+D).
- Select `Launch Client` from the drop down (if it is not already).
- Press ▷ to run the launch config (F5).
- In the [Extension Development Host](https://code.visualstudio.com/api/get-started/your-first-extension#:~:text=Then%2C%20inside%20the%20editor%2C%20press%20F5.%20This%20will%20compile%20and%20run%20the%20extension%20in%20a%20new%20Extension%20Development%20Host%20window.) instance of VSCode, open a document with a ProVerif extension.
- Enter ProVerif code, and observe how syntax errors are highlighted.


## Publish

Make sure you have https://github.com/microsoft/vscode-vsce installed.

Checklist:
- Bump versions in affected `package.json` (including `server` and `client`).
- Commit and tag.
- `vsce package` to create the `.vsix` 
- `vsce publish` to publish the new version to the marketplace
- Upload the extension to GitHub
- Upload the extension to https://open-vsx.org/

If you are doing this for the first time on your machine, you need to login with `vsce login florianalexandermoser` with an authentication token from [here](https://famoser.visualstudio.com/_usersSettings/tokens). 