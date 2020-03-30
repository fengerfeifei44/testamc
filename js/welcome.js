/**
 * Created by huimei-029 on 2017/12/1.
 */
//控制logo图片大小
var img=document.getElementsByTagName("img")[0];
var image=new Image;
image.src=img.src;
console.log(image.src);
var width=image.width;
var height=image.height;
if(width>height){
    $(img).css({
        "width":"200px",
        "height":"auto",
    })
}else {
    $(img).css({
        "width":"auto",
        "height":"120px",
    })
}