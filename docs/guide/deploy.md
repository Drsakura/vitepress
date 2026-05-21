# Deployment

The GitHub Actions workflow in this repository deploys the VitePress build to GitHub Pages.

## GitHub Pages

1. Push this repository to GitHub.
2. In the repository settings, open **Pages**.
3. Set **Build and deployment** to **GitHub Actions**.
4. Push to `main`; the workflow will publish `docs/.vitepress/dist`.

## Base Path

The site reads its base path from `BASE_PATH`.

For a project page like `https://username.github.io/repo-name/`, the workflow sets:

```bash
BASE_PATH=/repo-name/
```

For a custom domain or CDN root, set:

```bash
BASE_PATH=/
```
