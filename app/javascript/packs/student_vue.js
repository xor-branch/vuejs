new Vue({
  // En spécifiant l'ID HTML dans ce el, une instance de Vue.js est importée avec le DOM de l'ID.
  el: '#app',
  // data est l'attribut (valeur) de l'instance Vue.js définie.
  data: {
    name: '',
    parcours: "",
    acceptancePeriod: '',
    defaultLastId: 4,

    students: [
      { id: 1, name: 'Nuro Kora', parcours: 'Cours dapprentissage machine', acceptancePeriod: 'Numéro de janvier 2019' },
      { id: 2, name: 'Hugo Tominaga', parcours: 'Cours dingénierie Web', acceptancePeriod: 'Numéro de novembre 2017' },
      { id: 3, name: 'Kazuki Saito', parcours: 'Cours dingénierie Web', acceptancePeriod: 'Numéro de novembre 2017' }
    ]
  },
  // Dans "méthodes", décrivez les méthodes que vous voulez que l'instance Vue.js utilise.
  methods: {
    addStudent: function() {
        this.students.push({
          id: this.defaultLastId++,
          name: this.name,
          parcours:this.parcours,
          acceptancePeriod: this.acceptancePeriod
        });
        this.name = "";
        this.parcours = "";
        this.acceptancePeriod = "";
        // この function() { } の中にaddStudentメソッド
        // （入力欄に入力された値と、ID値（最後に登録されたID値+1の値）が新たに出現する機能）の処理を書く
    }
  }
})
