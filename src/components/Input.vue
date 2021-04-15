<template>
    <div class="input-style">
      <input value="" v-bind:placeholder="this.placeholder">
    </div>
</template>

<script>
  export default {
    name: 'Input',
    props: {
      placeholder: String,
    }
  }
</script>

<style lang="scss" scoped>
.input-style {
  input { 
    padding: 8px;
    height: 36px;

    border: 1px solid;  
    border-radius: 4px;
  }

  & + div.input-style {
    margin-top: 16x;
  }
}
</style>