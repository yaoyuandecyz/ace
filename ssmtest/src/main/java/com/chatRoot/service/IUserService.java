package com.chatRoot.service;

import com.chatRoot.model.User;
import com.chatRoot.model.Wu;

import java.util.Map;

public interface IUserService {

    public User selectUser(long userId);

    Map<String,Object> FindUserAll();

    Map<String,Object> FindUserByusername(String username);//根据学号查询用户信息

    Map<String,Object> findbyname(String username);

//    Boolean insertwu(String item_name,String user_name,String contact, String item_time, String item_location,String item_type,String lostpost, String tel);
    Map<String,Object> insertwu(Wu wu);

}
