<template>
    <div>
        <div class="text-center mt-3 mb-3">
            <!--<button class="btn btn-sm btn-primary" @click="generateReport">print report</button>-->
        </div>
        <vue-html2pdf :show-layout="false" :float-layout="false" :enable-download="false" :preview-modal="true" :paginate-elements-by-height="1000" filename="hee hee" :pdf-quality="2" :manual-pagination="false" pdf-format="legal" pdf-orientation="portrait" pdf-content-width="100%" ref="html2Pdf">
            <section slot="pdf-content">
                <div v-if="this.loading==false">
                    <div class="header" style="text-align: center;" >
                        <h4>City Government of San Fernando, La Union</h4>
                        <h4>Report of Revenue & Receipt</h4>
                        <h5>{{this.dates.dateFrom}} to {{this.dates.dateTo}}</h5>
                    </div>
                    <h3>GENERAL COLLECTION</h3>
                    <table v-if="collections[0].length">
                        <tr>
                            <td colspan="2"><h5>Office of the City Administrator</h5></td>
                        </tr>
                        <tr v-for="collection in collections[0]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[1]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[2].length">
                        <tr>
                            <td colspan="2"><h5>Office of the City Agriculturist</h5></td>
                        </tr>
                        <tr v-for="collection in collections[2]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[3]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[4].length">
                        <tr>
                            <td colspan="2"><h5>Office of the City Health Officer</h5></td>
                        </tr>
                        <tr v-for="collection in collections[4]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[5]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[6].length">
                        <tr>
                            <td colspan="2"><h5>Office of the City Treasurer</h5></td>
                        </tr>
                        <tr v-for="collection in collections[6]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[7]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[8].length">
                        <tr>
                            <td colspan="2"><h5>Office of the City Engineering & Architectural Services</h5></td>
                        </tr>
                        <tr v-for="collection in collections[8]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[9]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[10].length">
                        <tr>
                            <td colspan="2"><h5>Office of the City Market Supervisor</h5></td>
                        </tr>
                        <tr v-for="collection in collections[10]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[11]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[12].length">
                        <tr>
                            <td colspan="2"><h5>Electrical</h5></td>
                        </tr>
                        <tr v-for="collection in collections[12]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[13]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[14].length">
                        <tr>
                            <td colspan="2"><h5>Office of the City Environment & Natural Resources</h5></td>
                        </tr>
                        <tr v-for="collection in collections[14]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[15]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[16].length">
                        <tr>
                            <td colspan="2"><h5>Office of the City General Services Officer</h5></td>
                        </tr>
                        <tr v-for="collection in collections[16]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[17]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[18].length">
                        <tr>
                            <td colspan="2"><h5>Landfill</h5></td>
                        </tr>
                        <tr v-for="collection in collections[18]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[19]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[20].length">
                        <tr>
                            <td colspan="2"><h5>Local Economic Business Development Office</h5></td>
                        </tr>
                        <tr v-for="collection in collections[20]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[21]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[22].length">
                        <tr>
                            <td colspan="2"><h5>Office of the City Assessor</h5></td>
                        </tr>
                        <tr v-for="collection in collections[22]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[23]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[24].length">
                        <tr>
                            <td colspan="2"><h5>Office for Public Safety</h5></td>
                        </tr>
                        <tr v-for="collection in collections[24]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[25]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[26].length">
                        <tr>
                            <td colspan="2"><h5>Office of Secretary to the Sanggunian Panlungsod</h5></td>
                        </tr>
                        <tr v-for="collection in collections[26]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[27]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[28].length">
                        <tr>
                            <td colspan="2"><h5>Office of the City Registrar</h5></td>
                        </tr>
                        <tr v-for="collection in collections[28]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[29]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[30].length">
                        <tr>
                            <td colspan="2"><h5>Office of the City Veterenarian</h5></td>
                        </tr>
                        <tr v-for="collection in collections[30]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[31]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[32].length">
                        <tr>
                            <td colspan="2"><h5>Office of the City Legal Officer</h5></td>
                        </tr>
                        <tr v-for="collection in collections[32]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[33]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[34].length">
                        <tr>
                            <td colspan="2"><h5>City Planning & Development Office</h5></td>
                        </tr>
                        <tr v-for="collection in collections[34]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[35]" :key="collection.total">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.total}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[36].length">
                        <tr v-for="collection in collections[36]" :key="collection.id">
                            <td colspan="2" class="text-right"><h5>SUBTOTAL:&nbsp;{{collection.generalTotal}}</h5></td>
                        </tr>
                    </table>
                    <h3 v-if="collections[37].length">GENERAL - TRUST</h3>
                    <table v-if="collections[37].length">
                        <tr v-for="collection in collections[37]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[38]" :key="collection.generalTrustTotal">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.generalTrustTotal}}</h6></td>
                        </tr>
                    </table>
                    <table v-if="collections[39].length">
                        <tr v-for="collection in collections[39]" :key="collection.generalTrustTotal">
                            <td colspan="2" class="text-right"><h5>TOTAL GENERAL COLLECTION:&nbsp;{{collection.generalCollectionTotal}}</h5></td>
                        </tr>
                    </table>
                    <h3 v-if="collections[40].length">TRUST COLLECTION</h3>
                    <table v-if="collections[40].length">
                        <tr v-for="collection in collections[40]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[41]" :key="collection.trustTotal">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.trustTotal}}</h6></td>
                        </tr>
                    </table>
                    <h3 v-if="collections[42].length">SEF COLLECTION</h3>
                    <table v-if="collections[42].length">
                        <tr v-for="collection in collections[42]" :key="collection.id">
                            <td>{{collection.serviceName}}</td>
                            <td class="text-right">{{collection.cost}}</td>
                        </tr>
                        <tr v-for="collection in collections[43]" :key="collection.sefTotal">
                            <td colspan="2" class="text-right"><h6>TOTAL:&nbsp;{{collection.sefTotal}}</h6></td>
                        </tr>
                    </table>
                    <table>
                        <tr v-for="collection in collections[44]" :key="collection.grandTotal">
                            <td colspan="2" class="text-right"><h4>GRAND TOTAL:&nbsp;{{collection.grandTotal}}</h4></td>
                        </tr>
                    </table>
                    <table style="margin-top: 100px; width: 100%;">
                        <tr>
                            <td class="text-center" width="15%">&nbsp;</td>
                            <td class="text-center"><h4>TESSIE TADIFA</h4></td>
                            <td class="text-center" width="15%">&nbsp;</td>
                            <td class="text-center"><h4>EDMAR LUNA</h4></td>
                            <td class="text-center" width="15%">&nbsp;</td>
                        </tr>
                        <tr>
                            <td class="text-center">&nbsp;</td>
                            <td class="text-center"><h5 style="border-top: 1px solid #000;">LTOO III</h5></td>
                            <td class="text-center">&nbsp;</td>
                            <td class="text-center"><h5 style="border-top: 1px solid #000;">CITY TREASURER</h5></td>
                            <td class="text-center">&nbsp;</td>
                        </tr>
                    </table>
                </div>
                <div v-else-if="this.loading==true">
                    <div class="text-center">
                        <div class="spinner-border" style="width: 10rem; height: 10rem; margin-top: 100px;" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <h5>Loading....</h5>
                    </div>
                </div>
            </section>
        </vue-html2pdf>
    </div>
</template>

<script>
import ReportService from '@/services/ReportService'
export default {
    data () {
        return {
            loading: false,
            collections: {},
            dates: {
                dateFrom: this.$route.query.dateFrom,
                dateTo: this.$route.query.dateTo
            }
        }
    },
    methods: {
        async loadRemittance () {
            this.loading = true
            try {
                this.collections = (await ReportService.getReport(this.dates)).data
                this.loading = false
            } catch (error) {
                console.log(error)
            }
        },
        generateReport () {
            this.$refs.html2Pdf.generatePdf()
        }
    },
    async mounted () {
        this.loadRemittance()
    }
}
</script>

<style scoped>
h4, h5
{
    margin: 0;
}
section
{
    padding: 10px 50px;
    align-items: center;
}
.header
{
    margin-bottom: 75px;
}
table
{
    width: 80%;
    margin: 20px 0px;
}

</style>