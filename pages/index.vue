<template>
    <h1>
        <p>Grids Practice</p>
    </h1>
    <div class="box">
        <div class="item1">NAV</div>
        <div class="item2">LOGO</div>
        <div class="item3">Cotent</div>
    </div>
    <div class="container">
        <div class="grid">
            <div class="g-col-6">.g-col-6</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
        </div>
    </div>
</template>
<script setup>

</script>
<style lang='scss'>
.grid {
    div {
        background-color: #afa;
    }
}

.box {
    height: 500px;
    width: 500px;
    // border: #696969 1px solid;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    // grid-template-columns: repeat(5, 100px);
    // grid-template-rows: 100px 200px;
    // grid-auto-rows: 150px;
    // grid-auto-flow: column;
    // grid-template-columns: 100px 200px;
    // grid-template-rows: 1fr 100px;
    // grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    // grid-auto-columns: 100px;
    // grid-auto-flow: column; // 多出來的子元素排列方式，預設是row
    // grid-auto-columns: 1fr;
    // grid-auto-rows: 100px;
    // grid-template-columns: repeat(5, 1fr);
    // grid-template-rows: repeat(5, 1fr);
    // grid-template-rows: 100px 100px;
    // grid-auto-flow: column;
    // grid-template-areas:
    //     "A B B"
    //     "A C C";
    grid-gap: 10px 0;
    // grid-row-gap: 100px;

}

.item1 {
    // grid-area: A;
    // grid-column: 1/span 2;
    // grid-column: 1 / 2;
    // grid-row: 1/ -2;
    // grid-column: 1;
    // width: 100px;
    grid-column: span 4;
    background: #afa;
}

.item2 {
    // grid-area: B;
    // grid-row: 1 / 2;
    // grid-column: 2 / 5;
    // grid-row: 2;
    // grid-column: 2/5;
    // grid-row: 2;
    // grid-column: 3;
    // width: 100px;
    // grid-column: span 4;
    grid-column: span 2;
    background: #aaf;
}

.item3 {
    // grid-area: C;
    grid-column: span 3;
    background-color: cadetblue;
}
</style>
