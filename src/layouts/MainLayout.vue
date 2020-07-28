<template>
  <q-layout view="lHh Lpr lFf">
    <HostsFiles></HostsFiles>
  </q-layout>
</template>

<script>
import HostsFiles from 'components/HostsFiles.vue'

export default {
  name: 'MainLayout',
  components: { HostsFiles },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
