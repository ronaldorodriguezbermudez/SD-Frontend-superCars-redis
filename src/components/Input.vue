<template>

    <div class="form-floating mb-3">
        <input v-if="isText" type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
        <input v-else="isText" type="password" class="form-control" id="floatingInput" placeholder="name@example.com">

        <label for="floatingInput"> {{label}}</label>
    </div>

</template>

<script>
    export default {
        props:{
            label : String,
            isText : Boolean,
            model: String
        }
        
    }
</script>