# ITPM_Assignment01

## Project Overview

This is a Playwright-based test automation project for testing a **Thanglish to Tamil Converter**. The project validates the functionality of the online Tamil conversion tool at [tamil.changathi.com](https://tamil.changathi.com/).

## Features

- **10 Positive Functional Tests (Pos_Fun)**: Tests covering various Tamil language scenarios including greetings, questions, commands, negative forms, tenses, mixed English, numbers/time, places, and formatting.
- **10 Negative Functional Tests (Neg_Fun)**: Tests that validate expected failures, demonstrating system robustness and known limitations.
- **Page Title Validation**: Ensures the website loads correctly with the expected title.


## ✅ Automated Test Coverage Summary

- **24 Positive Functional Tests (Pos_Fun)**  
  These tests validate correct system behavior for a wide range of Thanglish-to-Tamil conversion scenarios, including:
  - Common greetings and daily expressions
  - Interrogative (questions) and imperative (commands) forms
  - Positive and negative sentence structures
  - Tense variations (past, present, future)
  - Pronoun and plural usage
  - Mixed Thanglish + English inputs (e.g., technical terms and brand names)
  - Numbers, time, currency, dates, and units of measurement
  - Short (S), Medium (M), and Long (L) input lengths

- **10 Negative Functional Tests (Neg_Fun)**  
  These tests are designed to validate known limitations and robustness of the system by using inputs such as heavy typos, missing vowels, excessive punctuation, irregular spacing, slang, and mixed technical abbreviations.  
  In these cases, the tests are expected to **PASS when the system output does NOT match the ideal expected output**, confirming that the application behaves as expected under invalid or edge-case inputs and that such limitations are correctly detected by the automated test suite.

- **Page Title Validation**  
  Ensures that the application loads successfully by verifying the presence of the expected page title before executing functional test cases.


## Project Structure

```
playwrite/
├── tests/
│   └── ThanglishToTamil.spec.js     # Main test suite
├── playwright.config.js              # Playwright configuration
├── package.json                      # Dependencies and scripts
├── playwright-report/               # Test reports
├── test-results/                    # Test execution results
└── README.md                        # This file
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yasickogul/ITPM_Assignment01.git
cd ITPM_Assignment01
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install


### Run in headed mode (see browser):
```bash
npx playwright test --headed
```

### Generate test report:
```bash
npx playwright show-report
```

## Configuration

The `playwright.config.js` file contains configuration for:
- Browser type (Chromium, Firefox, WebKit)
- Timeout settings
- Base URL (if applicable)
- Report generation

## Technologies Used

- **Playwright**: Browser automation framework
- **Node.js**: JavaScript runtime
- **Chromium**: Browser engine for testing

## Test Results

After running the tests, reports are generated in:
- `playwright-report/` - HTML report
- `test-results/` - Detailed test results

## Notes

- All tests interact with a live website at `https://tamil.changathi.com/`
- Tests use the textbox input element to enter Thanglish text
- Expected Tamil outputs are validated using regex patterns
- Negative tests expect the system to NOT produce perfect conversions in edge cases

## Contributing

To add new tests:
1. Create test cases in `ThanglishToTamil.spec.js`
2. Follow the existing naming convention: `Pos_Fun_XX` or `Neg_Fun_XX`
3. Run tests to validate
4. Update this README if adding new test categories

## License

This project is part of an ITPM assignment.

## Contact

For questions or issues, please reach out to the project maintainer.
