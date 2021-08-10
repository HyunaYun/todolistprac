<template>
  <v-app id="app">
    <Header></Header>
    <Input></Input>
    <List></List>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Input from './components/Input.vue';
import List from './components/List.vue';

export default {
  name: 'App',

  components: {
    Header,
    Input,
    List,
    Footer
  }
};
</script>

<style>
#app{
  text-align: center;
  margin: 40px auto;
  padding-left: 0;
}
</style>
