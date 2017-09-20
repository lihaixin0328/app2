var pool = global.pool;
if(!pool){
    return ;
}
//查询所有的课程
function findAll(handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'select * from xk_course';
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
//id 查找课程
function findById(id,handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'select * from xk_course where id = ?';
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
//id删除课程
function deleteById(id,handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'select * from xk_course where id = ?';
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

module.exports = {
    findAll:findAll,
    deleteById:deleteById,
    findById:findById
}