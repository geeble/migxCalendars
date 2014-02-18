{
  "id":160,
  "name":"migxcalendar_categories",
  "formtabs":[
    {
      "MIGX_id":1,
      "caption":"Category",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":1,
          "field":"name",
          "caption":"Name",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":2,
          "field":"backgroundColor",
          "caption":"Background Color",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":3,
          "field":"borderColor",
          "caption":"Border Color",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":4,
          "field":"textColor",
          "caption":"Text Color",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":5,
          "field":"ondoubleevents",
          "caption":"[[%migxcal.on_double_events]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"listbox",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"[[%migxcal.save]]==||[[%migxcal.unpublish]]==unpublish||[[%migxcal.ignore]]==ignore",
          "default":""
        }
      ]
    }
  ],
  "contextmenus":"",
  "actionbuttons":"addItem",
  "columnbuttons":"update||remove",
  "filters":"[]",
  "extended":{
    "migx_add":"Add Category",
    "formcaption":"",
    "update_win_title":"",
    "win_id":"migxcalendar_categories",
    "maxRecords":"",
    "addNewItemAt":"bottom",
    "multiple_formtabs":"",
    "extrahandlers":"",
    "packageName":"migxcalendars",
    "classname":"migxCalendarCategories",
    "task":"",
    "getlistsort":"",
    "getlistsortdir":"",
    "use_custom_prefix":"0",
    "prefix":"",
    "grid":"",
    "gridload_mode":1,
    "check_resid":1,
    "check_resid_TV":"",
    "join_alias":"",
    "has_jointable":"yes",
    "getlistwhere":"",
    "joins":"",
    "cmpmaincaption":"",
    "cmptabcaption":"Categories",
    "cmptabdescription":"",
    "cmptabcontroller":"",
    "winbuttons":"",
    "onsubmitsuccess":"",
    "submitparams":""
  },
  "columns":[
    {
      "MIGX_id":1,
      "header":"ID",
      "dataIndex":"id",
      "width":10,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":2,
      "header":"Name",
      "dataIndex":"name",
      "width":20,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"this.renderRowActions",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    }
  ],
  "createdby":1,
  "createdon":"2014-02-17 08:05:54",
  "editedby":1,
  "editedon":"2014-02-18 11:29:04",
  "deleted":0,
  "deletedon":"-1-11-30 00:00:00",
  "deletedby":0,
  "published":1,
  "publishedon":"2014-02-17 01:00:00",
  "publishedby":0
}