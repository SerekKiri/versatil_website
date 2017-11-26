<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer">
      <v-list>
        <v-list-tile
          :to="item.to"
          :key="i"
          v-for="(item, i) in items">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title" class="primary--text"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </main>
    <v-footer class="red" fixed>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
             © Addiction {{ new Date().getFullYear() }}
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        clipped: true,
        drawer: false,
        miniVariant: false,
        items: [
          {icon: 'home', title: 'Home', to: '/home'},
          {icon: 'info', title: 'About OS', to: '/system'},
          {icon: 'account_circle', title: 'About Us', to: '/about'},
          {icon: 'file_download', title: 'Download (Soon)', to: '/Download'},
          {icon: 'video_library', title: 'Tutorials (Soon)', to: '/tutorials'},
          {icon: 'supervisor_account', title: 'Support (Soon)', to: '/support'}
        ],
        title: 'Versatil'
      }
    }
  }
</script>

<style lang="stylus">
  @import 'stylus/main.styl'
</style>
