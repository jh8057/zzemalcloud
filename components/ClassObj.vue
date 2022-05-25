<template>
    <div>
        <h2>Class Object</h2>
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
    methods: {
        makeSquare() {
            const square = new Rectangle(10, 10);
            return square;
        },
    },
};
</script>

<style></style>
