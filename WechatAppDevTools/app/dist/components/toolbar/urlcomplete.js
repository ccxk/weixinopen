"use strict";function init(){var e=require("../../lib/react.js"),t=require("../../cssStr/cssStr.js"),o=e.createClass({displayName:"Urlcomplete",render:function(){var o=this,r=this.props.autocomplete,s=(this.props.autoIndex,this.props.autocomplete.length?{}:t.displayNone),a=r.map(function(t,r){var s="toolbar-location-recommend-item"+(o.props.autoIndex===r?" toolbar-location-recommend-item-selected":"");return e.createElement("p",{onClick:o.props.autoClick,"data-index":r,key:r,className:s},t)});return e.createElement("div",{className:"toolbar-location-recommend",style:s},a)}});_exports=o}var _exports;init(),module.exports=_exports;