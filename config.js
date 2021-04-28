const path = __dirname

module.exports = [
  {
    label: 'auth_service',
    description: 'Permet la connexion, l\'inscription et la récupération de mot de passe',
    url: 'http://localhost:3010',
    spawnCmd: 'npm',
    spawnArgs: ['run', 'start'],
    spawnOptions: {
      cwd: `${path}/auth_service`,
      env: Object.assign({
        PORT: "3010",
        BDD_USERNAME: '',
        BDD_PASSWORD: ''
      }, process.env)
    }
  },

  {
    label: 'cart_service',
    description: 'Permet la création et la gestion de paniers',
    url: 'http://localhost:3011',
    spawnCmd: 'npm',
    spawnArgs: ['run', 'start'],
    spawnOptions: {
      cwd: `${path}/cart_service`,
      env: Object.assign({
        PORT: "3011",
        BDD_USERNAME: '',
        BDD_PASSWORD: ''
      }, process.env)
    }
  },

  {
    label: 'comm_service',
    description: 'Permet la création, la supression et l\'édition des commentaire',
    url: 'http://localhost:3012',
    spawnCmd: 'npm',
    spawnArgs: ['run', 'start'],
    spawnOptions: {
      cwd: `${path}/comm_service`,
      env: Object.assign({
        PORT: "3012",
        BDD_USERNAME: '',
        BDD_PASSWORD: ''
      }, process.env)
    }
  },

  {
    label: 'order_service',
    description: 'Permet la gestion des commandes suite à la validation des paniers',
    url: 'http://localhost:3013',
    spawnCmd: 'npm',
    spawnArgs: ['run', 'start'],
    spawnOptions: {
      cwd: `${path}/order_service`,
      env: Object.assign({
        PORT: "3013",
        BDD_USERNAME: '',
        BDD_PASSWORD: ''
      }, process.env)
    }
  },

  {
    label: 'order_withdraw_service',
    description: 'Permet le changement de statut pour le retrait de commande',
    url: 'http://localhost:3014',
    spawnCmd: 'npm',
    spawnArgs: ['run', 'start'],
    spawnOptions: {
      cwd: `${path}/order_withdraw_service`,
      env: Object.assign({
        PORT: "3014",
        BDD_USERNAME: '',
        BDD_PASSWORD: ''
      }, process.env)
    }
  },

  {
    label: 'product_service',
    description: 'Permet la gestion des produits',
    url: 'http://localhost:3015',
    spawnCmd: 'npm',
    spawnArgs: ['run', 'start'],
    spawnOptions: {
      cwd: `${path}/product_service`,
      env: Object.assign({
        PORT: "3015",
        BDD_USERNAME: '',
        BDD_PASSWORD: ''
      }, process.env)
    }
  },
  
  {
    label: 'stat_service',
    description: 'Permet la gestion des statistiques du site (produit, visite)',
    url: 'http://localhost:3016',
    spawnCmd: 'npm',
    spawnArgs: ['run', 'start'],
    spawnOptions: {
      cwd: `${path}/stat_service`,
      env: Object.assign({
        PORT: "3016",
        BDD_USERNAME: '',
        BDD_PASSWORD: ''
      }, process.env)
    }
  },

  {
    label: 'top_product_service',
    description: 'Permet la mise en avant des produits à mettre en avant (choisis par les admins)',
    url: 'http://localhost:3017',
    spawnCmd: 'npm',
    spawnArgs: ['run', 'start'],
    spawnOptions: {
      cwd: `${path}/top_product_service`,
      env: Object.assign({
        PORT: "3017",
        BDD_USERNAME: '',
        BDD_PASSWORD: ''
      }, process.env)
    }
  },

  {
    label: 'user_management_service',
    description: 'Permet la gestion des utilisateurs (recherche d\'un utilisateurs)',
    url: 'http://localhost:3018',
    spawnCmd: 'npm',
    spawnArgs: ['run', 'start'],
    spawnOptions: {
      cwd: `${path}/user_management_service`,
      env: Object.assign({
        PORT: "3018",
        BDD_USERNAME: '',
        BDD_PASSWORD: ''
      }, process.env)
    }
  },

  {
    label: 'user_service',
    description: 'Permet la gestion des utilisateurs (modification / supressions des utilisateurs)',
    url: 'http://localhost:3019',
    spawnCmd: 'npm',
    spawnArgs: ['run', 'start'],
    spawnOptions: {
      cwd: `${path}/user_service`,
      env: Object.assign({
        PORT: "3019",
        BDD_USERNAME: '',
        BDD_PASSWORD: ''
      }, process.env)
    }
  },
]