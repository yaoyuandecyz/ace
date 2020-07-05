package com.chatRoot.dao.imp;

import com.chatRoot.dao.IUserDao;
import com.chatRoot.model.User;
import com.chatRoot.model.Wu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository("userDao")
public class IUserDaoImpl implements IUserDao {


    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Autowired
    private IUserDao userDao;

    public User selectUser(long userId) {
        return this.userDao.selectUser(userId);
    }

    public Map<String, Object> findbyname(String username) {
        return this.userDao.findbyname(username);
    }


    @Override
    public Map<String, Object> FindUserByusername(String name) {
        return jdbcTemplate.queryForMap("SELECT  *  FROM  user where name = ?", name);
    }

    @Override
    public Map<String, Object> FindUserAll() {
        return jdbcTemplate.queryForMap("select * from user");
    }

    @Override
    public Map<String, Object> insertwu(Wu wu) {
        try {
            return this.userDao.insertwu(wu);
        } catch (Exception e) {
            e.printStackTrace();

        }
         return (Map<String, Object>) wu;
    }

}
