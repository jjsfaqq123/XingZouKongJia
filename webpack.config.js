/*webpack主配置文件*/
module.exports={
    mode:"development",
    entry:'./boot/js/index.js',
    output:{
        path:_dirname+'/dist',
        filename:"app.js",
    },
    
}