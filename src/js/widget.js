export class Widget {
  constructor(parentEl, text) {
    this.parentEl = parentEl;
    this.text = text;
    this.markup = `
    <div class="widget">
    <button type="button" class="btn" data-collapsible-text="${this.text}">Collapse</button>
    </div>
      `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.markup;
  }
}
