import { createRouter, createWebHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import('@/modules/pokemon/layout/PokemonLayout'),
    children: [
      { 
        path: 'home', 
        name: 'pokemon-home',
        component: () => import('../modules/pokemon/pages/ListPage') 
      },
      { 
        path: 'about', 
        name: 'pokemon-about',
        component: () => import('../modules/pokemon/pages/AboutPage') 
      },
      { 
        path: 'id/:id', 
        name: 'pokemon-id',
        component: () => import('../modules/pokemon/pages/PokemonPage'),
        props: (route) => {
          const id = Number(route.params.id);
          return isNaN( id ) ? { id: 1 } : { id };
          }
      },
      {
        path: '',
        redirect: { name: 'pokemon-home' }
      }
    ]
  },

  // DBZ layout
  {
    path: '/dbz',
    name: 'dbz',
    beforeEnter: [isAuthenticatedGuard],
    component: () => import('@/modules/dbz/layouts/DragonBallLayout'),
    children: [
      { 
        path: 'characters', 
        name: 'dbz-characters',
        component: () => import('../modules/dbz/pages/Characters') 
      },
      { 
        path: 'about', 
        name: 'dbz-about',
        component: () => import('../modules/dbz/pages/About') 
      },
      // { 
      //   path: 'character/:characterId', 
      //   name: 'character-id',
      //   component: () => import('../modules/dbz/pages/CharacterPage'),
      //   props: (route) => {
      //     const id = Number(route.params.characterId);
      //     return isNaN( id ) ? { id: 1 } : { id };
      //     }
      // },
      {
        path: '',
        redirect: { name: 'dbz-characters' }
      }
    ]
  },

  // El comentario es para que webpack le ponga ese nombre al chunk de ese componente
  { path: '/:pathMatch(.*)*', component: () => import(/* webpackChunkName: "NoPageFound" */'../modules/shared/pages/NoPageFound') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// guard global - sincrono
// router.beforeEach((to, from, next) => {
//   console.log({to, from, next});
//   console.log('guard global');
//   const random = Math.random() * 100;
//   console.log(random);
//   if (random > 50) {
//     console.log('Autenticado');
//     next();
//   } else {
//     console.log('Bloqueado por el guard');
//     next({ name: 'pokemon-home' });
//   }
// })

// guard global - asincrono
// const canAccess = () => {
//   return new Promise((resolve) => {
//     const random = Math.random() * 100;
//     console.log(random);
//     if (random > 50) {
//       console.log('Autenticado - Guard');
//       resolve(true);
//     } else {
//       console.log('Bloqueado por el guard - Guard');
//       resolve(false);
//     }
//   })
// }

// router.beforeEach(async (to, from, next) => {
//   console.log({to, from, next});
//   console.log('guard global');
//   const autorizado = await canAccess();
//   autorizado ? next() : next({ name: 'pokemon-home' });
// })


export default router