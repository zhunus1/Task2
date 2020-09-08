<template>
  <div class="container">
    <div class="text">
      <p id="soon">Скоро запускаем!</p>
      <p id="description">Fashionhub.kz - первая в Казахстане сеть для творчества и поиска работы в<br/> Интернете, посвященная исключительно моде, розничной торговле, красоте,<br/> косметике, цифровым технологиям и медиа.</p>
      <p id="notification">Получите уведомление, когда мы запустим</p>
      <form @submit.prevent='sendEmail' v-show="!visible">
          <input type="text" id="input" v-model="email" placeholder="E-mail">
          <button type="submit" id="submit">Отправить</button>
      </form>
      <div class="marquee">
        <div class="track">
          <div class="content">human resources • sales & retail management • creative & design • marketing & communication • digital & media • beauty & cosmetics • supply chain & production & human resources • sales & retail management • creative & design • marketing & communication • digital & media • beauty & cosmetics • supply chain & production & design • marketing & communication • digital & media • beauty & cosmetics & retail management • creative & design • marketing & communication</div>
        </div>
      </div>
      <div v-show="visible" class="after">
        <p>Спасибо за ваш интерес. Мы обязательно вас оповестим!</p>
      </div>
    </div>
    <div class="photo">
      <img src="~static/bust.png" alt="">
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  data() {
   return {
     visible : false,
     email: '',
   };
 },
 methods : {
   async sendEmail() {
     await this.$axios.$post('/emails/', { email: this.email })
     this.visible = true;
   },
 }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0px 222px 0px 166px;
  .text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    #soon{
      font-family: Futura PT;
      font-style: normal;
      font-weight: 600;
      font-size: 64px;
      line-height: 82px;
      color: #FFD302;
      margin-bottom: 17px;
    }
    .after{
      p{
        font-family: Futura PT;
        font-style: normal;
        font-weight: 450;
        font-size: 18px;
        line-height: 23px;
        color: #000000;
      }
    }
    #description{
      font-family: Futura PT;
      font-style: normal;
      font-weight: 450;
      font-size: 18px;
      line-height: 23px;
      color: #000000;
      margin-bottom: 38px;
    }
    #notification{
      font-family: Futura PT;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 31px;
      color: #000000;
      margin-bottom: 16px;
    }
    form{
      display: flex;
      justify-content: space-between;
      align-items: center;
      #input{
        margin-right: 12px;
        background: #EAEAEA;
        border-radius: 4px;
        padding: 10px 150px 10px 15px;
        height: 100%;
        border:0px;
      }
      #input::placeholder{
        font-family: Futura PT;
        font-style: normal;
        font-weight: 450;
        font-size: 18px;
        line-height: 23px;
        color: #595959;
      }
      #submit{
        background: #FFD302;
        border-radius: 4px;
        font-family: Futura PT;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 23px;
        padding: 12px 46px;
        text-align: center;
        border:0px;
        color: #FFFFFF;
      }
      #submit:hover{
        background: #FFE258;
      }
      #submit:active{
        background: #F0C600;
        border:0px;
      }
    }
  }
  .photo{
  }
  .marquee{
    position: fixed;
    left:25%;
    top:50%;
    transform: rotate(-45deg);
    width: 100vw;
    max-width: 100%;

    .track {
      background: #FFD302;
      position: absolute;
      white-space: nowrap;
      will-change: transform;
      animation: marquee 32s linear infinite;
      div{
        font-family: Bebas Neue;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 48px;
        /* identical to box height */


        color: #000000;
      }

    }


    @keyframes marquee {
      from { transform: translateX(0); }
  to { transform: translateX(-50%); }
    }
  }
}


/* For Tablets: */
@media only screen and (min-width: 481px) and (max-width:768px) {
  .container{
    border:1px solid green;
    padding: 0px 111px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .photo{
      order:1;
    }
    .text{
      order:2;
    }
    .marquee{
      position: fixed;
      left:-65%;
      top:90%;
    }
  }
}

/* For smartphones: */
@media only screen and (min-width: 320px) and (max-width:480px) {
  .container{
    border:1px solid red;
  }
}

</style>
