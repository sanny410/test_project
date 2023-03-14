import {makeObservable, observable} from 'mobx';

/**
 * Шаблон оценки
 */
export default class HelloWorldStore {
    constructor() {
        makeObservable(this);
    }

    @observable
    helloWorld = 'Здесь ты можешь работать со своими задачами';
}
