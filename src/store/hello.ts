import { observable, action } from 'mobx';

export class HelloStore {
    @observable price = 0;
    @observable defaultVal = 1;

    @action.bound handlerChange (event) {
        this.defaultVal = event.target.value
    }
}

