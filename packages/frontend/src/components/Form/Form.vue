<script setup lang="ts">
import  "./Form.scss";

import { ref, watch } from 'vue';
import axios from 'axios';

const shipUrl = `${import.meta.env.VITE_SHIP_URL}/api/evaluate`;

const inputForm = ref("");
const outputForm = ref("");

/**
 * Connect to API and get 
 */
async function evaluateInput() {
  try {
    console.log(inputForm.value)
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.post<string>(
      shipUrl,
      JSON.parse(inputForm.value),
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );

    outputForm.value = JSON.stringify(data, null, 4);

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
  } catch (error) {
    // TODO: read errors from server api
    console.log('unexpected error: ', error);
    outputForm.value = "Unexpected error, please try again";
  }
}

/**
 * If inputForm changes (any char), blank outputForm
 */
watch(inputForm, async () => {
  outputForm.value= "";
})
</script>

<template>
  <section class="form-layout">
    <div class="form-layout__top introduction">
      <h1 class="introduction__title">Welcome to <strong>AIL</strong></h1>
      <h3 class="introduction__subtitle">Programming language for Artemisa 1 🚀</h3>
    </div>
    <div class="form-layout__bottom">
      <!-- Terminal  -->
      <section class="form-layout__bottom terminal__wrapper">
        <form class="terminal">
          <section class="terminal__header">
            <div class="terminal__header-circles">
              <div class="terminal__header-circle terminal__header-circle--green"></div>
              <div class="terminal__header-circle terminal__header-circle--yellow"></div>
              <div class="terminal__header-circle terminal__header-circle--red"></div>
            </div>

            <!-- TODO: ADD HELP -->
          </section>
          <section class="terminal__body">
            <div class="terminal__input-container">
              <div class="terminal__input-container-header">
                <label for="">Please enter a valid payload</label>
                <button @click="evaluateInput()" type="button">Evaluate</button>
              </div>

              <textarea name="" id="" cols="30" rows="20" v-model="inputForm" class="terminal__input"></textarea>
            </div>

            <div class="terminal__output-container">
              <label for="" class="terminal__output-text">>></label>
              <input type="text" v-model="outputForm" disabled class="terminal__output">
            </div>
          </section>
        </form>

        <img src="/imgs/rocket.png" alt="" class="terminal__rocket">
      </section>
    </div>
  </section>
</template>