<template>
    <div class="map-border m15 clear">
        <div id="mapDiv" class="mr20"></div>
        <div class="text-lighter">
            <h2>地址：<i>黑龙江省南岗区理工大学西区6公寓</i></h2>
            <h2>邮编：<i>150080</i></h2>
            <div class="text-center">
                <img src="../../../common/resource/img/sdz.png" alt="">
            </div>
        </div>
    </div>
</template>
<script type="text/javascript" src='http://webapi.amap.com/maps?v=1.3&key=2e2a60924ebc5be0731e134fadd880ea'></script>
<script>
    export default {
        mounted () {
            var map = new AMap.Map('mapDiv',{
                zoom: 17,
                center: [126.616795, 45.713689]//new AMap.LngLat(116.39,39.9)
            });
            var marker = new AMap.Marker({
                position: [126.616795, 45.713689]
            });
            marker.setMap(map);
            AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
                var toolBar = new AMap.ToolBar();
                var scale = new AMap.Scale();
                map.addControl(toolBar);
                map.addControl(scale);
            })
        }
    }
</script>
<style  lang="scss" scoped>
    .map-border{
        border: 2px solid #20A0FF;
    }
    #mapDiv{
        float: left;
        height: 500px;
        width: 60%;
    }
</style>
