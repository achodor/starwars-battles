import { test, expect } from '@playwright/test';

test.describe('Check characters work', () => {
  test.beforeEach(async ({ page }) => {
    page.goto('/characters');
  });

  test('Should render /characters', async ({ page }) => {
    const select = page.locator('input[name=character-1]');
    await expect(select).toHaveAttribute('placeholder', 'Select');
  });

  test('Should render /characters with Obi result', async ({ page }) => {
    const select = page.locator('input[name=character-1]');
    await select.fill('obi');

    const obi = page.getByText('Obi-Wan Kenobi');
    await obi.click();

    await page.waitForNavigation();

    const url = page.url();
    expect(url).toBe('http://localhost:5173/characters/10/');
  });

  test('Should render /characters with Obi and Yoda result', async ({ page }) => {
    let select = page.locator('input[name=character-1]');
    await select.fill('obi');

    const obi = page.getByText('Obi-Wan Kenobi');
    await obi.click();

    await page.waitForNavigation();

    let url = page.url();
    expect(url).toBe('http://localhost:5173/characters/10/');

    select = page.locator('input[name=character-2]');
    await select.fill('yoda');

    const yoda = page.getByText('Yoda');
    await yoda.click();

    await page.waitForNavigation();

    url = page.url();
    expect(url).toBe('http://localhost:5173/characters/10/20');
  });
});
