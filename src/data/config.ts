import { Metadata } from "next"

export const MetaTags: Metadata = {
  title: "Mertcan Öncül | Freelance Web Developer",
  authors: [{ name: "Mertcan Öncül", url: "https://mertcanoncul.com" }],
  description:
    "I'm Mertcan, a Freelance Web Developer. I create aesthetically and functionally powerful web projects by blending my technical knowledge and skills with creativity.",
  alternates: {
    canonical: "https://mertcanoncul.com",
  },
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    site: "@mertcanoncul",
    title: "Mertcan Öncül | Freelance Web Developer",
    description:
      "I'm Mertcan, a Freelance Web Developer. I create aesthetically and functionally powerful web projects by blending my technical knowledge and skills with creativity.",
    images: ["https://mertcanoncul.com/path-to-your-image.jpg"],
  },
  openGraph: {
    locale: "en_US",
    title: "Mertcan Öncül | Freelance Web Developer",
    url: "https://mertcanoncul.com",
    type: "website",
    siteName: "Mertcan Öncül | Freelance Web Developer",
    description:
      "I'm Mertcan, a Freelance Web Developer. I create aesthetically and functionally powerful web projects by blending my technical knowledge and skills with creativity.",
  },
}
