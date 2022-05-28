<template>
    <div>
        <h2>Class Object</h2>
        <button @click="makeSquare">make square</button>
        {{ square }}<br />
        <button @click="getArea">get area</button>
        {{ area }}
    </div>
</template>

<script lang="ts">
interface RecType {
    height: number;
    width: number;
    area: number;
}

class Rectangle implements RecType {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area(): number {
        return Rectangle.calcArea(this.height, this.width);
    }
    // 메서드
    static calcArea(h: number, w: number): number {
        return h * w;
    }
}
export default {
    data() {
        return {
            square: {},
            area: 0,
        };
    },
    computed: {
        basicSqaure() {
            return new Rectangle(10, 10);
        },
    },
    methods: {
        makeSquare() {
            const square = new Rectangle(10, 10);
            this.square = square;
        },
        getArea() {
            const square = new Rectangle(10, 10);
            this.area = square.area;
        },
    },
};
</script>

<style></style>
