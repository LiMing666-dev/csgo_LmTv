<template>
  <div>

    <div class="userL">

      <div class="userHeader">
        <div>
          <div class="ga-4 userTop">
            <v-avatar size="80" style="border: 3px white solid">
              <v-img alt="John" src="https://jsonschema.qpic.cn/v1_/rb5/fc297a57470cc249f103958006569885.png"></v-img>
            </v-avatar>
            <div>
              <div class="userName">LiMing</div>
            </div>
          </div>
          <div class="bottomBtn d-flex align-cneter">
            <div class="d-flex ga-2" style="width: 50%; align-items: center; justify-content: center">
              <v-icon size="12">mdi-pencil</v-icon>
              <div style="font-size: 10px">编辑个人资料</div>
            </div>
            <div class="d-flex ga-2" style="width: 50%; align-items: center; justify-content: center">
              <v-icon size="12">mdi-share-variant</v-icon>
              <div style="font-size: 10px">分享</div>
            </div>
          </div>
        </div>
      </div>

      <div class="userRight"></div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
.userL {
  display: flex;
  gap: 20px;

  .userRight {
    flex: 1;
    background-color: #222C3E;
    border-radius: 10px;
  }
}


.userHeader {
  width: 200px;

  .userTop {
    height: 200px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 1px rgba($color: white, $alpha: 0.1) solid;
    background-color: #222C3E;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 88;
  }

  .userName {
    font-size: 16px;
    font-weight: 700;
    color: white;
  }

  .bottomBtn {
    height: 60px;
    border-radius: 10px;
    border: 1px rgba($color: white, $alpha: 0.1) solid;
    background: #1d1c1f;
    margin-top: -20px;
    // padding: 20px;
    padding-top: 20px;
    box-sizing: border-box;
    color: rgba($color: white, $alpha: 0.8);
    font-size: 12px;
  }

  .userTop {
    font-size: 12px;
    color: #222C3E;
  }
}
</style>