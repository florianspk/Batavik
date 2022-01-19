'use strict';
const casual = require('casual');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let categs = ["Pare douche","Cloison/Parois","Cheminée"];
    let categorie_products = [];
    categs.forEach(element => {
      categorie_products.push({
        createdAt: new Date(),
        updatedAt: new Date(),
        name: element
      })
    })
    await queryInterface.bulkInsert('Categorie_products',categorie_products, {});
    let productVerreDouche = ["https://vitreriejustalex.com/wp-content/uploads/2015/03/Vitrerie-Justalex-verre-imprime568x621-01.jpg","https://media.adeo.com/marketplace/MKP/83099531/012ad8f8f185f525598dcabbbcdb947d.jpeg","https://media.adeo.com/marketplace/MKP/83099642/0611a54605a5b698a669991ad26f28a1.jpeg","https://soglass.fr/67-large_default/paroi-de-douche-en-verre-carre-rectangle.jpg","https://www.rueduverre.com/media/catalog/product/cache/1/image/440x400/9df78eab33525d08d6e5fb8d27136e95/p/a/paroi-de-douche-verre-trempe-anti-calcaire.jpg","https://www.e-miroiterie.com/453694-thickbox_default/paroi-de-douche-en-verre-trempe-de-securite-paroi-fixe.jpg"]
    let productChemine = ["https://i.pinimg.com/originals/c4/d0/fe/c4d0fef1318e8dff4b36da53b16a6aa5.jpg","https://www.verre-et-deco.fr/photos/produit-102-355.jpg","https://www.rueduverre.com/media/catalog/product/cache/1/image/440x400/9df78eab33525d08d6e5fb8d27136e95/v/e/verre-vitroceramique-pour-foyer-interieur-moderne.jpg","https://www.miroiterie.fr/wp-content/uploads/2018/09/verre-insert-cheminee-verre-vitroceramique_1.jpg","https://www.monvitrage.fr/img/cms/Application/insert%20chemin%C3%A9e/verre-insert-chemin%C3%A9e-verre-vitroc%C3%A9ramique-vitre-dinsert-chemin%C3%A9e-verre-insert-verre-vitroceramique-verre-vitroceramique.jpg","https://cdn.manomano.com/images/images_products/607/P/2345883_2.jpg","https://www.toutverre.com/images/1500/1500/5daf3275635b55daf2721c061a_shutterstock345271778/verre-vitroceramique-pour-insert-de-cheminee-epaisseur-4-mm_0.jpg"]
    let productCloison = ["https://www.rueduverre.com/media/catalog/product/cache/1/small_image/420x480/9df78eab33525d08d6e5fb8d27136e95/c/l/cloison-verre-feuillete.jpg","https://www.isospace.fr/wp-content/uploads/2018/01/cloison_bord_a_bord.jpg","https://img.archiexpo.fr/images_ae/photo-mg/2505-15188469.jpg","https://i.pinimg.com/originals/9d/64/3d/9d643d79bd1b9ddf5fdeb834d3e597f3.jpg","https://resize-elle.ladmedia.fr/r/625,,forcex/crop/625,437,center-middle,forcex,ffffff/img/var/plain_site/storage/images/deco/pratique/travaux/renovation/cloisons-et-decors-en-verre/cloisons-de-verre/69059932-1-fre-FR/Cloisons-de-verre.jpg","https://www.monvitrage.fr/img/cms/Cloison%20en%20verre%20article/cloison-vitree-motif-imprime.jpg","https://www.hellopro.fr/images/produit-2/2/3/2/cloison-vitra-e-paroi-en-verre-g20-6709232.jpg","https://www.vitresbruxelles.be/wp-content/uploads/2019/02/cloisons_3-copie.jpg"]
    let products = [];
    let products_categ = await queryInterface.sequelize.query(
        `SELECT id from Categorie_products;`
    );
    for (let i=0; i < 100; i++){
      const categ = casual.random_element(products_categ[0]).id
      switch (categ) {
        case 1:
          products.push({
            name: casual.title,
            price: casual.double(0,1000).toFixed(2),
            description : casual.short_description,
            rate:  Math.floor(Math.random() * 10),
            image:  casual.random_element(productVerreDouche),
            categId: categ,
            createdAt:new Date(),
            updatedAt:new Date(),
          })
          break;
        case 2:
          products.push({
            name: casual.title,
            price: casual.double(0,1000).toFixed(2),
            description : casual.short_description,
            rate:  Math.floor(Math.random() * 10),
            image:  casual.random_element(productCloison),
            categId: categ,
            createdAt:new Date(),
            updatedAt:new Date(),
          })
          break;
        default:
          products.push({
            name: casual.title,
            price: casual.double(0,1000).toFixed(2),
            description : casual.short_description,
            rate:  Math.floor(Math.random() * 10),
            image:  casual.random_element(productChemine),
            categId: categ,
            createdAt:new Date(),
            updatedAt:new Date(),
          })
      }

    }
    await queryInterface.bulkInsert('Products',products, {});
    let products_id = await queryInterface.sequelize.query(
        `SELECT id from Products;`
    );
    let info_products = [];
    for (let i = 0; i < 100; i++){
      info_products.push({
        height : parseFloat(Math.random() * 100).toFixed(2),
        depth : parseFloat(Math.random() * 100).toFixed(2),
        width : parseFloat(Math.random() * 100).toFixed(2),
        color : casual.color_name,
        ProductID: casual.random_element(products_id[0]).id,
        createdAt:new Date(),
        updatedAt:new Date(),
      })
    }
    await queryInterface.bulkInsert('Info_products',info_products, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categorie_products', null, {});
    await queryInterface.bulkDelete('Info_products', null, {});
    await queryInterface.bulkDelete('Products', null, {});
  }
};
