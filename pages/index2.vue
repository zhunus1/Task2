<template>
  <div>
      <p class="marquee"> <span>human resources • sales & retail management • creative & design • marketing & communication • digital & media • beauty & cosmetics • supply chain & production  </span></p>
      <p class="marquee marquee2"><span> human resources • sales & retail management • creative & design • marketing & communication • digital & media • beauty & cosmetics • supply chain & production </span> </p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.marquee {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
}

.marquee span {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 7s linear infinite;
}

.marquee2 span {
  animation-delay: 3.5s;
}

@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>
