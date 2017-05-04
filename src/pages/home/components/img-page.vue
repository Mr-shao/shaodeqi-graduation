<template>
  <div class="col-md-12 col-sm-12 clear mb15">
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in 2" :key="item">
        <img v-if="item === 1" src="../../../common/resource/img/1.jpg" height="500" width="100%" alt="">
        <img v-if="item === 2" src="../../../common/resource/img/2.jpg" height="500" width="100%" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }


  img{
    border-radius: 30px;
  }

/*  img{
    transition: all 1s ease 0s;
  }

  img:hover{
    transform:scale(1.1,1.1);
  }*/

</style>