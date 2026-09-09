import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import styles from "./Formulations.module.css";

export function Formulations() {
  return (
    <section id="products" className={`container ${styles.section}`}>
      <div className={styles.head} data-reveal>
        <div className="eyebrow" style={{ marginBottom: 18 }}>
          Example Formulations
        </div>
        <h2 className={styles.heading}>Proof of what our lab can build</h2>
        <p className={styles.intro}>
          Two formulations from our own lab — treat them as starting points, or simply sample them to judge our
          work.
        </p>
      </div>
      <div className={styles.rows}>
        <div className={`${styles.row} ${styles.rowPhotoLeft}`}>
          <div className={styles.photo}>
            <ImageSlot
              label="wheatgrass coffee: unbranded pouch + prepared cup, wheatgrass sprigs"
              shape="rounded"
              radius={24}
              devSrc="/placeholders/formulation-wheatgrass-coffee.jpg"
              innerParallax={0.9}
              kenBurns
            />
          </div>
          <div data-reveal="right">
            <h3 className={styles.title}>Wheatgrass Coffee</h3>
            <p className={styles.desc}>
              Rich coffee flavor meets the superfood profile of wheatgrass — a natural caffeine alternative,
              adjustable in roast, sweetness and serving format.
            </p>
            <div className={styles.ctaRow}>
              <Button href="/contact#enquiry" variant="primary" size="md">
                Request a Sample
              </Button>
              <Button href="/contact#enquiry" variant="secondary" size="md">
                Customize This Product
              </Button>
            </div>
          </div>
        </div>
        <div className={`${styles.row} ${styles.rowPhotoRight}`}>
          <div data-reveal="left">
            <h3 className={styles.title}>Moringa Chocolate</h3>
            <p className={styles.desc}>
              Cocoa warmth meets moringa&apos;s dense nutritional profile — adaptable to drinking blends, bars or
              single-serve sachets.
            </p>
            <div className={styles.ctaRow}>
              <Button href="/contact#enquiry" variant="primary" size="md">
                Request a Sample
              </Button>
              <Button href="/contact#enquiry" variant="secondary" size="md">
                Customize This Product
              </Button>
            </div>
          </div>
          <div className={`${styles.photo} ${styles.photoOrder1}`}>
            <ImageSlot
              label="moringa chocolate: cocoa powder, moringa leaves, neutral sachet"
              shape="rounded"
              radius={24}
              devSrc="/placeholders/formulation-moringa-chocolate.jpg"
              innerParallax={0.9}
              kenBurns
            />
          </div>
        </div>
      </div>
    </section>
  );
}
