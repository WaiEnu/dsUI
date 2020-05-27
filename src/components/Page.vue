<template>
<v-sheet>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">Data</th>
        <th class="text-left">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>symbol</td><td>{{ element.symbol }}</td>
      </tr>
      <tr>
        <td>number</td><td>{{ element.number }}</td>
      </tr>
      <tr>
        <td>name</td><td>{{ element.name }}</td>
      </tr>
      <tr>
        <td>appearance</td><td>{{ element.appearance }}</td>
      </tr>
      <tr>
        <td>category</td><td>{{ element.category }}</td>
      </tr>
      <tr>
        <td>atomic_mass</td><td>{{ element.atomic_mass }}</td>
      </tr>
      <tr>
        <td>color</td><td>{{ element.color }}</td>
      </tr>
      <tr>
        <td>density</td><td>{{ element.density }}</td>
      </tr>
      <tr>
        <td>phase</td><td>{{ element.phase }}</td>
      </tr>
      <tr>
        <td>boil</td><td>{{ element.boil }}</td>
      </tr>
      <tr>
        <td>melt</td><td>{{ element.melt }}</td>
      </tr>
      <tr>
        <td>molar_heat</td><td>{{ element.molar_heat }}</td>
      </tr>
      <tr>
        <td>discovered_by</td><td>{{ element.discovered_by }}</td>
      </tr>
      <tr>
        <td>named_by</td><td>{{ element.named_by }}</td>
      </tr>
      <tr>
        <td>summary</td><td>{{ element.summary }}</td>
      </tr>
      <tr>
        <td>source</td><td>{{ element.source }}</td>
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
}
</script>