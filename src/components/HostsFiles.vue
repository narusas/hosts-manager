<template>
  <div class="q-pa-md bg-grey-10 text-white">
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>Single line item</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Item with caption</q-item-label>
          <q-item-label caption>Caption</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'HostsFiles',
  props: {

  }
}
</script>
