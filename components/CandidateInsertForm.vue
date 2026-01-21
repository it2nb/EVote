<template>
    <div>
        <v-card
            class="mx-auto my-8"
            elevation="5"
        >
            <v-card-item class="bg-cyan-darken-3">
                <v-card-title class="font-weight-bold pa-3">
                    <v-icon class="fas fa-user-plus mr-2"></v-icon>
                    เพิ่มข้อมูลผู้สมัคร
                </v-card-title>
            </v-card-item>

            <v-card-text class="pa-8">
                <v-form
                    ref="form"
                    @submit.prevent="insert"
                >
                    <v-row>
                        <v-col cols="12" md="3">
                            <v-text-field
                                v-model="candidate.candidateID"
                                type="number"
                                label="หมายเลข"
                                variant="outlined"
                                :rules="[
                                    v => !!v || 'กรุณากรอกข้อมูล'
                                ]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="9">
                            <v-text-field
                                v-model="candidate.candidateName"
                                label="ชื่อผู้ลงสมัคร"
                                variant="outlined"
                                :rules="[
                                    v => !!v || 'กรุณากรอกข้อมูล'
                                ]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                v-model="candidate.candidateParty"
                                label="สังกัด"
                                variant="outlined"
                                :rules="[
                                    v => !!v || 'กรุณากรอกข้อมูล'
                                ]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea
                                v-model="candidate.candidateDetail"
                                label="หมายเหตุ"
                                variant="outlined"
                            ></v-textarea>
                        </v-col>
                        <v-col cols="12" class="text-center">
                            <v-btn
                                type="submit"
                                color="success"
                                class="w-100 w-md-auto"
                            >บันทึก</v-btn>
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

});

const emit = defineEmits(['insertStatus'])

const form = ref(null)

let candidate = ref({})

onMounted(async ()=>{
    form.value.resetValidation()
})

async function insert() {
    const { valid } = await form.value.validate()
    if(valid) {
        console.log('ad')
        let res = await $fetch('/api/candidate', {
            method: 'POST',
            body: {
                fn: 'insert',
                candidate: candidate.value
            }
        });
        if(res.status) {
            let data = JSON.parse(JSON.stringify(res.data))
            Swal.fire({
                title: "สำเร็จ",
                text: "บันทึกข้อมูลเรียบร้อย",
                icon: "success"
            })
            emit('insertStatus', {
                status: true,
                data: data
            })
        } else {
            Swal.fire({
                title: "ผิดพลาด",
                text: "บันทึกข้อมูลไม่สำเร็จ",
                icon: "error"
            })
            emit('insertStatus', {
                status: false
            })
        }
    }
}
</script>