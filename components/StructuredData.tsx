export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cordoba AI",
    url: "https://cordoba-ai.com",
    logo: "https://cordoba-ai.com/logo.png",
    description: "Enterprise software solutions, outsourcing, staffing, and managed services powered by AI",
    sameAs: [
      "https://twitter.com/cordoba_ai",
      "https://linkedin.com/company/cordoba-ai",
      "https://github.com/cordoba-ai"
    ],
    contact: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-890",
      contactType: "Business Contact",
      email: "hello@cordoba-ai.com"
    },
    service: [
      {
        "@type": "Service",
        name: "Software Solutions",
        description: "Custom-built applications tailored to your business needs with AI-assisted development and optimization."
      },
      {
        "@type": "Service",
        name: "Outsourcing & Staffing",
        description: "Access a talented pool of developers and specialists for your projects, with flexible engagement models."
      },
      {
        "@type": "Service",
        name: "Managed Services",
        description: "End-to-end management of your technical infrastructure with 24/7 monitoring and support."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
