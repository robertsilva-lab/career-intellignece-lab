# Deploy from your existing VS Code project

These instructions update your existing project. They do not require creating another repository, rerunning `git init`, or changing authentication. Your repository was already connected and GitHub Pages was serving `main` at `/ (root)` in the setup you completed.

## 1. Extract and copy the files

1. Download the supplied `Career_Intelligence_Lab_Website.zip`.
2. Right-click it in Windows File Explorer and select **Extract All**.
3. Open the extracted `career-intelligence-lab` folder. You should see `index.html`, `assets`, and the documentation files.
4. Open your existing **Career Intelligence Lab** project in VS Code using **File → Open Folder**.
5. In File Explorer, make a backup copy of the current `index.html` somewhere outside this project folder.
6. Copy the **contents** of the extracted `career-intelligence-lab` folder into your existing project folder. Allow Windows to replace `index.html`. Copy the entire `assets` folder and the remaining supplied files too, including `.nojekyll` if shown.

The result must put `index.html` at the root of your existing Git repository, beside `assets`, not inside a second nested `career-intelligence-lab` folder. Keep your existing `.git` folder. Do not copy this ZIP into the repository.

Expected layout:

- `index.html`
- `assets/` containing four files
- `.nojekyll`
- `README.md`, `DEPLOYMENT.md`, `MODEL_NOTES.md`, `QA.md`
- `test-models.cjs`
- your existing `.git/` folder (do not modify it)

## 2. Preview before uploading

In File Explorer, double-click the new `index.html` to open it in your browser. Alternatively, if you already use the official VS Code Live Server extension, right-click `index.html` → **Open with Live Server**.

Check these concrete actions:

1. The page shows the ivory-and-green Robert Silva design.
2. In **FP&A scenario lab**, change Base to Upside or Downside; the metrics, chart, and table change.
3. Change variable cost above selling price; breakeven says **No finite level**. Reset the base case.
4. In **Demand & capacity**, switch the product and moving-average window. Change available hours and confirm the gap changes.
5. In **Performance dashboard**, switch Q4 to Full year.
6. Download both CSV exports and open them in Excel.
7. Narrow the browser window and check the mobile layout. Wide data tables scroll horizontally.
8. Read your role titles, dates, and descriptions. The synthetic model results are examples, not personal accomplishments.

If styling is missing locally, check that `assets` sits beside `index.html` and contains all four files.

## 3. Review the changes in VS Code

Select **Terminal → New Terminal**. Run each command separately:

```powershell
git status
```

```powershell
git remote -v
```

`origin` should point to `https://github.com/robertsilva-lab/career-intelligence-lab.git`. If it already matches, leave it alone. In VS Code's **Source Control** panel, click changed files to review their diffs. The downloaded package contains only the portfolio, its synthetic data, tests, and documentation.

Stage the specific deliverables:

```powershell
git add index.html assets .nojekyll README.md DEPLOYMENT.md MODEL_NOTES.md QA.md test-models.cjs
```

Review the staged file list:

```powershell
git diff --cached --stat
```

Then save a version and upload:

```powershell
git commit -m "Build interactive Career Intelligence Lab portfolio"
```

```powershell
git push origin main
```

If Git opens an authentication prompt, use your existing repository-owner account. Do not paste passwords or access tokens into source files or send them in screenshots. If push fails, read the exact error; do not repeat initialization, delete the repository, or force-push.

If Git says the remote contains newer work, stop and review that work before merging. Do not use `git push --force`.

## 4. Confirm GitHub Pages deployment

1. Open your repository: https://github.com/robertsilva-lab/career-intelligence-lab
2. Confirm `index.html` and `assets` appear in the repository root.
3. Open **Actions** and look for the Pages deployment triggered by your push. Wait for it to finish successfully.
4. If necessary, check **Settings → Pages**. Your existing setup should remain **Deploy from a branch → main → / (root)**. No new workflow is required.
5. Open the existing site: https://robertsilva-lab.github.io/career-intelligence-lab/
6. Use **Ctrl + F5** if the browser still shows the old page. Retest all three projects and both downloads.

The package has been checked locally. Uploading and successful GitHub Pages deployment must still be confirmed after you run these steps. No claim is made that this new version is already online.

## If something goes wrong

- **Old page remains:** confirm the push succeeded, check the Pages deployment result, and hard-refresh.
- **Page loads without styling:** ensure `assets/styles.css`, `assets/models.js`, and `assets/app.js` are committed under exactly those names. GitHub paths are case-sensitive.
- **404:** check successful Pages deployment, `main`, root folder, and root-level `index.html`.
- **Models do not update:** enable JavaScript and check that both JavaScript files were uploaded. No network data access is needed.
- **CSV looks rounded differently:** UI values are rounded; exports preserve raw numeric precision. Set Excel display formatting as needed.

## Roll back this update

Because the update is a separate commit, you can reverse it with a new commit. In the VS Code terminal, inspect history:

```powershell
git log --oneline -5
```

Find the hash for **Build interactive Career Intelligence Lab portfolio**. Replace `YOUR_COMMIT_HASH` below with that actual hash:

```powershell
git revert YOUR_COMMIT_HASH
```

```powershell
git push origin main
```

This keeps history and publishes the reversal through the existing Pages setup. If there are later changes or conflicts, review them before proceeding.
