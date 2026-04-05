import { test, expect } from '@playwright/test';

test('verify tasks are sorted by priority score on server response', async ({ page }) => {
    // 1. Go to the app
    await page.goto('http://localhost:3000');

    // 2. Add a LOW priority task (Impact 2, Effort 10) -> Score = 0.2
    await page.fill('#taskName', 'Low Priority Task');
    await page.fill('#impact', '2');
    await page.fill('#effort', '10');
    await page.click('button');

    // 3. Add a HIGH priority task (Impact 10, Effort 2) -> Score = 5.0
    await page.fill('#taskName', 'High Priority Task');
    await page.fill('#impact', '10');
    await page.fill('#effort', '2');
    await page.click('button');

    // 4. Wait for network processing and target UI elements
    await page.waitForSelector('li');

    // 5. Assert: The first item in the list MUST be the High Priority Task
    const firstTask = page.locator('li').first();
    await expect(firstTask).toContainText('High Priority Task');
});