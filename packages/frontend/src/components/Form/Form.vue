<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const shipUrl = `${import.meta.env.VITE_SHIP_URL}/api`;
defineProps<{ msg: string }>()

const inputForm = ref("");
const outputForm = ref("");

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
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}
</script>

<template>
  <section class="introduction-container">
    <h1 class="introduction-container__title">Welcome to <strong>AIL</strong></h1>
    <h3 class="introduction-container__subtitle">Programming language for Artemisa 1 🚀</h3>
  </section>
  <section class="terminal__wrapper">
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
</template>

<style lang="scss">
@import "@/assets/global.scss";

// TITLE
// ================================================================
.introduction-container {
  color: white;
  padding: 0.7rem;
  margin: 2rem 0.7rem 5rem 0.7rem;
  border-left: 2px solid;

  @include mq($from: tablet) {
    margin: 2rem 0.7rem 5rem 2rem;
    padding-left: 1.5rem;
  }

  &__title {
    font-size: 2.25rem;
    font-weight: 400;
  }

  &__subtitle {
    font-size: 1.15rem;
    font-weight: 400;

  }
}

// TERMINAL
// ================================================================
.terminal {
  position: relative; // calc left rocket imagen from this as relative
  margin: 0.7rem; // Margin in mobile for limits to windows
  font-family: "Consolas", "Courier New", "Courier"; // monospace font for terminal
  z-index: 100;


  @include mq($from: tablet) {
    transform: translateX(25%);
    margin: 0; // avoid margin to windows, there is enought space
  }

  &__wrapper {
    position: relative;
    max-width: 400px;
    width: 100%;
    margin: 0 auto; // center wrapper horizontal due to have a max-width defined
  }

  &__rocket {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    transform: translate(-25%, 15%);
  }

  & // HEADER

  // ------------------------------------------------
  &__header {
    background: #E0E8F0;
    height: 1.875rem;
    border-radius: 0.5rem 0.5rem 0 0;
    padding-left: 0.625rem;
  }

  &__header-circle {
    width: 12px;
    height: 12px;
    margin: 10px 10px 0 0;
    display: inline-block;
    border-radius: 50%;
  }

  &__header-circle--green {
    background: #3BB662;
  }

  &__header-circle--yellow {
    background: #E5C30F;
  }

  &__header-circle--red {
    background: #E75448;
  }

  // BODY
  // ------------------------------------------------
  &__body {
    color: white;
    font-size: 1rem;
    background: #30353A;
    border-radius: 0 0 .5rem 0.5rem;
  }

  // INPUT
  // ------------------------------------------------
  &__input-container {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0.5rem 0.25rem 0.5rem;
  }

  &__input-container-header {
    display: flex;
    justify-content: space-between;
  }

  &__input {
    width: 100%;
    border: 0;
    background-color: transparent;
    padding: 0;
    border: 1px solid transparent;
    font-size: 1rem;
  }


  &__input:focus-visible,
  &__input:focus {
    outline: none; // remove default browser outline
    border-color: rgb(0 0 0 / 32%);
  }

  // OUTPUT
  // ------------------------------------------------
  &__output-container {
    padding: 0.25rem 0.5rem 0.5rem 0.5rem;
    border-top: 1px solid #4c4c4c;
    display: flex;
  }

  &__output {
    flex: 1;
    border: 0;
    background-color: transparent;
    padding: 0;
    font-size: 1rem;
  }



  &__output-text {
    margin-right: 12px;
  }
}
</style>
