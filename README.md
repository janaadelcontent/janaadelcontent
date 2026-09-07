# Jana Adel Portfolio

Arabic-first, bilingual portfolio for **Jana Adel (جنا عادل)** — social media expert, content creator, digital marketing trainer, and practitioner in marketing research and market strategy.

The site supports Arabic and English, light and dark themes, original-content gallery entries with explanatory copy, case-study pages, and a floating contact dock for WhatsApp, LinkedIn, and email.

## Contact

- Email: [janaa.aadel@gmail.com](mailto:janaa.aadel@gmail.com)
- WhatsApp: [+20 102 767 0707](https://wa.me/201027670707)
- LinkedIn: [Jana Affan](https://www.linkedin.com/in/jana-affan-4a886a15b/)

## Getting started

Use a current LTS version of Node.js (Node 22 or 24).

**1. Install dependencies**
```
npm install
```

**2. Run dev server**
```
npm run dev
```

Open `http://localhost:3000`.

**3. Create a production build**
```
npm run build
```

## Portfolio editing

**Profile, contact details, experience, social links, and gallery copy**
```
src/resources/content.tsx
```

**Floating contact dock and its three WhatsApp messages**
```
src/components/ContactDock.tsx
```

**Arabic/English interface translations**
```
src/resources/language.ts
```

**Case studies and original content images**
```
src/app/work/projects/*.mdx
public/images/gallery/
```

## Documentation

Docs available at: [docs.once-ui.com](https://docs.once-ui.com/docs/magic-portfolio/quick-start)

## Features

### Once UI
- All tokens, components & features of [Once UI](https://once-ui.com)

### SEO
- Automatic open-graph and X image generation with next/og
- Automatic schema and metadata generation based on the content file

### Design
- Responsive layout optimized for all screen sizes
- Timeless design without heavy animations and motion
- Endless customization options through [data attributes](https://once-ui.com/docs/theming)

### Content
- Render sections conditionally based on the content file
- Enable or disable pages for blog, work, gallery and about / CV
- Generate and display social links automatically
- Set up password protection for URLs

### Localization
- Arabic is the default language and visitors can switch to English.
- The site respects right-to-left layout and retains English alongside Arabic.

## Upstream credits

Built with [Once UI](https://once-ui.com) for [Next.js](https://nextjs.org), based on the Magic Portfolio template by Lorant One.

## License

Distributed under the CC BY-NC 4.0 License.
- Attribution is required.
- Commercial usage is not allowed.
- You can extend the license to [Dopler CC](https://dopler.app/license) by purchasing a [Once UI Pro](https://once-ui.com/pricing) license.

See `LICENSE.txt` for more information.
