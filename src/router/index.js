import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'

// page

// layout
import layout from '../components/layout';
import centerAbsolute from '@/components/layout/centerAbsolute';
import centerBlock from '@/components/layout/centerBlock';
import centerTransform from '@/components/layout/center-transform';
import clearfix from '@/components/layout/clearfix';
import fill from '@/components/layout/fill';

// import listCustom from '@/components/layout/list-custom';
// import listDivided from '@/components/layout/list-divided';
// import listFloated from '@/components/layout/list-floated';
// import listInline from '@/components/layout/list-inline';
// import listPunctuated from '@/components/layout/list-punctuated';
// import listUnstyled from '@/components/layout/list-unstyled';
// import listMargin from '@/components/layout/list-margin';
// import listPadding from '@/components/layout/list-padding';
// import positionAbsolute from '@/components/layout/position-absolute';
// import positionCoords from '@/components/layout/position-coords';
// import positionFixed from '@/components/layout/position-fixed';
// import positionRelative from '@/components/layout/position-relative';
// import ratioBox from '@/components/layout/ratio-box';
// import size from '@/components/layout/size';
// import stickyFooterFixed from '@/components/layout/sticky-footer-fixed';
// import stickyFooterFluid from '@/components/layout/sticky-footer-fluid';
// import vcenterIb from '@/components/layout/vcenter-ib';
// import vcenterIh from '@/components/layout/vcenter-ih';
// import vcenterTd from '@/components/layout/vcenter-td';
// import vcenterTt from '@/components/layout/vcenter-tt';


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/',
      component: Welcome
    },
    {
      path: '/test',
      component: Welcome
    },
    {
      path: '/layout/:id',
      component: clearfix,
      children: [{
          path: '',
          component: clearfix
        },
        {
          path: 'centerabsolute',
          component: centerAbsolute
        },
        {
          path: 'centerblock',
          component: centerBlock
        },
        {
          path: 'center-transform',
          component: centerTransform
        },
        {
          path: 'clearfix',
          component: clearfix

        },
        {
          path: 'fill',
          component: fill
        },
        // {
        //   path: '/list-custom',
        //   name: 'list-custom',
        //   component: listCustom
        // },
        // {
        //   path: '/list-divided',
        //   name: 'list-divided',
        //   component: listDivided
        // },
        // {
        //   path: '/list-floated',
        //   name: 'list-floated',
        //   component: listFloated
        // },
        // {
        //   path: '/list-inline',
        //   name: 'list-inline',
        //   component: listiInline
        // },
        // {
        //   path: '/list-punctuated',
        //   name: 'list-punctuated',
        //   component: listiPunctuated
        // },
        // {
        //   path: '/list-unstyled',
        //   name: 'list-unstyled',
        //   component: listiUnstyled
        // },
        // {
        //   path: '/list-margin',
        //   name: 'list-margin',
        //   component: listiMargin
        // },
        // {
        //   path: '/list-padding',
        //   name: 'list-padding',
        //   component: listPadding
        // },
        // {
        //   path: '/position-absolute',
        //   name: 'position-absolute',
        //   component: positionAbsolute
        // },
        // {
        //   path: '/position-coords',
        //   name: 'position-coords',
        //   component: positionCoords
        // },
        // {
        //   path: '/position-fixed',
        //   name: 'position-fixed',
        //   component: positionFixed
        // },
        // {
        //   path: '/position-relative',
        //   name: 'position-relative',
        //   component: positionRelative
        // },
        // {
        //   path: '/ratio-box',
        //   name: 'ratio-box',
        //   component: ratioBox
        // },
        // {
        //   path: '/size',
        //   name: 'size',
        //   component: size
        // },
        // {
        //   path: '/sticky-footer-fixed',
        //   name: 'sticky-footer-fixed',
        //   component: stickyFooterFixed
        // },
        // {
        //   path: '/sticky-footer-fluid',
        //   name: 'sticky-footer-fluid',
        //   component: stickyFooterFluid
        // },
        // {
        //   path: '/vcenter-ib',
        //   name: 'vcenter-ib',
        //   component: vcenterIb
        // },
        // {
        //   path: '/vcenter-ih',
        //   name: 'vcenter-ih',
        //   component: vcenterIh
        // },
        // {
        //   path: '/vcenter-td',
        //   name: 'vcenter-td',
        //   component: vcenterTd
        // },
        // {
        //   path: '/vcenter-tt',
        //   name: 'vcenter-tt',
        //   component: vcenterTt
        // }
      ]
    }
  ]
})
