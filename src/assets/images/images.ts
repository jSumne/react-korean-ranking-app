import chickandbeers from "./chickandbeers.png";
import han from "./han.jpg";
import haru from "./haru.jpg";
import jeonju from "./jeonju.png";
import ktown from "./ktown.png";
import treestone from "./treestone.png";
import yami from "./yami.jpg";

const images = [
    { alt: "Ha Ru Restaurant", src: haru },
    { alt: "Chick & Beers", src: chickandbeers },
    { alt: "Treestone BBQ", src: treestone },
    { alt: "Han Bar", src: han },
    { alt: "K-Town Buffet", src: ktown },
    { alt: "Yami Restaurant", src: yami },
    { alt: "Jeonju Restaurant", src: jeonju },
];

export type RestaurantImages = typeof images;
export default images;
