(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{256:function(t,e,i){"use strict";i.r(e);var o={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},a=i(6),s=Object(a.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[i("h1",{attrs:{id:"global-settings-inconsistency"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#global-settings-inconsistency","aria-hidden":"true"}},[t._v("#")]),t._v(" Global Settings Inconsistency")]),t._v(" "),i("p",[t._v("The global settings page within the App works a bit different from the other detail pages. The problem with global settings is that there can be a potentially infinite number of fields (1 per setting) with only one row per setting (there can only be one value per field).")]),t._v(" "),i("p",[t._v("This means we either have to:")]),t._v(" "),i("ul",[i("li",[t._v("Create a table with a very large number of columns and enforce the fact that there is only one row, or:")]),t._v(" "),i("li",[t._v("Create a table where the rows are treaded "),i("em",[t._v("as if they were columns")]),t._v(", where the columns are treated as key-value:")])]),t._v(" "),i("h4",{attrs:{id:"first-option"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#first-option","aria-hidden":"true"}},[t._v("#")]),t._v(" First option:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("id")]),t._v(" "),i("th",[t._v("cms_user_auto_sign_out")]),t._v(" "),i("th",[t._v("project_name")]),t._v(" "),i("th",[t._v("project_url")]),t._v(" "),i("th",[t._v("rows_per_page")]),t._v(" "),i("th",[t._v("thumbnail_quality")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("1")]),t._v(" "),i("td",[t._v("60")]),t._v(" "),i("td",[t._v("Directus 7")]),t._v(" "),i("td",[t._v("demo.getdirectus.com")]),t._v(" "),i("td",[t._v("200")]),t._v(" "),i("td",[t._v("low")])])])]),t._v(" "),i("h4",{attrs:{id:"second-option"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#second-option","aria-hidden":"true"}},[t._v("#")]),t._v(" Second option:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("id")]),t._v(" "),i("th",[t._v("key")]),t._v(" "),i("th",[t._v("value")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("1")]),t._v(" "),i("td",[t._v("cms_user_auto_sign_out")]),t._v(" "),i("td",[t._v("60")])]),t._v(" "),i("tr",[i("td",[t._v("2")]),t._v(" "),i("td",[t._v("project_name")]),t._v(" "),i("td",[t._v("Directus 7")])]),t._v(" "),i("tr",[i("td",[t._v("3")]),t._v(" "),i("td",[t._v("project_url")]),t._v(" "),i("td",[t._v("demo.getdirectus.com")])]),t._v(" "),i("tr",[i("td",[t._v("4")]),t._v(" "),i("td",[t._v("rows_per_page")]),t._v(" "),i("td",[t._v("200")])]),t._v(" "),i("tr",[i("td",[t._v("5")]),t._v(" "),i("td",[t._v("thumbnail_quality")]),t._v(" "),i("td",[t._v("low")])])])]),t._v(" "),i("p",[t._v("We felt the second is cleaner and is easier to update and extend with new options without having to update the database schema.")]),t._v(" "),i("p",[t._v('However, this structure introduces the problem where the edit view that is being used to edit the values of a single row now expects the wrong data. Instead of dealing with individual rows, the page should deal with the whole table at once. This is the main reason behind the big differences between the "regular" edit view (/routes/Edit.vue) and the global settings view (/routes/SettingsGlobal.vue). The global settings view "mangles" the settings table to work with the EditForm component (/containers/EditForm.vue).')])])},[],!1,null,null,null);s.options.__file="global-settings-data-model.md";e.default=s.exports}}]);