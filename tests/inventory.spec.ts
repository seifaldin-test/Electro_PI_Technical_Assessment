import { test } from '../fixtures/testFixtures';
import { testData } from '../utils/testData';

test('User can successfully log in and add item to inventory cart', async ({ loginPage, inventoryPage }) => {
  // Uses arguments passed into loginAsAdmin method
  await loginPage.loginAsAdmin(testData.adminUser.username, testData.adminUser.password);

  // Perform inventory action and assertion
  await inventoryPage.addProductToCart();
  await inventoryPage.assertItemInCart();
});