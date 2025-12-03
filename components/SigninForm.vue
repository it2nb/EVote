<template>
    <div>
        <v-card
            class="mx-auto my-8"
            elevation="5"
        >
            <v-card-item class="bg-cyan-darken-3">
                <v-card-title class="font-weight-bold pa-3">
                    <v-icon class="fas fa-right-to-bracket mr-2"></v-icon>
                    เข้าสู่ระบบ
                </v-card-title>
            </v-card-item>

            <v-card-text class="pa-8">
                <v-form
                    ref="form"
                    @submit.prevent="login"
                >
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="user.userName"
                                label="ชื่อผู้ใช้"
                                variant="outlined"
                                :rules="[
                                    v => !!v || 'กรุณากรอกข้อมูล'
                                ]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                v-model="user.userPass"
                                type="password"
                                label="รหัสผ่าน"
                                variant="outlined"
                                :rules="[
                                    () => !!user.userPass || 'กรุณากรอกข้อมูล'
                                ]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="text-center">
                            <v-btn
                                type="submit"
                                color="success"
                                class="w-100 w-md-50"
                            >เข้าสู่ระบบ</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
import Swal from 'sweetalert2'
const props = defineProps({
    loginType: {
        type: String,
        default: null
    }
});

const form = ref(null)

let user = ref({
    userName: '',
    userPass: '',
})

onMounted(async ()=>{
    form.value.resetValidation()
    // await $fetch('/api/user').then((users)=>{
    //     console.log(users)
    // })
})

async function login() {
    const { valid } = await form.value.validate()
    if(valid) {
        if(props.loginType == 'User') {
            let res = await $fetch('api/user', {
                method: 'POST',
                body: {
                    fn: 'userAuth',
                    userName: user.value.userName,
                    userPass: user.value.userPass
                }
            });
            if(res.status) {
                let data = JSON.parse(JSON.stringify(res.data))
                sessionStorage.setItem('loginUser', JSON.stringify(data))
                navigateTo('/Admin', {replace: true})
            } else {
                Swal.fire({
                    title: "ไม่สำเร็จ",
                    text: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
                    icon: "warning"
                })
            }
        }
    }
}
</script>