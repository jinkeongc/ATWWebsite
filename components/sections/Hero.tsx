import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <header id="top" className={`container ${styles.header}`}>
      <div className="fade-up">
        <div className="eyebrow" style={{ marginBottom: 28 }}>
          <span className="eyebrow-rule" />
          OEM &amp; Private-Label Wellness · Malaysia
        </div>
        <h1 className={styles.heading}>From idea to finished wellness product.</h1>
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
            shape="rounded"
            radius={24}
            devSrc="/placeholders/hero-formulation.jpg"
          />
        </div>
        <div className={styles.collageIngredient} data-parallax="0.06">
          <ImageSlot
            label="ingredient close-up (wheatgrass / moringa)"
            shape="circle"
            devSrc="/placeholders/hero-ingredient-closeup.jpg"
          />
        </div>
        <div className={styles.collageCaption}>
          <span className={styles.collageCaptionTitle}>Idea → Sample → Shelf</span>
          <span className={styles.collageCaptionSub}>One partner across the whole journey</span>
        </div>
      </div>
    </header>
  );
}
