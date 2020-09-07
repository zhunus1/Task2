<template>
  <div class="container">
    <div class="text">
      <p id="soon">Скоро запускаем!</p>
      <p id="description">Fashionhub.kz - первая в Казахстане сеть для творчества и поиска работы в<br/> Интернете, посвященная исключительно моде, розничной торговле, красоте,<br/> косметике, цифровым технологиям и медиа.</p>
      <p id="notification">Получите уведомление, когда мы запустим</p>
      <form method="post">
          <input type="text" id="input" name="" value="" placeholder="E-mail">
          <button type="submit" id="submit" >Отправить</button>
      </form>
      <div class="rotate">
        <marquee behavior="scroll" direction="left">human resources • sales & retail management • creative & design • marketing & communication • digital & media • beauty & cosmetics • supply chain & production</marquee>
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
}
</script>

<style lang="scss">
.container{
  border:1px solid blue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0px 222px 0px 166px;
  .text{
    border:1px solid green;
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
      border:1px solid black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      #input{
        margin-right: 12px;
        background: #EAEAEA;
        border-radius: 4px;
        padding: 10px 150px 10px 15px;
        height: 100%;
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
        color: #FFFFFF;
      }
    }
  }
  .photo{
    border:1px solid pink;
  }
  .rotate{
    marquee{
      position: fixed;
      left:25%;
      top:50%;
      font-family: Bebas Neue;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 48px;
      color: #000000;
      transform: rotate(-45deg);
      background: #FFD302;
      width:100%;
    }
  }
}
</style>
