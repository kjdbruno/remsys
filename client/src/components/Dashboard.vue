<template>
    <div>
        <page-navbar />
        <div class="container mt-3">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">
                        Collection
                        <div class="float-right">
                            <date-picker v-model="dateSelected" valueType="format" format="YYYY-MM-DD" lang="en" width="100%" input-class="form-control" placeholder="Date From" @change="generateDashboard"></date-picker>
                        </div>
                    </h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-4">
                            <h6>TOTAL COLLECTION</h6>
                            <table class="table table-hover">
                                <thead class="bg-success">
                                    <tr>
                                        <th scope="col">Collector</th>
                                        <th scope="col" width="20%" class="text-right">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="toms in collections[0]" :key="toms.id">
                                        <td>{{toms.name}}</td>
                                        <td class="text-right">{{toms.cost}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-4">
                            <h6>TOMS COLLECTION</h6>
                            <table class="table table-hover">
                                <thead class="bg-primary">
                                    <tr>
                                        <th scope="col">Collector</th>
                                        <th scope="col" width="20%" class="text-right">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="toms in collections[1]" :key="toms.id">
                                        <td>{{toms.name}}</td>
                                        <td class="text-right">{{toms.cost}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col">
                            <h6>OTHER COLLECTION</h6>
                            <table class="table table-hover">
                                <thead class="bg-secondary">
                                    <tr>
                                        <th scope="col">Collector</th>
                                        <th scope="col" width="20%" class="text-right">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="other in collections[2]" :key="other.id">
                                        <td>{{other.name}}</td>
                                        <td class="text-right">{{other.cost}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-right">
                    <h5 v-for="collection in collections[3]" :key="collection.id">{{collection.total}}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import DatePicker from 'vue2-datepicker' // import datetimepicker
import 'vue2-datepicker/index.css' // import datetimepicker
import PageNavbar from '@/components/Navbar.vue'
import ReportService from '@/services/ReportService'
export default {
    components: {
        PageNavbar, DatePicker
    },
    data () {
        return {
            dateSelected: moment().format('YYYY-MM-DD'),
            collections: {}
        }
    },
    methods: {
        async loadCollection () {
            try {
                this.collections = (await ReportService.index(this.dateSelected)).data
            } catch (error) {
                console.log(error)
            }
        },
        generateDashboard () {
            this.loadCollection()
        }
    },
    async mounted () {
        this.loadCollection()
    }
}
</script>

<style scoped>
.error
{
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
}
.tableDiv
{
    height: 300px;
    overflow: auto;
}
table tbody tr td
{
    font-size: .80em;
}
</style>