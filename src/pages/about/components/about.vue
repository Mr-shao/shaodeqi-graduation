<template>
    <div class="clear p15 about m15">
        <div style="width: 38%; text-align: center"  class="mt15 mr30 pull-left">
            <img src="../../../common/resource/img/sdz2.png" alt="">
        </div>
        <div class="mt30">
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;好学生教育创办于2014年，前身为哈尔滨”大学生家教团队“，由哈尔滨各高校200多名优秀大学生组成，为莘莘学子提供优质的上门家教服务。</h2>
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;好学生教育以”专注于教育“为口号，以优质的服务和真诚的态度广受学生和家长的好评，大学生家教老师经过层层选拔，拥有丰富的家教经验，且具有”与孩子无代沟“、”授课范围广“、”态度亲和“等优点。现有周润发老师、刘德华教授等优秀教师进行指导带队，旨在提高国内学生知识水平，拓展校外实践活动。</h2>
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;在本校老师和学生的共同努力下，先后培育了章泽天、李万崇等多数优秀学员。</h2>
            <h2><i style="color: red">（以上数据为达到毕设展示效果，为虚构，请勿当真）</i></h2>
        </div>
        <div class="pull-right">
            <s-signature></s-signature>
        </div>
    </div>
</template>
<script>
import sSignature from '../../../common/components/signature.vue'
export default {
    components: {
        'sSignature': sSignature
    }
}
</script>
<style lang="scss" scoped>
    .about{
        background: url(../../../common/resource/img/green.jpg) no-repeat 100% 100%;
        background-size: cover;
        border-radius: 20px;
    }
</style>