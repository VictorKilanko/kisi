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

test("a chicken profile shows story, badges, and relationships", async ({ page }) => {
  await page.goto("/flock/chi-chi");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Chidinma");
  await expect(page.getByText("Sample content").first()).toBeVisible();
  await expect(page.getByText("Republic fiction").first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "The story so far" })).toBeVisible();
  // relationship link to Quiet Grace resolves
  await expect(
    page.locator("aside").getByRole("link", { name: /Quiet Grace/ }),
  ).toBeVisible();
});

test("flock directory filters by search", async ({ page }) => {
  await page.goto("/flock");
  await expect(page.getByText("All 12 citizens")).toBeVisible();
  await page.getByRole("searchbox").fill("iron feathers");
  await expect(page.getByText("1 of 12 citizens")).toBeVisible();
  await expect(page.getByRole("link", { name: /Full profile of Halima/ })).toBeVisible();
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
    firstTier.getByText(/Not accepting payments yet — the programme opens/),
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
