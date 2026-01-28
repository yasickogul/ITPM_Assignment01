const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await expect(page).toHaveTitle(/Online Tamil Converter | English Tamil Translation | Tamil Conversion/);
});

/* =========================
   10 PASS (Pos_Fun)
   Covers: greeting, question, command, negative, tense,
   mixed English, numbers/time, places, formatting.
========================= */

test('Pos_Fun_01 - Greeting: vanakkam -> வணக்கம்', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('vanakkam ');
  await expect(input).toHaveValue(/வணக்கம்/);
});

test('Pos_Fun_02 - Question: epdi irukeenga? -> எப்படி இருக்கீங்க', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('epdi irukeenga? ');
  await expect(input).toHaveValue(/எப்படி இருக்கீங்க?/);
});

test('Pos_Fun_03 - Simple sentence: naan veetukku poren -> நான் வீட்டுக்கு போறேன்', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan veetukku poren ');
  await expect(input).toHaveValue(/நான் வீட்டுக்கு போறேன்/);
});

test('Pos_Fun_04 - Imperative/command: inga vaa -> இங்க வா', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('inga vaa ');
  await expect(input).toHaveValue(/இங்க வா/);
});

test('Pos_Fun_05 - Negative form: naan vara maaten -> நான் வர மாட்டேன்', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan vara maaten ');
  await expect(input).toHaveValue(/நான் வர மாட்டேன்/);
});

test('Pos_Fun_06 - Past tense: naan nethu ponen -> நான் நேத்து போனேன்', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan nethu ponen ');
  await expect(input).toHaveValue(/நான் நேத்து போனேன்/);
});

test('Pos_Fun_07 - Future tense: naan nalaikku varen -> நான் நாளைக்கு வரேன்', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan nalaikku varen ');
  await expect(input).toHaveValue(/நான் நாளைக்கு வரேன்/);
});

test('Pos_Fun_08 - Mixed English term: Zoom meeting irukku -> Zoom remains', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('Zoom meeting irukku ');
  await expect(input).toHaveValue(/ஜூம் மீட்டிங் இருக்கு/);
});


/* =========================
   10 FAIL (Neg_Fun)
   These are “expected to fail” style:
   We assert that it should NOT match a "perfect" expected output,
   showing system weakness/robustness issues.
========================= */

test('Neg_Fun_01 - Joined words: Numbers/time format preserved: 7.30 AM', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan 7.30 AM ku varen ');
  await expect(input).not.toHaveValue(/நான் 7.30 AM கு வாரேன்/);
});

test('Neg_Fun_02 - Heavy typos: vaannnakkammmm should not convert cleanly to வணக்கம்', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('vaannnakkammmm ');
  await expect(input).not.toHaveValue(/வணக்கம்/);
});

// not correct
test('Neg_Fun_03 - Missing vowels: vndkmm should not convert to வணக்கம்', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('vndkmm ');
  await expect(input).not.toHaveValue(/வணக்கம்/);
});

//corr
test('Neg_Fun_04 - Place name preserved: Colombo', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan Colombo poren ');
  await expect(input).not.toHaveValue(/நான் கொழும்பு போறேன்/);
});

test('Neg_Fun_05 - Mixed slang may not convert as intended', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('dei machan sema da ');
  // We expect it won’t produce a "formal" Tamil equivalent reliably
  await expect(input).not.toHaveValue(/டேய் மச்சான் செம டா/);
});

test('Neg_Fun_06 - Excess punctuation: enna???!!! should not produce clean standard output', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('enna???!!! ');
  await expect(input).not.toHaveValue(/என்ன???!!!/);
});

test('Neg_Fun_07 - Multiple spaces formatting may not be preserved perfectly', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan   veetukku    poren ');
  await expect(input).not.toHaveValue(/நான்   வீடுக்கு    போறேன்/);
});

test('Neg_Fun_08 - New line input may not be handled properly', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan veetukku poren\nneenga varuveengala? ');
  await expect(input).not.toHaveValue(/நான் வீட்டுக்கு போறேன்\nநீங்க வருவீங்களா?/);
});

test('Neg_Fun_09 - Very long text might not fully convert correctly (robustness)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  const longText = 'naan veetukku poren. '.repeat(40); // long-ish
  await input.type(longText);
  // We assume perfect full conversion may not hold consistently
  await expect(input).not.toHaveValue(/நான்.*(வீட்டுக்கு.*){30,}/);
});

test('Neg_Fun_10 - Mixed technical abbreviations may not convert cleanly', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('OTP varala, ASAP anuppunga ');
  await expect(input).not.toHaveValue(/OTP வரல, ASAP அனுப்புங்க/);
});
