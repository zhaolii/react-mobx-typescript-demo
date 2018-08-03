

import Hello from "./hello.ts";

class Stores {
  constructor() {
    this.hello = new Hello();
  }
}

export default new Stores();