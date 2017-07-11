<template>
  <div class="clear mb15 mt15">
    <el-carousel trigger="click" height="600px">
      <el-carousel-item class="text-center" v-for="item in 3" :key="item">
        <img v-if="item === 1" src="../image/graduation1.png"  width="70%" alt="">
        <img v-if="item === 2" src="../image/graduation2.png"  width="70%" alt="">
        <img v-if="item === 3" src="../image/graduation3.png"  width="70%" alt="">
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


/*  img{
    transition: all 1s ease 0s;
  }

  img:hover{
    transform:scale(1.1,1.1);
  }*/

</style>