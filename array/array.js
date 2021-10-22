// const array = ["Diego", "Karen", "Oscar"];

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    // Añade un elemento al final del array
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    // Los arrays empiezan en 0, es por eso que le restamos 1 a la longitud del array
    // Elimina el último elemento del array
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);

        return item;
    }

    // actualiza el valor de los indices cada vez que se elimina un elemento
    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    // Elimina el primer elemento del array
    shift() {
        return this.delete(0);
    }

    // Agrega un elemento al inicio del array
    unshift(item) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
        return this.data;
    }
}

const myArray = new MyArray();