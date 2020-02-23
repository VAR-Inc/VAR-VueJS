<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Contributions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="">Joshua Igobo</a></td>
        <td>UI/UX Design</td>
      </tr>
      <tr>
        <td><a traget="_blank" href="https://abdhafizahmed.com"> Abdulhafiz Ahmed</a></td>
        <td>Full stack (VueJS, NodeJS)</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
  table{
    margin: 0 auto;
    border-collapse: collapse;
  }
  td, th{
    border: 1px solid #ddd;
    padding: 8px;
  }
  th:nth-child(1){
    width: 30%;
    padding: 1rem 1.5rem;
  }
  th:nth-child(2){
    width: 70%;
  }
  tr:nth-child(even){
    background-color: #f2f2f2;
  }
  tr:hover{
    background-color: #EBFEFE;
  }
  th{
    color: white;
    background-color: rgb(95, 226, 95);
    font-weight: bold;
  }
  tbody > tr > td:nth-child(1){
    padding: 0.5rem 1.5rem;
  }
  tbody > tr > td:nth-child(1) > a{
    font-weight: bold;
    text-decoration: none;
    color: black;
  }
</style>
