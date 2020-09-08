<template>
  <div class="kontainer">
    <div class="text">
      <p id="soon" v-show="$store.state.lang">Скоро запускаем!🚀</p>
      <p id="soon" v-show="!$store.state.lang">We are launching soon! 🚀</p>
      <p id="description" v-show="$store.state.lang">Fashionhub.kz - первая в Казахстане сеть для творчества и поиска работы в<br/> Интернете, посвященная исключительно моде, розничной торговле, красоте,<br/> косметике, цифровым технологиям и медиа.</p>
      <p id="description" v-show="!$store.state.lang">Fashionhub.kz is the very first online creative and job search network in<br/> Kazakhstan, solely dedicated for fashion, retail, beauty, cosmetics,<br/> digital and media.</p>
      <p id="secont">Первая платформа для поиска работы и стажировок в сфере моды и продаж в Казахстане.</p>
      <p id="notification" v-show="$store.state.lang">Получите уведомление, когда мы запустим</p>
      <p id="notification" v-show="!$store.state.lang">Get notified when we launch</p>
      <form method="post" v-show="!visible" onsubmit="showHide()">
          <input type="text" id="input" name="" value="" placeholder="E-mail">
          <button type="submit" id="submit" v-show="$store.state.lang">Отправить</button>
          <button type="submit" id="submit" v-show="!$store.state.lang">Notify me</button>
      </form>
      <div class="marquee">
        <div class="track">
          <div class="content"><p id="first">human resources • sales & retail management • creative & design • marketing & communication • digital</p><p id="second"> & media • beauty & cosmetics • supply chain & production & human resources • sales & retail management • creative & design • marketing & communication</p></div>
        </div>
      </div>
      <div v-show="visible" class="after">
        <p v-show="$store.state.lang">Спасибо за ваш интерес. Мы обязательно вас оповестим!</p>
        <p v-show="!$store.state.lang">Thank you for your interest. We will definitely notify you!</p>
      </div>
      <div class="social">
        <a href="#">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M17.9826 5.29205C17.9404 4.33564 17.7857 3.67812 17.5642 3.10836C17.3356 2.50359 16.984 1.96213 16.5233 1.51201C16.0732 1.05489 15.5282 0.699691 14.9304 0.474702C14.3573 0.253147 13.7033 0.0984842 12.7469 0.0563159C11.7833 0.0105764 11.4774 0 9.03358 0C6.58974 0 6.28385 0.0105764 5.32387 0.0527447C4.36746 0.0949129 3.70994 0.249713 3.14033 0.471131C2.53541 0.699691 1.99396 1.05132 1.54384 1.51201C1.08672 1.96213 0.731657 2.50716 0.506531 3.10493C0.284976 3.67812 0.130314 4.33207 0.0881457 5.28848C0.0424062 6.25203 0.0318298 6.55792 0.0318298 9.00176C0.0318298 11.4456 0.0424062 11.7515 0.0845744 12.7115C0.126743 13.6679 0.281543 14.3254 0.503097 14.8952C0.731657 15.4999 1.08672 16.0414 1.54384 16.4915C1.99396 16.9486 2.53898 17.3038 3.13676 17.5288C3.70994 17.7504 4.36389 17.905 5.32044 17.9472C6.28028 17.9895 6.58631 17.9999 9.03014 17.9999C11.474 17.9999 11.7799 17.9895 12.7398 17.9472C13.6963 17.905 14.3538 17.7504 14.9234 17.5288C16.1331 17.0611 17.0895 16.1047 17.5572 14.8952C17.7786 14.322 17.9334 13.6679 17.9756 12.7115C18.0177 11.7515 18.0283 11.4456 18.0283 9.00176C18.0283 6.55792 18.0247 6.25203 17.9826 5.29205ZM16.3616 12.6411C16.3229 13.5202 16.1753 13.9949 16.0522 14.3114C15.7497 15.0956 15.1274 15.7179 14.3432 16.0204C14.0267 16.1434 13.5486 16.2911 12.673 16.3297C11.7236 16.372 11.4388 16.3824 9.03715 16.3824C6.63548 16.3824 6.34717 16.372 5.4012 16.3297C4.52213 16.2911 4.04743 16.1434 3.73096 16.0204C3.34073 15.8761 2.98553 15.6476 2.69722 15.3487C2.39833 15.0568 2.16977 14.7052 2.02555 14.315C1.90248 13.9985 1.75482 13.5202 1.71622 12.6447C1.67392 11.6953 1.66348 11.4104 1.66348 9.00876C1.66348 6.60709 1.67392 6.31878 1.71622 5.37295C1.75482 4.49387 1.90248 4.01917 2.02555 3.7027C2.16977 3.31234 2.39833 2.95727 2.70079 2.66883C2.99253 2.36994 3.34416 2.14138 3.73453 1.99729C4.051 1.87422 4.52927 1.72656 5.40477 1.68783C6.35418 1.64566 6.63905 1.63508 9.04058 1.63508C11.4458 1.63508 11.7306 1.64566 12.6765 1.68783C13.5556 1.72656 14.0303 1.87422 14.3468 1.99729C14.737 2.14138 15.0922 2.36994 15.3805 2.66883C15.6794 2.96071 15.908 3.31234 16.0522 3.7027C16.1753 4.01917 16.3229 4.49731 16.3616 5.37295C16.4038 6.32236 16.4144 6.60709 16.4144 9.00876C16.4144 11.4104 16.4038 11.6917 16.3616 12.6411Z" fill="black"/>
              <path d="M9.0335 4.37781C6.48074 4.37781 4.40955 6.44886 4.40955 9.00176C4.40955 11.5547 6.48074 13.6257 9.0335 13.6257C11.5864 13.6257 13.6574 11.5547 13.6574 9.00176C13.6574 6.44886 11.5864 4.37781 9.0335 4.37781ZM9.0335 12.0012C7.3774 12.0012 6.03405 10.658 6.03405 9.00176C6.03405 7.34552 7.3774 6.00232 9.0335 6.00232C10.6897 6.00232 12.0329 7.34552 12.0329 9.00176C12.0329 10.658 10.6897 12.0012 9.0335 12.0012V12.0012Z" fill="black"/>
              <path d="M14.9201 4.19496C14.9201 4.79109 14.4367 5.27445 13.8405 5.27445C13.2443 5.27445 12.761 4.79109 12.761 4.19496C12.761 3.5987 13.2443 3.11548 13.8405 3.11548C14.4367 3.11548 14.9201 3.5987 14.9201 4.19496Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="18" height="18" fill="white"/>
              </clipPath>
            </defs>
          </svg>
      </a>
      <a href="#">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9689 3.00607C13.3902 1.42548 11.2906 0.554646 9.05383 0.553719C4.44472 0.553719 0.693577 4.30476 0.691723 8.9151C0.691105 10.3889 1.07611 11.8275 1.8079 13.0956L0.621582 17.4287L5.05446 16.2659C6.2759 16.9322 7.65101 17.2833 9.05043 17.2837H9.05393C13.6625 17.2837 17.4141 13.5323 17.4158 8.9218C17.4168 6.68738 16.5478 4.58656 14.9689 3.00607ZM9.05383 15.8715H9.05095C7.80386 15.871 6.58077 15.5358 5.51352 14.9027L5.25984 14.752L2.6293 15.4421L3.33143 12.8774L3.16612 12.6144C2.47038 11.5078 2.10299 10.2288 2.1036 8.91562C2.10505 5.08362 5.22297 1.96601 9.05661 1.96601C10.913 1.96663 12.6581 2.69049 13.9703 4.00421C15.2825 5.31794 16.0047 7.06415 16.0041 8.92128C16.0024 12.7536 12.8847 15.8715 9.05383 15.8715ZM12.8662 10.6662C12.6573 10.5615 11.63 10.0562 11.4384 9.98637C11.247 9.91664 11.1076 9.88193 10.9684 10.091C10.8291 10.3001 10.4287 10.7708 10.3068 10.9102C10.1848 11.0496 10.0631 11.0671 9.85411 10.9625C9.64513 10.8579 8.97195 10.6372 8.17382 9.9254C7.55275 9.37138 7.13345 8.68717 7.01151 8.47809C6.88976 8.2688 7.01048 8.16662 7.10317 8.05168C7.32935 7.77081 7.55584 7.47634 7.62547 7.33699C7.6952 7.19753 7.66028 7.07548 7.60796 6.97093C7.55584 6.86639 7.13799 5.83797 6.96392 5.41949C6.79418 5.01224 6.62207 5.06724 6.49374 5.06086C6.372 5.05478 6.23264 5.05355 6.09329 5.05355C5.95404 5.05355 5.72765 5.10577 5.53608 5.31505C5.3446 5.52424 4.8049 6.02965 4.8049 7.05807C4.8049 8.08649 5.55359 9.08 5.65802 9.21946C5.76246 9.35892 7.13139 11.4693 9.22728 12.3742C9.72578 12.5897 10.1149 12.7182 10.4184 12.8145C10.919 12.9735 11.3743 12.951 11.7344 12.8973C12.1359 12.8372 12.9705 12.3918 13.1448 11.9038C13.3188 11.4157 13.3188 10.9974 13.2665 10.9102C13.2144 10.823 13.075 10.7708 12.8662 10.6662Z" fill="black"/>
        </svg>
      </a>
      <a href="#">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4972 0.553711H1.48439C0.970333 0.55402 0.553608 0.970951 0.553711 1.48521V16.498C0.55402 17.0121 0.970951 17.4288 1.48521 17.4287H9.56799V10.9028H7.37622V8.34851H9.56799V6.46872C9.56799 4.28879 10.8988 3.10226 12.8434 3.10226C13.7748 3.10226 14.5752 3.17168 14.8085 3.20269V5.48108H13.4676C12.4096 5.48108 12.2047 5.98381 12.2047 6.72168V8.34851H14.7343L14.4047 10.9028H12.2047V17.4287H16.4972C17.0116 17.4288 17.4286 17.012 17.4287 16.4976C17.4287 16.4975 17.4287 16.4974 17.4287 16.4972V1.48439C17.4285 0.970333 17.0115 0.553608 16.4972 0.553711Z" fill="black"/>
        </svg>
      </a>
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
   };
 },
 methods : {
   showHide : function () {
     this.visible = true;
   },
 }
}
</script>

<style lang="scss" scoped>
.kontainer{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 222px 0px 166px;
  .text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    #secont{
      display: none;
    }
    .social{
      display: none;
    }
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
      text-align: center;
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
      animation: marquee 30s linear infinite;
      div {
        display: flex;
        flex-direction: row;
        p{
          font-family: Bebas Neue;
          font-style: normal;
          font-weight: bold;
          font-size: 48px;
          line-height: 48px;
          color: #000000;
        }
      }

    }


    @keyframes marquee {
      from { transform: translateX(0); }
  to { transform: translateX(-50%); }
    }
  }
}


/* For Tablets: */
@media only screen and (min-width: 481px) and (max-width:968px) {
  .kontainer{
    padding: 0px 111px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .photo{
      order:1;
      img{
        width:259px;
        height:422px;
      }
    }
    .text{
      justify-content: center;
      align-items: center;
      #soon{
        font-size: 44px;
        line-height: 62px;
        margin-bottom: 17px;
      }
      .after{
        p{
          text-align: center;
          font-size: 18px;
          line-height: 23px;
        }
      }
      #second{
        display: none;
      }
      #description{
        font-size: 20px;
        line-height: 23px;
        margin-bottom: 38px;
        text-align: center;
      }
      #notification{
        font-size: 20px;
        line-height: 31px;
        margin-bottom: 16px;
      }
      form{
        #input{
          margin-right: 12px;
          padding: 10px 150px 10px 15px;
        }
        #input::placeholder{
          font-size: 14px;
          line-height: 23px;
        }
        #submit{
          font-size: 14px;
          line-height: 23px;
          padding: 6px 46px;
        }
      }
      order:2;
      .marquee{
        top:15%;
        transform: rotate(-35deg);
        .content p{
          font-size: 34px;
          line-height: 34px
        }
      }
    }
  }
  @keyframes marquee {
    from { transform: translateX(-25%); }
to { transform: translateX(-50%); }
  }
}

/* For smartphones: */
@media only screen and (min-width: 320px) and (max-width:480px) {
  .kontainer{
    #after p{
      text-align: center;
    }
    padding: 0px 12px 30px 12px;
    margin-top: 45px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .photo{
      order:1;
      img{
        width:163px;
        height: 263px;
        margin-bottom: 65px;
      }
    }
    .text{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      order:2;
      .social{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        justify-content: space-between;
        svg{
          margin: 12px;
          width: 18px;
          height: 18px;
        }
      }
      #soon{
        font-size: 24px;
        line-height: 31px;
        text-align: center;
        margin-bottom: 16px;
      }
      #description{
        display: none;
      }
      #secont{
        display: block;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        margin-bottom: 23px;
      }
      #notification{
        font-size: 16px;
        line-height: 21px;
        margin-bottom: 17px;
      }
      form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        #input{
          width: 100%;
          margin: 0px;
          margin-bottom: 11px;
        }
        #input::placeholder{
          font-weight: 450;
          font-size: 12px;
          line-height: 15px;
        }
        #submit{
          width: 100%;
          margin-bottom: 33px;
          font-size: 12px;
          line-height: 15px;
          text-align: center;
        }
      }
      .marquee{
        display: flex;
        position: absolute;
        top:15%;
        .track{
          #first,#second{
            margin: 0px;
            font-weight: bold;
            font-size: 24px;
            line-height: 24px;
          }
        }
      }
    }
  }
  @keyframes marquee {
    from { transform: translateX(-10%); }
to { transform: translateX(-50%); }
  }
}

</style>
