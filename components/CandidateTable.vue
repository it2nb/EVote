<template>
    <v-card>
        <v-card-title class="d-flex pt-8 px-8">
            <h3 class="font-weight-bold">ผู้สมัคร</h3>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                label="ค้นหา"
                variant="outlined"
                prepend-inner-icon="mdi-magnify"
            ></v-text-field>
        </v-card-title>
        <v-card-text class="px-8 text-right">
            <v-btn 
                color="success"
            >
                <i class="fas fa-plus-circle mr-2"></i>
                เพิ่ม
            </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-data-table
            v-model:search="search"
            :headers="headers"
            :items="candidates"
        >
            <template v-slot:item.actions="{item}">
                <v-btn
                    color="warning"
                    variant="text"
                    icon
                >
                    <i class="fas fa-edit"></i>
                </v-btn>
                <v-btn
                    color="error"
                    variant="text"
                    icon
                >
                    <i class="fas fa-trash"></i>
                </v-btn>
            </template>
        </v-data-table>
    </v-card>
</template>

<script setup>
let search = ref()
let candidates = ref([])
let headers = ref([
    {
        title: 'หมายเลข',
        value: 'candidateID',
    },
    {
        title: 'ชื่อ-สกุล',
        value: 'candidateName'
    },
    {
        title: 'แผนกวิชา',
        value: 'candidateParty'
    },
    {
        title: 'Action',
        value: 'actions'
    }
])

onMounted(async ()=>{
    await getCandidates()
})

async function getCandidates() {
    let response = await $fetch('/api/candidate', {
        method: 'GET',
        params: {
            fn: 'getAll'
        }
    })

    if(response.status == true) {
        // candidates.value = response.data
        candidates.value = JSON.parse(JSON.stringify(response.data))
    }
}
</script>