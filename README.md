# DSA-888-JS

Solving 888 Data Structures & Algorithms problems in JavaScript.

## Getting Started!

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Setup

```bash
# Install dependencies
npm install
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Repository Structure

```
DSA-888-JS/
├── template/
│   ├── solution.js        # Copy this when starting a new problem
│   └── solution.test.js   # Copy this when starting a new problem
├── problems/
│   ├── 001-two-sum/
│   │   ├── solution.js
│   │   └── solution.test.js
│   ├── 002-add-two-numbers/
│   │   ├── solution.js
│   │   └── solution.test.js
│   └── 003-longest-substring-without-repeating/
│       ├── solution.js
│       └── solution.test.js
└── package.json
```

## Adding a New Problem

1. Create a new directory under `problems/` using the naming convention `NNN-problem-name/` (e.g., `004-median-of-two-sorted-arrays/`).
2. Copy the template files into the new directory:
   ```bash
   cp template/solution.js problems/004-median-of-two-sorted-arrays/solution.js
   cp template/solution.test.js problems/004-median-of-two-sorted-arrays/solution.test.js
   ```
3. Fill in the problem description, implement the solution in `solution.js`, and write tests in `solution.test.js`.
4. Run `npm test` to verify your solution passes all test cases.

## Progress

| # | Problem | Difficulty | Status |
|---|---------|-----------|--------|
| 001 | [Two Sum](problems/001-two-sum/solution.js) | Easy | ✅ |
| 002 | [Add Two Numbers](problems/002-add-two-numbers/solution.js) | Medium | ✅ |
| 003 | [Longest Substring Without Repeating Characters](problems/003-longest-substring-without-repeating/solution.js) | Medium | ✅ |

## License

MIT
