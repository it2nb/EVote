<template>
  <v-app id="dlayout">
    <v-app-bar
        image="https://picsum.photos/1920/1080?random"
    >
        <template v-slot:image>
          <v-img
            gradient="to right, rgba(255,255,255,.8), rgba(255,225,255,.1)"
          ></v-img>
        </template>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title>
                <h3>ระบบเลือกตั้งออนไลน์ (Admin)</h3>
            </v-app-bar-title>
        </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
        <!--  -->
        <v-list class="mt-3" nav>
            <v-list-item
                color="primary"
                value=""
                to="/Admin"
            >
                <template v-slot:prepend>
                <v-icon class="fas fa-home"></v-icon>
                </template>
                <v-list-item-title class="font-weight-bold">
                    หน้าหลัก
                </v-list-item-title>
            </v-list-item>
            <v-list-item
                color="primary"
                value=""
                to="/Admin/candidate"
            >
                <template v-slot:prepend>
                <v-icon class="fas fa-users"></v-icon>
                </template>
                <v-list-item-title class="font-weight-bold">
                    ข้อมูลผู้สมัคร
                </v-list-item-title>
            </v-list-item>
            <v-list-item
                color="primary"
                value=""
                to="/Admin/student"
            >
                <template v-slot:prepend>
                <v-icon class="fas fa-code"></v-icon>
                </template>
                <v-list-item-title class="font-weight-bold">
                    ข้อมูลนักศึกษา
                </v-list-item-title>
            </v-list-item>
            <v-list-item
                color="primary"
                value=""
                to="/Admin/voteresult"
            >
                <template v-slot:prepend>
                <v-icon class="fas fa-code"></v-icon>
                </template>
                <v-list-item-title class="font-weight-bold">
                    ข้อมูลผลการเลือกตั้ง
                </v-list-item-title>
            </v-list-item>
            <v-list-item
                color="primary"
                value=""
                @click="signout"
            >
                <template v-slot:prepend>
                <v-icon class="fas fa-code"></v-icon>
                </template>
                <v-list-item-title class="font-weight-bold">
                    ออกจากระบบ
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-2">
        <v-container>
            <slot />
        </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)

  const items = [
    { text: 'Real-Time', icon: 'mdi-clock' },
    { text: 'Audience', icon: 'mdi-account' },
    { text: 'Conversions', icon: 'mdi-flag' },
  ]

let loginUser = ref({})

onMounted(()=>{
    loginUser = JSON.parse(sessionStorage.getItem('loginUser')) || {}
    if(loginUser?.userStatus != 'Admin') {
        navigateTo('/', {replace: true})
    }
})

function signout() {
    sessionStorage.clear()
    navigateTo('/', {replace: true})
}
</script>