<template>
    <div class="card-container">
        <div v-for="(image, index) in images" :key="index" class="card">
            <img :src="image.url">
            <h5>{{ image.desc }}</h5>
        </div>
    </div>
</template>

<script>

export default {
    mounted() { this.loadImages(); },
    data() {
        return {
            images: []
        }
    },
    methods: {
        loadImages() {
            axios.get('/api/get-images')
                .then((result) => {
                    this.images = result.data;

                }).catch(console.error);
        }
    }

}
</script>

<style scoped>
.card {
    width: 15rem;
    padding: 0.22rem;
    margin: 0.22rem;
    object-fit: contain;

}

.card-container {

    display: flex;
    flex-direction: row;
    justify-content: center;

}

@media only screen and (max-width: 600px) {

    .card-container {

        flex-direction: column;
        align-items: center;

    }
}
</style>