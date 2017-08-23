<style>
.Cardcon{
    width:320px;
    display:inline-block;
}
.Cardcon > div{
    text-align:center
}
.commodity{
    width:286px
}
</style>

<template>
    <Row>
        <i-col span="5">
            <Menu :active-name="openName" @on-select="mainNav" width="auto" :open-names="['clothes']">
                <Submenu name="clothes">
                    <template slot="title">
                        <Icon type="tshirt"></Icon>
                        衣服
                    </template>
                    <Menu-item name="maleClothes">男衣</Menu-item>
                    <Menu-item name="womenClothes">女衣</Menu-item>
                    <Menu-item name="childClothes">童衣</Menu-item>
                </Submenu>
                <Submenu name="tight">
                    <template slot="title">
                        <Icon type="ios-paw"></Icon>
                        贴身
                    </template>
                    <Menu-item name="shoesSocks">鞋袜</Menu-item>
                    <Menu-item name="underwear">内衣</Menu-item>
                    <Menu-item name="pajamas">睡衣</Menu-item>
                </Submenu>
                <Submenu name="decorate">
                    <template slot="title">
                        <Icon type="closed-captioning"></Icon>
                        装饰
                    </template>
                    <Menu-item name="3-1">包</Menu-item>
                    <Menu-item name="3-2">表</Menu-item>
                </Submenu>
            </Menu>
        </i-col>
        <i-col span="19">
            <div class="layout-content-main">
                <Card class="Cardcon" v-for="item in productList" :key="item.name">
                    <div>
                        <img class="commodity" :src="item.imgSrc">
                        <h3>{{item.name}}</h3>
                        <p>{{item.name}}</p>
                    </div>
                </Card>
            </div>
        </i-col>
    </Row>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            openName : 'maleClothes',
            productList:[]
        }
    }
    ,methods: {
        mainNav(name) {
            getLists(this,name);
        }
    }
    ,created(){
        let _self = this;
        getLists(_self,_self.openName);
    }
}
function getLists(_self,name){
    name =  name ? name : '';
    axios.get('productData.json',{
        params:{
            type:name
        }
    }).then(function (res) {
        if (res.status === 200) {
            _self.productList = res.data[name];
            // [_self.clothes, _self.decorate, _self.tight] = [res.data.clothes,  res.data.decorate, res.data.tight];
        }
    })
}
</script>
