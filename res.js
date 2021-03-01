// digunakan untuk 
// fungsi agar code js di ketatkan. aplikasi akan berjalan lebih baik
'use strict';

exports.ok= function(values, res){
    var data={
        'status':200,
        'values': values
    };

    res.json(data);
    res.end();
}