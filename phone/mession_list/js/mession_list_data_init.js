let list_json = {
    0:{
        data:[
            {
                title:"吊机维修工作",
                department:"工程维修部",
                date:"2035-1-9",
                person1:"张四",
                person2:"李三",
                startDate:"2035-1-11 9:30",
                endDate:"2035-1-12 18:00",
                messionInfo:"那个吊机都折腰了，还干不干活了？？？",
                flag:0
            },
            {
                title:"把一袋米扛到五楼",
                department:"伙食部",
                date:"2035-1-9",
                person1:"力总",
                person2:"克里斯",
                startDate:"2035-1-11 11:30",
                endDate:"2035-1-12 12:30",
                messionInfo:"把从五楼掉下去的几袋米抬回来",
                flag: 0
            },
            {
                title:"财务报销统计",
                department:"财务部部",
                date:"2035-1-9",
                person1:"李斯",
                person2:"克里斯-关下门",
                startDate:"2035-1-11 11:30",
                endDate:"2035-1-12 12:30",
                messionInfo:"统计账单及建材报价单等相关，需要人工统计及人工手动录入",
                flag: 0
            },
            {
                title:"拖拉机机头拆换",
                department:"东厂杂部",
                date:"2035-1-9",
                person1:"张四",
                person2:"李三",
                startDate:"2035-1-11 9:30",
                endDate:"2035-1-12 18:00",
                messionInfo:"那个吊机都折腰了，还干不干活了？？？",
                flag:0
            }
        ]
    },
    1:{
        data:[
            {
                title:"吊机维修工作",
                department:"工程维修部",
                date:"2035-1-9",
                person1:"张四",
                person2:"李三",
                startDate:"2035-1-11 9:30",
                endDate:"2035-1-12 18:00",
                messionInfo:"那个吊机都折腰了，还干不干活了？？？",
                flag:0
            },
            {
                title:"把一袋米扛到五楼",
                department:"伙食部",
                date:"2035-1-9",
                person1:"力总",
                person2:"克里斯",
                startDate:"2035-1-11 11:30",
                endDate:"2035-1-12 12:30",
                messionInfo:"把从五楼掉下去的几袋米抬回来",
                flag: 0
            }
        ]
    },
    2:{
        data:[
            {
                title:"财务报销统计",
                department:"财务部部",
                date:"2035-1-9",
                person1:"李斯",
                person2:"克里斯-关下门",
                startDate:"2035-1-11 11:30",
                endDate:"2035-1-12 12:30",
                messionInfo:"统计账单及建材报价单等相关，需要人工统计及人工手动录入",
                flag: 0
            }
        ]
    },
    3:{
        data:[
            {
                title:"吊机清洁工作",
                department:"工程维修部",
                date:"2035-1-9",
                person1:"张十",
                person2:"李二",
                startDate:"2035-1-11 9:30",
                endDate:"2035-1-12 18:00",
                messionInfo:"拿个抹布从吊机顶一路滑下来，滑4遍",
                flag:0
            },
            {
                title:"财务报销统计",
                department:"财务部部",
                date:"2035-1-9",
                person1:"李斯",
                person2:"克里斯-关下门",
                startDate:"2035-1-11 11:30",
                endDate:"2035-1-12 12:30",
                messionInfo:"统计账单及建材报价单等相关，需要人工统计及人工手动录入",
                flag: 0
            }
        ]
    },
    4:{
        data:[
            {
                title:"吊机维修工作",
                department:"工程维修部",
                date:"2035-1-9",
                person1:"张四",
                person2:"李三",
                startDate:"2035-1-11 9:30",
                endDate:"2035-1-12 18:00",
                messionInfo:"那个吊机都折腰了，还干不干活了？？？",
                flag:0
            },
            {
                title:"拖拉机机头拆换",
                department:"东厂杂部",
                date:"2035-1-9",
                person1:"张四",
                person2:"李三",
                startDate:"2035-1-11 9:30",
                endDate:"2035-1-12 18:00",
                messionInfo:"那个吊机都折腰了，还干不干活了？？？",
                flag:0
            }
        ]
    }
}

let mMenu = document.getElementById("menu")
let pid = localStorage.getItem("projectId")
console.log(pid)
console.log(typeof pid)
let menu_data = list_json[pid].data

for (let i = 0; i < menu_data.length; i++){
    let mydiv = document.createElement("div");
    // <div class="menu_item bc-grey" id="menu_item">
    mydiv.className = "menu_item bc-grey"
    mydiv.id = "menu_item"
    mydiv.innerHTML = "<div class=\"item-text\"><h3 style=\"margin-bottom: .8em;font-size: 1.05em\">"+ menu_data[i].title +"<small class=\"item-small-text\">部门："+ menu_data[i].department +"</small></h3><h5 style=\"color: rgb(84,92,100);\">发布时间："+ menu_data[i].date +"</h5><div class=\"item-icon\"></div></div><div class=\"item-info\"><h3><small>发布人："+ menu_data[i].person1 +"</small><small style=\"float: right\">起始时间："+ menu_data[i].startDate +"</small></h3><h3 style=\"margin-bottom: .7em\"><small>审核人："+ menu_data[i].person2 +"</small><small style=\"float: right\">最晚期限："+ menu_data[i].endDate +"</small></h3><h3><small>任务说明："+ menu_data[i].messionInfo +"</small></h3>"
    mMenu.appendChild(mydiv)
}


