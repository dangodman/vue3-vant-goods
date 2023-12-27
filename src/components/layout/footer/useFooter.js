import {ref} from 'vue'
import {Home,Buy,Radar,User} from '@icon-park/vue-next'


export function useFooter(){
  const current = ref(0)
  const footer = [
    {
      title:'首页',
      icon:Home,
      path:'/home',
      theme:'outline'
    },
    {
      title:'购买',
      icon:Buy,
      path:'/purchase',
      theme:'outline'
    },
    {
      title:'探索',
      icon:Radar,
      path:'/explore',
      theme:'outline'
    },
    {
      title:'我的',
      icon:User,
      path:'/my',
      theme:'outline'
    }
  ]
  
  return {
    footer,
    current 
  }
}
