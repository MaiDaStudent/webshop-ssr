# Korean Skincare Webshop – SSR Prototype

🔗 **Live demo:** [https://webshop-ssr.vercel.app](https://webshop-ssr.vercel.app)  
📦 **Source code:** [https://github.com/MaiDaStudent/webshop-ssr](https://github.com/MaiDaStudent/webshop-ssr)

Denne prototype er en **Server-Side Rendered (SSR)** webshop bygget med **Next.js**. Formålet med projektet er at undersøge, hvordan SSR fungerer i praksis – særligt i sammenligning med Client-Side Rendering (CSR), som vises i det tilhørende CSR-projekt.

Brugeren mødes af en æstetisk og funktionel webshop med et udvalg af koreanske hudplejeprodukter. Produkterne vises med billede, navn, pris og en kort beskrivelse – alt sammen gengivet server-side, så indholdet er synligt med det samme.

Webshoppen inkluderer klassiske funktioner:

- Brugeren kan tilføje produkter til sin kurv
- Indholdet af kurven vises på en dedikeret side (`/cart`)
- Produkter kan fjernes individuelt, eller hele kurven kan tømmes
- En tydelig navbar gør det nemt at navigere – og viser, hvilken side man befinder sig på
- Scroll-to-top-funktion for forbedret brugeroplevelse
- Elegant og rolig styling inspireret af K-beauty design, lavet med **Bootstrap 5**

Bag kulissen henter Next.js produktdata og genererer HTML på serveren – alt sammen før siden sendes til brugerens browser. Det betyder, at brugeren ser færdiggengivet indhold med det samme, hvilket er en af SSR’s store fordele.

---

## ✨ Funktioner

- **Server-side rendering** med Next.js (pages router)
- **Dynamisk kurv** med React state og context
- **Responsivt layout** med Bootstrap 5
- **Scroll-to-top** komponent
- **Navigation med aktiv sidehighlight**
- **Data og billeder er lokale** for hurtig og pålidelig rendering

---

## 🧪 Teknologier

- [Next.js](https://nextjs.org/) (Pages Router)
- [React](https://react.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Poppins font](https://fonts.google.com/specimen/Poppins)

---

## 🚀 Kom i gang

Clone projektet og installer afhængigheder:

```bash
git clone https://github.com/MaiDaStudent/webshop-ssr.git
cd webshop-ssr
npm install
npm run dev
