function blobToDataURL(blob, fn) {
    let a = new FileReader();
    blobToDataAjax;
    a.onload = function(e) {
        fn;
        let data = e.target.result.split("audio/wav;base64,")[1];
        blobToDataAjax(data, "http://192.168.32.132:6777/yuyin", fn);
    };
    a.readAsDataURL(blob);
}
function blobToDataAjax(data, url, fn) {
    //创建异步对象
    var xhr = new XMLHttpRequest();
    //设置请求的类型及url
    xhr.open("post", url);
    //post请求一定要添加请求头才行不然会报错
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    //发送请求
    xhr.send("{sig:" + data + "}");
    xhr.onreadystatechange = function() {
        // 这步为判断服务器是否正确响应
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            fn && fn(xhr.responseText);
        }
    };
}
export { blobToDataURL, blobToDataAjax };
