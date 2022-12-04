# Advent of Code

Solutions for [Advent of Code](https://adventofcode.com/).

## Usage

### Setup

Install dependencies:

```
npm install
```

Compile JavaScript from TypeScript:

```
npm build
```

### Fetching inputs

I've included a [small helper](https://github.com/fvzzy/advent-of-code-2021/blob/main/lib/getInput.js) to fetch and cache the inputs for a given day. Inputs are saved to `/inputs/${year}-{day}.txt`.

Store a session token in `.env` to use it:

```
echo SESSION_TOKEN={your-token-here} > .env
```

### Running solutions

Pick a year and day, and run `answers.js`:

```
npm run answers 2021 1
```

Will output something like:

```
> advent-of-code-2021@1.0.0 answers
> node -r dotenv/config ./dist/scripts/answers.js 2021 1

--- 2021 day 1: sonar sweep ---
part 1: 1553
⚡ 1: 0.832ms
part 2: 1597
⚡ 2: 0.438ms
```

### Adding solutions

If you'd like to add solutions (or fork this as a starter framework):

1. Remove existing solutions (optional)
   ```
   rm -rf solutions
   ```
2. Generate new template files by `year` and `day`:

   ```
   npm run add-files {year} {day} {title}
   ```

   e.g.

   ```
   npm run add-files 2021 1 "sonar sweep"
   ```

3. [Run your solution](https://github.com/fvzzy/advent-of-code#running-solutions).

### Tests

I've included happy-path tests using the example inputs for all problems. Occasionally, I've also added tests for helper functions.

Run them with Jest:

```
npm run test
```
