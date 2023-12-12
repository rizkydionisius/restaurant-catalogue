class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero">
      <h1 class="tagline">Selamat Datang di Resto Dion</h1>
    </section>
    `;
  }
}

customElements.define('hero-banner', Hero);
