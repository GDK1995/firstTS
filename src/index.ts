import "./assets/index.scss";
import { MessageItem } from './messageItem';

interface Modal {
}

export class ModalItem extends HTMLElement implements Modal {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.innerHTML = `
      <style>
        #backdrop {
          position: fixed;
          background-color: rgba(116, 116, 116, 0.651);
          z-index: 1;
          top: 0px;
          bottom: 0px;
          left: 0px;
          right: 0px;
          width: 100%;
        }
        #modal {
          position: fixed;
          z-index: 2;
          border-radius: 16px;
          border: none;
          background-color: rgb(253, 251, 251);
          min-height: 150px;
          width: 50%;
          margin: 100px 25%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 8px;
        }
        #actions {
          display: flex;
          justify-content: flex-end;
        }
      </style>
      <div id="backdrop"></div>
      <div id="modal">
        <header>Вы отправляете</header>
        <section id="main">
          <slot></slot>
        </section>
        <section id="actions">
          <button>Да</button>
          <button>Нет</button>
        </section>
      </div>
    `
  }
}

customElements.define('es-modal', ModalItem);