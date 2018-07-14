import { LitElement, html } from '@polymer/lit-element';

export default class Header extends LitElement {
  static get properties() {
    return {
      headerTitle: String
    };
  }

  _render({ headerTitle }) {
    return html`
      <style>
        div {
          box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
            0 3px 1px -2px rgba(0,0,0,0.12),
            0 1px 5px 0 rgba(0,0,0,0.2);
          padding: 1rem;
        }
      </style>
      <div on-click="${() => console.log('onclick event')}">${headerTitle}</div>
    `;
  }

  _didRender(props, changedProps, prevProps) {
    console.log('did render', {props, changedProps, prevProps})
  }

  _firstRendered() {
    console.log('first render')
  }
}

customElements.define('app-header', Header);
