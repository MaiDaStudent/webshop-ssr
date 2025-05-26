# Korean Skincare Webshop – SSR Prototype

🔗 **Live demo:** [https://webshop-ssr.vercel.app](https://webshop-ssr.vercel.app)  
📦 **Source code:** [https://github.com/MaiDaStudent/webshop-ssr](https://github.com/MaiDaStudent/webshop-ssr)

Denne prototype er en **Server-Side Rendered (SSR)** webshop bygget med **Next.js**. Projektet er udviklet som en del af en sammenligning mellem SSR og CSR (Client-Side Rendering), og denne version viser, hvordan rendering sker direkte på serveren.

Brugeren mødes af en stilren og brugervenlig webshop med koreanske hudplejeprodukter. Produkterne vises med billede, navn, pris og beskrivelse – alt sammen genereret på serveren før visning i browseren.

Webshoppen inkluderer klassiske funktioner:

- Brugeren kan tilføje produkter til en kurv
- Kurven kan tilgås via en dedikeret side (`/cart`)
- Produkter kan fjernes individuelt eller hele kurven kan tømmes
- Tydelig navbar med aktiv sidehighlight
- Scroll-to-top-knap for bedre brugeroplevelse
- Elegant og rolig styling inspireret af K-beauty design, lavet med **Bootstrap 5**

Bag kulissen henter Next.js produktdata fra en lokal fil og genererer HTML på serveren ved hjælp af `getServerSideProps()` – en af Next.js’ vigtigste SSR-funktioner.

---

## ✨ Funktioner

- **Server-side rendering** med Next.js (Pages Router)
- **Dynamisk kurv** med React Context
- **Responsivt layout** med Bootstrap 5
- **Scroll-to-top** komponent
- **Navigation med aktiv sidehighlight**
- **Data og billeder er lokale** for maksimal ydeevne

---

## 🧪 Teknologier

- [Next.js](https://nextjs.org/) (Pages Router)
- [React](https://react.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Poppins font](https://fonts.google.com/specimen/Poppins)

---

## 🚀 Kom i gang

1. Clone projektet:
```bash
git clone https://github.com/MaiDaStudent/webshop-ssr.git
cd webshop-ssr
npm install
npm run dev
