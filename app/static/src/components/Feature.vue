<template>
  <div class="row">
    <div class="col-lg-12 text-center">
        <h3>{{ name }}</h3>
    </div>
  </div>

  <div class="row text-center">

    <span v-if="imgRight != null">
      <div class="col-md-8">
        <p>
          <slot>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </slot>
        </p>
      </div>
      <div class="col-md-4">
        <img src="{{ imgUrl }}" class="img-responsive" alt="placeholder" />
      </div>
    </span>



    <span v-else>
      <div class="col-md-4">
        <img src="{{ imgUrl }}" class="img-responsive" alt="placeholder" />
      </div>
      <div class="col-md-8">
        <p>
          <slot>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </slot>
        </p>
      </div>
    </span>
  </div>
</template>

<script>
module.exports = {
  props: ['name', 'imgUrl', 'imgRight']
}
</script>
