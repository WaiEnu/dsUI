<template>
<v-sheet class="elempage">
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">Data</th>
        <th class="text-left">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-left">name</td><td class="text-left">{{ element.name }}</td>
      </tr>
      <tr>
        <td class="text-left">number</td><td class="text-left">{{ element.number }}</td>
      </tr>
      <tr>
        <td class="text-left">symbol</td><td class="text-left">{{ element.symbol }}</td>
      </tr>
      <tr>
        <td class="text-left">category</td><td class="text-left">{{ element.category }}</td>
      </tr>
      <tr>
        <td class="text-left">density</td><td class="text-left">{{ element.density }}</td>
      </tr>
      <tr>
        <td class="text-left">atomic_mass</td><td class="text-left">{{ element.atomic_mass }}</td>
      </tr>
      <tr>
        <td class="text-left">period</td><td class="text-left">{{ element.period }}</td>
      </tr>
      <tr>
        <td class="text-left">phase</td><td class="text-left">{{ element.phase }}</td>
      </tr>
      <tr>
        <td class="text-left">appearance</td><td class="text-left">{{ element.appearance }}</td>
      </tr>
      <tr>
        <td class="text-left">color</td><td class="text-left">{{ element.color }}</td>
      </tr>
      <tr>
        <td class="text-left">boil</td><td class="text-left">{{ element.boil }}</td>
      </tr>
      <tr>
        <td class="text-left">melt</td><td class="text-left">{{ element.melt }}</td>
      </tr>
      <tr>
        <td class="text-left">molar_heat</td><td class="text-left">{{ element.molar_heat }}</td>
      </tr>
      <tr>
        <td class="text-left">discovered_by</td><td class="text-left">{{ element.discovered_by }}</td>
      </tr>
      <tr>
        <td class="text-left">named_by</td><td class="text-left">{{ element.named_by }}</td>
      </tr>
      <tr>
        <td class="text-left">summary</td><td class="text-left">{{ element.summary }}</td>
      </tr>
      <tr>
        <td class="text-left">source</td><td class="text-left">{{ element.source }}</td>
      </tr>
    </tbody>
  </v-simple-table>
</v-sheet>
</template>

<script>
export default {
  name: 'Page',
  props:{
    element:Object
  },
  data: () => ({
  }),
  methods:{
  },
}
</script>