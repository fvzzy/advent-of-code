# Advent of Code 2021

Solutions for [Advent of Code 2021](https://adventofcode.com/2021/).

## Dependencies

This project uses a minimal set of dependencies:

1. [dotenv](https://github.com/motdotla/dotenv) to read an environment variable,
2. [note-fetch](https://github.com/node-fetch/node-fetch) to add the `fetch` API to Node, and
3. [jest](https://github.com/facebook/jest) for lightweight testing.

## Usage

### Fetching inputs

I've included a small helper at [lib/utils.js](/lib/utils.js) to fetch and cache the supplied inputs for a given day.

Store a session token in `.env` to use it, e.g:

```
echo SESSION_TOKEN={your token here} > .env
```

### Running solutions

Install dependencies:

```
npm install
```

Choose a day and run `answers.js` (uses `-r dotenv/config` flag to read in your session token from `.env`), e.g:

```
npm run answers 1
```

Will output something like:

```
> advent-of-code-2021@1.0.0 answers
> node -r dotenv/config ./scripts/answers.js "1"

--- day 1: sonar sweep ---
part 1: 1553
part 2: 1597
```

### Tests

I've added happy-path tests using the example inputs for all problems. Occasionally, for more complicated solutions, I've also added tests for helper functions.

Run them with Jest:

```
npm run test
```
