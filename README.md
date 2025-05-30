# A Landing Page Inspired by Framer

![alt text](/assets/image.png)

Initially started this project on **October 27th, 2024**, but added and pushed into a Github repository on **May 18th, 2025** as <u>I did not possess Git knowledge at that time.</u>

This project was meant to **practice and showcase** my <u>frontend and UI design abilities</u> which include:
- [**Typescript**](https://www.typescriptlang.org/) as the main program language
- Several [**shadcn/ui**](https://ui.shadcn.com/) components
- [**Framer Motion**](https://motion.dev/) animations
- [**Supabase**](https://supabase.com/) and their authentication system
- [**Next.js**](https://nextjs.org/)
- [**React**](https://react.dev/)
- [**Tailwindcss**](https://tailwindcss.com/)

This project is **not in production nor is it published publicly.** This website **does not function well** except the authentication system. It also does not support any other device screen other than desktop. Just a lil-project.

## Design Process

I first off started on a designing software, [Framer](https://www.framer.com/?utm_source=google&utm_medium=adwords&utm_campaign=22230540905_171781588221&utm_content=746680677043_framer_e_c_g&gad_source=1&gad_campaignid=22230540905&gbraid=0AAAAAC3AKQVGO1pbmAFVgvrXr7Q7j0Mx0&gclid=Cj0KCQjwiqbBBhCAARIsAJSfZkZyEFn1mTFN-A4F_ds-4XRNs2lZdaTKeuCRXB1bQMc08NL0jKPQq4IaAjj-EALw_wcB). Noticing their exquisite modern UI design and style, I was captivated and wanted to replicate the same.

I began experimenting with their already-made modern components:
- Navigation bar
- Home pages
- Call to action
- Features
- Subscriptions
- ...

With the modernistic design, I had a feeling that basic colors **(white, black, grey)** would fit well. Therefore, I was able to construct a **not-so eye-straining color palette:**
- **White** → #fafafa (background, buttons)
- **Black** → #222222 (headings, buttons)
- **Grey** → #999999 (text)

After clear chronologically planning the components, I was able to make a **somewhat medium-fidelity design** in which I can refer to as I will be developing and coding this up. [(It can be found here, made by Framer)](https://framer-inspired-landing-page.framer.website/)

## Development

Initializing a Next.js project, I decided to focus on these things in order:
1. **Frontend** → UI designing by referring back to my design made in Framer
2. **Backend** → Connect to Supabase and systemize the authentication

#### **Frontend**
Referring to my design in Framer, I started from **top to bottom**, trying to replicate it as similar as I can using former knowledge of web layouts using **tailwindcss and React's JSX.**
- Along with that, I created components that I knew that was going to be repeated on the next pages (buttons, subtitles, cards, ...)

#### **Backend**
Finally, connecting it to Supabase by through API and applying their syntax, I am able to fully create an **authentication system.** The user can login by:
1. Clicking on the **sign up button** in the navigation bar
2. Directed to a aesthetic login page, the user may **switch between signing up or logging in** and may **type their desired credentials**
3. Once logged in successfully, the user would be directed to a "settings" page where they can **be able to log out**
4. Because Supabase knows the user is logged in, the sign up button in the navigation bar would change to a lettered profile picture

## What I've learnt
- Modern and aesthetic web design patterns
- Frontend UI planning using design software like Framer or Figma
- The chronological order of pages as they scroll down the website
- Authentication system using Supabase

Even though this project was not much impressive as it was mostly carried by Framer's already-made components and I simply just tried to copy it in my development process, **I hope that in the future I truly create modernistic websites like these in the future without the help or influence of others, but by my creativity.**
