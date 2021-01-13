<template>
    <div>
        <page-navbar />
        <div class="container mt-3">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Entry</h5>
                </div>
                <div class="card-body">
                    <div class="error" role="alert" v-if="error">
                        {{error}}
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group mb-1">
                                <label for="exampleInputDate">Date</label>
                                <date-picker v-model="data.date" valueType="format" format="YYYY-MM-DD" lang="en" width="100%" input-class="form-control" placeholder="Date From"></date-picker>
                            </div>
                            <div class="form-group mt-1 mb-1">
                                <label for="exampleInputCollector">Collector</label>
                                <v-selectmenu :data="this.collectors" key-field="id" show-field="name" language="en" v-model="data.collectorId" :max-selected='5'></v-selectmenu>
                            </div>
                            <hr>
                            <div class="form-group mt-1 mb-1">
                                <label for="exampleInputItem">Items</label>
                                <v-selectmenu :data="this.items" key-field="revenueSourcesId" show-field="revenueSourcesName" language="en" v-model="data.itemId" :max-selected='5' ref="item"></v-selectmenu>
                            </div>
                            <div class="form-group mt-1 mb-1">
                                <label>Amount</label>
                                <input type="text" class="form-control" placeholder="0.00" v-model="data.amount">
                            </div>
                            <div class="form-group mt-1 mb-1">
                                <button class="btn btn-primary btn-md" @click="createCollection">save</button>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="tableDiv">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Collector</th>
                                            <th scope="col">Revenue Source</th>
                                            <th scope="col" width="20%">Cost</th>
                                            <th scope="col" width="5%"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="collection in collections[0]" :key="collection.id">
                                            <td>{{collection.name}}</td>
                                            <td>{{collection.serviceName}}</td>
                                            <td>{{collection.cost}}</td>
                                            <td>
                                                <button class="btn btn-sm btn-danger">remove</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageNavbar from '@/components/Navbar.vue'
import DatePicker from 'vue2-datepicker' // import datetimepicker
import 'vue2-datepicker/index.css' // import datetimepicker
import EntryService from '@/services/EntryService'
import GeneralService from '@/services/GeneralService'
export default {
    components: {
        PageNavbar, DatePicker
    },
    data () {
        return {
            data: {
                date: null,
                collectorId: null,
                itemId: null,
                amount: null
            },
            collectors: [],
            items: [],
            error: null,
            collections: {}
        }
    },
    methods: {
        async loadCollector () {
            try {
                this.collectors = (await GeneralService.getCollector()).data[0]
            } catch (error) {
                console.log(error)
            }
        },
        async loadItem () {
            try {
                this.items = (await GeneralService.getItem()).data[0]
            } catch (error) {
                console.log(error)
            }
        },
        async loadCollection () {
            try {
                this.collections = (await EntryService.index()).data
            } catch (error) {
                console.log(error)
            }
        },
        async createCollection () {
            try {
                await EntryService.post(this.data)

                this.data.itemId = null
                this.$refs.item.clear()

                this.data.amount = null

                this.loadCollection()
            } catch (error) {
                this.error = error.response.data.msg
            }
        }
    },
    async mounted () {
        this.loadCollector()
        this.loadItem()
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