<template>
  <div>
    <h1>
        This is the tienda page
    </h1>
    <p>
        mi nombre es {{ nombre }}
    </p>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['nombre'])
    }
}
</script>

<style>

</style>