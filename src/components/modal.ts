import { MessageItem } from '../messageItem';

interface Modal {
}

export class ModalItem extends HTMLElement implements Modal {

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <div id="backdrop"></div>
      <div id="modal"></div>
    `
    shadow.appendChild(template.content.cloneNode(true));
    // this.shadowRoot.innerHTML = `
    //   <div id="backdrop"></div>
    //   <div id="modal"></div>
    // `
  }
}

customElements.define('es-modal', ModalItem);