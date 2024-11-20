<template id="user">
    <div>
        <div v-if="user">
            <h1>
                detalle de usuario usuario con id {{user}}
            </h1>
        </div>
        <div v-else>
            <h1>
                detalle de lista de usuarios
            </h1>
        </div>
        <div v-if="user" id="nav-user">
            <router-link :to="{name:'users-index', params:{user:user}}">Index</router-link> |
            <router-link :to="{ name: 'profile-user', params: { user: user } }">profile</router-link> |
            <router-link :to="{ name: 'posts-user', params: { user: user } }">post-user</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'UserView',
    props: ['user'],
}
</script>

<style></style>