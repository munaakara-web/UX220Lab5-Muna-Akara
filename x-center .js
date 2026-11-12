
class XCenter extends HTMLElement {
  connectedCallback() {
    // the inline styles get attached to this element...
    this.style.display = "block";
    this.style.textAlign = "center";
    this.style.margin = "1rem auto";
    this.style.maxWidth = "40rem";
  }
}

// custom element names must contain a hyphen
customElements.define("x-center", XCenter);
