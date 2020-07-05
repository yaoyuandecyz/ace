package com.chatRoot.dao;

import com.chatRoot.model.User;
import com.chatRoot.model.Wu;

import java.util.Map;

public interface IUserDao {
    User selectUser(long id);

    Map<String, Object> FindUserAll();

    Map<String, Object> FindUserByusername(String username);//根据学号查询用户信息

    Map<String, Object> findbyname(String username);

    Map<String, Object> insertwu(Wu wu);

}