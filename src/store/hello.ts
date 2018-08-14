import { observable, action } from 'mobx';

export class HelloStore {
    @observable counter = 0;
    @observable defaultVal = 1;

    @action.bound handlerChange () {
        this.counter++
    }
}

