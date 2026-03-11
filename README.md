````md id="8zvowf"
# SB Base

Simple Discord selfbot base using `discord.js-selfbot-v13`.

This repository is a clean base to help you start building your own selfbot with a simple structure.

## Requirements

- Node.js 16 or higher  
- npm  
- A Discord user token

## Installation

Clone the repository:

```bash
git clone https://github.com/accapareur/SB-Base.git
cd SB-Base
````

Install dependencies:

```bash
npm i discord.js-selfbot-v13 debug
```

## Configuration

Open the `config.json` file and add your Discord token and prefix:

```json
[
  {
    "token": "",
    "prefix": "!"
  }
]
```

Save the file after adding your token and preferred command prefix.

## Start the selfbot

To launch the selfbot, run:

```bash
node index.js
```

## Notes

* This repository is only a base.
* You can modify the structure, add commands, modules, or any system you want.

## Support

If you have questions or need help, contact me on Discord:

```
96qsw.
```
