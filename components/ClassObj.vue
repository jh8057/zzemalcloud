<template>
    <div>
        <h2>Class Object</h2>
        <div>square : {{ basicSqaure }}</div>
        <div>area : {{ getArea }}</div>
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
        getArea() {
            return new Rectangle(10, 10).area;
        },
    },
};
</script>

<style></style>
