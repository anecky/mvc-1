import './app2.css'
import $ from "jquery"

const $tabBar = $("#app2 .tab-bar")
const $tabContent = $("#app2 .tab-content")

$tabBar.on("click", "li", e => { //li为tabBar子代中能触发事件的后代元素
    const $li = $(e.currentTarget);
    $li
        .addClass("selected")
        .siblings()
        .removeClass("selected")
    const index = $li.index();
    console.log(index)
    $tabContent
        .children()
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active")
})

$tabBar.children().eq(0).trigger('click')