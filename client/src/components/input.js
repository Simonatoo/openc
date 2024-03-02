class Input extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        const root = this.shadowRoot

        const label = document.createElement('label')
        const input = document.createElement('input')

        label.textContent = this.label

        root.appendChild(label)
        root.appendChild(input) 

        this.style(root)
    }

    style(root) {
        const style = document.createElement('style')
        style.textContent = `
            label {
                color: var(--var-color-neutral-90);
            }

            input {
                padding: 8px 8px;
                font-size: 14px;
            }

            :host {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
        `
        root.appendChild(style)
    }

    get label() { return this.getAttribute('label') ?? 'title' }
    set label(value) { this.setAttribute('label', value) }

}

customElements.define('my-input', Input)