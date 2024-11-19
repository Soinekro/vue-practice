<template>
    <div class="post">
        <h1>This is a post page</h1> {{ post }}
    </div>
</template>

<script>
export default {
    name: 'PostView',
    data() {
        return {
            post: this.$route.params.post
        }
    },
    methods: {
        getPost() {
            // Fetch the post from the API
        }
    },
    created() {
        this.getPost()
    }
}
</script>

<style>
.post {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
}
</style>