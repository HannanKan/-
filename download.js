//步骤：
//1. 点进如到视频/PPT界面
//2. 进入chrome的开发者界面
//3. 在console里面输入以下代码
let objectid = window.frames[0].m.property.objectid
let url = `http://d0.ananas.chaoxing.com/download/${objectid}`
window.open(url)
