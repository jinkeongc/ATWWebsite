import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";
import { CATEGORIES, getCategory, relatedCategories } from "@/lib/categories";
import { FUNCTIONS } from "@/lib/capabilities";
import { ScrollEffects } from "@/components/ScrollEffects";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { ManufacturingStandards } from "@/components/sections/ManufacturingStandards";
import styles from "./category.module.css";

/** Build all three category pages at deploy time; reject any other slug. */
export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return createMetadata({
    title: category.title,
    description: category.description,
    path: `/products/${category.slug}`,
  });
}

export default async function CategoryPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const functions = category.functionIds
    .map((id) => FUNCTIONS.find((fn) => fn.id === id))
    .filter((fn) => fn !== undefined);
  const related = relatedCategories(category.slug);

  // Tells search engines where this page sits under /products.
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      {
        "@type": "ListItem",
        position: 3,
        name: category.navLabel,
        item: `${SITE_URL}/products/${category.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ScrollEffects />
      <Nav />

      {/* Hero */}
      <header className={`container ${styles.hero}`}>
        <nav aria-label="Breadcrumb" className={`${styles.crumbs} fade-up`}>
          <Link href="/products" className={styles.crumbLink}>
            Products
          </Link>
          <span aria-hidden="true" className={styles.crumbSep}>
            /
          </span>
          <span className={styles.crumbCurrent}>{category.navLabel}</span>
        </nav>
        <div className={styles.heroGrid}>
          <div>
            <div className="eyebrow fade-up">
              <span className="eyebrow-rule" />
              {category.eyebrow}
            </div>
            <h1 className={`${styles.heroHeading} fade-up`}>
              {category.h1Lead} <em>{category.h1Em}</em>
            </h1>
            <p className={`${styles.heroCopy} fade-up-delay`}>{category.intro}</p>
            <div className={`${styles.heroCtas} fade-up-delay`}>
              <Button href="/contact#enquiry" variant="primary" size="lg">
                Start Your Product
              </Button>
              <Button href="/capabilities" variant="secondary" size="lg">
                Browse Our Capabilities
              </Button>
            </div>
          </div>
          <div className={styles.heroPhoto}>
            <ImageSlot
              label={category.hero.label}
              alt={category.hero.alt}
              radius={24}
              devSrc={category.hero.src}
              sizes="(max-width: 1024px) 100vw, 46vw"
              priority
            />
          </div>
        </div>
      </header>

      {/* What this category covers */}
      <section className={`container ${styles.buildsSection}`}>
        <div className={styles.sectionHead} data-reveal>
          <h2 className={styles.sectionHeading}>{category.buildsHeading}</h2>
          <p className={styles.sectionIntro}>{category.buildsIntro}</p>
        </div>
        <div className={styles.buildGrid} data-reveal-stagger>
          {category.builds.map((b) => (
            <div key={b.name} className={styles.buildCard} data-reveal>
              <h3 className={styles.buildName}>{b.name}</h3>
              <p className={styles.buildDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The choices that are yours */}
      <section className={styles.choiceBand}>
        <div className={`container ${styles.choiceInner}`}>
          <div className={styles.choiceHead} data-reveal>
            <div>
              <div className="eyebrow" style={{ color: "var(--gold)" }}>
                <span className="eyebrow-rule" style={{ background: "var(--gold)" }} />
                Your decisions
              </div>
              <h2 className={styles.choiceHeading}>{category.choicesHeading}</h2>
            </div>
            <p className={styles.choiceIntro}>{category.choicesIntro}</p>
          </div>
          <div className={styles.choiceGrid} data-reveal-stagger>
            {category.choices.map((c) => (
              <div key={c.name} className={styles.choiceCard} data-reveal>
                <h3 className={styles.choiceName}>{c.name}</h3>
                <p className={styles.choiceNote}>{c.note}</p>
                <div className={styles.choiceTags}>
                  {c.options.map((o) => (
                    <span key={o} className={styles.choiceTag}>
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Functional directions */}
      <section className={`container ${styles.functionSection}`}>
        <div className={styles.functionGrid}>
          <div data-reveal="left">
            <div className="eyebrow">
              <span className="eyebrow-rule" />
              Formulation
            </div>
            <h2 className={styles.sectionHeading}>{category.functionsHeading}</h2>
            <p className={styles.sectionIntro}>{category.functionsCopy}</p>
            <div className={styles.functionCta}>
              <Button href="/capabilities#library" variant="secondary" size="md">
                See the Ingredient Library
              </Button>
            </div>
          </div>
          <ul className={styles.functionList} data-reveal="right">
            {functions.map((fn) => (
              <li key={fn.id} className={styles.functionItem}>
                <span className={styles.functionName}>{fn.name}</span>
                <span className={styles.functionBlurb}>{fn.blurb}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Packaging */}
      <section className={styles.packBand}>
        <div className={`container ${styles.packInner}`}>
          <div className={styles.packPhoto}>
            <ImageSlot
              label={category.packagingPhoto.label}
              alt={category.packagingPhoto.alt}
              radius={24}
              devSrc={category.packagingPhoto.src}
              sizes="(max-width: 1024px) 100vw, 42vw"
              innerParallax={0.9}
              kenBurns
            />
          </div>
          <div data-reveal="right">
            <div className="eyebrow">
              <span className="eyebrow-rule" />
              Packaging
            </div>
            <h2 className={styles.sectionHeading}>{category.packagingHeading}</h2>
            <p className={styles.sectionIntro}>{category.packagingCopy}</p>
            <ul className={styles.packList}>
              {category.packagingOptions.map((p) => (
                <li key={p.name} className={styles.packItem}>
                  <span className={styles.packName}>{p.name}</span>
                  <span className={styles.packDesc}>{p.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How a project runs */}
      <section className={`container ${styles.processSection}`}>
        <div className={styles.processGrid}>
          <div data-reveal="left">
            <div className="eyebrow">
              <span className="eyebrow-rule" />
              The process
            </div>
            <h2 className={styles.sectionHeading}>{category.processHeading}</h2>
            <p className={styles.sectionIntro}>{category.processCopy}</p>
            <div className={styles.functionCta}>
              <Button href="/services" variant="secondary" size="md">
                See How We Work
              </Button>
            </div>
          </div>
          <div className={styles.processPhoto}>
            <ImageSlot
              label={category.processPhoto.label}
              alt={category.processPhoto.alt}
              radius={24}
              devSrc={category.processPhoto.src}
              sizes="(max-width: 1024px) 100vw, 46vw"
              innerParallax={0.9}
              kenBurns
            />
          </div>
        </div>
      </section>

      <ManufacturingStandards />

      {/* Questions we get asked */}
      <section className={styles.faqBand}>
        <div className={`container ${styles.faqInner}`}>
          <div className={styles.sectionHead} data-reveal>
            <div className="eyebrow">
              <span className="eyebrow-rule" />
              Before you ask
            </div>
            <h2 className={styles.sectionHeading}>Questions we get asked a lot</h2>
          </div>
          <div className={styles.faqList} data-reveal-stagger>
            {category.faqs.map((f) => (
              <div key={f.q} className={styles.faqItem} data-reveal>
                <h3 className={styles.faqQ}>{f.q}</h3>
                <p className={styles.faqA}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related categories + closing CTA */}
      <section className={`container ${styles.closeSection}`}>
        <div className={styles.relatedRow} data-reveal>
          <span className={styles.relatedHead}>Other things we make</span>
          <div className={styles.relatedLinks}>
            {related.map((r) => (
              <Link key={r.slug} href={`/products/${r.slug}`} className={styles.relatedLink}>
                {r.navLabel}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                  className={styles.relatedArrow}
                >
                  <path
                    d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.closeCta} data-reveal>
          <h2 className={styles.closeHeading}>{category.ctaHeading}</h2>
          <p className={styles.closeCopy}>{category.ctaCopy}</p>
          <Button href="/contact#enquiry" variant="primary" size="xl">
            Tell Us What You Want to Create
          </Button>
          <span className={styles.closeNote}>
            Every project runs under {SITE_NAME} as an OEM partner — your brand on the pack, ours nowhere on it.
          </span>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
