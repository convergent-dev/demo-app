# Companion demo of CLI app for demo.convergent.dev

This is the demo app to test code generation in the demo.convergent.dev interface.

An example built with example components is vieweable at https://demo-app.convergent.dev/

Start by cloning this repo to your local machine by running the following command in any terminal prompt.

```bash 
git clone https://github.com/convergent-dev/conv-demo-app.git && cd conv-demo-app

```
Once the cloning is done, initialise the app by running your favourite package manager command sequence
## Install and run locally

<details open>
  <summary>for pnpm</summary>
  <pre><code>pnpm install && pnpm run dev</code></pre>
</details>

<details>
  <summary>for npm</summary>
  <pre><code>npm install && npm run dev</code></pre>
</details>

<details>
  <summary>for yarn</summary>
  <pre><code>yarn install && yarn run dev</code></pre>
</details>

## Download the proper executable using this command
```bash
curl -o conv -sSL https://convergent.dev/downloads/conv-macos && chmod +x conv
```
Change `conv-macos` in the URL to `conv-linux` if you are on Linux

On Windows use the command
```bash
curl -o conv.exe -sSL https://convergent.dev/downloads/conv-windows.exe
```

## Pull new UI components code
As a last step you can pull the new code for the UI components at any time by running the subcommand
```bash
conv pull
```

Note: for v0.0.0 all UI components will go into `src/ui-components` as a hard-coded directory target.
