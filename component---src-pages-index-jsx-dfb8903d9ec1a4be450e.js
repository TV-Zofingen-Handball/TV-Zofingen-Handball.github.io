"use strict";(self.webpackChunktvz_gatsby=self.webpackChunktvz_gatsby||[]).push([[230],{3254:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children;return n.createElement("div",{className:"container"},t)}},9824:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children;return n.createElement(n.Fragment,null,n.createElement("section",{className:"section"},t))}},2059:function(e,t,a){var n=a(7294),l=a(1082);function r(e){var t,a,r=e.description,c=e.title,m=e.children,s=(0,l.useStaticQuery)("63159454").site,i=r||s.siteMetadata.description,o=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,o?c+" | "+o:c),n.createElement("meta",{name:"description",content:i}),n.createElement("meta",{property:"og:title",content:c}),n.createElement("meta",{property:"og:description",content:i}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=s.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:c}),n.createElement("meta",{name:"twitter:description",content:i}),m)}r.defaultProps={description:""},t.Z=r},610:function(e,t,a){a.r(t),a.d(t,{Head:function(){return u}});var n=a(7294),l=a(3723),r=a(9828),c=a(3254),m=a(9824),s=a(43),i=a(2059),o=a(579),u=function(){return n.createElement(i.Z,{title:"TV Zofingen Handball"})};t.default=function(e){var t=e.data,a=t.allMdx,i=t.allInstagramContent,u=a.edges,d=i.edges;return n.createElement(r.Z,{title:"Home"},n.createElement(m.Z,null,n.createElement(c.Z,null,n.createElement("div",{className:"columns"},n.createElement("div",{className:"column is-12 content"},n.createElement("h2",null,"Spielbetrieb"),n.createElement(o.Z,{shv_id:140428,verein:!0}))))),n.createElement(m.Z,null,n.createElement(c.Z,null,n.createElement("div",{className:"columns is-multiline"},n.createElement("div",{className:"column is-12 content"},n.createElement("h2",null,"Instagram")),d.map((function(e){var t=e.node,a=t.caption;switch(t.media_type){case"IMAGE":case"CAROUSEL_ALBUM":return n.createElement(n.Fragment,null,n.createElement("div",{className:"card column is-3 m-2"},n.createElement("div",{className:"card-image"},n.createElement("a",{href:t.permalink},n.createElement(l.G,{image:(0,l.c)(t.localFile),alt:""}))),n.createElement("div",{className:"card-content"},n.createElement("div",{className:"content"},a))));case"VIDEO":return n.createElement(n.Fragment,null,n.createElement("div",{className:"card column is-3 m-2"},n.createElement("h4",null,"Video")));default:return n.createElement(n.Fragment,null,n.createElement("div",{className:"card column is-3 m-2"},n.createElement("h4",null,"unknown type ",t.media_type)))}}))))),n.createElement(m.Z,null,n.createElement(c.Z,null,n.createElement("div",{className:"columns"},n.createElement("div",{className:"column is-10 is-offset-1 content"},n.createElement("h2",null,"News"),u.map((function(e){var t=e.node,a=t.frontmatter.title||t.frontmatter.slug,r=(t.frontmatter.date,null),c=null;return t.frontmatter.images&&(c=(r=t.frontmatter.images[0]).caption|r.name|a),n.createElement("div",{key:t.frontmatter.slug,className:"box"},n.createElement("div",{className:"box-header"},n.createElement("h4",{className:"title is-4"},n.createElement(s.Z,{to:t.frontmatter.slug},a),t.frontmatter.date&&n.createElement("span",{className:"tag is-rounded is-pulled-right"},t.frontmatter.date),t.frontmatter.tags&&t.frontmatter.tags.map((function(e){return n.createElement("span",{className:"tag is-rounded is-light is-danger is-pulled-right"},e)})))),n.createElement("div",{className:"box-content"},n.createElement("div",{className:"columns"},r&&n.createElement("div",{className:"column is-2"},n.createElement(l.G,{image:(0,l.c)(r.url),alt:c})),n.createElement("div",{className:"column"},n.createElement("div",{className:"box-content-text"},n.createElement("p",null,t.excerpt)),n.createElement("div",{className:"has-text-right"},n.createElement(s.Z,{to:t.frontmatter.slug,className:"button is-small"},"Lesen"))))))})))))))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-dfb8903d9ec1a4be450e.js.map