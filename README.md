# Advent of Code 2021 Solutions

## Usage

### Fetching inputs

I've included a small helper at [lib/utils.js](/lib/utils.js) to fetch the inputs provided for a given day.

Store a session token in `.env` if you want to use it, e.g:

```
echo SESSION_TOKEN={your token here} > .env
```

### Running solutions

Install dependencies:

```
npm install
```

Pick a `{day}.js` file and run it with the `-r dotenv/config` flag to read in your session token. e.g:

```
node -r dotenv/config 01.js
```
