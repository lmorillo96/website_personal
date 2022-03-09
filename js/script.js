import scrollTopButton from "./boton_scroll.js";
import scrollId from "./scroll_id.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    scrollTopButton(".scroll-top-btn");
    scrollId();
})