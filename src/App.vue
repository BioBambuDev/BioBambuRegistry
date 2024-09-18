<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

import { ref, onMounted } from 'vue'
import axios from 'axios'

const transactions = ref(null)
const availableTokens = ref(null)
const isLoading = ref(true)
const error = ref(null)
const customers = ref([])

const fetchTransactions = async () => {
  try {
    isLoading.value = true
    const response = await axios.get(
      'https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&address=0x4e83362442b8d1bec281594cea3050c8eb01311c&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=4Q6AWYX1GEDRH6M6ITQV9FE7DQGJB6RHC1'
    )
    transactions.value = response.data.result
  } catch (err) {
    error.value = err
  } finally {
    isLoading.value = false
  }
}

async function fetchCustomerInfo() {
  // eslint-disable-next-line no-undef
  const Customer = Parse.Object.extend('Customer')
  // eslint-disable-next-line no-undef
  const query = new Parse.Query(Customer)
  try {
    customers.value = await query.find()
    fetchTransactions()
  } catch (error) {
    console.error('Error while fetching Customer', error)
  }
}

const fetchTokenSupply = async () => {
  try {
    isLoading.value = true

    // INDICARE ACCOUNT METAMASK BIOBAMBU PER CREDITI RIMANENTI
    const response = await axios.get(
      'https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x57d90b64a1a57749b0f932f1a3395792e12e7055&address=0xe04f27eb70e025b78871a2ad7eabe85e61212761&tag=latest&apikey=4Q6AWYX1GEDRH6M6ITQV9FE7DQGJB6RHC1'
    )
    availableTokens.value = response.data.result
  } catch (err) {
    error.value = err
  } finally {
    isLoading.value = false
  }
}

const roundDecimals = (val) => {
  const num = parseInt(val) / Math.pow(10, 18)
  return num.toFixed(0)
}

function findUserByWallet(walletID) {
  let userArray = JSON.parse(JSON.stringify(customers))
  let userTX = userArray._rawValue.find((x) => x.metamaskAddress === walletID)
  if (userTX != undefined) {
    return userTX
  }
}

function findUser(walletID) {
  let user = findUserByWallet(walletID)
  if (user != undefined) {
    return user.name + ' ' + user.lastname
  }
}

function findCompanyName(walletID) {
  let user = findUserByWallet(walletID)
  if (user != undefined) {
    return user.companyName
  }
}

onMounted(() => {
  fetchCustomerInfo()
  fetchTokenSupply()
})
</script>

<template>
  <div class="container-fluid px-6r pb-5">
    <SiteHeader />
    <main>
      <!-- Project Banner -->
      <section class="mb-5">
        <div class="card mb-3 border-0">
          <div class="row g-0 align-items-center">
            <div class="col-md">
              <div class="card-body">
                <p class="card-text fs-4 text-primary bg-secondary rounded ps-2 me-5">
                  ID Progetto: 1
                </p>
                <h5 class="card-title h1">
                  PIANTUMAZIONE DI BAMBÙ GIGANTE PER LA RIMOZIONE DI CO2 DALL’ATMOSFERA
                </h5>
              </div>
            </div>
            <div class="col-md">
              <img src="./assets/bambu.png" class="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
      </section>

      <!-- Project Nav -->
      <nav class="navbar navbar-expand-lg mb-5 border-bottom">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav fs-4">
              <li class="nav-item d-flex align-items-center me-4">
                <vue-feather type="info"></vue-feather>
                <a class="nav-link active" aria-current="page" href="#info"
                  >Informazioni Generali</a
                >
              </li>
              <li class="nav-item d-flex align-items-center me-4">
                <vue-feather type="list"></vue-feather>
                <a class="nav-link" href="#data">Dati Tecnici</a>
              </li>
              <li class="nav-item d-flex align-items-center me-4">
                <vue-feather type="codesandbox"></vue-feather>
                <a class="nav-link" href="#credits">Crediti Carbonio</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Informazioni Generali -->
      <section id="info">
        <h2>
          <u><strong>Informazioni Generali</strong></u>
        </h2>
        <div class="row mb-5">
          <h3 class="mt-4">
            <span class="bg-secondary p-2 px-4 rounded fw-bold text-primary">
              Fasi del Progetto
            </span>
          </h3>
          <div class="col-12 fs-5 mt-2">
            <Stepper value="" class="basis-[10rem]">
              <StepList>
                <Step value=""><span class="text-primary fw-bold">Progetto</span> </Step>
                <Step value="">
                  <span class="text-primary fw-bold">Registrazione Progetto </span></Step
                >
                <Step value=""> <span class="text-primary fw-bold">Commento Pubblico </span></Step>
                <Step value="">
                  <span class="text-primary fw-bold"> Convalidazione Progetto</span></Step
                >
                <Step value="">
                  <span class="text-primary fw-bold"> Approvazione Progetto </span></Step
                >
              </StepList>
            </Stepper>
          </div>
        </div>

        <div class="row">
          <div class="col mt-2">
            <h3 class="mt-4">
              <span class="bg-secondary p-2 mb-4 rounded fw-bold text-primary"> Descrizione </span>
            </h3>
            <h5 class="mt-3">
              Il progetto consiste nella piantumazione di piante di bambù gigante (Phyllostachis
              edulis) su terreni incolti in Italia, nelle regioni del Veneto e del Friuli-Venezia
              Giulia. In particolare, sono stati piantumati 25 ettari in provincia di Venezia, 1 in
              provincia di Padova e 9 in provincia di Pordenone, per un totale di 35 ettari. Ogni
              terreno del progetto è stato piantumato con 1200 piante/ettaro e la coltivazione è
              avvenuta seguendo un disciplinare agronomico formalizzato di riferimento specifico per
              il bambù gigante. Questo progetto, oltre ai benefici ambientali derivanti dalla
              rimozione di CO2 dall’atmosfera da parte della piantagione, porta anche benefici
              sociali ed economici per le comunità circostanti e per gli stakeholder del progetto.
            </h5>
            <div class="row mb-5">
              <div class="col-12 mt-2">
                <h3 class="mt-5">
                  <span class="bg-secondary p-2 mb-4 rounded fw-bold text-primary">
                    Totale Crediti Emessi
                  </span>
                </h3>
                <h5 class="mt-3">84000 BioToken</h5>
              </div>
            </div>

            <div class="row mb-5">
              <div class="col-12">
                <h3 class="">
                  <span class="bg-secondary p-2 rounded fw-bold text-primary"> Settori </span>
                </h3>
                <h5 class="mt-3">Agricoltura / AFOLU (Agriculture, Forestry and Other Land Use)</h5>
              </div>
              <div class="row mb-5">
                <div class="col-12">
                  <h3 class="mt-5">
                    <span class="bg-secondary p-2 rounded fw-bold text-primary">
                      Metodologie di Quantificazione
                    </span>
                  </h3>
                  <h5 class="mt-3">
                    Valutazione dello stoccaggio del carbonio nel ciclo di vita delle piantagioni di
                    bambù, Politecnico di Milano (2021)
                  </h5>
                </div>
              </div>
              <div class="row mb-5">
                <div class="col-12">
                  <h3 class="">
                    <span class="bg-secondary p-2 mb-4 rounded fw-bold text-primary">
                      Dettagli
                    </span>
                  </h3>
                  <h5 class="mt-3">
                    <ul>
                      <li>
                        <div class="row mb-2">
                          <div class="col fw-bold">Data di creazione:</div>
                          <div class="col">2020</div>
                        </div>
                      </li>
                      <li>
                        <div class="row mb-2">
                          <div class="col fw-bold">Numero Accreditazioni correnti:</div>
                          <div class="col">1</div>
                        </div>
                      </li>
                      <li>
                        <div class="row mb-2">
                          <div class="col fw-bold">Periodo di Accreditazione corrente:</div>
                          <div class="col">2020 - 2040</div>
                        </div>
                      </li>
                      <li>
                        <div class="row mb-2">
                          <div class="col fw-bold">Protocollo:</div>
                          <div class="col">DAF (Disciplinare Agronomico Formalizzato)</div>
                        </div>
                      </li>
                    </ul>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div class="col mt-2">
            <h3 class="mt-4">
              <span class="bg-secondary p-2 rounded fw-bold text-primary"> Posizione </span>
            </h3>
            <img src="./assets/bambuMap.png" class="img-fluid rounded" alt="..." />
          </div>
        </div>
      </section>

      <section id="data" class="">
        <h2>
          <u><strong>Dati Tecnici</strong></u>
        </h2>
        <div class="row mb-5">
          <div class="col mt-2">
            <h3 class="mt-4">
              <span class="bg-secondary p-2 mb-4 rounded fw-bold text-primary">
                Metodologie di Quantificazione
              </span>
            </h3>
            <h5 class="mt-3">
              Valutazione dello stoccaggio del carbonio nel ciclo di vita delle piantagioni di
              bambù, Politecnico di Milano (2021)
            </h5>
          </div>
        </div>
      </section>

      <section id="credits" class="pt-5">
        <h2>
          <u><strong>Crediti Carbonio</strong></u>
        </h2>

        <div class="row mb-3">
          <div class="col">
            <h3 class="mt-4">
              <span class="bg-secondary p-2 mb-4 rounded fw-bold text-primary">
                Informazioni Generali
              </span>
            </h3>
            <table class="table mt-3">
              <thead>
                <tr class="fw-bold">
                  <th class="col-6 fw-bold">Nome Progetto</th>
                  <th class="col fw-bold">Proponente del Progetto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    PIANTUMAZIONE DI BAMBÙ GIGANTE PER LA RIMOZIONE DI CO2 DALL’ATMOSFERA
                  </th>
                  <td>Corte del Gallo s.r.l.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col mt-2">
            <h3 class="mt-4">
              <span class="bg-secondary p-2 mb-4 rounded fw-bold text-primary">
                Totale Crediti
              </span>
            </h3>
            <table class="table mt-3">
              <thead>
                <tr>
                  <th scope="col" class="fw-bold col-3">Emessi</th>
                  <th scope="col" class="fw-bold col-2">Tonnellate Convertite</th>
                  <th scope="col" class="fw-bold">Ritirati</th>
                  <th scope="col" class="fw-bold">Disponibili</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">84000</th>
                  <!-- // VALUE DELLA PRIMA TRANSAZIONE -->
                  <td>0</td>
                  <td>100</td>
                  <!-- // SUPPLY - availableTokens.value -->
                  <td>{{ availableTokens }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col mt-2">
            <h3 class="mt-4">
              <span class="bg-secondary p-2 mb-4 rounded fw-bold text-primary">
                Storico Crediti
              </span>
            </h3>
            <table class="table mt-3">
              <thead class="fw-bold">
                <tr>
                  <th scope="col" class="fw-bold col-5">Id Transazione</th>
                  <th scope="col" class="fw-bold">Anno</th>
                  <th scope="col" class="fw-bold">Emessi</th>
                  <th scope="col" class="fw-bold">Ritirati</th>
                  <th scope="col" class="fw-bold">Disponibili</th>
                  <th scope="col" class="fw-bold">Link Blockchain</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <!-- MINT -->
                  <td scope="row">
                    0xa03e4b8f98268e2b2774765da535eabaaebe8e6e5667ebfbe3b2c294736eb0b8
                  </td>
                  <td>2024</td>
                  <td>84000</td>
                  <td>100</td>
                  <td>83900</td>
                  <td>
                    <a
                      class="nav-link ps-5"
                      target="_blank"
                      href="https://sepolia.etherscan.io/tx/0xa03e4b8f98268e2b2774765da535eabaaebe8e6e5667ebfbe3b2c294736eb0b8"
                      ><vue-feather type="link"></vue-feather
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col mt-2">
            <h3 class="mt-4">
              <span class="bg-secondary p-2 mb-4 rounded fw-bold text-primary">
                Storico Transazioni
              </span>
            </h3>
            <table class="table mt-3">
              <thead class="fw-bold">
                <tr>
                  <th scope="col" class="fw-bold">N° Certificato</th>
                  <th scope="col" class="fw-bold">Wallet</th>
                  <th scope="col" class="fw-bold">Utente Finale</th>
                  <th scope="col" class="fw-bold">Ragione Sociale</th>
                  <th scope="col" class="fw-bold">Data</th>
                  <th scope="col" class="fw-bold">Qt.à Token</th>
                  <th scope="col" class="fw-bold">Azioni</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in transactions" :key="index">
                  <!-- Transazione -->
                  <td scope="row">{{ item.transactionIndex }}</td>
                  <td class="col-5">
                    <span class="d-flex">
                      {{ item.from }}
                      <vue-feather type="arrow-right" class="px-1"></vue-feather>
                      {{ item.to }}
                    </span>
                  </td>
                  <td>{{ findUser(item.to) }}</td>
                  <td>{{ findCompanyName(item.to) }}</td>
                  <td>{{ item.timeStamp }}</td>
                  <td>{{ roundDecimals(item.value) }}</td>
                  <td class="d-flex">
                    <a
                      class="nav-link pe-3"
                      target="_blank"
                      :href="`https://etherscan.io/tx/${item.hash}`"
                      ><vue-feather type="link"></vue-feather
                    ></a>
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/11COXEepQRAa-eOwWDnx3Xzb0Vk6PMCMU/view?usp=sharing"
                      class="nav-link"
                      ><vue-feather type="check-square"></vue-feather
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  </div>
  <SiteFooter />
</template>

<style scoped>
#black {
  color: black !important;
}

.px-6r {
  padding-right: 6rem !important;
  padding-left: 6rem !important;
}
</style>
