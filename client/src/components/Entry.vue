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
                    <div class="success" role="alert" v-if="success">
                        {{success}}
                    </div>
                    <div class="row">
                        <div class="col">
                            <div v-if="this.savingLoad==false">
                                <div class="form-group mb-1">
                                    <label for="exampleInputDate">Date</label>
                                    <date-picker v-model="entry.date" valueType="format" format="YYYY-MM-DD" lang="en" width="100%" input-class="form-control" placeholder="Date From" @change="generateList"></date-picker>
                                </div>
                                <div class="form-group mt-1 mb-1">
                                    <label for="exampleInputCollector">Collector</label>
                                    <v-selectmenu :data="this.collectors" key-field="id" show-field="name" language="en" v-model="entry.collectorId" :max-selected='5'></v-selectmenu>
                                </div>
                                <hr>
                                <div class="form-group mt-1 mb-1">
                                    <label for="exampleInputItem">Items</label>
                                    <v-selectmenu :data="this.items" key-field="revenueSourcesId" show-field="itemName" language="en" v-model="entry.itemId" :max-selected='5' ref="item"></v-selectmenu>
                                </div>
                                <div class="form-group mt-1 mb-1">
                                    <label>Amount</label>
                                    <input type="text" class="form-control" placeholder="0.00" v-model="entry.amount">
                                </div>
                                <div class="form-group mt-1 mb-1">
                                    <button class="btn btn-primary btn-md" @click="createCollection">save</button>
                                </div>
                            </div>
                            <div v-else-if="this.savingLoad==true">
                                <div class="text-center">
                                    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="tableDiv">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Collector</th>
                                            <th scope="col" width="40%">Revenue Source</th>
                                            <th scope="col" width="15%">Cost</th>
                                            <th scope="col" width="10%">&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="collection in collections[0]" :key="collection.id">
                                            <td>
                                                <span class="badge badge-info" v-if="collection.orNumber!=null">{{collection.orNumber}}</span>
                                                {{collection.name}}
                                            </td>
                                            <td>
                                                <span class="badge badge-secondary" v-if="collection.orNumber==null">OTHER</span>
                                                <span class="badge badge-primary" v-else-if="collection.void!=null">TOMS</span>
                                                {{collection.serviceName}}
                                            </td>
                                            <td>
                                                <span class="badge badge-danger" v-if="collection.void==0">Void</span>
                                                <span class="badge badge-success" v-if="collection.void==1">Active</span>
                                                {{collection.cost}}
                                            </td>
                                            <td>
                                                <button v-if="collection.orNumber==null" class="btn btn-danger btn-sm" @click.prevent="removeCollection(collection.id)">Void</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="float-right" v-for="collection in collections[1]" :key="collection.id"><h5>TOTAL:&nbsp;{{collection.totalCollection}}</h5></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
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
            savingLoad: false,
            entry: {
                date: moment().format('YYYY-MM-DD'),
                collectorId: null,
                itemId: null,
                amount: null
            },
            collectors: [],
            items: [],
            error: null,
            success: null,
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
                this.collections = (await EntryService.index(this.entry.date)).data
            } catch (error) {
                console.log(error)
            }
        },
        async createCollection () {
            this.savingLoad = true
            try {
                await EntryService.post(this.entry)

                this.entry.itemId = null

                this.entry.amount = null

                this.loadCollection()

                this.error = null

                this.savingLoad = false

                this.success = 'successfully added'
                setTimeout(() => this.success = null, 3000)
            } catch (error) {
                this.error = error.response.data.error
                this.savingLoad = false
                setTimeout(() => this.error = null, 3000)
            }
        },
        async removeCollection (id) {
            try {
                await EntryService.delete(id)
                this.loadCollection()
                this.success = 'successfully voided'
                setTimeout(() => this.success = null, 3000)
            } catch (error) {
                console.log(error)
            }
        },
        generateList () {
            this.loadCollection()
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
.success
{
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
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