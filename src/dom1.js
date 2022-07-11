//对象风格的dom封装
window.dom = {
    //增
    create(string) {
        const container = document.createElement('template');
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    after(node, oldNode) {
        oldNode.parentNode.insertBefore(node, oldNode.nextSibling);
    },
    before(node, oldNode) {
        oldNode.parentNode.insertBefore(node, oldNode);
    },
    append(child, parent) {//新增子节点
        parent.appendChild(child);
    },
    wrap(child, parent) {//新增父节点
        dom.before(parent, child);
        dom.append(child, parent);
    },
    //删
    remove(node) {
        node.parentNode.removeChild(node);
        return node;
    },
    empty(node) {
        const array = [];
        let x = node.firstChild;
        while (x) {
            array.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        return array;
    },
    //改
    attr(node, name, value) {//重载
        if (arguments.length === 3) {
            node.setAttribute(name, value);
        } else if (arguments.length === 2) {
            return node.getAttribute(name);
        }
    },
    text(node, string) {
        if (arguments.length === 2) {
            if ('innerText' in node) {//适配
                node.innerText = string;
            } else {
                node.textContent = string;
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText;
            } else {
                return node.textContent;
            }
        }
    },
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string;
        } else if (arguments.length === 1) {
            return node.innerHTML;
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            // dom.style(div, 'color', 'red')
            node.style[name] = value;
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                // dom.style(div, 'color')
                return node.style[name];
            } else if (name instanceof Object) {
                // dom.style(div, {color: 'red'})
                const object = name;
                for (let key in object) {
                    node.style[key] = object[key];
                }
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className);
        },
        remove(node, className) {
            node.classList.remove(className);
        },
        has(node, className) {
            return node.classList.contains(className);
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    //查
    find(selector, scope) {
        //如果有范围，就在范围内查找，否则全局查找
        return (scope || document).querySelectorAll(selector);
    },
    parent(node) {
        return node.parentNode;
    },
    children(node) {
        return node.children;
    },
    siblings(node) {
        return Array.from(node.parentNode.children)
            .filter(n => n !== node);
    },
    next(node) {
        let x = node.nextSibling;
        while (x && x.nodeType === 3) {
            //x存在且x是文本，找下一个节点
            x = x.nextSibling;
        }
        return x;
    },
    previous(node) {
        let x = node.previousSibling;
        while (x && x.nodeType === 3) {
            x = x.previousSibling;
        }
        return x;
    },
    each(node, fn) {//遍历所有子节点并对其操作
        const n = dom.find(node)[0]
        const nodeList = dom.children(n)
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i]);
        }
    },
    index(node) {//查找子节点在父节点里排第几
        const list = dom.children(node.parentNode);
        let i;//先在for循环外声明
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break;
            }
        }
        return i;//再在for循环外返回
    }
};

