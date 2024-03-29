export default class Section {
  constructor({ items, renderer }, container) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }
  renderItems() {
    this._items.reverse().forEach((item) => {
      this._renderer(item);
    });
  }
  addItem(item) {
    this._container.prepend(item);
  }
}
