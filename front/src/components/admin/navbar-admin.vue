<template>
  <div class="wrapper">
    <!-- Sidebar -->
    <nav id="sidebar" :class="isActive?'active':''" aria-label="sidebar">
      <div class="sidebar-header">
        <img src="@/assets/logo-white.png" alt="Verre-Tech" class="w-100">
      </div>

      <ul class="list-unstyled components">
        <p>Administration</p>
        <li>
          <router-link to="/admin"><f-icon :icon="'tachometer-alt'" style="margin-right: 10px"></f-icon>Tableau de bord</router-link>
        </li>
        <li>
          <router-link to="/admin/clients"><f-icon :icon="'users'" style="margin-right: 10px"></f-icon>Clients</router-link>
        </li>
        <li>
          <router-link to="/admin/products"><f-icon :icon="'boxes'" style="margin-right: 10px"></f-icon>Produits</router-link>
        </li>
        <li>
          <router-link to="/admin/shops"><f-icon :icon="'store'" style="margin-right: 10px"></f-icon>Magasins</router-link>
        </li>
      </ul>
    </nav>
    <div id="content">
      <nav class="navbar navbar-expand-lg" aria-label="navbar">
        <div class="container-fluid">

          <button type="button" id="sidebarCollapse" class="btn btn-info"
                  @click="isActive=!isActive">
            <f-icon :icon="'bars'"></f-icon>
          </button>

        </div>
      </nav>
    </div>

  </div>
</template>

<script>
export default {
  name: 'navbar-admin',
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return { isActive: false };
  },
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

.wrapper {
  display: flex;
  align-items: stretch;
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
  height: 100vh;
}

#sidebar.active {
  margin-left: -250px;
}

#sidebarCollapse{
  background-color: #A7D9F2;
  border-color: #A7D9F2;
  display: none;
}
a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }

  #sidebarCollapse {
    display: block;
  }

  #sidebar.active {
    margin-left: 0;
  }
}

/*
    ADDITIONAL DEMO STYLE, NOT IMPORTANT TO MAKE THINGS WORK BUT TO MAKE IT A BIT NICER :)
*/

body {
  font-family: 'Poppins', sans-serif;
  background: #fafafa;
}

p {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a, a:hover, a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

#sidebar {
  /* don't forget to add all the previously mentioned styles here too */
  background: #2C5970;
  color: #fff;
  transition: all 0.3s;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #2C5970;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #5DC0F0;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}

#sidebar ul li a:hover {
  color: #2C5970;
  background: #fff;
}

#sidebar ul li.active > a, a[aria-expanded="true"] {
  color: #fff;
  background: #2C5970;
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #4A96BD;
}

.router-link-active {
  background-color: #4D6570;
}
</style>
