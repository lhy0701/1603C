<template>
    <div class="wrap" @scroll="scroll">
        <section ref="section">
            <!-- <span v-for="(item, index) in imgList" :key="index" :style="{'background-image':`url(${item.Url.replace('{0}', item.LowSize)})`}"></span> -->
            <img v-for="(item, index) in imgList" src="src/assets/default.png" :key="index" :data-src="`${item.Url.replace('{0}', item.LowSize)}`"/>
        </section>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import {lazyLoad} from '@/utils/lazyLoad';
import {debounce} from '@/utils/utils';
export default {
    computed: {
        ...mapState({
            imgList: state=>state.img.imgList,
            isFetching: state=>state.img.isFetching,
            Page: state=>state.img.Page
        })
    },
    methods: {
        ...mapActions({
            getImgList: 'img/getCategoryImgList'
        }),
        // 监听列表滚动
        scroll(e){
            let height = this.$refs.section.getBoundingClientRect().height;
            // console.log(e.target.scrollTop, (height-window.innerHeight));
            if ((e.target.scrollTop > ((height-window.innerHeight) - 20)) && !this.isFetching){
                // 执行加载下一页的逻辑
                console.log('加载下一页');
                this.getImgList({
                    SerialID: 2593,
                    ImageID: 6
                })
            }
        }
    },
    updated(){
        if (this.Page == 2 && this.imgList.length){
            lazyLoad('.wrap');
        }
    },
    mounted(){
        this.getImgList({
            SerialID: 2593,
            ImageID: 6
        });
        // let func = debounce(e=>this.scroll(e));
        // this.$refs.wrap.addEventListener('scroll', func);
    }
}
</script>

<style lang="scss" scoped>
section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    span,img{
        width: 2.46rem;
        height: 1.64rem;
        // height: 2.46rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
}
.wrap{
    height: 100%;
    overflow-y: scroll;
}
</style>
