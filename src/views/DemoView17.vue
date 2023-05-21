<template>
<div app="DemoView17">
    <h1>{{ title }}</h1>
    <div ref="image">
        <a href="https://vuejs.org/" target="_blank">
            <img src="@/assets/logo.png" class="logo vue" alt="Vue logo"/>
        </a>
        <p>{{title}}</p>
    </div>
</div>
    <a :href="newData" download="image.jpg">export image</a>
</template>

<script>
import html2canvas from 'html2canvas';
// https://html2canvas.hertzen.com/

export default {
    name: 'DemoView17',
    data() {
        return {
            title: "#html2canvas in Vue 3",
            imageData: null,
            newData: null
        }
    },
    mounted() {
        this.exportPdf();
    },
    methods: {
        exportPdf() {
            html2canvas(this.$refs.image).then(canva => {
                this.imageData = canva.toDataURL("image/jpg");
                this.newData = this.imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
            });
        }
    }
}
</script>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>