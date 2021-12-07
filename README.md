# Advent of Code 2021 Solutions

## Usage

### Fetching inputs

I've included a small helper at [lib/utils.js](/lib/utils.js) to fetch the inputs provided for a given day.

Store a session token in `.env` to use it, e.g:

```
echo SESSION_TOKEN={your token here} > .env
```

### Running solutions

Install dependencies:

```
npm install
```

Choose a day and run `answers.js` (uses `-r dotenv/config` flag to read in your session token from `.env`):

```
npm run answers 1
```

### Unit tests

```
npm run test
```
