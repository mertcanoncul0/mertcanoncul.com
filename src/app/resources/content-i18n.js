import { InlineCode } from "@/once-ui/components"
import { title } from "process"

const createI18nContent = (t) => {
  const person = {
    firstName: "Mertcan",
    lastName: "Öncül",
    get name() {
      return `${this.firstName} ${this.lastName}`
    },
    role: t("person.role"),
    avatar: "/logo.webp",
    location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["Türkçe", "English"], // optional: Leave the array empty if you don't want to display languages
  }

  const newsletter = {
    display: true,
    title: <>{t("newsletter.title", { firstName: person.firstName })}</>,
    description: <>{t("newsletter.description")}</>,
  }

  const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
      name: "GitHub",
      icon: "github",
      link: "https://github.com/mertcanoncul0",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/mertcan-öncül-80b976218",
    },
    {
      name: "FrontendMentor",
      icon: "frontendmentor",
      link: "https://www.frontendmentor.io/profile/mertcanoncul0",
    },
    {
      name: "X",
      icon: "x",
      link: "",
    },
    {
      name: "Email",
      icon: "email",
      link: "mailto:mertcanoncul@icloud.com",
    },
  ]

  const home = {
    label: t("home.label"),
    title: t("home.title", { name: person.name }),
    description: t("home.description", { role: person.role }),
    headline: <>{t("home.headline")}</>,
    subline: <>{t("home.subline")}</>,
  }

  const about = {
    label: t("about.label"),
    title: t("about.title"),
    description: t("about.description", {
      name: person.name,
      role: person.role,
      location: person.location,
    }),
    tableOfContent: {
      display: true,
      subItems: true,
    },
    avatar: {
      display: true,
    },
    calendar: {
      display: true,
      link: "https://cal.com/mertcan-oncul-slszny",
    },
    intro: {
      display: true,
      title: t("about.intro.title"),
      description: <>{t("about.intro.description")}</>,
    },
    work: {
      display: true, // set to false to hide this section
      title: t("about.work.title"),
      experiences: [
        {
          company: "Net Dünyası",
          timeframe: t("about.work.experiences.netdunyasi.timeframe"),
          role: t("about.work.experiences.netdunyasi.role"),
          achievements: t(
            "about.work.experiences.netdunyasi.achievements"
          ).split(";"),
          images: [
            // optional: leave the array empty if you don't want to display images
            {
              src: "/images/experience/deneyim-1.jpg",
              alt: "Project image",
              width: 16,
              height: 9,
            },
          ],
        },
      ],
    },
    studies: {
      display: true, // set to false to hide this section
      title: t("about.studies.title"),
      institutions: [
        {
          name: t("about.studies.institutions.University of Nisantasi.title"),
          description: (
            <>
              {t(
                `about.studies.institutions.University of Nisantasi.description`
              )}
            </>
          ),
        },
      ],
    },
    technical: {
      display: true, // set to false to hide this section
      title: t("about.technical.title"),
      skills: [
        {
          title: "Next.js",
          description: <>{t("about.technical.skills.Nextjs.description")}</>, // "." not accepted in next-intl namespace
          images: [
            {
              src: "/images/technical/next.png",
              alt: "Project image",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          title: "React.js",
          description: <>{t("about.technical.skills.React.description")}</>, // "." not accepted in next-intl namespace
          images: [
            {
              src: "/images/technical/react.jpg",
              alt: "Project image",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          title: "Typescript",
          description: (
            <>{t("about.technical.skills.Typescript.description")}</>
          ),
          images: [
            {
              src: "/images/technical/typescript.png",
              alt: "Project image",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          title: "Tailwind CSS",
          description: (
            <>{t("about.technical.skills.Tailwindcss.description")}</>
          ),
          images: [
            {
              src: "/images/technical/tailwind.jpg",
              alt: "Project image",
              width: 16,
              height: 9,
            },
          ],
        },
      ],
    },
  }

  const blog = {
    label: t("blog.label"),
    title: t("blog.title"),
    headline: t("blog.headline"),
    description: t("blog.description", { name: person.name }),
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
  }

  const work = {
    label: t("work.label"),
    title: t("work.title"),
    description: t("work.description", { name: person.name }),
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
  }

  const gallery = {
    label: t("gallery.label"),
    title: t("gallery.title"),
    description: t("gallery.description", { name: person.name }),
    // Images from https://pexels.com
    images: [
      {
        src: "/images/gallery/img-01.jpg",
        alt: "image",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-02.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-03.jpg",
        alt: "image",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-04.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-05.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-06.jpg",
        alt: "image",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-07.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-08.jpg",
        alt: "image",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-09.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-10.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-11.jpg",
        alt: "image",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-12.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-13.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-14.jpg",
        alt: "image",
        orientation: "horizontal",
      },
    ],
  }

  return {
    person,
    social,
    newsletter,
    home,
    about,
    blog,
    work,
    gallery,
  }
}

export { createI18nContent }
