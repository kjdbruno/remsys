<template>
    <div>
        <page-navbar />
        <div class="container mt-3">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Report</h5>
                </div>
                <div class="card-body">
                    <date-picker v-model="data.dateFrom" valueType="format" format="YYYY-MM-DD" lang="en" width="100%" input-class="form-control" placeholder="Date From"></date-picker>
                    <date-picker v-model="data.dateTo" valueType="format" format="YYYY-MM-DD" lang="en" width="100%" input-class="form-control" placeholder="Date To"></date-picker>
                    <button class="btn btn-sm btn-primary" @click.prevent="generateReport">generate report</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DatePicker from 'vue2-datepicker' // import datetimepicker
import 'vue2-datepicker/index.css' // import datetimepicker
import PageNavbar from '@/components/Navbar.vue'
export default {
    components: {
        PageNavbar, DatePicker
    },
    data () {
        return {
            data: {
                dateFrom: null,
                dateTo: null
            }
        }
    },
    methods: {
        generateReport () {
            if (this.data.dateFrom != null && this.data.dateTo != null) {
        let route = this.$router.resolve({path: `/generate/report?dateFrom=${this.data.dateFrom}&dateTo=${this.data.dateTo}`})
        window.open(route.href, '_blank')
      }
        }
    }
}
</script>