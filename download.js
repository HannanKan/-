/** 第一版**/
//步骤：
//1. 点进如到视频/PPT界面
//2. 进入chrome的开发者界面
//3. 在console里面输入以下代码
let objectid = window.frames[0].m.property.objectid
let url = `http://d0.ananas.chaoxing.com/download/${objectid}`
window.open(url)

/** 第二版**/
/**
 * 开发说明：
 * 1. querySelector找到iframe之后需要 .contentDocument 返回里面的 html 文档，才能进一步用querySelector查找元素
 * 2. 这次的html页面布局发生改变，html 文档里面是一个iframe，iframe里面的文档又内嵌了几个个iframe，每个iframe里面是视频、PPT或者其他内容
 */
/**
 * 使用方法：
 * 1. 点击进入到视频/PPT界面
 * 2. 进入chrome的开发者界面
 * 3. 在console里面输入以下代码，会输出1个或几个下载链接。这些连接有的下载PPT，有的下载视频，有的是无用链接
 */
let l=document.querySelector("iframe").contentDocument.querySelectorAll("iframe")
for (node of l){
    let objectid = node.getAttribute("objectid")
    let url = `http://d0.ananas.chaoxing.com/download/${objectid}`
    console.log(url)
}

