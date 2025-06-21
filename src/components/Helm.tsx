//FOR SEO

import { Helmet } from "react-helmet-async";
interface HelmInterface {
  title: string;
  href: string;
  content: string;
  ogImage?: string;
}

export default function Helm({ content, href, title, ogImage }: HelmInterface) {
    const baseUrl = window.location.origin;
    const canonicalUrl = `${baseUrl}${href}`;
    const defaultOgImage = `${baseUrl}/og-image.png`;

    return (
        <Helmet>
            {/* Standard SEO */}
            <title>{title}</title>
            <meta name="description" content={content} />
            <link rel="canonical" href={canonicalUrl} />

            {/* OpenGraph for Social Media */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={content} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={ogImage || defaultOgImage} />
            
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={content} />
            <meta name="twitter:image" content={ogImage || defaultOgImage} />
        </Helmet>
    );
}
