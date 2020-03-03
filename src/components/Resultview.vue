<template>
  <div class="resultview">
    <div class="vue">
      <ul class="tabs">
        <li class="nav-item global"
          :id="icon.id"
          :class="{ active: activePageName === icon.text}"
          v-for="icon in icons"
          v-bind:key="icon.id + icon.text"
          v-bind:data-icon-text="icon.text"
          v-on:click.stop="setActivePageName($event)">
          {{ icon.text }}
        </li>
      </ul>
      <div class="contents" v-if="activePageName == 'origin'">
        <div id="table_origin">
          ## table_o ## 
        </div>
        <div id="read_origin">
          ## read_o ##
        </div>
      </div>
      <div class="contents" v-else-if="activePageName == 'mutate'">
        <div id="table_mutate">
          ## table_m ##
        </div>
        <div id="read_mutate">
          ## read_m ##
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'Resultview',
  computed: mapGetters(['icons','activePageName']),
  methods: mapActions(['setActivePageName'])
}
</script>
