// tests/visual.test.ts
import { test, expect } from '@playwright/test';

test('ホームページのビジュアルスナップショットが一致する', async ({ page }) => {
  await page.goto('/');
  // 初回実行時はスナップショットが作成されるため、以降の差分検出に利用可能
  expect(await page.screenshot()).toMatchSnapshot('homepage.png');
});
