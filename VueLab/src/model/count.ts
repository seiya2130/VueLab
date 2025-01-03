interface ICount {
    value: number;
    increment: () => void;
    decrement: () => void;
}

export class Count implements ICount {
    value: number;

    constructor(count: number = 0) {
        this.value = count;
    }

    increment(): void {
        this.value++;
    }

    decrement(): void {
        this.value--;
    }
}