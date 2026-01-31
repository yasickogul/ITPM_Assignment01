const { test, expect } = require('@playwright/test');



/* 
   (Pos_Fun)
   Covers: greeting, question, command, negative, tense,
   mixed English, numbers/time, places, formatting.
 */

test('Pos_Fun_01 - Greeting: vanakkam -> வணக்கம்', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('vanakkam ');
  await expect(input).toHaveValue(/வணக்கம்/);
});

test('Pos_Fun_02 - Question: epdi irukeenga? -> எப்படி இருக்கீங்க', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('epdi irukeenga? ');
  await expect(input).toHaveValue(/எப்படி இருக்கீங்க?/);
});

test('Pos_Fun_03 - Simple sentence: naan veetukku poren -> நான் வீட்டுக்கு போறேன்', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan veetukku poren ');
  await expect(input).toHaveValue(/நான் வீட்டுக்கு போறேன்/);
});

test('Pos_Fun_04 - Imperative/command: inga vaa -> இங்க வா', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('inga vaa ');
  await expect(input).toHaveValue(/இங்க வா/);
});

test('Pos_Fun_05 - Negative form: naan vara maaten -> நான் வர மாட்டேன்', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan vara maaten ');
  await expect(input).toHaveValue(/நான் வர மாட்டேன்/);
});

test('Pos_Fun_06 - Past tense: naan nethu ponen -> நான் நேத்து போனேன்', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan nethu ponen ');
  await expect(input).toHaveValue(/நான் நேத்து போனேன்/);
});

test('Pos_Fun_07 - Future tense: naan nalaikku varen -> நான் நாளைக்கு வரேன்', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan nalaikku varen ');
  await expect(input).toHaveValue(/நான் நாளைக்கு வரேன்/);
});

test('Pos_Fun_08 - Mixed English term: Zoom meeting irukku -> Zoom remains', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('Zoom meeting irukku ');
  await expect(input).toHaveValue(/ஜூம் மீட்டிங் இருக்கு/);
});


test('Pos_Fun_09 - Command: konjam nillu -> கொஞ்சம் நில்', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('konjam nillu ');
  await expect(input).toHaveValue(/கொஞ்சம்.*நில்/);
});

test('Pos_Fun_10 - Question: unga peru enna? -> உங்கள் பேர் என்ன', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('unga peru enna? ');
  await expect(input).toHaveValue(/உங்|உங்கள்/);
});

test('Pos_Fun_11 - Polite request: dayavuseithu help pannunga', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('dayavuseithu konjam help pannunga ');
  await expect(input).toHaveValue(/தயவு|தயவுசெய்து/);
});


test('Pos_Fun_12 - Informal: dei inga vaa da', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('dei inga vaa da ');
  await expect(input).toHaveValue(/டேய்|இங்க.*வா/);
});

test('Pos_Fun_13 - Pronoun variation (we): naanga nalaikku povom', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naanga nalaikku povom ');
  await expect(input).toHaveValue(/நாங்க|நாங்கள்/);
});

test('Pos_Fun_14 - Plural/they: avanga varaanga', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('avanga varaanga ');
  await expect(input).toHaveValue(/அவங்க|அவர்கள்/);
});

test('Pos_Fun_15 - Repeated word emphasis: sari sari', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('sari sari ');
  await expect(input).toHaveValue(/சரி சரி/);
});

test('Pos_Fun_16 - Abbreviations preserved: ID, OTP', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('en ID venum, OTP anuppu ');
  await expect(input).toHaveValue(/ID/);
  await expect(input).toHaveValue(/OTP/);
});

test('Pos_Fun_17 - Currency preserved: Rs. 2500', async ({ page }) => {
  test.setTimeout(120000);
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('Rs. 2500 kuduthen ');
  await expect(input).toHaveValue(/Rs\.\s*2500/);
});

test('Pos_Fun_18 - Date preserved: 25/12/2025', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('25/12/2025 leave podren ');
  await expect(input).toHaveValue(/25\/12\/2025/);
});

test('Pos_Fun_19 - Units preserved: 5 kg', async ({ page }) => {
  test.setTimeout(120000);
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('5 kg sugar venum ');
  await expect(input).toHaveValue(/5\s*kg/);
});

/* ----------- MEDIUM (M: 31–299 chars) POSITIVE ----------- */

test('Pos_Fun_20 (M) - Daily + cause: traffic, meeting late', async ({ page }) => {
 test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan office ku poren, aana traffic romba jasthi. meeting late aagum nu ninaikkiren. ');
  await expect(input).toHaveValue(/office/);
  await expect(input).toHaveValue(/traffic|மீட்டிங்|meeting/);
});

test('Pos_Fun_21 (M) - Mixed English + time: Zoom link WhatsApp', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('Zoom meeting 7.30 AM ku irukku. link-a WhatsApp la anuppu please. ');
  await expect(input).toHaveValue(/Zoom/);
  await expect(input).toHaveValue(/7\.30\s*AM/);
  await expect(input).toHaveValue(/WhatsApp/);
});

test('Pos_Fun_22 (M) - Request + email subject', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('enakku email anuppu. subject la "ITPM Assignment" nu podu. attachment-a correct ah add pannunga. ');
  await expect(input).toHaveValue(/email/i);
  await expect(input).toHaveValue(/ITPM|Assignment/);
});

test('Pos_Fun_23 (M) - Shopping + numbers', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan nethu supermarket ponen. 5 kg arisi, 2 litre paal vanginen. Rs. 5343 aachu. ');
  await expect(input).toHaveValue(/5\s*kg|5\s*kg/);
  await expect(input).toHaveValue(/Rs\.\s*5343/);
});



/* ----------- LARGE (L: ≥300 chars) POSITIVE ----------- */

test('Pos_Fun_24 (L) - Long paragraph (robustness + conversion keeps meaning)', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');

  const longText =
    'innaikku naan office ku romba late ah ponen, kaaranam traffic romba jasthi. ' +
    'bus stop la wait panna neramum adhigam aachu. office la enter aana udane manager meeting ku kooptaanga. ' +
    'naan already tired ah irundhen, aana meeting la ellam details explain panninen. ' +
    'ippo veetukku poi konjam rest eduthu, assignment work finish panna plan pannuren. ';

  await input.type(longText);
  // Validate key words appear in Tamil output (not exact full sentence)
  await expect(input).toHaveValue(/office/i);
  await expect(input).toHaveValue(/meeting/i);
  await expect(input).toHaveValue(/assignment/i);
})



/* 
 (Neg_Fun)
   These are “expected to fail” style:
  Below is the weekness of the system
 */

test('Neg_Fun_01 - Joined words: Numbers/time format preserved: 7.30 AM', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan 7.30 AM ku varen ');
  await expect(input).not.toHaveValue(/நான் 7.30 AM கு வாரேன்/);
});

test('Neg_Fun_02 - Heavy typos: vaannnakkammmm should not convert cleanly to வணக்கம்', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('vaannnakkammmm ');
  await expect(input).not.toHaveValue(/வணக்கம்/);
});

// not correct
test('Neg_Fun_03 - Missing vowels: vndkmm should not convert to வணக்கம்', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('vndkmm ');
  await expect(input).not.toHaveValue(/வணக்கம்/);
});

//corr
test('Neg_Fun_04 - Place name preserved: Colombo', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan Colombo poren ');
  await expect(input).not.toHaveValue(/நான் கொழும்பு போறேன்/);
});

test('Neg_Fun_05 - Mixed slang may not convert as intended', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('dei machan sema da ');
  // We expect it won’t produce a "formal" Tamil equivalent reliably
  await expect(input).not.toHaveValue(/டேய் மச்சான் செம டா/);
});

test('Neg_Fun_06 - Excess punctuation: enna???!!! should not produce clean standard output', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('enna???!!! ');
  await expect(input).not.toHaveValue(/என்ன\?+!+/);
});

test('Neg_Fun_07 - Multiple spaces formatting may not be preserved perfectly', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan   veetukku    poren ');
  await expect(input).not.toHaveValue(/நான்   வீடுக்கு    போறேன்/);
});

test('Neg_Fun_08 - New line input may not be handled properly', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('naan veetukku poren\nneenga varuveengala? ');
  await expect(input).not.toHaveValue(/நான் வீட்டுக்கு போறேன்\nநீங்க வருவீங்களா?/);
});

test('Neg_Fun_09 - Very long text might not fully convert correctly (robustness)', async ({ page }) => {
  test.setTimeout(120000);
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
  test.setTimeout(120000);
  await page.goto('https://tamil.changathi.com/');
  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('');
  await input.type('OTP varala, ASAP anuppunga ');
  await expect(input).not.toHaveValue(/OTP வரல, ASAP அனுப்புங்க/);
});
