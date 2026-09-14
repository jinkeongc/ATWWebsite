import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <header id="top" className={`container ${styles.header}`}>
      <div className="fade-up">
        <div className="eyebrow" style={{ marginBottom: 28 }}>
          <span className="eyebrow-rule" />
          Wellness product development partner
        </div>
        <h1 className={styles.heading}>
          OEM &amp; private-label wellness products, <em>from idea to finished product.</em>
        </h1>
        <p className={styles.lede}>
          ATW partners with brands, distributors and entrepreneurs to formulate, manufacture, package and deliver
          wellness products designed around their market.
        </p>
        <div className={styles.ctaRow}>
          <Button href="/contact#enquiry" variant="primary" size="lg">
            Start Your Product
          </Button>
          <Button href="/services" variant="secondary" size="lg">
            See How It Works
          </Button>
        </div>
      </div>
      <div className={`${styles.collage} fade-up-delay`}>
        <div className={styles.collageBackdrop} />
        <div className={styles.collageMain} data-parallax="-0.05">
          <ImageSlot
            label="hero: powders + beverage formulation, bright natural light"
            alt="Unbranded pouches, green drink powders and an iced green latte on a sunlit bench"
            priority
            sizes="(max-width: 900px) 100vw, 45vw"
            shape="rounded"
            radius={24}
            devSrc="/placeholders/hero-formulation.jpg"
            kenBurns
          />
        </div>
        <div className={styles.collageIngredient} data-parallax="0.06">
          <div className="idle-float">
            <ImageSlot
              label="ingredient close-up (wheatgrass / moringa)"
              alt="Fresh wheatgrass, moringa leaves and green powder on a plate"
              priority
              sizes="(max-width: 900px) 40vw, 15vw"
              shape="circle"
              devSrc="/placeholders/hero-ingredient-closeup.jpg"
              kenBurns
            />
          </div>
        </div>
        <div className={styles.collageCaption}>
          <span className={styles.collageCaptionTitle}>Idea → Sample → Shelf</span>
          <span className={styles.collageCaptionSub}>One partner across the whole journey</span>
        </div>
      </div>
    </header>
  );
}
