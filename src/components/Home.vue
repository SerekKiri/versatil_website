<template>
    <v-flex xd12 sm4 md6 class="my-3">
      <section>
        <v-parallax src="./static/header.jpg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text mb-2 display-3">Versatil System</h1>
            <div class="headline mb-3 text-xs-center">Home page</div>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline"> <v-icon medium>account_box</v-icon> Who are we?</div>
                </v-card-title>
                <v-card-text class="text-xs-center">
                  We are group of developers that want to change the world
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact </div>
                </v-card-title>
                <v-card-text class="text-xs-center">
                  Contact with us, join us if you want, just say it!
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action class="center">
                      <v-icon class="red--text">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>versatil@gmail.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-flex>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
</style>
