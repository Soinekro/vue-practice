<template>
    <div class="user-post">
        <h1>This is the user {{ user }} post page</h1>
        {{ post }}
    </div>
</template>

<script>
export default {
    name: 'UserPostView',
    data() {
        return {
            user: this.$route.params.user,
            post: this.$route.params.post
        }
    },
    mounted(){
        console.log(this.$route.params);
        
    }
}
</script>

<style>

</style>