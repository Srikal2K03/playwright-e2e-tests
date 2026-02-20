import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";



  test("Should login successful", async ({ page }) => {
    // launch URL and assert title and header
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
    // Successful login
   // await page.getByLabel("Username").fill("John Doe");
   // await page.getByLabel("Password").fill("ThisIsNotAPassword");
   // await page.getByRole("button", { name: "Login" }).click();

    //assert a text
    //await expect(page.locator("h2")).toContainText("Make Appointment");
  });


