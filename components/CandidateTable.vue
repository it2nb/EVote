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
                @click="insertDialog = true"
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
            hover
        >
            <template v-slot:item.actions="{item}">
                <v-btn
                    color="warning"
                    variant="text"
                    icon
                    @click="showUpdateDialog(item)"
                >
                    <i class="fas fa-edit"></i>
                </v-btn>
                <v-btn
                    color="error"
                    variant="text"
                    icon
                    @click="showDeleteDialog(item)"
                >
                    <i class="fas fa-trash"></i>
                </v-btn>
            </template>
        </v-data-table>
    </v-card>

    <v-dialog
      v-model="insertDialog"
      max-width="600"
      persistent
    >
        <div class="mb-1 text-right">
            <v-btn 
                icon
                color="red"
                @click="insertDialog = false"
            ><i class="fas fa-xmark"></i></v-btn>
        </div>
        <v-card>
            <v-card-title>เพิ่มข้อมูลผู้สมัคร</v-card-title>
        </v-card>
    </v-dialog>

    <v-dialog
      v-model="updateDialog"
      max-width="600"
      persistent
    >
        <div class="mb-1 text-right">
            <v-btn 
                icon
                color="red"
                @click="updateDialog = false"
            ><i class="fas fa-xmark"></i></v-btn>
        </div>
        <v-card>
            <v-card-title>แก้ไขข้อมูลผู้สมัคร {{ candidate.candidateName }}</v-card-title>
        </v-card>
    </v-dialog>

    <v-dialog
      v-model="deleteDialog"
      max-width="600"
      persistent
    >
        <div class="mb-1 text-right">
            <v-btn 
                icon
                color="red"
                @click="deleteDialog = false"
            ><i class="fas fa-xmark"></i></v-btn>
        </div>
        <v-card>
            <v-card-title>ลบข้อมูลผู้สมัคร {{ candidate.candidateName }}</v-card-title>
        </v-card>
    </v-dialog>
</template>

<script setup>
let search = ref()
let candidates = ref([])
let candidate = ref({})
let headers = ref([
    {
        title: 'หมายเลข',
        value: 'candidateID',
        align: 'center',
        sortable: true
    },
    {
        title: 'ชื่อ-สกุล',
        value: 'candidateName',
        sortable: true
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

let insertDialog = ref(false)
let updateDialog = ref(false)
let deleteDialog = ref(false)

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

function showUpdateDialog(item) {
    candidate.value = JSON.parse(JSON.stringify(item))
    updateDialog.value = true
}

function showDeleteDialog(item) {
    candidate.value = JSON.parse(JSON.stringify(item))
    deleteDialog.value = true
}
</script>