package com.chatRoot.service.imp;

import com.chatRoot.dao.IUserDao;
import com.chatRoot.model.User;
import com.chatRoot.model.Wu;
import com.chatRoot.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Map;

@Service("userService")
public class IUserServiceImpl implements IUserService {

    @Resource
    private IUserService iUserService;

    @Autowired
    private  IUserDao iUserDao;

    public User selectUser(long userId) {
        return this.iUserDao.selectUser(userId);
    }

    public Map<String , Object>  FindUserByusername(String name){
        return  iUserDao.FindUserByusername(name);
    }

    public Map<String,Object>  FindUserAll() {
        return iUserDao.FindUserAll();
    }

    public Map<String,Object> findbyname(String username){
        return  this.iUserDao.findbyname(username);
    }

//    public  Boolean insertwu(String item_name,String user_name,String contact, String item_time, String item_location,String item_type,String lostpost, String tel){
//        System.out.println(item_name);
//        System.out.println(lostpost);
//        return  this.iUserDao.insertwu(item_name,user_name, contact, item_time,  item_location,item_type,lostpost, tel);
//    }


    public  Map<String,Object> insertwu (Wu wu){
        return iUserDao.insertwu(wu);
    }



}
