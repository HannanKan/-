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

/** 第3版**/
/**
 * 设置： chrome设置打开标签自动弹出开发者模式窗口https://www.jianshu.com/p/fd5ff7a19346
 * 
 * 开发说明：
 * 1. querySelector找到iframe之后需要 .contentDocument 返回里面的 html 文档，才能进一步用querySelector查找元素
 * 2. 这次的html页面布局发生改变，html 文档里面是一个iframe，iframe里面的文档又内嵌了几个个iframe，每个iframe里面是视频、PPT或者其他内容
 */
/**
 * 使用方法：
 * 1. 点击进入到视频/PPT界面
 * 2. 进入chrome的开发者界面
 * 3. 在console里面输入以下代码，会输出1个或几个网址
 * 4. 逐个点开网址，浏览器里显示一连串英文，找到“download”后面网址，输入到浏览器中即可下载
 */
//在课程页面
let l=document.querySelector("iframe").contentDocument.querySelectorAll("iframe")
for (node of l){
    let objectid = node.getAttribute("objectid")
    let url = `https://mooc1-2.chaoxing.com/ananas/status/${objectid}`
    //console.log(url)
    window.open(url, '_blank').location;   //打开所有可能的资源的标签
}

//在已经打开的资源的标签页面的开发者工具里面的console中
let jsonStr=document.querySelector("pre").innerText
let jsonObj=JSON.parse(jsonStr)
//制造https 链接 替代http链接
downloadlink=jsonObj.download
downloadlink=downloadlink.slice(0,4)+"s"+downloadlink.slice(4)
        //参考链接：https://www.jianshu.com/p/52da82aa29d3
let ele = document.createElement('a');
ele.setAttribute('href',downloadlink); //设置下载文件的url地址
ele.setAttribute('download' , jsonObj.filename);//用于设置下载文件的文件名
ele.click();
