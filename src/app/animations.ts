import { animate, group, keyframes, query, style, transition, trigger } from '@angular/animations';

// Routable animations
// 路由上绑定的这个动画 初始化加载时会报错：
// 找不到对应的 dom elements 
// 官方demo 同样有错 😅
export const slideInAnimation =
  trigger('routeAnimations', [
    // 任意路由值的变化
    transition('* <=> *', [
      // 设置绑定动画的元素样式
      style({position: 'relative'}),
      // 找到 enter 和 leave 的元素
      query(':enter, :leave', [
        // 都设置上 下面的样式
        style({
          position: 'absolute',
          width: '100%'
        })
      ]),
      // 设置一组同时执行的动画 两种描述动画起始状态
      group([
        // 对于 enter 
        query(':enter', [
          // 动画开始时的样式
          style({ left: '-100%' }),
          // 动画的 时间, 结束时样式
          animate(300, style({ left: '0%' }))
        ]),
        query(':leave', [
          // 动画的 时间, 动画的 keyframes
          animate(300, keyframes([
            style({ left: '0%' }),
            style({ left: '100%' })
          ]))
        ])
      ]),
    ]),
  ]);