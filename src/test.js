// 对象风格
// 增
// 1. create 测试
const div1 = dom.create('<div id="1"><div id="2">我是1</div></div>')
console.log(div1);
// 2. before 测试
dom.before(div1, son)
// 3. after 测试
const div2 = dom.create('<div>我是2</div>')
dom.after(div2, son)
// 4. append 测试
const div3 = dom.create('<div>我是3</div>')
dom.append(div3, father)
// 5. wrap 测试
const div4 = dom.create('<div>我是4</div>')
dom.wrap(div3, div4)

// 删
// 6. remove 测试
const r = dom.remove(son)
console.log(r);
// 7. empty 测试
const all = dom.empty(div4)
console.log(all);

// 改
// 8. attr 测试
dom.attr(div2, 'title', '厅长')
console.log(dom.attr(div2, 'title'));
// 9. text 测试
dom.text(div2, '新的text')
console.log(dom.text(div2));
// 10. html 测试
dom.html(div1, '<div>新的html</div>')
console.log(dom.html(div1));
// 11. style 测试
dom.style(div1, 'background', 'red')
console.log(dom.style(div1, 'background'));
dom.style(div1, {border: '5px solid blue'})
// 12. class 测试
dom.class.add(div1, 'ddd')
dom.class.remove(div1, 'ddd')
console.log(dom.class.has(div1,'ddd'));
// 12. 事件监听测试
fn = () => {console.log('点击了');}
dom.on(div1, 'click', fn)
dom.off(div1, 'click', fn)

// 查
console.log(dom.find('#m1')[0]);
console.log(dom.find('#m2', mother)[0]);

console.log(dom.parent(m2));
console.log(dom.children(mother));
console.log(dom.siblings(m2));
console.log(dom.next(m2));
console.log(dom.previous(m2));

dom.each('#mother', (n)=>{dom.style(n, 'background', 'blue')})
console.log(dom.index(m1))

// jQuery 风格
$('<div>jjj</div>')
  .appendTo(mother)
  .append($('<div>qqq</div>'))
  .addClass('111')

$('#mother').find('#m1').print()
$('#mother').children().print()
$('#m1').parent().print()
$('#m1').parent().end().print()










