# 部署到 Hostinger（虚拟主机 Shared Hosting）指南

本项目是纯静态 SPA（Vite 构建产物），可直接部署到 Hostinger 的
**Shared Web Hosting / Business 套餐** 的 `public_html`，无需 Node 服务器。

## 1. 构建产物

```bash
# 把 SITE_URL 换成你的真实域名后执行（用于 sitemap.xml）
SITE_URL=https://你的域名.com npm run build --prefix apps/web
```

产物目录：`dist/apps/web/`，包含：

```
index.html  .htaccess  robots.txt  sitemap.xml  llms.txt  assets/...
```

## 2. 上传（任选其一）

**A. hPanel 文件管理器（最简单）**
1. 登录 Hostinger hPanel → Websites → File Manager
2. 进入 `public_html`，删除默认的 `default.php` / 示例文件
3. 把 `dist/apps/web/` 里的**所有文件**（含隐藏的 `.htaccess`）上传到 `public_html` 根目录
   - 注意：是把 `dist/apps/web` **里面的文件**放进 `public_html`，不是把文件夹本身传上去

**B. FTP（FileZilla）**
- Hostinger hPanel → FTP Accounts 取 host / 用户名 / 密码，端口 21
- 本地 `dist/apps/web/` → 远端 `public_html/`，含 `.htaccess`（FileZilla 需开启“强制显示隐藏文件”）

**C. Git（仅 Business/Cloud 套餐支持）**
- 第二次更新可用 `git pull` + 在服务器上 `npm run build`，或本地构建后同步

## 3. 域名与 SSL

1. hPanel → Domains，把域名指向该 hosting（修改 NS 或 A 记录，按面板提示）
2. hPanel → SSL，开启 **Free SSL（Let's Encrypt）** 并强制 HTTPS
3. 等待 DNS 生效（通常几分钟～几小时），访问 `https://你的域名.com/en` 验证

## 4. 验证清单

- [ ] `https://你的域名.com/` 自动跳转语言首页
- [ ] `https://你的域名.com/zh/faq` 直接刷新不 404（靠 `.htaccess` SPA 回退）
- [ ] `https://你的域名.com/sitemap.xml`、`robots.txt` 可访问
- [ ] 浏览器无混合内容（mixed-content）警告
- 之后去 Google Search Console 提交 `sitemap.xml`，再申请 AdSense

## 5. 日常更新流程

改完代码 → 重新 `npm run build` → 只上传有变化的文件（`index.html` + `assets/` 新 hash 文件 + `sitemap.xml`）即可；
`assets/` 下带 hash 的旧文件可定期清理。

## 注意事项

- 子目录部署（如 `example.com/calc/`）：需在 `vite.config.js` 加 `base: '/calc/'` 后重新构建；
  且 `.htaccess` 的 `RewriteBase /` 改为 `RewriteBase /calc/`（默认按域名根目录部署，无需改）。
- `robots.txt` / `sitemap.xml` 里的域名占位符会在构建时由 `SITE_URL` 自动写入，
  务必用真实域名重新构建一次，否则提交给 Google 的是 `example.com`。
- Hostinger 单个文件/请求无特殊限制，本站构建产物约 1.5MB JS（gzip 后约 480KB），在共享主机上加载正常；
  如需更快可开启 hPanel 的 CDN（Cloudflare 集成）。
