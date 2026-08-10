import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import styles from "./Formulations.module.css";

export function Formulations() {
  return (
    <section id="products" className={`container ${styles.section}`}>
      <div className={styles.head}>
        <div className="eyebrow" style={{ marginBottom: 18 }}>
          Example Formulations
        </div>
        <h2 className={styles.heading}>Proof of what our lab can build</h2>
        <p className={styles.intro}>
          Two formulations we developed in-house — treat them as starting points. Both can be customized,
          white-labelled, or simply sampled to judge our work.
        </p>
      </div>
      <div className={styles.rows}>
        <div className={`${styles.row} ${styles.rowPhotoLeft}`}>
          <div className={styles.photo} data-parallax="-0.05">
            <ImageSlot
              label="wheatgrass coffee: unbranded pouch + prepared cup, wheatgrass sprigs"
              shape="rounded"
              radius={24}
            />
          </div>
          <div>
            <h3 className={styles.title}>Wheatgrass Coffee</h3>
            <p className={styles.desc}>
              Rich coffee flavor combined with the superfood profile of wheatgrass — a natural caffeine alternative
              carrying vitamins, minerals and antioxidants. Adjustable roast character, sweetness and serving
              format.
            </p>
            <div className={styles.ctaRow}>
              <Button href="#contact" variant="primary" size="md">
                Request a Sample
              </Button>
              <Button href="#contact" variant="secondary" size="md">
                Customize This Product
              </Button>
            </div>
          </div>
        </div>
        <div className={`${styles.row} ${styles.rowPhotoRight}`}>
          <div>
            <h3 className={styles.title}>Moringa Chocolate</h3>
            <p className={styles.desc}>
              Cocoa warmth meets moringa&apos;s dense nutritional profile. A wellness chocolate format that adapts
              to drinking blends, bars or single-serve sachets for your market.
            </p>
            <div className={styles.ctaRow}>
              <Button href="#contact" variant="primary" size="md">
                Request a Sample
              </Button>
              <Button href="#contact" variant="secondary" size="md">
                Customize This Product
              </Button>
            </div>
          </div>
          <div className={`${styles.photo} ${styles.photoOrder1}`} data-parallax="-0.05">
            <ImageSlot label="moringa chocolate: cocoa powder, moringa leaves, neutral sachet" shape="rounded" radius={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
