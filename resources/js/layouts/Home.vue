<template>
    <div>
        <form @submit.prevent="uploadImage">
            <input type="file" @change="changeFile" accept="image/jpeg, image/png" placeholder="Pick Image" id="file">
            <input type="text" placeholder="Description" v-model="desc">
            <input type="submit" value="upload image">
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            file: {},
            desc: ""
        }
    },
    methods: {
        uploadImage() {
            var formData = new FormData();
            formData.append("image",this.file);
            formData.append("desc",this.desc);
            axios.post('/api/upload-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((result) => {
                    console.log(result.data);
                    alert(result.data.status);
                }).catch(console.error);
        },
        changeFile(event) {
            this.file = event.target.files[0];
        }
    }

}
</script>

<style scoped>

</style>