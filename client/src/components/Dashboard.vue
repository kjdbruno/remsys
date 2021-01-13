<template>
    <div>
        <page-navbar />
        <div class="container mt-3">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Collection</h5>
                </div>
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Collector</th>
                                <th scope="col" width="20%" class="text-right">Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="collection in collections[0]" :key="collection.id">
                                <td>{{collection.name}}</td>
                                <td class="text-right">{{collection.cost}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageNavbar from '@/components/Navbar.vue'
import ReportService from '@/services/ReportService'
export default {
    components: {
        PageNavbar
    },
    data () {
        return {
            collections: {}
        }
    },
    methods: {
        async loadCollection () {
            try {
                this.collections = (await ReportService.index()).data
            } catch (error) {
                console.log(error)
            }
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