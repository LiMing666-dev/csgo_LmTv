<template>
    <div class="login-container">
        <v-container fluid class="login-wrapper">
            <v-row justify="center">
                <div style="width: 400px;">
                    <!-- Logo/标题 -->
                    <!-- 登录卡片 -->
                    <v-card class="elevation-8" rounded="lg" color="#222C3E"
                        style="box-sizing: border-box;padding: 20px;">
                        <div class="text-center mb-4">
                            <div style="font-size: 16px;">登录</div>
                        </div>
                        <!-- 邮箱/用户名 -->
                        <v-text-field density="compact" class="mb-2" v-model="form.email" type="text" outlined
                            prepend-inner-icon="mdi-email-outline" variant="outlined" :rules="emailRules"
                            @keyup.enter="handleLogin">
                            <template #label>
                                <span style="font-size: 12px;">记住密码</span>
                            </template>
                        </v-text-field>

                        <!-- 密码 -->
                        <v-text-field density="compact" v-model="form.password" style="font-size: 12px;"
                            :type="showPassword ? 'text' : 'password'" outlined prepend-inner-icon="mdi-lock-outline"
                            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" variant="outlined"
                            :rules="passwordRules" @click:append-inner="showPassword = !showPassword"
                            @keyup.enter="handleLogin">
                            <template #label>
                                <span style="font-size: 12px;">记住密码</span>
                            </template>
                        </v-text-field>

                        <!-- 记住密码和忘记密码 -->
                        <div class="d-flex justify-space-between align-center mb-2" style="height:30px">

                            <v-checkbox density="compact" hide-details v-model="form.remember"
                                style="font-size: 12px !important;">
                                <template #label>
                                    <span style="font-size: 12px;">记住密码</span>
                                </template>
                            </v-checkbox>
                            <router-link style="font-size: 12px;" to="#"
                                class="text-decoration-none text-primary text-caption">
                                忘记密码？
                            </router-link>
                        </div>

                        <!-- 登录按钮 -->
                        <v-btn block size="large" style="font-size: 12px;" class="mb-4 font-weight-bold" color="primary"
                            @click="handleLogin">
                            登 录
                        </v-btn>

                        <!-- 分割线 -->
                        <div class="d-flex align-center mb-2">
                            <v-divider class="flex-grow-1" />
                            <span class="px-3 text-caption text-grey"
                                style="white-space: nowrap;font-size: 12px;">快捷登录</span>
                            <v-divider class="flex-grow-1" />
                        </div>

                        <!-- Steam登录按钮 -->
                        <v-btn block size="large" variant="outlined" color="#A7ABB2"
                            class="mb-2 font-weight-bold steam-btn" prepend-icon="mdi-steam" @click="handleSteamLogin">
                            Steam 登录
                        </v-btn>

                        <!-- 注册链接 -->
                        <div class="text-center" style="font-size: 12px;">
                            <span class="text-caption text-grey">
                                还没有账户？
                                <router-link to="/user" class="text-decoration-none text-primary font-weight-bold">
                                    立即注册
                                </router-link>
                            </span>
                        </div>
                    </v-card>

                    <!-- 底部提示 -->
                    <div class="text-center ">
                        <p class="text-caption text-grey-darken-1" style="font-size: 12px;">
                            登录即表示您同意我们的 <a href="#" class="text-decoration-none text-primary">服务条款</a>
                        </p>
                    </div>
                </div>
            </v-row>
        </v-container>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 表单数据
const form = ref({
    email: '',
    password: '',
    remember: false
})

// 密码显示状态
const showPassword = ref(false)

// 验证规则
const emailRules = [
    (v: string) => !!v || '邮箱或用户名不能为空',
    (v: string) => v.length >= 3 || '邮箱或用户名至少3个字符'
]

const passwordRules = [
    (v: string) => !!v || '密码不能为空',
    (v: string) => v.length >= 6 || '密码至少6个字符'
]

// 常规登录
const handleLogin = () => {
    const emailValid = form.value.email && form.value.email.length >= 3
    const passwordValid = form.value.password && form.value.password.length >= 6

    if (!emailValid || !passwordValid) {
        console.log('请填写完整的登录信息')
        return
    }

    console.log('登录信息:', {
        email: form.value.email,
        password: form.value.password,
        remember: form.value.remember
    })

    // TODO: 调用登录API
    // router.push('/home')
}

// Steam快捷登录
const handleSteamLogin = () => {
    console.log('正在跳转到Steam登录...')
    // TODO: 实现Steam OAuth登录逻辑
    // window.location.href = 'https://steampowered.com/oauth/authorize?...'
}
</script>

<style scoped lang="scss">
.login-container {}

.login-wrapper {}

.min-vh-100 {}

.steam-btn {
    border: 2px solid #1B2838 !important;
    transition: all 0.3s ease;

    &:hover {
        background-color: #1B2838 !important;
        color: white !important;
    }
}

:deep(.v-card) {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
}

:deep(.v-text-field) {
    .v-field__input {
        font-size: 14px;
    }
}

a {
    color: #667eea;
    transition: color 0.3s ease;

    &:hover {
        color: #764ba2;
    }
}
</style>