<script setup>
import SiteHeader from './components/SiteHeader.vue'
//import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="container-fluid px-6r mb-5">
    <SiteHeader />
    <main>
      <!-- Project Banner -->
      <section class="mb-5">
        <div class="card mb-3 border-0">
          <div class="row g-0 align-items-center">
            <div class="col-md">
              <div class="card-body">
                <p class="card-text">ID Progetto: 1</p>
                <h5 class="card-title h1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit asperiores odio
                  fugiat, optio nulla animi iste consequatur molestias eligendi quas.
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
                <Step value="">Stesura Progetto</Step>
                <Step value="">Registrazione Progetto</Step>
                <Step value="">Commento Pubblico</Step>
                <Step value="">Convalidazione Progetto</Step>
                <Step value="">Approvazione Progetto</Step>
              </StepList>
            </Stepper>
          </div>
        </div>

        <div class="row mb-5">
          <div class="col mt-2">
            <h3 class="mt-4">
              <span class="bg-secondary p-2 mb-4 rounded fw-bold text-primary">
                Totale Crediti Emessi
              </span>
            </h3>
            <h4 class="mt-3">84000 BioToken</h4>
          </div>
          <div class="col mt-2">
            <h3 class="mt-4">
              <span class="bg-secondary p-2 rounded fw-bold text-primary"> Settori </span>
            </h3>
            <h4 class="mt-3">Agricoltura / AFOLU (Agriculture, Forestry and Other Land Use)</h4>
          </div>
        </div>

        <div class="row mb-5">
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
          </div>
          <div class="col mt-2">
            <h3 class="mt-4">
              <span class="bg-secondary p-2 mb-4 rounded fw-bold text-primary"> Dettagli </span>
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
          <div class="col mt-2">
            <h3 class="mt-4">
              <span class="bg-secondary p-2 rounded fw-bold text-primary"> Posizione </span>
            </h3>
            <h4 class="mt-3">Inserire mappa</h4>
          </div>
        </div>
      </section>

      <section id="data" class="pt-5">
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
                <tr>
                  <th class="col-6">Nome Progetto</th>
                  <th class="col">Nit</th>
                  <th class="col">Proponente del Progetto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="row">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat
                    cumque ut doloremque molestiae eligendi enim nesciunt sapiente sunt illo?
                  </th>
                  <td>???</td>
                  <td>Corte del Gallo s.r.l.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="row mb-5">
          <div class="col mt-2">
            <h3 class="mt-4">
              <span class="bg-secondary p-2 mb-4 rounded fw-bold text-primary">
                Totale Crediti
              </span>
            </h3>
            <table class="table mt-3">
              <thead>
                <tr>
                  <th scope="col">Emessi</th>
                  <th scope="col">Tonnellate Convertite</th>
                  <th scope="col">Ritirati</th>
                  <th scope="col">Disponibili</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">84000</th>
                  <td>0</td>
                  <td>0</td>
                  <td>84000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.px-6r {
  padding-right: 6rem !important;
  padding-left: 6rem !important;
}
</style>
