<template>
    <div>
        <b-carousel id="carousel-fade" style="text-shadow:0px 0px 2px #000" fade indicators>
            <b-carousel-slide id="imageca" 
                :img-src="require('./../assets/images/hotel1.png')" >
            </b-carousel-slide>
            <b-carousel-slide id="imageca" 
                :img-src="require('./../assets/images/hotel2.png')" >
            </b-carousel-slide>
            <b-carousel-slide id="imageca" 
                :img-src="require('./../assets/images/hotel3.png')" >
            </b-carousel-slide>
            <b-carousel-slide id="imageca" 
                :img-src="require('./../assets/images/hotel5.png')" style="height:100%">
            </b-carousel-slide>
        </b-carousel>

    </div>
</template>

<style scoped>
#imageca{
    height: 80vh!important;
}

</style>