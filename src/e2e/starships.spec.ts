import { test, expect } from '@playwright/test';

test.describe('Check starships work', () => {
  test.beforeEach(async ({ page }) => {
    page.goto('/starships');
  });

  test('Should render /starships', async ({ page }) => {
    const select = page.locator('input[name=starship-1]');
    await expect(select).toHaveAttribute('placeholder', 'Select');
  });

  test('Should render /starships with Star Destroyer result', async ({ page }) => {
    const select = page.locator('input[name=starship-1]');
    await select.fill('star');

    const destroyer = page.getByText('Star Destroyer');
    await destroyer.click();

    await page.waitForNavigation();

    const url = page.url();
    expect(url).toBe('http://localhost:5173/starships/3/');
  });

  test('Should render /starships with Star Destroyer and Death Star result', async ({ page }) => {
    let select = page.locator('input[name=starship-1]');
    await select.fill('star');

    const destroyer = page.getByText('Star Destroyer');
    await destroyer.click();

    await page.waitForNavigation();

    let url = page.url();
    expect(url).toBe('http://localhost:5173/starships/3/');

    select = page.locator('input[name=starship-2]');
    await select.fill('death');

    const death = page.getByText('Death Star');
    await death.click();

    await page.waitForNavigation();

    url = page.url();
    expect(url).toBe('http://localhost:5173/starships/3/9');
  });
});
