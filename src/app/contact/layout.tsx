import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const pageUrl = `${baseUrl}/contact`;
  const description = "Get in touch with me. Send a message or connect on social media.";

  return {
    title: "Contact",
    description,
    openGraph: {
      title: "Contact",
      description,
      type: "website",
      url: pageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact",
      description,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
