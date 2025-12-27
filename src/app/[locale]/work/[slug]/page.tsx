import { notFound } from "next/navigation"
import { CustomMDX } from "@/components/mdx"
import { formatDate, getPosts } from "@/app/utils"
import {
  AvatarGroup,
  Button,
  Flex,
  Heading,
  IconButton,
  SmartImage,
  Text,
} from "@/once-ui/components"
import { baseURL, renderContent } from "@/app/resources"
import { routing } from "@/i18n/routing"
import { unstable_setRequestLocale } from "next-intl/server"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { ProjectCard } from "@/components"

interface WorkParams {
  params: {
    slug: string
    locale: string
  }
}

export async function generateStaticParams() {
  const locales = routing.locales

  // Create an array to store all posts from all locales
  const allPosts = []

  // Fetch posts for each locale
  for (const locale of locales) {
    const posts = getPosts([
      "src",
      "app",
      "[locale]",
      "work",
      "projects",
      locale,
    ])
    allPosts.push(
      ...posts.map((post) => ({
        slug: post.slug,
        locale: locale,
      }))
    )
  }

  return allPosts
}

export function generateMetadata({ params: { slug, locale } }: WorkParams) {
  let post = getPosts([
    "src",
    "app",
    "[locale]",
    "work",
    "projects",
    locale,
  ]).find((post) => post.slug === slug)

  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    images,
    image,
    team,
  } = post.metadata
  let ogImage = image
    ? `https://${baseURL}${image}`
    : `https://${baseURL}/og?title=${title}`

  const canonical = `https://${baseURL}/${
    locale === "tr" ? "" : "en/"
  }work/${slug}`

  return {
    title,
    description,
    images,
    team,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://${baseURL}/${locale}/work/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Project({ params }: WorkParams) {
  unstable_setRequestLocale(params.locale)
  let post = getPosts([
    "src",
    "app",
    "[locale]",
    "work",
    "projects",
    params.locale,
  ]).find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const t = useTranslations()
  const { person } = renderContent(t)

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || []

  const { fullDate, fullDateNumeric } = formatDate(
    post.metadata.publishedAt,
    params.locale
  )

  return (
    <Flex
      as="section"
      fillWidth
      maxWidth="m"
      direction="column"
      alignItems="center"
      gap="l"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://${baseURL}${post.metadata.image}`
              : `https://${baseURL}/og?title=${post.metadata.title}`,
            url: `https://${baseURL}/${params.locale}/work/${post.slug}`,
            author: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />
      <Flex fillWidth maxWidth="xs" gap="16" direction="column">
        <Button
          href={`/${params.locale}/work`}
          variant="tertiary"
          size="s"
          prefixIcon="chevronLeft"
        >
          {params.locale === "tr" ? "Çalışmalar" : "Works"}
        </Button>
        <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      </Flex>
      {post.metadata.images.length > 0 && (
        <ProjectCard
          key={post.slug}
          isDetailed={true}
          href={`work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={
            post.metadata.team?.map((member) => ({ src: member.avatar })) || []
          }
        />
      )}
      <Flex
        style={{ margin: "auto" }}
        as="article"
        maxWidth="xs"
        fillWidth
        direction="column"
      >
        <Flex
          gap="12"
          marginBottom="24"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex gap="12" alignItems="center">
            {post.metadata.team && (
              <AvatarGroup reverseOrder avatars={avatars} size="m" />
            )}
            <Text
              as="time"
              dateTime={fullDateNumeric}
              variant="body-default-s"
              onBackground="neutral-weak"
            >
              {fullDate}
            </Text>
          </Flex>

          <Flex gap="12" alignItems="center">
            {post.metadata.link && (
              <IconButton
                key={post.metadata.link}
                href={post.metadata.link}
                icon={"link"}
                tooltip={post.metadata.title}
                className="hover:translate-y-6 transition-all"
                size="m"
                variant="ghost"
              />
            )}

            {post.metadata.githubLink && (
              <IconButton
                key={post.metadata.githubLink}
                href={post.metadata.githubLink}
                icon={"github"}
                tooltip={post.metadata.title}
                className="hover:translate-y-6 transition-all"
                size="m"
                variant="ghost"
              />
            )}

            {post.metadata.frontendMentorLink && (
              <IconButton
                key={post.metadata.frontendMentorLink}
                href={post.metadata.frontendMentorLink}
                icon={"frontendmentor"}
                tooltip={post.metadata.title}
                className="hover:translate-y-6 transition-all"
                size="m"
                variant="ghost"
              />
            )}
          </Flex>
        </Flex>

        <CustomMDX source={post.content} />
      </Flex>
    </Flex>
  )
}
