

import HelloStore from "./hello.ts";

class Stores {
  constructor() {
    this.hello = new HelloStore();
  }
}

export default new Stores();