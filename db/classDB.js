var pool = global.pool;
if(!pool){
    return ;
}
function findAll(handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'select * from xk_clazz';
            connection.query(sql,function(err,results){
                if(err){
                    throw err;
                }else{
                    hanlder.call(results);
                }
                connection.release();
            });
        }
    });
}
//id查询

function findById(id,handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'select * from xk_clazz where id = ?';
            connection.query(sql,function(err,results){
                if(err){
                    throw err;
                }else{
                    handler.call(results); 
                }
                connection.release();
            });
        }
    });
}

module.export = {
    findAll:findAll,
    // deleteById:deleteById,
    findById:findById
}