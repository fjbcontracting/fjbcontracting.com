# fjbcontracting.com

Five-page static site for FJB Contracting, hosted free on GitHub Pages.

## Photos

The photos sit loose in the main folder, next to `index.html`, not in a subfolder. The pages look for them there. When adding new photos, upload them to the main folder.

## Step 1. Put the site on GitHub

1. Sign in at github.com (or create an account for FJB).
2. Click **New repository**. Name it `fjbcontracting.com`. Set it to **Public** (free GitHub Pages requires public on a free account).
3. On the empty repo page, click **uploading an existing file**, then drag in everything in this folder, including the `css` and `js` folders, the photos, the logo and the `CNAME` file.
4. Click **Commit changes**.

## Step 2. Turn on GitHub Pages

1. In the repo, go to **Settings > Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
3. Under **Custom domain**, confirm `fjbcontracting.com` is filled in (the CNAME file does this).
4. Wait a minute, then open `https://YOUR-GITHUB-USERNAME.github.io/fjbcontracting.com/` to check the site before touching DNS.

## Step 3. Set up the contact form

The form uses Web3Forms, which is free and needs no account.

1. Go to web3forms.com, enter `frank@fjbcontracting.com` (or whichever inbox should get inquiries), and they email you an access key.
2. Open `contacts.html` in GitHub (click the file, then the pencil icon).
3. The key is already in `contacts.html`. To change it, replace the value after `access_key`. Commit.
4. Send yourself a test message from the live page.

## Step 4. Point the domain at GitHub

**Check email first.** If `frank@fjbcontracting.com` is a Bluehost mailbox, do not touch the MX records, and do not cancel Bluehost hosting until email is moved somewhere else (Google Workspace or Microsoft 365). Changing only the records below won't affect email.

In Bluehost: **Domains > fjbcontracting.com > DNS**.

1. Delete the existing **A** records for `@`.
2. Add four **A** records for `@`:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Change the **CNAME** for `www` to `YOUR-GITHUB-USERNAME.github.io`
4. Leave MX, TXT and any mail-related records alone.

DNS can take a few hours. When GitHub's Pages settings show the domain as verified, tick **Enforce HTTPS**.

## Step 5. Bluehost after launch

- **Keep the domain renewal on** (Nov 13). The domain is what makes fjbcontracting.com yours; GitHub only hosts the files. Moving the domain to another registrar is optional and can happen any time.
- **Hosting** (prepaid to Aug 2027): once the GitHub site is live and email is confirmed working, turn off hosting auto-renew. Ask Bluehost whether a prorated refund applies to the unused term.
- **Firewall add-on**: not needed. GitHub Pages serves plain files with HTTPS included.

## Making changes later

Click any file in the GitHub repo, then the pencil icon to edit. Commit, and the live site updates within a minute or two.

Old links still work: `index.html`, `about.html`, `services.html`, `portfolio.html` and `contacts.html` keep their names, and `portfolio2.html` through `portfolio9.html` forward to the single portfolio page.
