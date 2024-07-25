class CharacterStatusBar extends DrawableObject {
  IMAGES = [
    "./img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png",
  ];

  percentage = 100;

  constructor() {
    super();
    this.y = -10;
    this.x = 10;
    this.width = 200;
    this.height = 60;

    this.loadImages(this.IMAGES); // Wie gehabt, in der DrawableObject zum Zeichenen der Bilder.
    this.setPercentage(100);
  }

  /**
   * Wird in der world.class.js auf Pepe sein "this.PepeStatusBar" angewand.
   * In der "checkCollisions()", bezogen auf "energy" nach der "hit()" Fn auf den this.character, in movable-object.class.js.
   * Bestimmung der Enerie in der Statusleiste.
   * @param {current energy from Pepe} percentage
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    /**\
     * Die "resolveImageIndex()" Fn als ersatz der Indexierung für die "IMAGES".
     */
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path]; // img und imageCache sind dann in der DrawableObject deklariert.
  }

  /**
   * Einstufung der Barleiste.
   * @returns number
   */
  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
