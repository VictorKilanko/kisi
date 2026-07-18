import { expect, test } from "@playwright/test";

test("home page renders the hero, ticker, and dashboard", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Kisi/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Where Every Chicken",
  );
  await expect(page.getByText("The Coop Times").first()).toBeVisible();
  await expect(page.getByText("National Egg Census").first()).toBeVisible();
});

test("a chicken profile shows story, status, and relationships", async ({ page }) => {
  await page.goto("/flock/chi-chi");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Chidinma");
  await expect(page.getByText("Active citizen").first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "The story so far" })).toBeVisible();
  // relationship link to Quiet Grace resolves
  await expect(
    page.locator("aside").getByRole("link", { name: /Quiet Grace/ }),
  ).toBeVisible();
});

test("flock directory filters by search", async ({ page }) => {
  await page.goto("/flock");
  await expect(page.getByText("All 17 citizens")).toBeVisible();
  await page.getByRole("searchbox").fill("iron feathers");
  await expect(page.getByText("1 of 17 citizens")).toBeVisible();
  await expect(page.getByRole("link", { name: /Full profile of Halima/ })).toBeVisible();
});

test("the most wanted notice carries the bounty and a safety warning", async ({ page }) => {
  await page.goto("/most-wanted");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Most Wanted");
  await expect(page.getByText("500,000 grains").first()).toBeVisible();
  await expect(page.getByText("Do not approach it").first()).toBeVisible();
});

test("visitors can leave a message for Bantu", async ({ page }) => {
  await page.goto("/bantu");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Bantu");
  const form = page.getByRole("form", { name: "Leave a message for Bantu" });
  await form.getByLabel("Your name").fill("A visitor");
  await form.getByLabel("Your message").fill("Thank you for the twelve.");
  await form.getByRole("button", { name: /Leave your message/ }).click();
  await expect(page.getByText("Message received")).toBeVisible();
});

test("the shop takes an enquiry rather than a payment", async ({ page }) => {
  await page.goto("/shop");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Order our eggs");
  await expect(
    page.getByText(/sends an enquiry, not an order/).first(),
  ).toBeVisible();
});

test("support checkout refuses honestly while payments are unconfigured", async ({
  page,
}) => {
  await page.goto("/support");
  await expect(page.getByText("Not accepting payments yet.").first()).toBeVisible();
  const firstTier = page.locator("li", { hasText: "Feed a Citizen" }).first();
  await firstTier.getByPlaceholder("you@example.com").fill("visitor@example.com");
  await firstTier.getByRole("button", { name: /Begin support/ }).click();
  await expect(
    firstTier.getByText(/isn't open yet — the programme starts/),
  ).toBeVisible();
});

test("farm map serves the accessible 2D path with all locations", async ({ page }) => {
  await page.goto("/republic/map");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("The Farm Map");
  // 2D is the default mode; the accessible index lists every hotspot
  const index = page.getByRole("navigation", { name: "All farm locations" });
  await expect(index.getByRole("button")).toHaveCount(18);
  await index.getByRole("button", { name: /Presidential Coop/ }).click();
  await expect(page.getByText("Official residence of Her Excellency")).toBeVisible();
});
