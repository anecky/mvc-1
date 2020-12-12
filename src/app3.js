import './app3.css'
import $ from 'jquery'

const $square = $('#app3 .square')

$square.on('click', () => {
    $square.toggleClass('active') //每次去检查$square中的active类，如果不存在则添加；如果存在则删除
})