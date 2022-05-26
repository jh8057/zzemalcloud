<template>
    <div>
        <h2>Class Object</h2>
        <button @click="makeSquare">make square</button>
        {{ square }}
    </div>
</template>

<script lang="ts">
interface RecType {
    height: Number;
    width: Number;
}

class Rectangle implements RecType {
    height: Number;
    width: Number;

    constructor(height: Number, width: Number) {
        this.height = height;
        this.width = width;
    }
    // Getter
    // get area(): Number {
    //     return this.calcArea();
    // }
    // 메서드
    // calcArea(): Number {
    //     return this.height * this.width;
    // }
}
export default {
    data() {
        return {
            square: {},
        };
    },
    methods: {
        makeSquare() {
            const square = new Rectangle(10, 10);
            this.square = square;
        },
    },
};
</script>

<style></style>
