<template>
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="http://placehold.it/1280x720">
        <div class="carousel-caption">
          <h3>Caption 1</h3>
          <p>caption description</p>
        </div>
      </div>

      <div class="item">
        <img src="http://placehold.it/1280x720">
        <div class="carousel-caption">
          <h3>Caption 2</h3>
          <p>caption description</p>
        </div>
      </div>

      <div class="item">
        <img src="http://placehold.it/1280x720">
        <div class="carousel-caption">
          <h3>Caption 3</h3>
          <p>caption description</p>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>
