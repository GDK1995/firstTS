interface Message {
  setText(): string;
  setHeader(): string;
  textSetter(): object;
}

export class MessageItem implements Message {
  
  constructor() {
  }

  setHeader(): string {
    const input = document.getElementById('inp') as HTMLInputElement;
    return input.value;
  }

  setText(): string {
    const textarea = document.getElementById('txt') as HTMLTextAreaElement;
    return textarea.value;
  }

  textSetter = () => {
    const header = this.setHeader();
    const text = this.setText();
    const data = {
      header: header,
      text: text
    }
    return data
  }
}


